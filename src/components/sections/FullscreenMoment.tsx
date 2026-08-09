import { Section, Display } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/** Scene 8 — the luxury-advertisement moment. Almost no UI. */
export function FullscreenMoment() {
  return (
    <Section
      id="moment"
      scene="moment"
      labelledBy="moment-title"
      className="min-h-[110vh] items-end"
    >
      <div className="flex flex-col items-start gap-5">
        <Reveal>
          <Display id="moment-title" className="max-w-[14ch]">
            Not just
            <br />
            a product.
          </Display>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-[38ch] font-body text-[0.8rem] leading-loose tracking-[0.16em] text-muted-foreground uppercase">
            An experience designed down to the smallest detail.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
