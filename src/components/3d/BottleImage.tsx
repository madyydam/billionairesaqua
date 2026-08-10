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
 * Features:
 *  - Stable local texture (no 404 risk)
 *  - Magnetic pointer tracking: the bottle softly follows mouse position
 *  - Water-splash bottom shader: an animated sine wave ripple at the bottom 15% of the image
 *  - Fully memoised — zero allocations per frame
 */
export function BottleImage() {
  const map = useTexture(bottleReal.url);

  // Current rendered magnetic offset (damped toward pointer)
  const magnetic = useRef({ x: 0, y: 0 });
  // Raw pointer target offset
  const pointerTarget = useRef({ x: 0, y: 0 });
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  // Build the splash shader once — never recreated
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
        /** 0 = no splash, 1 = full splash — driven by scroll progress 0→0.2 */
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
        uniform float uTime;
        uniform float uSplash;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;

          // Only distort the bottom 15% of the bottle texture (the water line area)
          float splashZone = clamp(1.0 - vUv.y / 0.15, 0.0, 1.0);
          float strength = uSplash * splashZone;

          if (strength > 0.001) {
            float wave = sin(uv.x * 22.0 + uTime * 8.0) * 0.018 * strength;
            uv.y += wave;
            // Subtle horizontal sloshing for the water meniscus
            float slosh = cos(uv.y * 10.0 + uTime * 5.0) * 0.01 * strength;
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

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05); // cap to avoid spiral on tab restore

    // --- Magnetic tracking ---
    const px = scrollState.pointerX; // already -1..1
    const py = scrollState.pointerY;
    const MAG = 0.18; // max magnetic offset in world units
    const targetX = px * MAG;
    const targetY = py * MAG * 0.5;

    const mag = magnetic.current;
    mag.x += (targetX - mag.x) * Math.min(1, dt * 7);
    mag.y += (targetY - mag.y) * Math.min(1, dt * 7);

    if (meshRef.current) {
      meshRef.current.position.x = mag.x;
      meshRef.current.position.y = mag.y;
    }

    // --- Splash shader ---
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += dt;

      const p = scrollState.progress;
      // Bell curve: ramps up 0→0.17, peaks at scroll=0.17 (Hero→Intro transition), fades 0.17→0.34
      const rawSplash = p < 0.17 ? p / 0.17 : Math.max(0, 1 - (p - 0.17) / 0.17);
      // Amplify by scroll velocity so fast scrolling = bigger splash
      const velBoost = Math.min(1, Math.abs(scrollState.velocity) * 4);
      matRef.current.uniforms.uSplash.value = rawSplash * (0.6 + velBoost * 0.4);
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
