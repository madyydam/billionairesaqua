import { i as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { v as ClientOnly } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import {
  a as Mail,
  c as ArrowDown,
  i as MapPin,
  n as Phone,
  o as CircleQuestionMark,
  r as Menu,
  s as ArrowRight,
  t as X,
} from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ci4JpTxA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}
var initial = {
  webgl: true,
  reducedMotion: false,
  mobile: false,
  dpr: [1, 1.6],
  shadows: true,
  richMaterials: true,
  ready: false,
};
/** Device capability detection used to scale the 3D experience down gracefully. */
function useDevicePerformance() {
  const [profile, setProfile] = (0, import_react.useState)(initial);
  (0, import_react.useEffect)(() => {
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
var TIMELINE$1 = [
  {
    id: "hero",
    at: 0,
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
    position: [1.25, -0.05, 0],
    rotation: [0.02, 2.75, 0.03],
    scale: 1.02,
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
    at: 1,
    position: [0, -0.1, 0],
    rotation: [0, 10.6, 0],
    scale: 1,
    cameraPosition: [0, 0.05, 5.9],
    cameraFov: 33,
    packagingOpen: 1,
    drama: 0.75,
  },
];
/** smooth-scroll feel */
var LENIS = {
  duration: 1.35,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.4,
};
/**
 * Global scroll state shared between the DOM (Lenis / GSAP ScrollTrigger) and
 * the WebGL render loop. It intentionally lives outside React state: the 3D
 * scene reads it every frame from a mutable object so scrolling never triggers
 * a React re-render.
 */
var scrollState = {
  progress: 0,
  velocity: 0,
  dragRotation: 0,
  dragVelocity: 0,
  pointerX: 0,
  pointerY: 0,
  dragging: false,
};
var listeners = /* @__PURE__ */ new Set();
function setScrollProgress(progress, velocity = 0) {
  scrollState.progress = progress;
  scrollState.velocity = velocity;
  listeners.forEach((fn) => fn(progress));
}
function subscribeScroll(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
/**
 * React binding for components that genuinely need to re-render on scroll
 * (progress rail, nav background). Throttled to whole percent steps.
 */
function useScrollProgress(steps = 100) {
  const [value, setValue] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
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
gsapWithCSS.registerPlugin(ScrollTrigger);
var lenisInstance = null;
/** Programmatic navigation that respects the smooth-scroll instance. */
function scrollToSection$1(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: 0 });
  else
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}
/**
 * Smooth scroll + master timeline driver.
 *
 * Scene anchors are read from the DOM ([data-scene]) and mapped onto the
 * normalised timeline in src/config/productAnimation.ts, so the 3D scenes stay
 * locked to their sections at any viewport height.
 */
function SmoothScrollProvider({ reducedMotion }) {
  (0, import_react.useEffect)(() => {
    let anchors = [];
    const measure = () => {
      anchors = Array.from(document.querySelectorAll("[data-scene]"))
        .map((node) => {
          const id = node.dataset["scene"];
          const scene = TIMELINE$1.find((s) => s.id === id);
          if (!scene) return null;
          return {
            at: scene.at,
            top: node.getBoundingClientRect().top + window.scrollY,
          };
        })
        .filter((v) => v !== null)
        .sort((a, b) => a.top - b.top);
    };
    const compute = (y, velocity) => {
      if (anchors.length < 2) {
        setScrollProgress(
          y / Math.max(1, document.body.scrollHeight - window.innerHeight),
          velocity,
        );
        return;
      }
      const first = anchors[0];
      const last = anchors[anchors.length - 1];
      if (y <= first.top) {
        setScrollProgress(first.at, velocity);
        return;
      }
      if (y >= last.top) {
        setScrollProgress(last.at, velocity);
        return;
      }
      let i = 0;
      while (i < anchors.length - 2 && y > anchors[i + 1].top) i++;
      const a = anchors[i];
      const b = anchors[i + 1];
      const t = (y - a.top) / Math.max(1, b.top - a.top);
      setScrollProgress(a.at + (b.at - a.at) * t, velocity);
    };
    measure();
    compute(window.scrollY, 0);
    const onResize = () => {
      measure();
      compute(window.scrollY, 0);
    };
    window.addEventListener("resize", onResize);
    ScrollTrigger.addEventListener("refresh", measure);
    if (reducedMotion) {
      const onScroll = () => compute(window.scrollY, 0);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        ScrollTrigger.removeEventListener("refresh", measure);
      };
    }
    const lenis = new Lenis({
      duration: LENIS.duration,
      wheelMultiplier: LENIS.wheelMultiplier,
      touchMultiplier: LENIS.touchMultiplier,
      smoothWheel: true,
    });
    lenisInstance = lenis;
    lenis.on("scroll", (e) => {
      compute(e.scroll, e.velocity);
      ScrollTrigger.update();
    });
    const raf = (time) => lenis.raf(time * 1e3);
    gsapWithCSS.ticker.add(raf);
    gsapWithCSS.ticker.lagSmoothing(0);
    return () => {
      gsapWithCSS.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
      window.removeEventListener("resize", onResize);
      ScrollTrigger.removeEventListener("refresh", measure);
    };
  }, [reducedMotion]);
  return null;
}
/**
 * WebGL is browser-only: the scene module is loaded after hydration so nothing
 * three.js related is evaluated during SSR.
 */
function ProductSceneLazy({ device, onReady }) {
  if (!device.ready) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { fallback: null });
}
/**
 * Premium loading curtain. Fades once the WebGL scene reports ready, so the
 * product enters naturally instead of popping in.
 */
function Loader({ ready }) {
  const root = (0, import_react.useRef)(null);
  const bar = (0, import_react.useRef)(null);
  const [hidden, setHidden] = (0, import_react.useState)(false);
  const [expired, setExpired] = (0, import_react.useState)(false);
  const done = ready || expired;
  (0, import_react.useEffect)(() => {
    const t = window.setTimeout(() => setExpired(true), 4e3);
    return () => window.clearTimeout(t);
  }, []);
  (0, import_react.useEffect)(() => {
    if (!bar.current) return;
    gsapWithCSS.to(bar.current, {
      scaleX: done ? 1 : 0.72,
      duration: done ? 0.5 : 2.4,
      ease: "power2.out",
    });
  }, [done]);
  (0, import_react.useEffect)(() => {
    if (!done || !root.current) return;
    const tl = gsapWithCSS.timeline({
      delay: 0.35,
      onComplete: () => setHidden(true),
    });
    tl.to(root.current, {
      opacity: 0,
      duration: 0.9,
      ease: "power2.inOut",
    });
    return () => {
      tl.kill();
    };
  }, [done]);
  (0, import_react.useEffect)(() => {
    document.documentElement.classList.toggle("is-loading", !hidden);
    return () => document.documentElement.classList.remove("is-loading");
  }, [hidden]);
  if (hidden) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    ref: root,
    role: "status",
    "aria-live": "polite",
    className: "fixed inset-0 z-100 flex flex-col items-center justify-center bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "font-display text-[0.7rem] tracking-[0.5em] text-muted-foreground uppercase",
        children: "The Billionaire's",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "mt-3 font-display text-3xl tracking-[0.28em] text-foreground uppercase",
        children: "Aqua",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-10 h-px w-40 overflow-hidden bg-hairline",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          ref: bar,
          className: "block h-px w-full origin-left scale-x-0 bg-accent-gold",
          "aria-hidden": "true",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "sr-only",
        children: "Loading the product experience",
      }),
    ],
  });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var LINKS = [
  {
    label: "Home",
    id: "hero",
  },
  {
    label: "Our Story",
    id: "intro",
  },
  {
    label: "Our Water",
    id: "reveal",
  },
  {
    label: "Products",
    id: "details",
  },
  {
    label: "Quality",
    id: "technology",
  },
  {
    label: "Partner With Us",
    id: "cta",
  },
];
function Nav() {
  const progress = useScrollProgress(60);
  const [open, setOpen] = (0, import_react.useState)(false);
  const solid = progress > 0.03;
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const go = (id) => {
    setOpen(false);
    scrollToSection$1(id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
    className: cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-700",
      solid
        ? "border-b border-hairline bg-background/70 backdrop-blur-xl"
        : "border-b border-transparent",
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
            onClick: () => go("hero"),
            className:
              "flex items-baseline gap-2 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "aria-label": "The Billionaire's Aqua — back to top",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "font-display text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase",
                children: "The",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "font-display text-sm tracking-[0.3em] text-foreground uppercase",
                children: "Billionaire's Aqua",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
            "aria-label": "Primary",
            className: "hidden items-center gap-10 md:flex",
            children: [
              LINKS.map((link) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    onClick: () => go(link.id),
                    className:
                      "group relative font-body text-[0.72rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground",
                    children: [
                      link.label,
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "absolute -bottom-1 left-0 h-px w-0 bg-accent-gold transition-all duration-500 group-hover:w-full",
                      }),
                    ],
                  },
                  link.id,
                ),
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: () => go("contact"),
                className:
                  "rounded-full border border-hairline px-6 py-2.5 font-body text-[0.7rem] tracking-[0.2em] text-foreground uppercase transition-colors duration-500 hover:border-accent-gold hover:text-accent-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                children: "Enquire now",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            onClick: () => setOpen((v) => !v),
            "aria-label": open ? "Close menu" : "Open menu",
            "aria-expanded": open,
            className:
              "flex min-h-11 min-w-11 items-center justify-center text-foreground md:hidden",
            children: open
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }),
          }),
        ],
      }),
      open &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
            "aria-label": "Mobile",
            className: "flex flex-col px-6 py-6",
            children: [
              LINKS.map((link) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    onClick: () => go(link.id),
                    className:
                      "border-b border-hairline py-5 text-left font-display text-xl tracking-[0.08em] text-foreground uppercase",
                    children: link.label,
                  },
                  link.id,
                ),
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: () => go("contact"),
                className:
                  "mt-6 rounded-full bg-foreground py-4 font-body text-[0.72rem] tracking-[0.22em] text-background uppercase",
                children: "Enquire now",
              }),
            ],
          }),
        }),
    ],
  });
}
var LABELS = {
  hero: "Hero",
  intro: "Introduction",
  focus: "Focus",
  details: "Details",
  reveal: "Reveal",
  angles: "Every angle",
  technology: "Technology",
  moment: "The moment",
  cta: "Get started",
};
/** Minimal scene rail, mirroring the dot navigation in the reference. */
function ProgressRail() {
  const progress = useScrollProgress(200);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
    "aria-label": "Scene navigation",
    className:
      "fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex",
    children: TIMELINE$1.map((scene, i) => {
      const next = TIMELINE$1[i + 1]?.at ?? 1.0001;
      const active = progress >= scene.at - 0.001 && progress < next;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: () => scrollToSection$1(scene.id),
          "aria-label": `Go to ${LABELS[scene.id] ?? scene.id}`,
          "aria-current": active ? "true" : void 0,
          className: "group flex min-h-6 items-center justify-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: cn(
              "size-1.5 rounded-full transition-all duration-500",
              active
                ? "scale-150 bg-foreground"
                : "bg-muted-foreground/40 group-hover:bg-accent-gold",
            ),
          }),
        },
        scene.id,
      );
    }),
  });
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    className: "relative z-10 border-t border-hairline bg-black/40 px-6 py-20 md:px-10",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-[1600px]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 sm:grid-cols-2 md:grid-cols-6 mb-16",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "md:col-span-2 space-y-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "font-display text-base tracking-[0.3em] text-foreground uppercase",
                  children: "THE BILLIONAIRE'S AQUA",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "font-body text-[0.72rem] tracking-[0.24em] text-accent-gold uppercase",
                  children: "More Than Water. A Standard.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "font-body text-[0.65rem] leading-relaxed text-muted-foreground uppercase max-w-xs",
                  children:
                    "Premium packaged drinking water crafted for quality, consistency, and a bigger vision.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold",
                  children: "Company",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "space-y-4",
                  children: [
                    {
                      label: "Our Story",
                      id: "intro",
                    },
                    {
                      label: "Our Water",
                      id: "reveal",
                    },
                    {
                      label: "Quality",
                      id: "technology",
                    },
                    {
                      label: "Products",
                      id: "details",
                    },
                  ].map((item) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "li",
                      {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          onClick: () => scrollToSection$1(item.id),
                          className:
                            "font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left",
                          children: item.label,
                        }),
                      },
                      item.label,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold",
                  children: "Business",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "space-y-4",
                  children: [
                    {
                      label: "Distributor",
                      id: "cta",
                    },
                    {
                      label: "Corporate Enquiry",
                      id: "contact",
                    },
                    {
                      label: "Partner With Us",
                      id: "cta",
                    },
                  ].map((item) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "li",
                      {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          onClick: () => scrollToSection$1(item.id),
                          className:
                            "font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left",
                          children: item.label,
                        }),
                      },
                      item.label,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold",
                  children: "Support",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "space-y-4",
                  children: [
                    {
                      label: "Contact",
                      id: "contact",
                    },
                    {
                      label: "FAQ",
                      id: "faq",
                    },
                  ].map((item) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "li",
                      {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          onClick: () => scrollToSection$1(item.id),
                          className:
                            "font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left",
                          children: item.label,
                        }),
                      },
                      item.label,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold",
                  children: "Legal",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "space-y-4",
                  children: [
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Shipping Policy",
                    "Refund Policy",
                  ].map((policy) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "li",
                      {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          onClick: () => scrollToSection$1("contact"),
                          className:
                            "font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left",
                          children: policy,
                        }),
                      },
                      policy,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "flex flex-col sm:flex-row items-center justify-between border-t border-hairline pt-10 gap-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase",
              children: "© 2026 THE BILLIONAIRE'S AQUA. All Rights Reserved.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex gap-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "#",
                  className:
                    "font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors",
                  children: "Instagram",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "#",
                  className:
                    "font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors",
                  children: "LinkedIn",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
/**
 * Shared section shell. `scene` links the block to a keyframe in
 * src/config/productAnimation.ts — the scroll driver reads these anchors.
 */
function Section({ id, scene, children, className, labelledBy }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    id,
    "data-scene": scene ?? id,
    "aria-labelledby": labelledBy,
    className: cn(
      "relative z-10 flex min-h-screen w-full items-center px-6 py-24 md:px-10",
      className,
    ),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "mx-auto w-full max-w-[1600px]",
      children,
    }),
  });
}
function Eyebrow({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
    className:
      "inline-flex items-center gap-3 rounded-full border border-hairline px-4 py-1.5 font-body text-[0.62rem] tracking-[0.32em] text-muted-foreground uppercase",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "size-1 rounded-full bg-accent-gold",
        "aria-hidden": "true",
      }),
      children,
    ],
  });
}
function Display({ children, className, as: Tag = "h2", id }) {
  const classes = cn(
    "font-display text-[clamp(2.35rem,6.4vw,6.4rem)] leading-[0.95] tracking-[-0.03em] text-foreground uppercase",
    className,
  );
  if (Tag === "h1")
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      id,
      className: classes,
      children,
    });
  if (Tag === "h3")
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
      id,
      className: classes,
      children,
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
    id,
    className: classes,
    children,
  });
}
function Body({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
    className: cn(
      "max-w-[42ch] font-body text-[0.95rem] leading-relaxed text-muted-foreground",
      className,
    ),
    children,
  });
}
/**
 * Premium CTA with a subtle magnetic hover. Motion is skipped when the user
 * prefers reduced motion; the button itself stays a real, focusable <button>.
 */
function MagneticButton({ variant = "solid", className, children, ...props }) {
  const ref = (0, import_react.useRef)(null);
  const move = (event) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsapWithCSS.to(el, {
      x: x * 0.18,
      y: y * 0.24,
      duration: 0.5,
      ease: "power3.out",
    });
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    gsapWithCSS.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    ref,
    onMouseMove: move,
    onMouseLeave: leave,
    className: cn(
      "group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-body text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11",
      variant === "solid" && "bg-foreground text-background hover:bg-accent-gold",
      variant === "outline" &&
        "border border-hairline text-foreground hover:border-accent-gold hover:text-accent-gold",
      variant === "quiet" &&
        "px-0 text-muted-foreground hover:text-foreground [&>span.line]:hover:w-full",
      className,
    ),
    ...props,
    children,
  });
}
/** Scene 1 — the product is the visual hero, typography stays minimal. */
function Hero({ ready }) {
  const root = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = root.current.querySelectorAll("[data-hero-item]");
    if (reduce) {
      gsapWithCSS.set(items, {
        opacity: 1,
        y: 0,
      });
      return;
    }
    const tl = gsapWithCSS.timeline({ delay: 0.55 });
    tl.fromTo(
      items,
      {
        opacity: 0,
        y: 34,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.3,
        stagger: 0.14,
        ease: "power3.out",
      },
    );
    return () => {
      tl.kill();
    };
  }, [ready]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
    id: "hero",
    scene: "hero",
    labelledBy: "hero-title",
    className: "items-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        ref: root,
        className: "grid gap-10 md:grid-cols-12 md:items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "md:col-span-6 lg:col-span-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                "data-hero-item": true,
                className: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                  children: "THE BILLIONAIRE'S AQUA",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Display, {
                as: "h1",
                id: "hero-title",
                className: "mt-7",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    "data-hero-item": true,
                    className: "block opacity-0",
                    children: "More Than Water.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    "data-hero-item": true,
                    className: "block text-accent-gold opacity-0",
                    children: "A Standard.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                "data-hero-item": true,
                className: "mt-8 opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                  children:
                    "Premium packaged drinking water created for those who believe that quality is not an option — it is a standard.",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                "data-hero-item": true,
                className: "mt-10 flex flex-wrap items-center gap-6 opacity-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
                    onClick: () => scrollToSection$1("details"),
                    children: [
                      "Explore our products",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                        className:
                          "size-3.5 transition-transform duration-500 group-hover:translate-x-1",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
                    variant: "quiet",
                    onClick: () => scrollToSection$1("cta"),
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "relative",
                      children: [
                        "Partner with us",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "line absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "md:col-span-6 lg:col-start-9 lg:col-span-4",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              "data-hero-item": true,
              className:
                "ml-auto hidden max-w-[26ch] border-l border-hairline pl-6 opacity-0 lg:block",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className:
                  "font-body text-[0.7rem] leading-loose tracking-[0.2em] text-muted-foreground uppercase",
                children: "Scroll to travel through the product story.",
              }),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "font-body text-[0.55rem] tracking-[0.4em] text-muted-foreground uppercase",
            children: "PUNE • MAHARASHTRA • INDIA",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className:
              "flex flex-col items-center gap-1 font-body text-[0.5rem] tracking-[0.32em] text-muted-foreground uppercase",
            children: [
              "Scroll",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
                className: "size-3 animate-bounce",
                "aria-hidden": "true",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
gsapWithCSS.registerPlugin(ScrollTrigger);
/**
 * Section entrance / text reveal. Direct children are revealed with a stagger
 * as the block enters the viewport. Fully bypassed under prefers-reduced-motion.
 */
function Reveal({ children, className, delay = 0, stagger = 0.09, y = 26 }) {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsapWithCSS.set(el.children, {
        opacity: 1,
        y: 0,
      });
      return;
    }
    const items = el.children.length ? Array.from(el.children) : [el];
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.fromTo(
        items,
        {
          opacity: 0,
          y,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, el);
    return () => {
      ctx.revert();
    };
  }, [delay, stagger, y]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn(className),
    children,
  });
}
/** Scene 2 — product travels to the opposite side while the story changes. */
function ProductIntro() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "intro",
    scene: "intro",
    labelledBy: "intro-title",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "grid gap-16 md:grid-cols-12",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "md:col-span-5 md:col-start-7",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                children: "Brand Introduction",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Display, {
                id: "intro-title",
                className: "mt-7",
                children: [
                  "More than",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                  "just water.",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                className: "mt-8",
                children:
                  "THE BILLIONAIRE'S AQUA is built on a simple belief — the things we consume every day should reflect the standards we choose to live by.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                className: "mt-4",
                children:
                  "We are building a premium packaged drinking water brand with a focus on quality, consistency, thoughtful presentation and a bigger vision for India.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: () => scrollToSection("benefits"),
                className:
                  "mt-8 flex items-center gap-2 font-body text-[0.72rem] tracking-[0.2em] text-accent-gold uppercase hover:text-foreground transition-colors focus-visible:outline-none",
                children: "Discover Our Story →",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            className: "mt-14 space-y-10",
            stagger: 0.14,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "border-t border-hairline pt-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "font-display text-sm tracking-[0.24em] text-foreground uppercase",
                    children: "Uncompromising Quality",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                    className: "mt-3",
                    children:
                      "Rigorous multi-stage purification and testing standards to guarantee pure taste in every bottle.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "border-t border-hairline pt-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "font-display text-sm tracking-[0.24em] text-foreground uppercase",
                    children: "Thoughtful Presentation",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                    className: "mt-3",
                    children:
                      "A premium container designed with minimal modern aesthetics that stands out on any occasion.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "border-t border-hairline pt-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "font-display text-sm tracking-[0.24em] text-foreground uppercase",
                    children: "Pune to India Vision",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                    className: "mt-3",
                    children:
                      "Starting regional operations in Pune with a roadmap for state-wide and national growth.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
/** Scene 3 — product centres and dominates; composition stays almost empty. */
function CenterFocus() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "focus",
    scene: "focus",
    labelledBy: "focus-title",
    className: "items-end md:items-center",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex flex-col items-center text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          className: "w-full",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
            children: "The Brand Philosophy",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          className: "mt-8 w-full",
          delay: 0.1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
            id: "focus-title",
            className:
              "mx-auto max-w-[20ch] text-[clamp(2.2rem,5vw,4.4rem)] lowercase first-letter:uppercase",
            children: "Billionaires aren't born — they're built.",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          className: "mt-8 w-full space-y-6",
          delay: 0.2,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-light leading-relaxed tracking-wider text-muted-foreground max-w-2xl mx-auto",
              children:
                "Every sip is a reminder to dream fearlessly, act consistently, and never stop believing in your potential.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-light leading-relaxed tracking-wider text-muted-foreground max-w-2xl mx-auto",
              children: "Your vision, your discipline, and your actions will define your future.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-normal tracking-wide text-foreground",
              children: "Start today.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "pt-4 font-display text-[0.68rem] tracking-[0.32em] text-accent-gold uppercase",
              children: "— THE BILLIONAIRE'S AQUA",
            }),
          ],
        }),
      ],
    }),
  });
}
var PRODUCTS = [
  {
    id: "250ml",
    size: "250 ML",
    tagline: "For events, hospitality & on-the-go occasions.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "250 ML",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹10*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "500ml",
    size: "500 ML",
    tagline: "For everyday convenience.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "500 ML",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹15*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "1l",
    size: "1 L",
    tagline: "For personal everyday hydration.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "1 L",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹20*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "2l",
    size: "2 L",
    tagline: "For sharing and extended use.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "2 L",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹30*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "5l",
    size: "5 L",
    tagline: "For larger-volume requirements.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "5 L",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹65*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "20l",
    size: "20 L",
    tagline: "For homes, offices and institutional requirements.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "20 L",
      packaging: "Premium Food-Grade Polycarbonate Can (Returnable)",
      mrp: "₹90*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "30 Days from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
];
function ProductDetails() {
  const [activeId, setActiveId] = (0, import_react.useState)("1l");
  const activeProduct = PRODUCTS.find((p) => p.id === activeId) || PRODUCTS[2];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "details",
    scene: "details",
    labelledBy: "details-title",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "w-full grid gap-12 lg:grid-cols-12 items-start mt-10",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "lg:col-span-5 space-y-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                  children: "Our Collection",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Display, {
                  id: "details-title",
                  className: "mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none",
                  children: [
                    "A size for",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    "every occasion.",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                  className: "mt-6 text-muted-foreground",
                  children:
                    "A size for every occasion. A standard for every sip. Explore our premium packaging options.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              className: "grid grid-cols-3 gap-3 md:gap-4 pt-4",
              delay: 0.1,
              children: PRODUCTS.map((p) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    onClick: () => setActiveId(p.id),
                    className: `py-3.5 px-2 text-center rounded-lg border font-display text-[0.72rem] tracking-[0.2em] transition-all duration-500 uppercase focus-visible:outline-none ${activeId === p.id ? "border-accent-gold bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]" : "border-hairline bg-transparent text-muted-foreground hover:border-foreground hover:text-foreground"}`,
                    children: p.size,
                  },
                  p.id,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              className: "border border-hairline p-6 bg-black/20 rounded-xl",
              delay: 0.15,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase mb-2",
                  children: "Selected Size",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className:
                    "font-display text-xl tracking-[0.15em] text-foreground uppercase mb-3",
                  children: activeProduct.size,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "font-body text-sm text-muted-foreground leading-relaxed mb-6",
                  children: activeProduct.tagline,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  onClick: () => scrollToSection$1("contact"),
                  className:
                    "px-6 py-2.5 rounded-full border border-accent-gold text-accent-gold font-body text-[0.68rem] tracking-[0.2em] uppercase hover:bg-accent-gold hover:text-background transition-all duration-500 focus-visible:outline-none",
                  children: "Enquire Size",
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "lg:col-span-7 bg-black/40 border border-hairline rounded-xl p-8 space-y-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                className:
                  "font-display text-xs tracking-[0.3em] text-accent-gold uppercase border-b border-hairline pb-4",
                children: "Official Product Information",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              className:
                "divide-y divide-hairline text-[0.72rem] font-body tracking-[0.1em] uppercase text-muted-foreground",
              delay: 0.1,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Product" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right",
                      children: activeProduct.specs.product,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "Net Quantity",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right",
                      children: activeProduct.specs.quantity,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Packaging" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right max-w-xs",
                      children: activeProduct.specs.packaging,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MRP" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right",
                      children: activeProduct.specs.mrp,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Batch No." }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right font-mono text-[0.68rem]",
                      children: activeProduct.specs.batch,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "Date of Packaging",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right",
                      children: activeProduct.specs.date,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "Use By / Expiry",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right",
                      children: activeProduct.specs.expiry,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "BIS Standard",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right text-accent-gold",
                      children: activeProduct.specs.bis,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "FSSAI License",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right text-accent-gold",
                      children: activeProduct.specs.fssai,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-between py-3.5 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "Processor / Manufacturer",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground text-right text-[0.68rem] max-w-xs normal-case",
                      children: activeProduct.specs.manufacturer,
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              className:
                "pt-2 text-[0.62rem] text-muted-foreground/60 italic leading-relaxed text-center",
              delay: 0.2,
              children:
                "* Prices are subject to local taxes and shipping fees. Certification specifics are updated in accordance with the regulatory launch phases.",
            }),
          ],
        }),
      ],
    }),
  });
}
/**
 * Scene 5 — cinematic reveal. The packaging shells (see 3d/Packaging.tsx) close
 * in from the previous scene, then split and fade as this section scrolls past.
 */
function ProductReveal() {
  const steps = [
    {
      label: "Source",
      desc: "Monitored natural source",
    },
    {
      label: "Treatment",
      desc: "Multi-stage purification",
    },
    {
      label: "Testing",
      desc: "Rigorous lab verification",
    },
    {
      label: "Packaging",
      desc: "Hygienic hands-free bottling",
    },
    {
      label: "Quality Control",
      desc: "Batch-level audit",
    },
    {
      label: "Distribution",
      desc: "Protected logistics chain",
    },
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "reveal",
    scene: "reveal",
    labelledBy: "reveal-title",
    className: "items-center",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "w-full space-y-12",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              className: "max-w-[38ch]",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our Water" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
                  id: "reveal-title",
                  className:
                    "mt-7 text-[clamp(2.2rem,4.4vw,3.8rem)] leading-none lowercase first-letter:uppercase",
                  children: "Water, held to a higher standard.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              className: "max-w-[42ch]",
              delay: 0.15,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                  children:
                    "At Billionaire's Aqua, we believe quality begins long before the bottle reaches your hands. Our approach focuses on controlled processing, quality checks, hygienic handling and consistent packaging standards.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "mt-4 font-body text-sm font-semibold tracking-wider text-accent-gold uppercase",
                  children: "Never compromise the standard.",
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          className: "w-full pt-8",
          delay: 0.25,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "grid grid-cols-2 md:grid-cols-6 gap-4 relative",
            children: steps.map((step, idx) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className:
                    "border border-hairline p-5 rounded-lg bg-black/30 backdrop-blur-sm relative group hover:border-accent-gold transition-colors duration-500",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "absolute top-4 right-4 font-display text-[0.62rem] text-accent-gold/40 group-hover:text-accent-gold/80 transition-colors",
                      children: ["0", idx + 1],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                      className:
                        "font-display text-[0.72rem] tracking-[0.2em] text-foreground uppercase mb-2",
                      children: step.label,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "font-body text-[0.65rem] text-muted-foreground leading-relaxed lowercase first-letter:uppercase",
                      children: step.desc,
                    }),
                    idx < steps.length - 1 &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-hairline z-10 group-hover:bg-accent-gold/50 transition-colors",
                      }),
                  ],
                },
                step.label,
              ),
            ),
          }),
        }),
      ],
    }),
  });
}
/** Scene 6 — close inspection; the product stays locked facing forward. */
function ProductAngles() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "angles",
    scene: "angles",
    labelledBy: "angles-title",
    className: "items-end",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex flex-col items-center gap-6 text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          className: "w-full",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
            children: "See every angle",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          className: "w-full",
          delay: 0.1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
            id: "angles-title",
            className: "text-[clamp(1.9rem,4vw,3.4rem)]",
            children: "Held to one standard.",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          className: "w-full",
          delay: 0.18,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
            className: "mx-auto text-center text-[0.85rem]",
            children: "Every seam, ring and print edge holds up under inspection.",
          }),
        }),
      ],
    }),
  });
}
gsapWithCSS.registerPlugin(ScrollTrigger);
var QUALITY_ITEMS = [
  {
    n: "01",
    title: "Water Quality Testing",
    copy: "Rigorous testing parameters covering essential physical, chemical, and microbiological checks in accordance with Indian Standards.",
  },
  {
    n: "02",
    title: "Hygienic Processing",
    copy: "Controlled filtration, ozonation, and automated processing lines to guarantee zero contamination and consistent taste profile.",
  },
  {
    n: "03",
    title: "Quality Control",
    copy: "Hourly batch-level inspection checks on chemical balance, cap sealing torque, and label alignment.",
  },
  {
    n: "04",
    title: "Packaging Standards",
    copy: "Optical-grade, high-density food-safe containers that preserve water freshness and withstand distribution stresses.",
  },
  {
    n: "05",
    title: "Traceability",
    copy: "Laser-engraved batch tracking numbers on the bottle neck, detailing precise packaging time and plant origin.",
  },
  {
    n: "06",
    title: "Regulatory Compliance",
    copy: "All manufacturing partners are audited to ensure process alignment with FSSAI rules and IS 14543 specifications.",
  },
];
var PILLARS = [
  {
    title: "Quality",
    desc: "Consistent standards from processing to packaging.",
  },
  {
    title: "Purity",
    desc: "Water quality supported by appropriate testing and controls.",
  },
  {
    title: "Consistency",
    desc: "Every bottle should represent the same brand standard.",
  },
  {
    title: "Presentation",
    desc: "Premium packaging designed to reflect the brand.",
  },
];
function Technology() {
  const root = (0, import_react.useRef)(null);
  const [active, setActive] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const el = root.current;
    if (!el) return;
    const rows = Array.from(el.querySelectorAll("[data-tech-row]"));
    const ctx = gsapWithCSS.context(() => {
      rows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 75%",
          end: "bottom 35%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "technology",
    scene: "technology",
    labelledBy: "tech-title",
    className: "items-center",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "w-full space-y-16",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 lg:grid-cols-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:col-span-5",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                    children: "Our Standard",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
                    id: "tech-title",
                    className:
                      "mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none lowercase first-letter:uppercase",
                    children: "Quality is our standard.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                    className: "mt-6 text-muted-foreground",
                    children:
                      "We believe that every bottle should represent the finest packaged drinking water experience. Our baseline is simple, and our parameters are strict.",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:col-span-7",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                delay: 0.1,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "sm:col-span-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                        className:
                          "font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase mb-2",
                        children: "Our Standard is Simple.",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "h-px bg-hairline w-full mb-2",
                      }),
                    ],
                  }),
                  PILLARS.map((pillar) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className: "border border-hairline p-5 rounded-lg bg-black/20",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
                            className:
                              "font-display text-sm tracking-[0.15em] text-foreground uppercase mb-2",
                            children: pillar.title,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "font-body text-xs text-muted-foreground leading-relaxed",
                            children: pillar.desc,
                          }),
                        ],
                      },
                      pillar.title,
                    ),
                  ),
                ],
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 lg:grid-cols-12 pt-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:col-span-5",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                    className:
                      "font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase mb-4",
                    children: "Quality & Safety Checks",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "font-body text-xs text-muted-foreground leading-relaxed max-w-sm",
                    children:
                      "From water collection to distribution logistics, each parameter is checked at regular intervals. Scroll to see the core components of our safety framework.",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:col-span-7",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                ref: root,
                className: "space-y-4",
                children: QUALITY_ITEMS.map((item, i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      "data-tech-row": true,
                      "aria-current": active === i ? "true" : void 0,
                      className: cn(
                        "border-t border-hairline py-6 transition-all duration-700",
                        active === i ? "opacity-100 border-accent-gold/40" : "opacity-35",
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-baseline gap-5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className: cn(
                                "font-body text-[0.65rem] tracking-[0.24em] transition-colors duration-500",
                                active === i ? "text-accent-gold" : "text-muted-foreground",
                              ),
                              children: item.n,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className:
                                "font-display text-base tracking-[0.14em] text-foreground uppercase",
                              children: item.title,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                          className:
                            "mt-3 pl-10 text-[0.82rem] leading-relaxed text-muted-foreground",
                          children: item.copy,
                        }),
                      ],
                    },
                    item.n,
                  ),
                ),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function FullscreenMoment() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "moment",
    scene: "moment",
    labelledBy: "moment-title",
    className: "min-h-[110vh] items-end pb-24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex flex-col items-start gap-6 max-w-3xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Display, {
            id: "moment-title",
            className: "text-[clamp(2.4rem,6vw,5.5rem)] leading-none font-semibold",
            children: [
              "Starting from Pune.",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
              "Building for India.",
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          delay: 0.2,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className:
              "max-w-[48ch] font-body text-[clamp(0.85rem,1.5vw,1.1rem)] leading-relaxed tracking-wider text-muted-foreground",
            children:
              "Our journey begins in Pune, with a long-term ambition to create a trusted premium packaged drinking water brand with a presence across India.",
          }),
        }),
      ],
    }),
  });
}
var TIMELINE = [
  {
    year: "2026",
    phase: "Brand Foundation",
    desc: "Setting up manufacturing partnerships and premium quality standards.",
  },
  {
    year: "Launch",
    phase: "Pune Operations",
    desc: "Introducing the collection to premium retail and hospitality sectors in Pune.",
  },
  {
    year: "Phase 2",
    phase: "PCMC Expansion",
    desc: "Extending operations and distribution channels to PCMC corporate belts.",
  },
  {
    year: "Phase 3",
    phase: "Maharashtra Scale",
    desc: "Scaling supply chain and brand presence across key Maharashtra districts.",
  },
  {
    year: "Phase 4",
    phase: "National Presence",
    desc: "Expanding footprint to establish a trusted Indian luxury water brand nationally.",
  },
];
function Benefits() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "benefits",
    scene: "moment",
    labelledBy: "benefits-title",
    className: "items-center py-24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "w-full space-y-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-16 md:grid-cols-12 items-start",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "md:col-span-5",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our Story" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
                    id: "benefits-title",
                    className:
                      "mt-7 text-[clamp(2rem,4.5vw,3.6rem)] leading-none lowercase first-letter:uppercase",
                    children: "Built with a bigger vision.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                    className: "mt-7",
                    children:
                      "THE BILLIONAIRE'S AQUA was created with an ambition to build more than a bottled water business.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                    className: "mt-4",
                    children:
                      "The vision is to create a premium Indian water brand that combines quality, strong branding, disciplined execution and a distinctive customer experience. Starting from Pune, the ambition is to build a brand capable of growing across Maharashtra and eventually across India.",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "md:col-span-7 space-y-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                  className: "border-b border-hairline pb-4",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                    className:
                      "font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase",
                    children: "Ambition Roadmap",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "relative pl-6 border-l border-hairline space-y-8",
                  children: TIMELINE.map((item, idx) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      Reveal,
                      {
                        className: "relative",
                        delay: idx * 0.05,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "absolute -left-[1.88rem] top-1.5 size-2 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className:
                                  "font-display text-xs tracking-[0.2em] text-accent-gold uppercase font-semibold min-w-[70px]",
                                children: item.year,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
                                    className:
                                      "font-display text-sm tracking-[0.12em] text-foreground uppercase",
                                    children: item.phase,
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                    className:
                                      "font-body text-[0.72rem] text-muted-foreground leading-relaxed mt-1",
                                    children: item.desc,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      item.phase,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 lg:grid-cols-12 items-center border-t border-hairline pt-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "lg:col-span-6 space-y-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                      children: "Leadership",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
                      className:
                        "mt-4 text-[clamp(2rem,4vw,3rem)] leading-none lowercase first-letter:uppercase",
                      children: "From an idea to a standard.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                  className: "space-y-4",
                  delay: 0.1,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
                      className: "border-l-2 border-accent-gold pl-6 italic",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "font-body text-base text-foreground leading-relaxed tracking-wide",
                        children:
                          "“I believe every great brand begins with a simple decision — to build something that people can trust and remember.”",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
                      className: "border-l-2 border-accent-gold pl-6 italic",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "font-body text-base text-foreground leading-relaxed tracking-wide",
                        children:
                          "“Billionaire's Aqua is our commitment to building a premium Indian water brand with a long-term vision.”",
                      }),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                  className: "pt-4",
                  delay: 0.15,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "font-display text-base tracking-[0.15em] text-foreground uppercase",
                      children: "Suraj Ishwar",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "font-body text-[0.68rem] tracking-[0.24em] text-accent-gold uppercase mt-1",
                      children: "Founder & Chairman / Managing Director",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:col-span-6 flex justify-center lg:justify-end",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                className:
                  "w-full max-w-md aspect-[4/5] bg-gradient-to-br from-emerald-950 to-neutral-950 border border-accent-gold/20 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-accent-gold/50 transition-all duration-700",
                delay: 0.2,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "absolute -top-1/4 -right-1/4 size-80 rounded-full bg-accent-gold/5 blur-[80px]",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "absolute -bottom-1/4 -left-1/4 size-80 rounded-full bg-emerald-800/10 blur-[80px]",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "font-display text-[0.62rem] tracking-[0.35em] text-accent-gold uppercase",
                        children: "THE BILLIONAIRE'S AQUA",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                        className:
                          "font-display text-2xl tracking-[0.2em] text-foreground uppercase mt-4",
                        children: "COMMITMENT",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "relative z-10 space-y-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "w-16 h-px bg-accent-gold/40",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "font-display text-sm tracking-[0.25em] text-foreground uppercase",
                        children: "SURAJ ISHWAR",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase",
                        children: "Pune, India",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var FAQS = [
  {
    q: "What is Billionaire's Aqua?",
    a: "Billionaire's Aqua is a premium packaged drinking water brand built around quality, consistency, and a bigger vision.",
  },
  {
    q: "Where is Billionaire's Aqua launching?",
    a: "We are launching initially in Pune and PCMC, followed by a phased expansion across Maharashtra and eventually across India.",
  },
  {
    q: "What sizes are available?",
    a: "Our collection will be available in 250ml, 500ml, 1L, 2L, 5L, and 20L returnable cans.",
  },
  {
    q: "Is Billionaire's Aqua available for distributors?",
    a: "Yes, we are actively building a strong distribution network. Interested partners can fill out the Partner With Us form.",
  },
  {
    q: "How can I become a distributor?",
    a: "Submit your details via the Partner With Us distributor application form on this website. Our business development team will contact you.",
  },
  {
    q: "Where is the water manufactured?",
    a: "The water is processed and packaged at state-of-the-art licensed contract manufacturing facilities under strict quality controls.",
  },
  {
    q: "What certifications does Billionaire's Aqua have?",
    a: "All manufacturing operations are audited and certified. We present only officially verified certifications (FSSAI/BIS) in accordance with the regulatory standards.",
  },
];
function CallToAction() {
  const [activeTab, setActiveTab] = (0, import_react.useState)("enquiry");
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    toast.success("Enquiry submitted successfully! Our team will get back to you.");
    e.target.reset();
  };
  const handleDistributorSubmit = (e) => {
    e.preventDefault();
    toast.success("Distributor application received! Our team will contact you shortly.");
    e.target.reset();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "cta",
    scene: "cta",
    labelledBy: "cta-title",
    className: "items-center py-20",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "w-full space-y-16",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 lg:grid-cols-12 items-end",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:col-span-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                    children: "Connect With Us",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
                    id: "cta-title",
                    className:
                      "mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none lowercase first-letter:uppercase",
                    children: "Grow with us.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
                    className: "mt-6 text-muted-foreground",
                    children:
                      "We are building the foundation for a scalable, premium packaged drinking water business, beginning with focused regional expansion and a long-term national vision.",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "lg:col-span-6 flex justify-start lg:justify-end gap-6 border-b border-hairline pb-4 w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => setActiveTab("enquiry"),
                  className: `pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${activeTab === "enquiry" ? "text-accent-gold" : "text-muted-foreground hover:text-foreground"}`,
                  children: [
                    "Enquiries",
                    activeTab === "enquiry" &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold",
                      }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => setActiveTab("partner"),
                  className: `pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${activeTab === "partner" ? "text-accent-gold" : "text-muted-foreground hover:text-foreground"}`,
                  children: [
                    "Partner With Us",
                    activeTab === "partner" &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold",
                      }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => setActiveTab("faq"),
                  className: `pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${activeTab === "faq" ? "text-accent-gold" : "text-muted-foreground hover:text-foreground"}`,
                  children: [
                    "FAQs",
                    activeTab === "faq" &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold",
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 lg:grid-cols-12 items-start",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "lg:col-span-4 space-y-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                      id: "contact",
                      className:
                        "font-display text-sm tracking-[0.2em] text-foreground uppercase border-b border-hairline pb-3",
                      children: "THE BILLIONAIRE'S AQUA",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-start gap-4 text-muted-foreground",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                          className: "size-5 text-accent-gold shrink-0 mt-0.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "font-body text-xs tracking-wider space-y-1",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-foreground font-semibold",
                              children: "Pune Office",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              children: "Pune, PCMC, Maharashtra, India",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-start gap-4 text-muted-foreground",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
                          className: "size-5 text-accent-gold shrink-0 mt-0.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "font-body text-xs tracking-wider space-y-1",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-foreground font-semibold",
                              children: "Email Us",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                              href: "mailto:enquiry@billionairesaqua.com",
                              className: "hover:text-accent-gold transition-colors",
                              children: "enquiry@billionairesaqua.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-start gap-4 text-muted-foreground",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                          className: "size-5 text-accent-gold shrink-0 mt-0.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "font-body text-xs tracking-wider space-y-1",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-foreground font-semibold",
                              children: "Phone Support",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              children: "[Verification Pending]",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                  className: "border border-hairline p-6 rounded-xl bg-black/20 space-y-4",
                  delay: 0.1,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
                      className:
                        "font-display text-[0.62rem] tracking-[0.25em] text-accent-gold uppercase",
                      children: "Institutional Bulk Supply",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "font-body text-[0.72rem] text-muted-foreground leading-relaxed",
                      children:
                        "Premium hydration customized for Corporate Offices, Luxury Hotels, Fine-dining Restaurants, Events, and Special Occasions.",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "lg:col-span-8 bg-black/40 border border-hairline rounded-xl p-8",
              children: [
                activeTab === "enquiry" &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                      onSubmit: handleEnquirySubmit,
                      className: "space-y-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className:
                            "font-display text-xs tracking-[0.25em] text-accent-gold uppercase mb-4",
                          children: "Business & Institutional Enquiry",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "grid gap-6 sm:grid-cols-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Full Name",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Company / Institution",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Mobile Number",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "tel",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Email Address",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "email",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2 sm:col-span-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Enquiry Type",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                                  required: true,
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors select-custom",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                      className: "bg-neutral-950",
                                      value: "general",
                                      children: "General Enquiry",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                      className: "bg-neutral-950",
                                      value: "distributor",
                                      children: "Distributor Partnership",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                      className: "bg-neutral-950",
                                      value: "retailer",
                                      children: "Retailer Supply",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                      className: "bg-neutral-950",
                                      value: "corporate",
                                      children: "Corporate Supply",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                      className: "bg-neutral-950",
                                      value: "bulk",
                                      children: "Bulk Order",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                      className: "bg-neutral-950",
                                      value: "partnership",
                                      children: "Strategic Partnership",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                      className: "bg-neutral-950",
                                      value: "investor",
                                      children: "Investor / Business Opportunities",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2 sm:col-span-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Your Message",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                                  required: true,
                                  rows: 4,
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none",
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                          type: "submit",
                          className:
                            "w-full py-4 rounded-lg bg-foreground text-background font-body text-[0.72rem] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-background transition-colors duration-500 flex items-center justify-center gap-2 focus-visible:outline-none",
                          children: [
                            "Send Enquiry ",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                              className: "size-4",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                activeTab === "partner" &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                      onSubmit: handleDistributorSubmit,
                      className: "space-y-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              className:
                                "font-display text-xs tracking-[0.25em] text-accent-gold uppercase",
                              children: "Distributor Partner Application",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "font-body text-[0.68rem] text-muted-foreground mt-1",
                              children:
                                "We are building a strong distribution network for the next generation of premium packaged drinking water.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "grid gap-6 sm:grid-cols-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Full Name",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Company Name",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Mobile Number",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "tel",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Email Address",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "email",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "City",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "State",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Business Type",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  placeholder: "Retail / Wholesale / Beverage Dist.",
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Years in Business",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  required: true,
                                  type: "number",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2 sm:col-span-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Current Distribution Network",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                                  placeholder:
                                    "Briefly describe your existing distribution network and outlets covered...",
                                  rows: 3,
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2 sm:col-span-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Investment & Infrastructure Capacity",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                  placeholder:
                                    "E.g., Warehouse space, delivery vehicles, available capital...",
                                  type: "text",
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-2 sm:col-span-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                  className:
                                    "font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase",
                                  children: "Additional Message",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                                  rows: 3,
                                  className:
                                    "w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none",
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                          type: "submit",
                          className:
                            "w-full py-4 rounded-lg bg-foreground text-background font-body text-[0.72rem] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-background transition-colors duration-500 flex items-center justify-center gap-2 focus-visible:outline-none",
                          children: [
                            "Submit Application ",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                              className: "size-4",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                activeTab === "faq" &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      id: "faq",
                      className: "space-y-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                          className:
                            "font-display text-xs tracking-[0.25em] text-accent-gold uppercase mb-4 flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
                              className: "size-4",
                            }),
                            " Frequently Asked Questions",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "space-y-4",
                          children: FAQS.map((faq, idx) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "border border-hairline p-5 rounded-lg bg-black/20",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
                                    className:
                                      "font-display text-xs tracking-[0.15em] text-foreground uppercase mb-2",
                                    children: faq.q,
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                    className:
                                      "font-body text-xs text-muted-foreground leading-relaxed",
                                    children: faq.a,
                                  }),
                                ],
                              },
                              idx,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Index() {
  const device = useDevicePerformance();
  const [ready, setReady] = (0, import_react.useState)(false);
  const onReady = (0, import_react.useCallback)(() => setReady(true), []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { ready: ready && device.ready }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScrollProvider, {
        reducedMotion: device.reducedMotion,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductSceneLazy, {
        device,
        onReady,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "stage-atmosphere",
        "aria-hidden": "true",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRail, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
        className: "relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { ready }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductIntro, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CenterFocus, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetails, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductReveal, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductAngles, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Technology, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenMoment, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallToAction, {}),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
    ],
  });
}
//#endregion
export { Index as component };
