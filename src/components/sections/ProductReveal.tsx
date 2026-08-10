import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/**
 * Scene 5 — cinematic reveal. The packaging shells (see 3d/Packaging.tsx) close
 * in from the previous scene, then split and fade as this section scrolls past.
 */
export function ProductReveal() {
  const steps = [
    { label: "Source", desc: "Monitored natural source" },
    { label: "Treatment", desc: "Multi-stage purification" },
    { label: "Testing", desc: "Rigorous lab verification" },
    { label: "Packaging", desc: "Hygienic hands-free bottling" },
    { label: "Quality Control", desc: "Batch-level audit" },
    { label: "Distribution", desc: "Protected logistics chain" },
  ];

  return (
    <Section id="reveal" scene="reveal" labelledBy="reveal-title" className="items-center">
      <div className="w-full space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-[38ch]">
            <Eyebrow>Our Water</Eyebrow>
            <Display
              id="reveal-title"
              className="mt-7 text-[clamp(2.2rem,4.4vw,3.8rem)] leading-none lowercase first-letter:uppercase"
            >
              Water, held to a higher standard.
            </Display>
          </Reveal>

          <Reveal className="max-w-[42ch]" delay={0.15}>
            <Body>
              At Billionaire&apos;s Aqua, we believe quality begins long before the bottle reaches
              your hands. Our approach focuses on controlled processing, quality checks, hygienic
              handling and consistent packaging standards.
            </Body>
            <p className="mt-4 font-body text-sm font-semibold tracking-wider text-accent-gold uppercase">
              Never compromise the standard.
            </p>
          </Reveal>
        </div>

        {/* Quality Process Visual Flow */}
        <Reveal className="w-full pt-8" delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
            {steps.map((step, idx) => (
              <div
                key={step.label}
                className="border border-hairline p-5 rounded-lg bg-black/30 backdrop-blur-sm relative group hover:border-accent-gold transition-colors duration-500"
              >
                <div className="absolute top-4 right-4 font-display text-[0.62rem] text-accent-gold/40 group-hover:text-accent-gold/80 transition-colors">
                  0{idx + 1}
                </div>
                <h4 className="font-display text-[0.72rem] tracking-[0.2em] text-foreground uppercase mb-2">
                  {step.label}
                </h4>
                <p className="font-body text-[0.65rem] text-muted-foreground leading-relaxed lowercase first-letter:uppercase">
                  {step.desc}
                </p>

                {/* Connecting arrow/line indicator for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-hairline z-10 group-hover:bg-accent-gold/50 transition-colors" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
