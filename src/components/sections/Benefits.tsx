import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const TIMELINE = [
  {
    year: "2026",
    phase: "Brand Foundation",
    desc: "Setting up manufacturing partnerships and premium quality standards in Pune.",
  },
  {
    year: "Launch",
    phase: "Pune Operations",
    desc: "Introducing the collection to premium retail, corporate and hospitality sectors in Pune.",
  },
  {
    year: "Phase 2",
    phase: "PCMC Expansion",
    desc: "Extending operations and distribution channels across PCMC corporate belts.",
  },
  {
    year: "Phase 3",
    phase: "Maharashtra Scale",
    desc: "Scaling supply chain and brand presence across key Maharashtra districts.",
  },
  {
    year: "Phase 4",
    phase: "National Footprint",
    desc: "Expanding footprint to establish a trusted Indian luxury water brand nationally.",
  },
  {
    year: "2030",
    phase: "₹5,000 Cr Milestone",
    desc: "Achieving our target milestone through unified execution, strong team and partner network.",
  },
];

const MANIFESTO_PILLARS = [
  {
    title: "A REMINDER",
    desc: "A reminder that your dreams are worth pursuing, no matter how big.",
    tag: "PURPOSE",
  },
  {
    title: "A SPARK",
    desc: "A spark that makes you think bigger and push beyond your limits.",
    tag: "AMBITION",
  },
  {
    title: "A BELIEF",
    desc: "“If someone else can build something great, so can I.”",
    tag: "MINDSET",
  },
];

export function Benefits() {
  return (
    <Section
      id="benefits"
      scene="moment"
      labelledBy="benefits-title"
      className="items-center py-20"
    >
      <div className="w-full space-y-24">
        {/* ========================================================================= */}
        {/* PART 1: WHY THE BILLIONAIRE'S AQUA? (Brand Manifesto)                     */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <Reveal className="text-center max-w-4xl mx-auto space-y-4">
            <Eyebrow>Brand Philosophy</Eyebrow>
            <Display
              id="benefits-title"
              className="text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.08] text-foreground"
            >
              Why The Billionaire&apos;s Aqua?
            </Display>
            <p className="font-display text-lg md:text-xl tracking-[0.08em] text-accent-gold uppercase font-medium">
              Because it&apos;s more than water. It&apos;s a reminder of what you are capable of.
            </p>
          </Reveal>

          {/* Core Philosophy Intro Card */}
          <Reveal className="relative bg-gradient-to-b from-black/60 via-black/40 to-black/70 border border-hairline p-8 md:p-12 rounded-2xl backdrop-blur-md overflow-hidden max-w-5xl mx-auto shadow-2xl">
            <div className="absolute top-0 right-0 size-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 space-y-6 text-center max-w-3xl mx-auto">
              <p className="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                THE BILLIONAIRE&apos;S AQUA is not created merely to quench your thirst.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-hairline/60">
                <div className="p-3 bg-black/30 rounded-lg border border-accent-gold/20">
                  <span className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase block mb-1">FOR THE</span>
                  <span className="font-display text-sm tracking-[0.1em] text-foreground uppercase">Dreamers</span>
                </div>
                <div className="p-3 bg-black/30 rounded-lg border border-accent-gold/20">
                  <span className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase block mb-1">FOR THE</span>
                  <span className="font-display text-sm tracking-[0.1em] text-foreground uppercase">Ambitious</span>
                </div>
                <div className="p-3 bg-black/30 rounded-lg border border-accent-gold/20">
                  <span className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase block mb-1">FOR THOSE WHO</span>
                  <span className="font-display text-sm tracking-[0.1em] text-foreground uppercase">Refuse to Settle</span>
                </div>
                <div className="p-3 bg-black/30 rounded-lg border border-accent-gold/20">
                  <span className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase block mb-1">FOR THOSE</span>
                  <span className="font-display text-sm tracking-[0.1em] text-foreground uppercase">Building Bigger</span>
                </div>
              </div>

              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed italic">
                When you hold a bottle of THE BILLIONAIRE&apos;S AQUA, we want you to feel something beyond the product.
              </p>
            </div>
          </Reveal>

          {/* Three Pillars: A Reminder, A Spark, A Belief */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {MANIFESTO_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.1}>
                <div className="h-full border border-hairline bg-black/30 hover:border-accent-gold/40 p-6 rounded-xl transition-all duration-500 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase border border-accent-gold/30 px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                    <h4 className="font-display text-lg tracking-[0.15em] text-foreground uppercase mt-4">
                      {pillar.title}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed mt-2">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mindset & Association Deep Dive */}
          <Reveal className="max-w-5xl mx-auto border border-hairline/80 bg-black/40 p-8 md:p-10 rounded-2xl space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h4 className="font-display text-sm tracking-[0.2em] text-accent-gold uppercase border-b border-hairline pb-2">
                  Every Person Carries a Dream
                </h4>
                <ul className="space-y-3 font-body text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span>Someone wants to build a business.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span>Someone wants to become financially independent.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span>Someone wants to create something of their own.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span>Someone simply wants to become a better version of themselves.</span>
                  </li>
                </ul>
                <p className="font-display text-xs tracking-[0.15em] text-foreground uppercase pt-2">
                  THE BILLIONAIRE&apos;S AQUA is created for that mindset.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-sm tracking-[0.2em] text-accent-gold uppercase border-b border-hairline pb-2">
                  Water Means Something More
                </h4>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Water is available everywhere. But what you choose to associate with that water can mean something more.
                </p>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Every sip becomes a small reminder to keep moving, keep building, keep believing and keep working toward the life you envision.
                </p>
                <div className="pt-2 space-y-2 border-t border-hairline/40 font-body text-xs text-muted-foreground/90">
                  <p><strong className="text-foreground">For the person who has almost given up:</strong> a reminder to start again.</p>
                  <p><strong className="text-foreground">For the person working toward a dream:</strong> another reason to keep going.</p>
                  <p><strong className="text-foreground">For the person who dares to dream bigger:</strong> a symbol of the standard they choose to live by.</p>
                </div>
              </div>
            </div>

            {/* Bottom Highlight Callout */}
            <div className="border border-accent-gold/30 bg-accent-gold/10 p-6 rounded-xl text-center space-y-2">
              <p className="font-display text-sm md:text-base tracking-[0.15em] text-accent-gold uppercase font-medium">
                We don&apos;t promise to make you a billionaire.
              </p>
              <p className="font-display text-xs md:text-sm tracking-[0.2em] text-foreground uppercase">
                We simply want to remind you that thinking bigger starts with you.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: OUR COMMITMENT (₹5,000 Crore Legacy by 2030)                      */}
        {/* ========================================================================= */}
        <Reveal className="relative bg-gradient-to-r from-emerald-950/60 via-black to-neutral-950 border border-accent-gold/40 p-8 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.12)] max-w-5xl mx-auto overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -bottom-20 -right-20 size-80 bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-8 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/50 bg-accent-gold/15 backdrop-blur-md">
              <span className="size-2 rounded-full bg-accent-gold animate-pulse" />
              <span className="font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase font-semibold">
                OUR COMMITMENT
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-4xl tracking-[0.12em] text-foreground uppercase leading-tight">
              To build THE BILLIONAIRE&apos;S AQUA into a{" "}
              <span className="text-accent-gold underline decoration-accent-gold/40 underline-offset-8">
                ₹5,000 Crore business by 2030
              </span>
              , without compromising the standards that define our brand.
            </h3>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are committed to growing together, creating opportunities, building a strong team, and creating a successful Billionaire&apos;s Aqua family that grows with the brand.
            </p>

            <div className="pt-4 border-t border-hairline/60">
              <p className="font-display text-sm md:text-lg tracking-[0.25em] text-accent-gold uppercase font-semibold">
                &ldquo;From a vision today to a ₹5,000 Crore legacy tomorrow — we will build it together.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* PART 3: LEADERSHIP & SLOGAN (Suraj Ishwar)                                */}
        {/* ========================================================================= */}
        <div className="grid gap-12 lg:grid-cols-12 items-center border-t border-hairline pt-20 max-w-5xl mx-auto">
          {/* Left Column: Slogan & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <Eyebrow>Leadership &amp; Slogan</Eyebrow>
              <Display className="mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight">
                ONE VISION.
                <br />
                ONE STANDARD.
                <br />
                ONE FAMILY.
              </Display>
            </Reveal>

            <Reveal className="space-y-4" delay={0.1}>
              <blockquote className="border-l-2 border-accent-gold pl-6 italic">
                <p className="font-body text-sm text-foreground leading-relaxed tracking-wide">
                  &ldquo;I believe every great brand begins with a simple decision — to build
                  something that people can trust and remember.&rdquo;
                </p>
              </blockquote>
              <blockquote className="border-l-2 border-accent-gold pl-6 italic">
                <p className="font-body text-sm text-foreground leading-relaxed tracking-wide">
                  &ldquo;Billionaire&apos;s Aqua is our commitment to building a premium Indian
                  water brand with a long-term vision.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal className="pt-2" delay={0.15}>
              <p className="font-display text-lg tracking-[0.15em] text-foreground uppercase font-bold">
                SURAJ ISHWAR
              </p>
              <p className="font-body text-[0.72rem] tracking-[0.24em] text-accent-gold uppercase mt-1 font-semibold">
                FOUNDER, CHAIRMAN &amp; MANAGING DIRECTOR
              </p>
              <p className="font-display text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                THE BILLIONAIRE&apos;S AQUA™
              </p>
            </Reveal>
          </div>

          {/* Right Column: Founder Badge Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <Reveal
              className="w-full max-w-md bg-gradient-to-br from-emerald-950 via-black to-neutral-950 border border-accent-gold/40 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-accent-gold transition-all duration-700 shadow-2xl"
              delay={0.2}
            >
              {/* Graphic background elements */}
              <div className="absolute -top-1/4 -right-1/4 size-80 rounded-full bg-accent-gold/10 blur-[80px]" />
              <div className="absolute -bottom-1/4 -left-1/4 size-80 rounded-full bg-emerald-800/15 blur-[80px]" />

              <div className="relative z-10 space-y-4">
                <span className="font-display text-[0.62rem] tracking-[0.35em] text-accent-gold uppercase font-semibold">
                  THE BILLIONAIRE&apos;S AQUA™
                </span>
                <h4 className="font-display text-xl md:text-2xl tracking-[0.15em] text-foreground uppercase">
                  ONE VISION. ONE STANDARD. ONE FAMILY.
                </h4>
                <div className="inline-block px-3 py-1 rounded bg-accent-gold/20 border border-accent-gold/50 font-display text-xs tracking-[0.2em] text-accent-gold uppercase font-semibold">
                  ₹5,000 CRORE BY 2030
                </div>
              </div>

              {/* Founder Sign-off Graphic */}
              <div className="relative z-10 space-y-2 pt-10">
                <div className="w-16 h-px bg-accent-gold/60" />
                <p className="font-display text-base tracking-[0.25em] text-foreground uppercase font-bold">
                  — SURAJ ISHWAR
                </p>
                <p className="font-body text-[0.65rem] tracking-[0.2em] text-accent-gold uppercase font-semibold">
                  FOUNDER, CHAIRMAN &amp; MANAGING DIRECTOR
                </p>
                <p className="font-display text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                  THE BILLIONAIRE&apos;S AQUA™
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 4: AMBITION ROADMAP (2026 - 2030)                                    */}
        {/* ========================================================================= */}
        <div className="space-y-8 max-w-5xl mx-auto border-t border-hairline pt-16">
          <Reveal className="border-b border-hairline pb-4 flex justify-between items-end">
            <div>
              <Eyebrow>Strategic Growth</Eyebrow>
              <h4 className="font-display text-xl tracking-[0.2em] text-foreground uppercase mt-2">
                Ambition Roadmap (2026 — 2030)
              </h4>
            </div>
            <span className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase hidden sm:block">
              Target: ₹5,000 Cr
            </span>
          </Reveal>

          <div className="relative pl-6 border-l border-hairline space-y-8">
            {TIMELINE.map((item, idx) => (
              <Reveal key={item.phase} className="relative" delay={idx * 0.05}>
                {/* Timeline Dot */}
                <span className="absolute -left-[1.88rem] top-1.5 size-2 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase font-semibold min-w-[90px]">
                    {item.year}
                  </span>
                  <div>
                    <h5 className="font-display text-sm tracking-[0.12em] text-foreground uppercase">
                      {item.phase}
                    </h5>
                    <p className="font-body text-[0.75rem] text-muted-foreground leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

