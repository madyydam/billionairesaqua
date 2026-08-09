import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    n: "01",
    title: "Premium materials",
    copy: "Optical-grade PET and a foil-stamped label stock that resists condensation marks.",
  },
  {
    n: "02",
    title: "Precision engineering",
    copy: "Wall thickness held to ±0.04mm, so the bottle keeps its shape under a full case load.",
  },
  {
    n: "03",
    title: "Intelligent design",
    copy: "A grip contour and neck geometry tuned by hand across forty-one prototypes.",
  },
  {
    n: "04",
    title: "Long-lasting performance",
    copy: "Sealed for a 12-month shelf life with no change to taste or clarity.",
  },
];

/** Scene 7 — technology told as a progressive reveal, not a card grid. */
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
          start: "top 70%",
          end: "bottom 40%",
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
    <Section id="technology" scene="technology" labelledBy="tech-title">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 md:col-start-7">
          <Reveal>
            <Eyebrow>Technology</Eyebrow>
            <Display id="tech-title" className="mt-7 text-[clamp(2rem,4.4vw,4rem)]">
              Built from the details up.
            </Display>
          </Reveal>

          <div ref={root} className="mt-14">
            {ITEMS.map((item, i) => (
              <div
                key={item.n}
                data-tech-row
                aria-current={active === i ? "true" : undefined}
                className={cn(
                  "border-t border-hairline py-7 transition-opacity duration-700",
                  active === i ? "opacity-100" : "opacity-45",
                )}
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className={cn(
                      "font-body text-[0.68rem] tracking-[0.24em] transition-colors duration-500",
                      active === i ? "text-accent-gold" : "text-muted-foreground",
                    )}
                  >
                    {item.n}
                  </span>
                  <h3 className="font-display text-lg tracking-[0.14em] text-foreground uppercase">
                    {item.title}
                  </h3>
                </div>
                <Body className="mt-3 pl-11 text-[0.85rem]">{item.copy}</Body>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
