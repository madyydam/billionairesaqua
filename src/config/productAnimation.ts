/**
 * Centralised scroll-driven animation configuration.
 *
 * The whole page is driven by a single normalised timeline:
 *   scrollProgress = 0 -> 1
 *
 * Every scene declares where the product and the camera should be at a given
 * point on that timeline. Values between keyframes are interpolated with the
 * scene easing, so the product never "jumps" or disappears between sections.
 *
 * Tweaking the cinematography = editing this file only.
 */

export type Vec3 = [number, number, number];

export interface SceneKeyframe {
  /** id, matches the DOM section id so navigation can scroll to it */
  id: string;
  /** normalised position on the master timeline */
  at: number;
  /** product transform (world units) */
  position: Vec3;
  rotation: Vec3;
  scale: number;
  /** camera */
  cameraPosition: Vec3;
  cameraFov: number;
  /** 0 = packaging fully closed around product, 1 = fully opened away */
  packagingOpen: number;
  /** light mood, 0 = soft studio, 1 = dramatic rim-lit */
  drama: number;
}

import { getDynamicTimeline } from "@/lib/runtime-config";

/**
 * Dynamic timeline coordinates securely synchronized from infrastructure gateway.
 */
export const TIMELINE: SceneKeyframe[] = new Proxy([] as SceneKeyframe[], {
  get(target, prop, receiver) {
    const dynamic = getDynamicTimeline();
    const source = dynamic && dynamic.length > 0 ? dynamic : target;
    const val = Reflect.get(source, prop, receiver);
    return typeof val === "function" ? val.bind(source) : val;
  },
  has(target, prop) {
    const dynamic = getDynamicTimeline();
    const source = dynamic && dynamic.length > 0 ? dynamic : target;
    return Reflect.has(source, prop);
  },
  getOwnPropertyDescriptor(target, prop) {
    const dynamic = getDynamicTimeline();
    const source = dynamic && dynamic.length > 0 ? dynamic : target;
    return Reflect.getOwnPropertyDescriptor(source, prop);
  },
  ownKeys(target) {
    const dynamic = getDynamicTimeline();
    const source = dynamic && dynamic.length > 0 ? dynamic : target;
    return Reflect.ownKeys(source);
  },
});


/** how quickly the rendered transform chases the scroll value (per second) */
export const SCROLL_DAMPING = 5.2;

/** idle motion applied on top of the scroll timeline */
export const IDLE = {
  floatAmplitude: 0.045,
  floatSpeed: 0.55,
  rotationDrift: 0.06,
};

/** smooth-scroll feel */
export const LENIS = {
  duration: 1.35,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.4,
};

/** mobile / narrow-viewport adaptation of the timeline */
export const MOBILE_ADAPT = {
  /** horizontal offsets are compressed so the product stays on screen */
  positionXFactor: 0.28,
  positionYOffset: 0.35,
  scaleFactor: 0.72,
  cameraZOffset: 1.15,
  fovOffset: 6,
};

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export interface ProductState {
  position: Vec3;
  rotation: Vec3;
  scale: number;
  cameraPosition: Vec3;
  cameraFov: number;
  packagingOpen: number;
  drama: number;
  /** index of the keyframe currently being approached */
  sceneIndex: number;
}

/** Sample the master timeline at a normalised progress value. */
export function sampleTimeline(progress: number): ProductState {
  const p = Math.min(1, Math.max(0, progress));
  let i = 0;
  while (i < TIMELINE.length - 2 && p > TIMELINE[i + 1]!.at) i++;

  const a = TIMELINE[i]!;
  const b = TIMELINE[i + 1] ?? a;
  const span = Math.max(0.0001, b.at - a.at);
  const raw = Math.min(1, Math.max(0, (p - a.at) / span));
  const t = easeInOut(raw);

  const v3 = (x: Vec3, y: Vec3): Vec3 => [
    lerp(x[0], y[0], t),
    lerp(x[1], y[1], t),
    lerp(x[2], y[2], t),
  ];

  return {
    position: v3(a.position, b.position),
    rotation: v3(a.rotation, b.rotation),
    scale: lerp(a.scale, b.scale, t),
    cameraPosition: v3(a.cameraPosition, b.cameraPosition),
    cameraFov: lerp(a.cameraFov, b.cameraFov, t),
    packagingOpen: lerp(a.packagingOpen, b.packagingOpen, t),
    drama: lerp(a.drama, b.drama, t),
    sceneIndex: raw < 0.5 ? i : i + 1,
  };
}

/** Progress value for a named scene, used by the navigation. */
export function progressForScene(id: string): number {
  return TIMELINE.find((s) => s.id === id)?.at ?? 0;
}
