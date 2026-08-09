import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const CALLOUTS = [
  {
    label: "Cap",
    title: "Tamper-evident seal",
    copy: "A 28mm ribbed closure with a break-ring you can hear.",
    className: "md:col-start-1 md:row-start-1",
    align: "left" as const,
  },
  {
    label: "Label",
    title: "Soft-touch stock",
    copy: "Matte laminate with foil-stamped gold rules, printed in register.",
    className: "md:col-start-1 md:row-start-2",
    align: "left" as const,
  },
  {
    label: "Body",
    title: "Optical-grade PET",
    copy: "Ribless mid-section, so the water reads perfectly clear.",
    className: "md:col-start-3 md:row-start-1",
    align: "right" as const,
  },
  {
    label: "Base",
    title: "Five-point petaloid",
    copy: "Distributes pressure and keeps the bottle dead-level.",
    className: "md:col-start-3 md:row-start-2",
    align: "right" as const,
  },
];

/** Scene 4 — floating callouts read as part of the 3D scene, not as UI cards. */
export function ProductDetails() {
  return (
    <Section id="details" scene="details" labelledBy="details-title">
      <div className="grid gap-14 md:grid-cols-[1fr_auto_1fr] md:grid-rows-[auto_auto] md:gap-x-24 md:gap-y-24">
        <div className="md:col-start-1 md:row-start-1 md:-mt-24">
          <Reveal>
            <Eyebrow>Detail exploration</Eyebrow>
            <Display id="details-title" className="mt-7 text-[clamp(2rem,4.4vw,4rem)]">
              Read it
              <br />
              up close.
            </Display>
          </Reveal>
        </div>

        {CALLOUTS.map((c) => (
          <Reveal key={c.label} className={c.className}>
            <div
              className={
                c.align === "right"
                  ? "border-r border-hairline pr-5 text-right md:ml-auto md:max-w-[26ch]"
                  : "border-l border-hairline pl-5 md:max-w-[26ch]"
              }
            >
              <p className="font-body text-[0.6rem] tracking-[0.34em] text-accent-gold uppercase">
                {c.label}
              </p>
              <p className="mt-3 font-display text-base tracking-[0.16em] text-foreground uppercase">
                {c.title}
              </p>
              <Body className="mt-3 text-[0.85rem]">{c.copy}</Body>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
