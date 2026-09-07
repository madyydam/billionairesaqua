import { useEffect, useState } from "react";

export interface DeviceProfile {
  /** WebGL is available at all */
  webgl: boolean;
  /** user asked for reduced motion */
  reducedMotion: boolean;
  /** narrow viewport composition */
  mobile: boolean;
  /** clamped device pixel ratio for the renderer */
  dpr: [number, number];
  shadows: boolean;
  /** enable the heavier glass/transmission material */
  richMaterials: boolean;
  ready: boolean;
}

let cachedWebGL: boolean | null = null;
function detectWebGL(): boolean {
  if (cachedWebGL !== null) return cachedWebGL;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    cachedWebGL = Boolean(gl);
    const ext = gl && "getExtension" in gl ? (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context") : null;
    ext?.loseContext?.();
    return cachedWebGL;
  } catch {
    cachedWebGL = false;
    return false;
  }
}

const initial: DeviceProfile = {
  webgl: true,
  reducedMotion: false,
  mobile: false,
  dpr: [1, 1.6],
  shadows: true,
  richMaterials: true,
  ready: false,
};

/** Device capability detection used to scale the 3D experience down gracefully. */
export function useDevicePerformance(): DeviceProfile {
  const [profile, setProfile] = useState<DeviceProfile>(initial);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const widthQuery = window.matchMedia("(max-width: 767px)");

    const evaluate = () => {
      const mobile = widthQuery.matches;
      const cores = navigator.hardwareConcurrency ?? 4;
      const lowEnd = mobile && cores <= 4;
      setProfile({
        webgl: detectWebGL(),
        reducedMotion: motionQuery.matches,
        mobile,
        dpr: mobile ? [1, 1.5] : [1, 1.8],
        shadows: !lowEnd,
        richMaterials: !lowEnd,
        ready: true,
      });
    };

    evaluate();
    motionQuery.addEventListener("change", evaluate);
    widthQuery.addEventListener("change", evaluate);
    return () => {
      motionQuery.removeEventListener("change", evaluate);
      widthQuery.removeEventListener("change", evaluate);
    };
  }, []);

  return profile;
}
