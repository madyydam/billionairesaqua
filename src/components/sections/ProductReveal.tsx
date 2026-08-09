import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/**
 * Scene 5 — cinematic reveal. The packaging shells (see 3d/Packaging.tsx) close
 * in from the previous scene, then split and fade as this section scrolls past.
 */
export function ProductReveal() {
  return (
    <Section id="reveal" scene="reveal" labelledBy="reveal-title" className="items-end">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-[34ch]">
          <Eyebrow>The unwrapping</Eyebrow>
          <Display id="reveal-title" className="mt-7 text-[clamp(2rem,4.6vw,4.2rem)]">
            Opened,
            <br />
            not unpacked.
          </Display>
        </Reveal>

        <Reveal className="max-w-[36ch] md:text-right" delay={0.15}>
          <Body className="md:ml-auto md:text-right">
            The outer sleeve separates in one motion and the bottle stands on its own — the first
            thing you touch is the product, never the packaging.
          </Body>
          <p className="mt-6 font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
            Keep scrolling to open it
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
