import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Premium loading curtain. Fades once the WebGL scene reports ready, so the
 * product enters naturally instead of popping in.
 */
export function Loader({ ready }: { ready: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const [hidden, setHidden] = useState(false);

  const [expired, setExpired] = useState(false);
  const done = ready || expired;

  // Safety valve: never trap the page behind the curtain if WebGL never reports.
  useEffect(() => {
    const t = window.setTimeout(() => setExpired(true), 4000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!bar.current) return;
    gsap.to(bar.current, {
      scaleX: done ? 1 : 0.72,
      duration: done ? 0.5 : 2.4,
      ease: "power2.out",
    });
  }, [done]);

  useEffect(() => {
    if (!done || !root.current) return;
    const tl = gsap.timeline({ delay: 0.35, onComplete: () => setHidden(true) });
    tl.to(root.current, { opacity: 0, duration: 0.9, ease: "power2.inOut" });
    return () => {
      tl.kill();
    };
  }, [done]);

  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", !hidden);
    return () => document.documentElement.classList.remove("is-loading");
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      ref={root}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-6 text-center">
        <span className="font-editorial font-bold text-base sm:text-2xl tracking-[0.22em] text-accent-gold uppercase">
          THE
        </span>
        <span className="font-editorial font-bold text-xl sm:text-3xl tracking-[0.14em] text-white uppercase drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]">
          BILLIONAIRE&apos;S
        </span>
        <span className="font-editorial font-bold text-base sm:text-2xl tracking-[0.22em] text-accent-gold uppercase">
          AQUA
        </span>
      </div>

      <div className="mt-10 h-px w-48 sm:w-64 overflow-hidden bg-hairline">
        <span
          ref={bar}
          className="block h-px w-full origin-left scale-x-0 bg-accent-gold shadow-[0_0_12px_rgba(212,175,55,0.85)]"
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">Loading the product experience</span>
    </div>
  );
}
