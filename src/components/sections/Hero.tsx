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
            <Eyebrow className="text-[#2D3738] border-[#2D3738]/25">
              THE BILLIONAIRE&apos;S AQUA
            </Eyebrow>
          </div>

          <Display as="h1" id="hero-title" className="mt-7 text-[#2D3738]">
            <span data-hero-item className="block opacity-0">
              More Than Water.
            </span>
            <span data-hero-item className="block text-brand-green opacity-0">
              A Standard.
            </span>
          </Display>

          <div data-hero-item className="mt-8 opacity-0">
            <Body className="text-[#2D3738]/85">
              Premium packaged drinking water created for those who believe that quality is not an
              option — it is a standard.
            </Body>
          </div>

          <div data-hero-item className="mt-10 flex flex-wrap items-center gap-6 opacity-0">
            <MagneticButton
              className="bg-[#2D3738] text-white hover:bg-brand-green hover:text-white"
              onClick={() => scrollToSection("details")}
            >
              Explore our products
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              variant="quiet"
              className="text-[#2D3738]/70 hover:text-[#2D3738] [&>span.line]:bg-[#2D3738]"
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
            className="ml-auto hidden max-w-[26ch] border-l border-[#2D3738]/20 pl-6 opacity-0 lg:block"
          >
            <p className="font-body text-[0.7rem] leading-loose tracking-[0.2em] text-[#2D3738]/80 uppercase">
              Scroll to travel through the product story.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <p className="font-body text-[0.55rem] tracking-[0.4em] text-accent-gold-light uppercase">
          PUNE • MAHARASHTRA • INDIA
        </p>
        <span className="flex flex-col items-center gap-1 font-body text-[0.5rem] tracking-[0.32em] text-muted-foreground uppercase">
          Scroll
          <ArrowDown className="size-3 animate-bounce" aria-hidden="true" />
        </span>
      </div>
    </Section>
  );
}
