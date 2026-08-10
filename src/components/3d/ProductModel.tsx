import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { MODELS, MODEL_TRANSFORM } from "@/config/models";
import { BottleImage } from "./BottleImage";
import { BottleMesh } from "./BottleMesh";

function GlbProduct({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const t = MODEL_TRANSFORM.product;
  return <primitive object={scene} scale={t.scale} position={t.position} />;
}

/**
 * The product. Uses the real GLB when one is configured, otherwise renders the
 * real photographic packshot billboard (exact product match).
 */
export function ProductModel({ rich = true, shadows = true }: { rich?: boolean; shadows?: boolean }) {
  const url = MODELS.product;

  if (url) {
    return (
      <Suspense fallback={<BottleMesh rich={rich} shadows={shadows} />}>
        <GlbProduct url={url} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={null}>
      <BottleImage />
    </Suspense>
  );
}
