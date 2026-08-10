import { useEffect } from "react";
import { scrollState } from "@/hooks/useScrollProgress";

/**
 * Drag-to-rotate on the product, plus pointer tracking for scene parallax.
 * Attached to the canvas wrapper so it coexists with scrolling: only pointer
 * (mouse/touch) drag is captured, wheel/touch scroll still reaches Lenis.
 */
export function useProductInteraction(element: HTMLElement | null, enabled: boolean) {
  useEffect(() => {
    if (!element) return;

    const onPointerMove = (event: PointerEvent) => {
      scrollState.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      scrollState.pointerY = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    if (!enabled) {
      return () => window.removeEventListener("pointermove", onPointerMove);
    }

    let lastX = 0;
    let lastTime = 0;
    let pointerId: number | null = null;

    const down = (event: PointerEvent) => {
      if (event.pointerType === "touch") return; // keep vertical touch scrolling native
      pointerId = event.pointerId;
      scrollState.dragging = true;
      scrollState.dragVelocity = 0;
      lastX = event.clientX;
      lastTime = event.timeStamp;
      element.setPointerCapture(event.pointerId);
      element.style.cursor = "grabbing";
    };

    const move = (event: PointerEvent) => {
      if (!scrollState.dragging || event.pointerId !== pointerId) return;
      const dx = event.clientX - lastX;
      const dt = Math.max(8, event.timeStamp - lastTime);
      const delta = dx * 0.006;
      scrollState.dragRotation += delta;
      scrollState.dragVelocity = (delta / dt) * 1000 * 0.35;
      lastX = event.clientX;
      lastTime = event.timeStamp;
    };

    const up = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      scrollState.dragging = false;
      pointerId = null;
      element.style.cursor = "grab";
      if (element.hasPointerCapture(event.pointerId)) {
        element.releasePointerCapture(event.pointerId);
      }
    };

    element.style.cursor = "grab";
    element.addEventListener("pointerdown", down);
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerup", up);
    element.addEventListener("pointercancel", up);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerdown", down);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerup", up);
      element.removeEventListener("pointercancel", up);
    };
  }, [element, enabled]);
}
