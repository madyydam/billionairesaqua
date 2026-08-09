import { Section, Display, Body, Eyebrow } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/** Scene 3 — product centres and dominates; composition stays almost empty. */
export function CenterFocus() {
  return (
    <Section id="focus" scene="focus" labelledBy="focus-title" className="items-end md:items-center">
      <div className="flex flex-col items-center text-center">
        <Reveal className="w-full">
          <Eyebrow>Center focus</Eyebrow>
        </Reveal>
        <Reveal className="mt-8 w-full" delay={0.1}>
          <Display id="focus-title" className="mx-auto max-w-[16ch]">
            Engineered for the way you live.
          </Display>
        </Reveal>
        <Reveal className="mt-8 w-full" delay={0.2}>
          <Body className="mx-auto text-center">
            500ml. One hand. Zero compromise. Built to travel from the boardroom to the back of a
            car without ever looking out of place.
          </Body>
        </Reveal>
      </div>
    </Section>
  );
}
