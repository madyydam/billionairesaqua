import { useMemo } from "react";
import * as THREE from "three";
import { Billboard } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import bottleReal from "@/assets/bottle-real.png.asset.json";

const HEIGHT = 2.55;
const ASPECT = 402 / 1298;

/**
 * The real product shot, rendered as a camera-facing billboard so the bottle
 * always reads exactly like the packshot while still travelling through the
 * scroll timeline (position / scale / float / parallax).
 */
export function BottleImage() {
  const map = useTexture(bottleReal.url);

  const material = useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 8;
    return new THREE.MeshBasicMaterial({
      map,
      transparent: true,
      toneMapped: false,
      alphaTest: 0.02,
      side: THREE.DoubleSide,
    });
  }, [map]);

  return (
    <Billboard follow lockZ>
      <mesh material={material}>
        <planeGeometry args={[HEIGHT * ASPECT, HEIGHT]} />
      </mesh>
    </Billboard>
  );
}
