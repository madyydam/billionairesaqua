import { Suspense, lazy } from "react";
import { ClientOnly } from "@tanstack/react-router";
import type { DeviceProfile } from "@/hooks/useDevicePerformance";

const ProductScene = lazy(() => import("./ProductScene"));

/**
 * WebGL is browser-only: the scene module is loaded after hydration so nothing
 * three.js related is evaluated during SSR.
 */
export function ProductSceneLazy({
  device,
  onReady,
}: {
  device: DeviceProfile;
  onReady: () => void;
}) {
  if (!device.ready) return null;
  return (
    <ClientOnly fallback={null}>
      <Suspense fallback={null}>
        <ProductScene device={device} onReady={onReady} />
      </Suspense>
    </ClientOnly>
  );
}
