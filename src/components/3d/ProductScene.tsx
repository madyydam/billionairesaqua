import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import { Lighting } from "./Lighting";
import { CameraController } from "./CameraController";
import { ProductRig } from "./ProductRig";
import { useProductInteraction } from "@/hooks/useProductInteraction";
import type { DeviceProfile } from "@/hooks/useDevicePerformance";
// Bottle image served from /public — no CDN dependency, works on Vercel
const BOTTLE_URL = "/bottle-real.webp";

function LuxParticles({ mobile = false }: { mobile?: boolean }) {
  const count = mobile ? 16 : 32;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 11;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 7 - 0.5;
      const speed = 0.2 + Math.random() * 0.35;
      const scale = 0.02 + Math.random() * 0.04;
      const phase = Math.random() * Math.PI * 2;
      temp.push({ x, y, z, speed, scale, phase });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    particles.forEach((p, i) => {
      let y = p.y + (t * p.speed * 0.3) % 10;
      if (y > 5) y -= 10;
      const x = p.x + Math.sin(t * p.speed + p.phase) * 0.25;
      dummy.position.set(x, y, p.z);
      dummy.scale.setScalar(p.scale * (1 + Math.sin(t * 1.5 + p.phase) * 0.25));
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial
        color="#d4af37"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

function SceneContents({ device }: { device: DeviceProfile }) {
  return (
    <>
      <CameraController mobile={device.mobile} reducedMotion={device.reducedMotion} />
      <Lighting shadows={device.shadows} />

      {!device.reducedMotion && <LuxParticles mobile={device.mobile} />}

      <Suspense fallback={null}>
        <ProductRig
          mobile={device.mobile}
          reducedMotion={device.reducedMotion}
          rich={device.richMaterials}
          shadows={device.shadows}
        />

        {/* studio environment built from lightformers — no remote HDR fetch */}
        <Environment resolution={device.mobile ? 128 : 256} frames={1}>
          <Lightformer intensity={2.4} position={[0, 3, 2]} scale={[8, 3, 1]} color="#ffffff" />
          <Lightformer
            intensity={1.1}
            position={[-4, 1, 1]}
            rotation-y={Math.PI / 2}
            scale={[6, 4, 1]}
            color="#bcd7e6"
          />
          <Lightformer
            intensity={1.6}
            position={[4, 0.5, -2]}
            rotation-y={-Math.PI / 2}
            scale={[6, 4, 1]}
            color="#f4e3bd"
          />
        </Environment>
      </Suspense>

      {device.shadows && (
        <ContactShadows
          position={[0, -1.62, 0]}
          opacity={0.55}
          scale={9}
          blur={3.4}
          far={4}
          resolution={512}
          color="#000000"
        />
      )}

      <AdaptiveDpr pixelated={false} />
    </>
  );
}

/** Static, high quality fallback shown when WebGL is unavailable. */
function StaticFallback() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <img
        src={BOTTLE_URL}
        alt="The Billionaire's Aqua 1L packaged drinking water bottle, deep green label with gold trim"
        className="h-[68vh] w-auto max-w-[70vw] object-contain opacity-95 md:h-[78vh]"
      />
    </div>
  );
}

/**
 * The persistent WebGL stage. It is fixed behind the whole document, which is
 * what lets the product travel continuously from section to section instead of
 * being mounted and unmounted per section.
 */
export function ProductScene({ device, onReady }: { device: DeviceProfile; onReady: () => void }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => setEl(wrapper.current), []);
  useProductInteraction(el, device.webgl && !device.reducedMotion);

  useEffect(() => {
    if (!device.webgl) onReady();
  }, [device.webgl, onReady]);

  return (
    <div
      ref={wrapper}
      aria-hidden="true"
      className="fixed inset-0 z-0 touch-pan-y select-none"
      data-scene-root
    >
      {device.webgl ? (
        <Canvas
          dpr={device.dpr}
          shadows={device.shadows ? { type: THREE.PCFShadowMap } : false}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 6.4], fov: 32, near: 0.1, far: 40 }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.05;
            onReady();
          }}
        >
          <SceneContents device={device} />
        </Canvas>
      ) : (
        <StaticFallback />
      )}
    </div>
  );
}

export default ProductScene;
