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

  useEffect(() => {
    if (!bar.current) return;
    gsap.to(bar.current, { scaleX: ready ? 1 : 0.72, duration: ready ? 0.5 : 2.4, ease: "power2.out" });
  }, [ready]);

  useEffect(() => {
    if (!ready || !root.current) return;
    const tl = gsap.timeline({ delay: 0.35, onComplete: () => setHidden(true) });
    tl.to(root.current, { opacity: 0, duration: 0.9, ease: "power2.inOut" });
    return () => {
      tl.kill();
    };
  }, [ready]);

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
      <p className="font-display text-[0.7rem] tracking-[0.5em] text-muted-foreground uppercase">
        The Billionaire&apos;s
      </p>
      <p className="mt-3 font-display text-3xl tracking-[0.28em] text-foreground uppercase">Aqua</p>
      <div className="mt-10 h-px w-40 overflow-hidden bg-hairline">
        <span
          ref={bar}
          className="block h-px w-full origin-left scale-x-0 bg-accent-gold"
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">Loading the product experience</span>
    </div>
  );
}
