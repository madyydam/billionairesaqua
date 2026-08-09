import { Section, Eyebrow, Display, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/** Scene 2 — product travels to the opposite side while the story changes. */
export function ProductIntro() {
  return (
    <Section id="intro" scene="intro" labelledBy="intro-title">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 md:col-start-7">
          <Reveal>
            <Eyebrow>The product</Eyebrow>
            <Display id="intro-title" className="mt-7">
              Every detail
              <br />
              has a purpose.
            </Display>
            <Body className="mt-8">
              Nothing on this bottle is decoration. The proportions, the weight of the glass-clear
              PET, the depth of the green — each choice exists to make water feel considered.
            </Body>
          </Reveal>

          <Reveal className="mt-14 space-y-10" stagger={0.14}>
            <div className="border-t border-hairline pt-5">
              <p className="font-display text-sm tracking-[0.24em] text-foreground uppercase">
                Balanced minerality
              </p>
              <Body className="mt-3">
                A stable 120–180 TDS profile, tuned for a clean, rounded finish.
              </Body>
            </div>
            <div className="border-t border-hairline pt-5">
              <p className="font-display text-sm tracking-[0.24em] text-foreground uppercase">
                Sealed at source
              </p>
              <Body className="mt-3">
                Seven-stage purification, then a tamper-evident cap closed in the same room.
              </Body>
            </div>
            <div className="border-t border-hairline pt-5">
              <p className="font-display text-sm tracking-[0.24em] text-foreground uppercase">
                Considered form
              </p>
              <Body className="mt-3">
                A grip contour that disappears in the hand and stacks without a crease.
              </Body>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
