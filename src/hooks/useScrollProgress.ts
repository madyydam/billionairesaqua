/**
 * Global scroll state shared between the DOM (Lenis / GSAP ScrollTrigger) and
 * the WebGL render loop. It intentionally lives outside React state: the 3D
 * scene reads it every frame from a mutable object so scrolling never triggers
 * a React re-render.
 */
import { useEffect, useState } from "react";

export interface ScrollState {
  /** normalised 0 -> 1 progress of the whole document */
  progress: number;
  velocity: number;
  /** extra Y rotation contributed by pointer drag on the product */
  dragRotation: number;
  dragVelocity: number;
  /** normalised pointer position, -1 -> 1 */
  pointerX: number;
  pointerY: number;
  /** true while the user is dragging the product */
  dragging: boolean;
}

export const scrollState: ScrollState = {
  progress: 0,
  velocity: 0,
  dragRotation: 0,
  dragVelocity: 0,
  pointerX: 0,
  pointerY: 0,
  dragging: false,
};

type Listener = (progress: number) => void;
const listeners = new Set<Listener>();

export function setScrollProgress(progress: number, velocity = 0) {
  scrollState.progress = progress;
  scrollState.velocity = velocity;
  listeners.forEach((fn) => fn(progress));
}

export function subscribeScroll(fn: Listener) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/**
 * React binding for components that genuinely need to re-render on scroll
 * (progress rail, nav background). Throttled to whole percent steps.
 */
export function useScrollProgress(steps = 100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let last = -1;
    const unsubscribe = subscribeScroll((p) => {
      const q = Math.round(p * steps) / steps;
      if (q !== last) {
        last = q;
        setValue(q);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [steps]);


  return value;
}
