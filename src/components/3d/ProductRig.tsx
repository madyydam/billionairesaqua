import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sampleTimeline, SCROLL_DAMPING, IDLE, MOBILE_ADAPT } from "@/config/productAnimation";
import { scrollState } from "@/hooks/useScrollProgress";
import { ProductModel } from "./ProductModel";
import { Packaging } from "./Packaging";

/**
 * ScrollAnimation / AnimationController.
 *
 * Single source of truth for the product transform: samples the master timeline
 * every frame, damps toward it, and layers idle float + user drag on top.
 * Nothing here triggers React re-renders.
 */
export function ProductRig({
  mobile = false,
  reducedMotion = false,
  rich = true,
  shadows = true,
}: {
  mobile?: boolean;
  reducedMotion?: boolean;
  rich?: boolean;
  shadows?: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const state = useRef({ x: 1.45, y: 0, z: 0, rx: 0, ry: -0.35, rz: 0, s: 1 });

  useFrame((_, rawDelta) => {
    const delta = Math.min(0.05, rawDelta);
    const g = group.current;
    if (!g) return;

    const s = sampleTimeline(scrollState.progress);
    const st = state.current;

    const px = mobile ? s.position[0] * MOBILE_ADAPT.positionXFactor : s.position[0];
    const py = mobile ? s.position[1] + MOBILE_ADAPT.positionYOffset : s.position[1];
    const scale = mobile ? s.scale * MOBILE_ADAPT.scaleFactor : s.scale;

    const k = SCROLL_DAMPING;
    st.x = THREE.MathUtils.damp(st.x, px, k, delta);
    st.y = THREE.MathUtils.damp(st.y, py, k, delta);
    st.z = THREE.MathUtils.damp(st.z, s.position[2], k, delta);
    st.rx = THREE.MathUtils.damp(st.rx, s.rotation[0], k, delta);
    st.ry = THREE.MathUtils.damp(st.ry, s.rotation[1], k, delta);
    st.rz = THREE.MathUtils.damp(st.rz, s.rotation[2], k, delta);
    st.s = THREE.MathUtils.damp(st.s, scale, k, delta);

    // rotation is intentionally locked: the product always faces forward
    scrollState.dragRotation = 0;
    scrollState.dragVelocity = 0;

    const t = performance.now() / 1000;
    const float = reducedMotion ? 0 : Math.sin(t * IDLE.floatSpeed) * IDLE.floatAmplitude;

    g.position.set(st.x, st.y + float, st.z);
    g.rotation.set(0, 0, 0);
    g.scale.setScalar(st.s);

    if (inner.current) {
      inner.current.rotation.set(0, 0, 0);
    }
  });

  return (
    <group ref={group}>
      <group ref={inner}>
        <ProductModel rich={rich} shadows={shadows} />
        <Packaging rich={rich} />
      </group>
    </group>
  );
}
