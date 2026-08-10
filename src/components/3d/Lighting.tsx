import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sampleTimeline } from "@/config/productAnimation";
import { scrollState } from "@/hooks/useScrollProgress";
import { theme } from "@/config/theme";

/**
 * Studio lighting: soft key, cool fill, tight rim. Intensity drifts with the
 * scene "drama" value so the later scenes feel more like an advertisement.
 */
export function Lighting({ shadows = true }: { shadows?: boolean }) {
  const key = useRef<THREE.DirectionalLight>(null);
  const rim = useRef<THREE.SpotLight>(null);
  const fill = useRef<THREE.DirectionalLight>(null);

  useFrame((_, delta) => {
    const { drama } = sampleTimeline(scrollState.progress);
    if (key.current) {
      key.current.intensity = THREE.MathUtils.damp(
        key.current.intensity,
        2.1 + drama * 0.9,
        3,
        delta,
      );
    }
    if (rim.current) {
      rim.current.intensity = THREE.MathUtils.damp(
        rim.current.intensity,
        14 + drama * 26,
        3,
        delta,
      );
    }
    if (fill.current) {
      fill.current.intensity = THREE.MathUtils.damp(
        fill.current.intensity,
        0.85 - drama * 0.35,
        3,
        delta,
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.24} />
      <hemisphereLight args={[theme.foreground, theme.backgroundDeep, 0.35]} />

      <directionalLight
        ref={key}
        position={[3.2, 4.4, 4.2]}
        intensity={2.2}
        color="#fff6e6"
        castShadow={shadows}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0005}
      />

      <directionalLight ref={fill} position={[-4, 1.2, 2.6]} intensity={0.85} color="#cfe3ea" />

      <spotLight
        ref={rim}
        position={[-1.6, 3.4, -4.2]}
        angle={0.75}
        penumbra={1}
        intensity={16}
        color="#eaf6ff"
      />

      <pointLight
        position={[0.9, -1.8, 1.6]}
        intensity={2.4}
        color={theme.goldLight}
        distance={7}
      />
    </>
  );
}
