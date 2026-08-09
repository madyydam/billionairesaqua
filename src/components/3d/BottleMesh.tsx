import { useMemo } from "react";
import * as THREE from "three";
import { theme } from "@/config/theme";
import { createLabelTexture } from "@/lib/label-texture";

/**
 * Procedural stand-in for the real product asset.
 *
 * Replace by dropping `product.glb` into /public/models — see
 * src/components/3d/ProductModel.tsx, no other file needs to change.
 */
export function BottleMesh({
  rich = true,
  shadows = true,
}: {
  rich?: boolean;
  shadows?: boolean;
}) {
  const label = useMemo(() => createLabelTexture(), []);

  const bodyGeometry = useMemo(() => {
    const profile: [number, number][] = [
      [0.0, -1.12],
      [0.26, -1.14],
      [0.38, -1.08],
      [0.425, -0.98],
      [0.44, -0.82],
      [0.435, -0.5],
      [0.445, -0.2],
      [0.44, 0.16],
      [0.445, 0.42],
      [0.425, 0.56],
      [0.37, 0.69],
      [0.28, 0.79],
      [0.2, 0.88],
      [0.178, 0.97],
      [0.178, 1.06],
      [0.0, 1.06],
    ];
    const pts = profile.map(([x, y]) => new THREE.Vector2(x, y));
    const geo = new THREE.LatheGeometry(pts, 96);
    geo.computeVertexNormals();
    return geo;
  }, []);

  const waterGeometry = useMemo(() => {
    const pts: THREE.Vector2[] = [
      new THREE.Vector2(0.0, -1.08),
      new THREE.Vector2(0.4, -1.02),
      new THREE.Vector2(0.42, -0.5),
      new THREE.Vector2(0.425, 0.2),
      new THREE.Vector2(0.415, 0.5),
      new THREE.Vector2(0.0, 0.52),
    ];
    return new THREE.LatheGeometry(pts, 64);
  }, []);

  const plastic = useMemo(() => {
    if (rich) {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#dfeff0"),
        roughness: 0.06,
        metalness: 0,
        transmission: 0.94,
        thickness: 0.35,
        ior: 1.46,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
      });
    }
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#cfe3e6"),
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
  }, [rich]);

  const water = useMemo(
    () =>
      rich
        ? new THREE.MeshPhysicalMaterial({
            color: new THREE.Color("#9fd3d8"),
            roughness: 0,
            transmission: 1,
            thickness: 1.1,
            ior: 1.33,
            transparent: true,
            attenuationColor: new THREE.Color("#bfe6e6"),
            attenuationDistance: 1.6,
          })
        : new THREE.MeshStandardMaterial({
            color: new THREE.Color("#a8d6da"),
            transparent: true,
            opacity: 0.45,
            roughness: 0.1,
          }),
    [rich],
  );

  const capMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(theme.brandDark),
        roughness: 0.35,
        metalness: 0.08,
      }),
    [],
  );

  const labelMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: label,
        roughness: 0.55,
        metalness: 0.12,
        side: THREE.DoubleSide,
      }),
    [label],
  );

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(theme.gold),
        roughness: 0.25,
        metalness: 0.9,
      }),
    [],
  );

  return (
    <group>
      {/* bottle body */}
      <mesh
        geometry={bodyGeometry}
        material={plastic}
        castShadow={shadows}
        receiveShadow={shadows}
      />

      {/* water volume */}
      <mesh geometry={waterGeometry} material={water} />

      {/* label sleeve */}
      <mesh position={[0, -0.13, 0]} material={labelMaterial}>
        <cylinderGeometry args={[0.455, 0.452, 1.05, 96, 1, true]} />
      </mesh>

      {/* gold trim rings */}
      <mesh position={[0, 0.395, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.458, 0.458, 0.022, 96, 1, true]} />
      </mesh>
      <mesh position={[0, -0.655, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.452, 0.452, 0.022, 96, 1, true]} />
      </mesh>

      {/* neck ring */}
      <mesh position={[0, 0.995, 0]} material={capMaterial}>
        <torusGeometry args={[0.185, 0.016, 12, 48]} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      {/* ribbed cap */}
      <group position={[0, 1.155, 0]}>
        <mesh material={capMaterial} castShadow={shadows}>
          <cylinderGeometry args={[0.203, 0.203, 0.2, 64]} />
        </mesh>
        <mesh position={[0, 0.106, 0]} material={capMaterial}>
          <cylinderGeometry args={[0.196, 0.203, 0.02, 64]} />
        </mesh>
        {Array.from({ length: 40 }).map((_, i) => {
          const a = (i / 40) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * 0.203, 0, Math.sin(a) * 0.203]}
              material={capMaterial}
            >
              <boxGeometry args={[0.012, 0.185, 0.012]} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
