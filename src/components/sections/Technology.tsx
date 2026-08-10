import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const QUALITY_ITEMS = [
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

const PILLARS = [
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

export function Technology() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const rows = Array.from(el.querySelectorAll<HTMLElement>("[data-tech-row]"));
    const ctx = gsap.context(() => {
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

  return (
    <Section id="technology" scene="technology" labelledBy="tech-title" className="items-center">
      <div className="w-full space-y-16">
        {/* Top: Title & Pillars (Step 10) */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Our Standard</Eyebrow>
              <Display
                id="tech-title"
                className="mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none lowercase first-letter:uppercase"
              >
                Quality is our standard.
              </Display>
              <Body className="mt-6 text-muted-foreground">
                We believe that every bottle should represent the finest packaged drinking water
                experience. Our baseline is simple, and our parameters are strict.
              </Body>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-6" delay={0.1}>
              <div className="sm:col-span-2">
                <h4 className="font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase mb-2">
                  Our Standard is Simple.
                </h4>
                <div className="h-px bg-hairline w-full mb-2" />
              </div>
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="border border-hairline p-5 rounded-lg bg-black/20"
                >
                  <h5 className="font-display text-sm tracking-[0.15em] text-foreground uppercase mb-2">
                    {pillar.title}
                  </h5>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Bottom: Quality & Safety Rows (Step 9) */}
        <div className="grid gap-12 lg:grid-cols-12 pt-6">
          <div className="lg:col-span-5">
            <Reveal>
              <h4 className="font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase mb-4">
                Quality &amp; Safety Checks
              </h4>
              <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-sm">
                From water collection to distribution logistics, each parameter is checked at
                regular intervals. Scroll to see the core components of our safety framework.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div ref={root} className="space-y-4">
              {QUALITY_ITEMS.map((item, i) => (
                <div
                  key={item.n}
                  data-tech-row
                  aria-current={active === i ? "true" : undefined}
                  className={cn(
                    "border-t border-hairline py-6 transition-all duration-700",
                    active === i ? "opacity-100 border-accent-gold/40" : "opacity-35",
                  )}
                >
                  <div className="flex items-baseline gap-5">
                    <span
                      className={cn(
                        "font-body text-[0.65rem] tracking-[0.24em] transition-colors duration-500",
                        active === i ? "text-accent-gold" : "text-muted-foreground",
                      )}
                    >
                      {item.n}
                    </span>
                    <h3 className="font-display text-base tracking-[0.14em] text-foreground uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <Body className="mt-3 pl-10 text-[0.82rem] leading-relaxed text-muted-foreground">
                    {item.copy}
                  </Body>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
