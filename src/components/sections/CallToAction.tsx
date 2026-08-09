import { ArrowRight } from "lucide-react";
import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";

/** Scene 9 — the close. Price badge mirrors the reference mockups. */
export function CallToAction() {
  return (
    <Section id="cta" scene="cta" labelledBy="cta-title" className="items-center">
      <div className="grid gap-16 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>Available now</Eyebrow>
            <Display id="cta-title" className="mt-7">
              Own the
              <br />
              detail.
            </Display>
            <Body className="mt-8">
              Shipped in cases of twelve, in packaging designed to be opened once and remembered.
            </Body>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap items-center gap-6" delay={0.12}>
            <MagneticButton>
              Buy a case
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton variant="quiet">Find a stockist</MagneticButton>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal className="md:text-right" delay={0.2}>
            <div className="inline-flex flex-col items-start gap-2 border border-hairline px-7 py-6 md:items-end">
              <span className="font-body text-[0.58rem] tracking-[0.34em] text-muted-foreground uppercase">
                Case of twelve
              </span>
              <span className="font-display text-[clamp(2.2rem,4vw,3.4rem)] tracking-[-0.02em] text-foreground">
                ₹1699
              </span>
              <span className="font-body text-[0.58rem] tracking-[0.28em] text-accent-gold uppercase">
                Free delivery
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
