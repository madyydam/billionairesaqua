import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const TIMELINE = [
  {
    year: "2026",
    phase: "Brand Foundation",
    desc: "Setting up manufacturing partnerships and premium quality standards.",
  },
  {
    year: "Launch",
    phase: "Pune Operations",
    desc: "Introducing the collection to premium retail and hospitality sectors in Pune.",
  },
  {
    year: "Phase 2",
    phase: "PCMC Expansion",
    desc: "Extending operations and distribution channels to PCMC corporate belts.",
  },
  {
    year: "Phase 3",
    phase: "Maharashtra Scale",
    desc: "Scaling supply chain and brand presence across key Maharashtra districts.",
  },
  {
    year: "Phase 4",
    phase: "National Presence",
    desc: "Expanding footprint to establish a trusted Indian luxury water brand nationally.",
  },
];

export function Benefits() {
  return (
    <Section
      id="benefits"
      scene="moment"
      labelledBy="benefits-title"
      className="items-center py-24"
    >
      <div className="w-full space-y-24">
        {/* Step 11: Our Story & Roadmap */}
        <div className="grid gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <Display
                id="benefits-title"
                className="mt-7 text-[clamp(2rem,4.5vw,3.6rem)] leading-none lowercase first-letter:uppercase"
              >
                Built with a bigger vision.
              </Display>
              <Body className="mt-7">
                THE BILLIONAIRE&apos;S AQUA was created with an ambition to build more than a
                bottled water business.
              </Body>
              <Body className="mt-4">
                The vision is to create a premium Indian water brand that combines quality, strong
                branding, disciplined execution and a distinctive customer experience. Starting from
                Pune, the ambition is to build a brand capable of growing across Maharashtra and
                eventually across India.
              </Body>
            </Reveal>
          </div>

          {/* Timeline / Roadmap */}
          <div className="md:col-span-7 space-y-6">
            <Reveal className="border-b border-hairline pb-4">
              <h4 className="font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase">
                Ambition Roadmap
              </h4>
            </Reveal>
            <div className="relative pl-6 border-l border-hairline space-y-8">
              {TIMELINE.map((item, idx) => (
                <Reveal key={item.phase} className="relative" delay={idx * 0.05}>
                  {/* Timeline Dot */}
                  <span className="absolute -left-[1.88rem] top-1.5 size-2 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase font-semibold min-w-[70px]">
                      {item.year}
                    </span>
                    <div>
                      <h5 className="font-display text-sm tracking-[0.12em] text-foreground uppercase">
                        {item.phase}
                      </h5>
                      <p className="font-body text-[0.72rem] text-muted-foreground leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Step 12: Founder Section */}
        <div className="grid gap-12 lg:grid-cols-12 items-center border-t border-hairline pt-20">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <Eyebrow>Leadership</Eyebrow>
              <Display className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-none lowercase first-letter:uppercase">
                From an idea to a standard.
              </Display>
            </Reveal>

            <Reveal className="space-y-4" delay={0.1}>
              <blockquote className="border-l-2 border-accent-gold pl-6 italic">
                <p className="font-body text-base text-foreground leading-relaxed tracking-wide">
                  &ldquo;I believe every great brand begins with a simple decision — to build
                  something that people can trust and remember.&rdquo;
                </p>
              </blockquote>
              <blockquote className="border-l-2 border-accent-gold pl-6 italic">
                <p className="font-body text-base text-foreground leading-relaxed tracking-wide">
                  &ldquo;Billionaire&apos;s Aqua is our commitment to building a premium Indian
                  water brand with a long-term vision.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal className="pt-4" delay={0.15}>
              <p className="font-display text-base tracking-[0.15em] text-foreground uppercase">
                Suraj Ishwar
              </p>
              <p className="font-body text-[0.68rem] tracking-[0.24em] text-accent-gold uppercase mt-1">
                Founder &amp; Chairman / Managing Director
              </p>
            </Reveal>
          </div>

          {/* Placeholder corporate portrait design card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <Reveal
              className="w-full max-w-md aspect-[4/5] bg-gradient-to-br from-emerald-950 to-neutral-950 border border-accent-gold/20 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-accent-gold/50 transition-all duration-700"
              delay={0.2}
            >
              {/* Graphic background elements */}
              <div className="absolute -top-1/4 -right-1/4 size-80 rounded-full bg-accent-gold/5 blur-[80px]" />
              <div className="absolute -bottom-1/4 -left-1/4 size-80 rounded-full bg-emerald-800/10 blur-[80px]" />

              <div className="relative z-10">
                <span className="font-display text-[0.62rem] tracking-[0.35em] text-accent-gold uppercase">
                  THE BILLIONAIRE&apos;S AQUA
                </span>
                <h4 className="font-display text-2xl tracking-[0.2em] text-foreground uppercase mt-4">
                  COMMITMENT
                </h4>
              </div>

              {/* Founder Sign-off Graphic */}
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-px bg-accent-gold/40" />
                <p className="font-display text-sm tracking-[0.25em] text-foreground uppercase">
                  SURAJ ISHWAR
                </p>
                <p className="font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Pune, India
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
