import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sampleTimeline } from "@/config/productAnimation";
import { scrollState } from "@/hooks/useScrollProgress";
import { theme } from "@/config/theme";
import { MODELS } from "@/config/models";

/**
 * Cinematic packaging for the reveal scene.
 *
 * Two frosted shells and a lid wrap the product, then split apart and fade as
 * the reveal scene plays. If a real `packaging.glb` with separate parts is
 * supplied later, swap the meshes here — the open/close driver stays the same.
 */
export function Packaging({ rich = true }: { rich?: boolean }) {
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);
  const lid = useRef<THREE.Group>(null);
  const current = useRef(1);

  const shellMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#dfe4e1"),
        roughness: rich ? 0.35 : 0.5,
        metalness: 0.05,
        transmission: rich ? 0.55 : 0,
        thickness: 0.6,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      }),
    [rich],
  );

  const trimMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(theme.gold),
        roughness: 0.3,
        metalness: 0.85,
        transparent: true,
        opacity: 0.9,
      }),
    [],
  );

  useFrame((_, delta) => {
    const target = sampleTimeline(scrollState.progress).packagingOpen;
    current.current = THREE.MathUtils.damp(current.current, target, 4.5, delta);
    const o = current.current;

    const opacity = (1 - o) * 0.4;
    shellMaterial.opacity = opacity;
    trimMaterial.opacity = (1 - o) * 0.9;
    shellMaterial.visible = opacity > 0.005;
    trimMaterial.visible = opacity > 0.005;

    if (left.current) {
      left.current.position.x = -o * 2.6;
      left.current.rotation.z = -o * 0.35;
      left.current.rotation.y = -o * 0.6;
    }
    if (right.current) {
      right.current.position.x = o * 2.6;
      right.current.rotation.z = o * 0.35;
      right.current.rotation.y = o * 0.6;
    }
    if (lid.current) {
      lid.current.position.y = 1.45 + o * 1.9;
      lid.current.rotation.y = o * 1.4;
    }
  });

  if (MODELS.packaging) {
    // real packaging asset supplied — parts are driven by the same open value
    return null;
  }

  return (
    <group>
      <group ref={left}>
        <mesh material={shellMaterial} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 2.7, 64, 1, true, Math.PI / 2, Math.PI]} />
        </mesh>
        <mesh material={trimMaterial} position={[0, -1.33, 0]}>
          <cylinderGeometry args={[0.63, 0.63, 0.03, 64, 1, true, Math.PI / 2, Math.PI]} />
        </mesh>
      </group>

      <group ref={right}>
        <mesh material={shellMaterial}>
          <cylinderGeometry args={[0.62, 0.62, 2.7, 64, 1, true, -Math.PI / 2, Math.PI]} />
        </mesh>
        <mesh material={trimMaterial} position={[0, -1.33, 0]}>
          <cylinderGeometry args={[0.63, 0.63, 0.03, 64, 1, true, -Math.PI / 2, Math.PI]} />
        </mesh>
      </group>

      <group ref={lid} position={[0, 1.45, 0]}>
        <mesh material={shellMaterial}>
          <cylinderGeometry args={[0.64, 0.64, 0.18, 64]} />
        </mesh>
        <mesh material={trimMaterial} position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.645, 0.645, 0.02, 64]} />
        </mesh>
      </group>
    </group>
  );
}
