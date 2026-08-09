import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const STATS = [
  { k: "500", l: "ml per bottle" },
  { k: "7", l: "stage purification" },
  { k: "120–180", l: "TDS balance" },
  { k: "12", l: "month shelf life" },
];

/** Optional supporting scene — grounded specs before the close. */
export function Benefits() {
  return (
    <Section id="benefits" scene="moment" labelledBy="benefits-title" className="min-h-[70vh]">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>The water</Eyebrow>
            <Display id="benefits-title" className="mt-7 text-[clamp(1.8rem,3.4vw,3rem)]">
              Our water,
              <br />
              measured.
            </Display>
            <Body className="mt-7 text-[0.85rem]">
              Drawn from a protected aquifer, then balanced to a fixed mineral signature so every
              bottle tastes identical to the last.
            </Body>
          </Reveal>
        </div>

        <dl className="grid grid-cols-2 gap-x-10 gap-y-12 md:col-span-6 md:col-start-7">
          {STATS.map((s) => (
            <Reveal key={s.l}>
              <div className="border-t border-hairline pt-5">
                <dt className="font-body text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                  {s.l}
                </dt>
                <dd className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.02em] text-foreground">
                  {s.k}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
