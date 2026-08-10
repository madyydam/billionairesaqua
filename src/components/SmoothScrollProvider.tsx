import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE, LENIS } from "@/config/productAnimation";
import { setScrollProgress } from "@/hooks/useScrollProgress";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/** Programmatic navigation that respects the smooth-scroll instance. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: 0 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Smooth scroll + master timeline driver.
 *
 * Scene anchors are read from the DOM ([data-scene]) and mapped onto the
 * normalised timeline in src/config/productAnimation.ts, so the 3D scenes stay
 * locked to their sections at any viewport height.
 */
export function SmoothScrollProvider({ reducedMotion }: { reducedMotion: boolean }) {
  useEffect(() => {
    let anchors: { at: number; top: number }[] = [];

    const measure = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
      anchors = nodes
        .map((node) => {
          const id = node.dataset["scene"]!;
          const scene = TIMELINE.find((s) => s.id === id);
          if (!scene) return null;
          return { at: scene.at, top: node.getBoundingClientRect().top + window.scrollY };
        })
        .filter((v): v is { at: number; top: number } => v !== null)
        .sort((a, b) => a.top - b.top);
    };

    const compute = (y: number, velocity: number) => {
      if (anchors.length < 2) {
        const limit = Math.max(1, document.body.scrollHeight - window.innerHeight);
        setScrollProgress(y / limit, velocity);
        return;
      }
      const first = anchors[0]!;
      const last = anchors[anchors.length - 1]!;
      if (y <= first.top) {
        setScrollProgress(first.at, velocity);
        return;
      }
      if (y >= last.top) {
        setScrollProgress(last.at, velocity);
        return;
      }
      let i = 0;
      while (i < anchors.length - 2 && y > anchors[i + 1]!.top) i++;
      const a = anchors[i]!;
      const b = anchors[i + 1]!;
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

    lenis.on("scroll", (e: { scroll: number; velocity: number }) => {
      compute(e.scroll, e.velocity);
      ScrollTrigger.update();
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
      window.removeEventListener("resize", onResize);
      ScrollTrigger.removeEventListener("refresh", measure);
    };
  }, [reducedMotion]);

  return null;
}
