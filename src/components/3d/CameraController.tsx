import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sampleTimeline, SCROLL_DAMPING, MOBILE_ADAPT } from "@/config/productAnimation";
import { scrollState } from "@/hooks/useScrollProgress";

/**
 * Interpolated camera rig. Positions and FOV come from the master timeline and
 * are damped every frame, so scene changes are always continuous. A tiny amount
 * of pointer parallax is layered on top on desktop.
 */
export function CameraController({
  mobile = false,
  reducedMotion = false,
}: {
  mobile?: boolean;
  reducedMotion?: boolean;
}) {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const target = useRef(new THREE.Vector3(0, 0, 6.4));

  useFrame((_, delta) => {
    const s = sampleTimeline(scrollState.progress);
    const parallax = reducedMotion || mobile ? 0 : 1;

    target.current.set(
      s.cameraPosition[0] + scrollState.pointerX * 0.22 * parallax,
      s.cameraPosition[1] + scrollState.pointerY * 0.14 * parallax,
      s.cameraPosition[2] + (mobile ? MOBILE_ADAPT.cameraZOffset : 0),
    );

    const d = Math.min(1, delta);
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      target.current.x,
      SCROLL_DAMPING,
      d,
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      target.current.y,
      SCROLL_DAMPING,
      d,
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      target.current.z,
      SCROLL_DAMPING,
      d,
    );

    const fov = s.cameraFov + (mobile ? MOBILE_ADAPT.fovOffset : 0);
    if (Math.abs(camera.fov - fov) > 0.01) {
      camera.fov = THREE.MathUtils.damp(camera.fov, fov, SCROLL_DAMPING, d);
      camera.updateProjectionMatrix();
    }
    camera.lookAt(0, mobile ? MOBILE_ADAPT.positionYOffset * 0.2 : 0, 0);
  });

  return null;
}
