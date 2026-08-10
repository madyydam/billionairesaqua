import { Section, Display, Body, Eyebrow } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/** Scene 3 — product centres and dominates; composition stays almost empty. */
export function CenterFocus() {
  return (
    <Section
      id="focus"
      scene="focus"
      labelledBy="focus-title"
      className="items-end md:items-center"
    >
      <div className="flex flex-col items-center text-center">
        <Reveal className="w-full">
          <Eyebrow>The Brand Philosophy</Eyebrow>
        </Reveal>
        <Reveal className="mt-8 w-full" delay={0.1}>
          <Display
            id="focus-title"
            className="mx-auto max-w-[20ch] text-[clamp(2.2rem,5vw,4.4rem)] lowercase first-letter:uppercase"
          >
            Billionaires aren&apos;t born — they&apos;re built.
          </Display>
        </Reveal>
        <Reveal className="mt-8 w-full space-y-6" delay={0.2}>
          <p className="font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-light leading-relaxed tracking-wider text-muted-foreground max-w-2xl mx-auto">
            Every sip is a reminder to dream fearlessly, act consistently, and never stop believing
            in your potential.
          </p>
          <p className="font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-light leading-relaxed tracking-wider text-muted-foreground max-w-2xl mx-auto">
            Your vision, your discipline, and your actions will define your future.
          </p>
          <p className="font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-normal tracking-wide text-foreground">
            Start today.
          </p>
          <p className="pt-4 font-display text-[0.68rem] tracking-[0.32em] text-accent-gold uppercase">
            — THE BILLIONAIRE&apos;S AQUA
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
