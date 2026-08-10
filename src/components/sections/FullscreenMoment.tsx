import { Section, Display } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

export function FullscreenMoment() {
  return (
    <Section
      id="moment"
      scene="moment"
      labelledBy="moment-title"
      className="min-h-[110vh] items-end pb-24"
    >
      <div className="flex flex-col items-start gap-6 max-w-3xl">
        <Reveal>
          <Display
            id="moment-title"
            className="text-[clamp(2.4rem,6vw,5.5rem)] leading-none font-semibold"
          >
            Starting from Pune.
            <br />
            Building for India.
          </Display>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-[48ch] font-body text-[clamp(0.85rem,1.5vw,1.1rem)] leading-relaxed tracking-wider text-muted-foreground">
            Our journey begins in Pune, with a long-term ambition to create a trusted premium
            packaged drinking water brand with a presence across India.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
