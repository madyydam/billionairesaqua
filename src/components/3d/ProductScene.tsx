import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import { Lighting } from "./Lighting";
import { CameraController } from "./CameraController";
import { ProductRig } from "./ProductRig";
import { useProductInteraction } from "@/hooks/useProductInteraction";
import type { DeviceProfile } from "@/hooks/useDevicePerformance";
import bottleAsset from "@/assets/bottle-real.png.asset.json";

function SceneContents({ device }: { device: DeviceProfile }) {
  return (
    <>
      <CameraController mobile={device.mobile} reducedMotion={device.reducedMotion} />
      <Lighting shadows={device.shadows} />

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
        src={bottleAsset.url}
        alt="The Billionaire's Aqua 500ml packaged drinking water bottle, deep green label with gold trim"
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
