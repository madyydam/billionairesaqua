import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/** Scene 6 — close inspection; the product stays locked facing forward. */
export function ProductAngles() {
  return (
    <Section id="angles" scene="angles" labelledBy="angles-title" className="items-end">
      <div className="flex flex-col items-center gap-6 text-center">
        <Reveal className="w-full">
          <Eyebrow>See every angle</Eyebrow>
        </Reveal>
        <Reveal className="w-full" delay={0.1}>
          <Display id="angles-title" className="text-[clamp(1.9rem,4vw,3.4rem)]">
            Held to one standard.
          </Display>
        </Reveal>
        <Reveal className="w-full" delay={0.18}>
          <Body className="mx-auto text-center text-[0.85rem]">
            Every seam, ring and print edge holds up under inspection.
          </Body>
        </Reveal>
      </div>
    </Section>
  );
}
