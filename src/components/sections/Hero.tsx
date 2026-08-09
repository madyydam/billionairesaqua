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
    if (!root.current) return;

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
      <div ref={root} className="grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6 lg:col-span-5">
          <div data-hero-item className="opacity-0">
            <Eyebrow>500ml · Packaged drinking water</Eyebrow>
          </div>

          <Display as="h1" id="hero-title" className="mt-7 opacity-0" >
            <span data-hero-item className="block opacity-0">
              Designed
            </span>
            <span data-hero-item className="block opacity-0">
              to be
            </span>
            <span data-hero-item className="block text-accent-gold opacity-0">
              Experienced.
            </span>
          </Display>

          <div data-hero-item className="mt-8 opacity-0">
            <Body>
              Meet the next generation of premium drinking water — sourced, mineral-balanced and
              bottled for those who notice the details.
            </Body>
          </div>

          <div data-hero-item className="mt-10 flex flex-wrap items-center gap-6 opacity-0">
            <MagneticButton onClick={() => scrollToSection("intro")}>
              Explore the product
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton variant="quiet" onClick={() => scrollToSection("cta")}>
              <span className="relative">
                Buy a case
                <span className="line absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500" />
              </span>
            </MagneticButton>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-start-9 lg:col-span-4">
          <div
            data-hero-item
            className="ml-auto hidden max-w-[26ch] border-l border-hairline pl-6 opacity-0 lg:block"
          >
            <p className="font-body text-[0.7rem] leading-loose tracking-[0.2em] text-muted-foreground uppercase">
              Drag the bottle to inspect it. Scroll to travel through the product story.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2">
        <span className="flex flex-col items-center gap-3 font-body text-[0.6rem] tracking-[0.32em] text-muted-foreground uppercase">
          Scroll
          <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
        </span>
      </div>
    </Section>
  );
}
