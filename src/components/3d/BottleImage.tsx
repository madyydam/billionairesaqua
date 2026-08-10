import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Billboard, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { scrollState } from "@/hooks/useScrollProgress";
import bottleReal from "@/assets/bottle-real.png.asset.json";

const HEIGHT = 2.55;
const ASPECT = 402 / 1298;

/**
 * The real product shot rendered as a camera-facing billboard.
 *
 * STRETCH EFFECT: The bottle texture elastically stretches/warps toward the
 * cursor position — like a rubber sheet being pulled. The distortion is a
 * radial UV warp centered on the cursor, with gaussian falloff so it looks
 * natural and doesn't affect the edges.
 *
 * WATER SPLASH: Bottom 15% of texture gets a sine-wave slosh during the
 * Hero → Intro scroll transition.
 *
 * MAGNETIC POSITION: The entire mesh drifts gently toward the pointer.
 */
export function BottleImage() {
  const map = useTexture(bottleReal.url);

  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  // Damped values — updated in useFrame, no React state
  const magPos = useRef({ x: 0, y: 0 });
  const dampedCursor = useRef({ x: 0, y: 0 });

  const shaderArgs = useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 8;
    map.minFilter = THREE.LinearMipmapLinearFilter;
    map.generateMipmaps = true;
    map.needsUpdate = true;

    return {
      uniforms: {
        uMap: { value: map },
        uTime: { value: 0 },
        /** Cursor UV position — maps pointer -1..1 NDC → 0..1 UV space */
        uCursor: { value: new THREE.Vector2(0.5, 0.5) },
        /** Strength of the elastic stretch pull. 0 = none, 1 = full. */
        uStretch: { value: 0 },
        /** Bottom water splash amount */
        uSplash: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform float     uTime;
        uniform vec2      uCursor;   // 0..1 UV of mouse
        uniform float     uStretch;  // elastic stretch toward cursor
        uniform float     uSplash;   // water slosh at bottom

        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;

          // ── ELASTIC STRETCH TOWARD CURSOR ─────────────────────────────────
          // Each UV point is pulled toward the cursor proportionally to how
          // close it is. The gaussian envelope keeps edges from distorting.
          if (uStretch > 0.001) {
            vec2  dir     = uCursor - uv;          // vector from UV → cursor
            float dist    = length(dir);
            // Gaussian falloff: strong near cursor, zero far away
            float falloff = exp(-dist * dist * 4.0);
            float pull    = uStretch * falloff * 0.35;
            // Shift UV toward cursor → texture "stretches" toward that point
            uv += dir * pull;
          }

          // ── WATER SPLASH at bottle bottom ─────────────────────────────────
          if (uSplash > 0.001) {
            float zone   = clamp(1.0 - vUv.y / 0.15, 0.0, 1.0);
            float wave   = sin(uv.x * 22.0 + uTime * 8.0) * 0.018 * uSplash * zone;
            float slosh  = cos(uv.y * 10.0 + uTime * 5.0) * 0.01  * uSplash * zone;
            uv.y += wave;
            uv.x += slosh;
          }

          uv = clamp(uv, 0.001, 0.999);
          vec4 color = texture2D(uMap, uv);
          if (color.a < 0.02) discard;
          gl_FragColor = color;
        }
      `,
    };
  }, [map]);

  useFrame((_, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    const mat = matRef.current;

    // ── DAMPED CURSOR (smooth lag for natural feel) ─────────────────────────
    const dc = dampedCursor.current;
    const px = scrollState.pointerX; // -1..1
    const py = scrollState.pointerY; // -1..1
    dc.x += (px - dc.x) * Math.min(1, dt * 9);
    dc.y += (py - dc.y) * Math.min(1, dt * 9);

    // ── MAGNETIC MESH POSITION (whole mesh drifts toward cursor) ───────────
    const mag = magPos.current;
    mag.x += (dc.x * 0.14 - mag.x) * Math.min(1, dt * 6);
    mag.y += (dc.y * 0.07 - mag.y) * Math.min(1, dt * 6);

    if (meshRef.current) {
      meshRef.current.position.x = mag.x;
      meshRef.current.position.y = mag.y;
    }

    if (mat) {
      mat.uniforms.uTime.value += dt;

      // Convert damped cursor -1..1 → UV 0..1 (Y is flipped in UV space)
      mat.uniforms.uCursor.value.set(
        dc.x * 0.5 + 0.5,
        1.0 - (dc.y * 0.5 + 0.5),
      );

      // Stretch strength: max when cursor is active, fades on mobile/no pointer
      // We boost it when the user moves fast
      const velBoost = Math.min(0.6, Math.abs(scrollState.velocity) * 2.5);
      const cursorPresent = Math.sqrt(px * px + py * py); // 0 at center, ~1 at edge
      mat.uniforms.uStretch.value =
        Math.min(1, cursorPresent * 1.4) * (0.7 + velBoost);

      // Water splash during Hero→Intro scroll
      const p = scrollState.progress;
      const rawSplash =
        p < 0.17 ? p / 0.17 : Math.max(0, 1 - (p - 0.17) / 0.17);
      const splashVel = Math.min(1, Math.abs(scrollState.velocity) * 4);
      mat.uniforms.uSplash.value = rawSplash * (0.6 + splashVel * 0.4);
    }
  });

  return (
    <Billboard follow lockZ>
      <mesh ref={meshRef}>
        <planeGeometry args={[HEIGHT * ASPECT, HEIGHT]} />
        <shaderMaterial
          ref={matRef}
          args={[shaderArgs]}
          transparent
          toneMapped={false}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Billboard>
  );
}
