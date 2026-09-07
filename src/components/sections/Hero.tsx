import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Section, Eyebrow, Display, Body } from "@/components/site/Primitives";
import { MagneticButton } from "@/components/site/MagneticButton";
import { scrollToSection } from "@/components/SmoothScrollProvider";

/** Scene 1 — the product is the visual hero, typography stays minimal. */
export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready || !root.current) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = root.current.querySelectorAll("[data-hero-item]");
    if (reduce) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }
    const tl = gsap.timeline({ delay: 0.55 });
    tl.fromTo(
      items,
      { opacity: 0, y: 34, filter: "blur(8px)" },
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

  return (
    <Section id="hero" scene="hero" labelledBy="hero-title" className="items-center">
      {/* ── Content ── */}
      <div ref={root} className="relative z-10 grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6 lg:col-span-5">
          <div data-hero-item className="opacity-0">
            <Eyebrow className="border-accent-gold/40 text-accent-gold font-bold">THE BILLIONAIRE&apos;S AQUA</Eyebrow>
          </div>

          <Display
            as="h1"
            id="hero-title"
            className="mt-7 font-editorial normal-case text-[clamp(2.8rem,7vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            <span data-hero-item className="block opacity-0">
              More Than Water.
            </span>
            <span
              data-hero-item
              className="block italic opacity-0 text-accent-gold drop-shadow-[0_2px_18px_rgba(212,175,55,0.6)]"
            >
              A Standard.
            </span>
          </Display>

          <div data-hero-item className="mt-8 opacity-0">
            <Body className="text-white/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
              Premium packaged drinking water created for those who believe that quality is not an
              option. It is a standard.
            </Body>
          </div>

          <div data-hero-item className="mt-10 flex flex-wrap items-center gap-6 opacity-0">
            <MagneticButton
              className="bg-white text-[#2D3738] hover:bg-[#00B3C6] hover:text-white"
              onClick={() => scrollToSection("details")}
            >
              Explore our products
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              variant="quiet"
              className="text-white/75 hover:text-white [&>span.line]:bg-white"
              onClick={() => scrollToSection("cta")}
            >
              <span className="relative">
                Partner with us
                <span className="line absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500" />
              </span>
            </MagneticButton>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-start-9 lg:col-span-4">
          <div
            data-hero-item
            className="ml-auto hidden max-w-[26ch] border-l border-white/25 pl-6 opacity-0 lg:block"
          >
            <p className="font-body text-[0.7rem] leading-loose tracking-[0.2em] text-white/70 uppercase">
              Scroll to travel through the product story.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <p className="font-body text-[0.55rem] tracking-[0.4em] text-[#00B3C6] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          PUNE • MAHARASHTRA • INDIA
        </p>
        <span className="flex flex-col items-center gap-1 font-body text-[0.5rem] tracking-[0.32em] text-white/60 uppercase">
          Scroll
          <ArrowDown className="size-3 animate-bounce" aria-hidden="true" />
        </span>
      </div>
    </Section>
  );
}
