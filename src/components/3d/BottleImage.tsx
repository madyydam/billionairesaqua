import { useMemo } from "react";
import * as THREE from "three";
import { Billboard, useTexture } from "@react-three/drei";

const HEIGHT = 2.55;

// Direct public-folder URL — bypasses the Lovable vite plugin that rewrites
// asset.json imports back to /__l5e/... CDN paths (which 404 on Vercel).
const BOTTLE_URL = "/bottle-real.webp";

/**
 * The real product shot, rendered as a camera-facing billboard so the bottle
 * always reads exactly like the packshot while still travelling through the
 * scroll timeline (position / scale / float / parallax).
 */
export function BottleImage() {
  const map = useTexture(BOTTLE_URL);

  const aspect = useMemo(() => {
    const img = map?.image as { width?: number; height?: number } | undefined;
    if (img && img.width && img.height) {
      return img.width / img.height;
    }
    return 0.43;
  }, [map]);

  const material = useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 8;
    map.minFilter = THREE.LinearMipmapLinearFilter;
    map.generateMipmaps = true;
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
        <planeGeometry args={[HEIGHT * aspect, HEIGHT]} />
      </mesh>
    </Billboard>
  );
}
