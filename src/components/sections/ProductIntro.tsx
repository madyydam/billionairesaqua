import { Section, Eyebrow, Display, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/** Scene 2 — product travels to the opposite side while the story changes. */
export function ProductIntro() {
  return (
    <Section id="intro" scene="intro" labelledBy="intro-title">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 md:col-start-7">
          <Reveal>
            <Eyebrow>Brand Introduction</Eyebrow>
            <Display id="intro-title" className="mt-7">
              More than
              <br />
              just water.
            </Display>
            <Body className="mt-8">
              THE BILLIONAIRE&apos;S AQUA is built on a simple belief — the things we consume every
              day should reflect the standards we choose to live by.
            </Body>
            <Body className="mt-4">
              We are building a premium packaged drinking water brand with a focus on quality,
              consistency, thoughtful presentation and a bigger vision for India.
            </Body>
            <button
              onClick={() => scrollToSection("benefits")}
              className="mt-8 flex items-center gap-2 font-body text-[0.72rem] tracking-[0.2em] text-accent-gold uppercase hover:text-foreground transition-colors focus-visible:outline-none"
            >
              Discover Our Story &rarr;
            </button>
          </Reveal>

          <Reveal className="mt-14 space-y-10" stagger={0.14}>
            <div className="border-t border-hairline pt-5">
              <p className="font-display text-sm tracking-[0.24em] text-foreground uppercase">
                Uncompromising Quality
              </p>
              <Body className="mt-3">
                Rigorous multi-stage purification and testing standards to guarantee pure taste in
                every bottle.
              </Body>
            </div>
            <div className="border-t border-hairline pt-5">
              <p className="font-display text-sm tracking-[0.24em] text-foreground uppercase">
                Thoughtful Presentation
              </p>
              <Body className="mt-3">
                A premium container designed with minimal modern aesthetics that stands out on any
                occasion.
              </Body>
            </div>
            <div className="border-t border-hairline pt-5">
              <p className="font-display text-sm tracking-[0.24em] text-foreground uppercase">
                Pune to India Vision
              </p>
              <Body className="mt-3">
                Starting regional operations in Pune with a roadmap for state-wide and national
                growth.
              </Body>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
