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

export const TIMELINE: SceneKeyframe[] = [
  {
    id: "hero",
    at: 0.0,
    position: [1.45, -0.05, 0],
    rotation: [0.03, -0.35, 0.02],
    scale: 1,
    cameraPosition: [0, 0.05, 6.4],
    cameraFov: 32,
    packagingOpen: 1,
    drama: 0.25,
  },
  {
    id: "intro",
    at: 0.17,
    position: [-1.6, -0.02, 0.2],
    rotation: [0, 0.85, -0.03],
    scale: 0.88,
    cameraPosition: [0.3, 0.1, 6.1],
    cameraFov: 34,
    packagingOpen: 1,
    drama: 0.35,
  },
  {
    id: "focus",
    at: 0.32,
    position: [0, 0, 0.4],
    rotation: [0, 1.9, 0],
    scale: 1.18,
    cameraPosition: [0, 0, 5.2],
    cameraFov: 30,
    packagingOpen: 1,
    drama: 0.45,
  },
  {
    id: "details",
    at: 0.46,
    position: [0, -10, -5],
    rotation: [0.02, 2.75, 0.03],
    scale: 0,
    cameraPosition: [-0.25, 0.05, 5.6],
    cameraFov: 32,
    packagingOpen: 1,
    drama: 0.55,
  },
  {
    id: "reveal",
    at: 0.6,
    position: [0, -0.05, 0],
    rotation: [0, 3.9, 0],
    scale: 1.05,
    cameraPosition: [0, 0.1, 5.4],
    cameraFov: 31,
    // packaging closes in, then opens across the reveal scene
    packagingOpen: 0,
    drama: 0.7,
  },
  {
    id: "angles",
    at: 0.72,
    position: [0, 0, 0.2],
    rotation: [0, 7.2, 0],
    scale: 1.22,
    cameraPosition: [0, 0.02, 4.8],
    cameraFov: 30,
    packagingOpen: 1,
    drama: 0.6,
  },
  {
    id: "technology",
    at: 0.82,
    position: [-1.15, 0, 0.1],
    rotation: [0.04, 8.6, -0.04],
    scale: 1.1,
    cameraPosition: [0.2, 0.05, 5.1],
    cameraFov: 31,
    packagingOpen: 1,
    drama: 0.8,
  },
  {
    id: "moment",
    at: 0.91,
    position: [0, -0.02, 0.6],
    rotation: [0, 9.6, 0],
    scale: 1.45,
    cameraPosition: [0, 0, 4.4],
    cameraFov: 28,
    packagingOpen: 1,
    drama: 1,
  },
  {
    id: "cta",
    at: 1.0,
    position: [0, -0.05, 0],
    rotation: [0, 10.6, 0],
    scale: 0.95,
    cameraPosition: [0, 0.05, 5.9],
    cameraFov: 33,
    packagingOpen: 1,
    drama: 0.75,
  },
];

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
