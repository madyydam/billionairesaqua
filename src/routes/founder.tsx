import { useEffect, useRef } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  Zap,
  Award,
  Layers,
  Building,
  GraduationCap,
  HeartPulse,
  Coffee,
  CheckCircle2,
  Flame,
  Users,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TITLE = "Founder Story | Suraj Ishwar | The Billionaire's Aqua™";
const DESCRIPTION =
  "Discover the entrepreneurial journey of Suraj Ishwar, from early lessons and Gadget Dash to the vision behind THE BILLIONAIRE’S AQUA™ and building a ₹5,000 Crore legacy.";

export const Route = createFileRoute("/founder")({
  component: FounderStoryPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/founder" },
      { property: "og:image", content: "/team/suraj-ishwar.png" },
    ],
  }),
});

const GADGET_DASH_SERVICES = [
  "IT & Software Development",
  "Website & Application Development",
  "AI & Automation",
  "Business Automation",
  "Digital Marketing",
  "Branding & Identity",
  "Business Development",
  "Cybersecurity",
  "Data Analytics",
  "Digital Solutions",
  "Technology Consulting",
  "Training & Internship Programs",
];

const CORE_PILLARS = [
  {
    title: "Ambition & Mindset",
    desc: "Think bigger, dream bigger, and refuse to accept self-imposed limitations before taking the first step.",
    icon: Flame,
  },
  {
    title: "Relentless Discipline",
    desc: "Consistency through setbacks. Turning financial and operational lessons into stepping stones.",
    icon: ShieldCheck,
  },
  {
    title: "Uncompromising Quality",
    desc: "Crafting every bottle, brand touchpoint, and communication detail to world-class standards.",
    icon: Award,
  },
  {
    title: "Collective Growth",
    desc: "No great empire is built alone. Empowering teams, partners, and communities along the climb.",
    icon: Users,
  },
];

const FUTURE_INFRASTRUCTURE = [
  { title: "Premium Lifestyle & Café Brand", icon: Coffee, desc: "Building an immersive culture and customer experience benchmark inspired by iconic global chains." },
  { title: "Real Estate & Construction", icon: Building, desc: "Developing purpose-driven spaces, architectural landmarks, and modern commercial hubs." },
  { title: "Residential & Commercial Developments", icon: Layers, desc: "Next-generation living spaces and high-efficiency corporate complexes." },
  { title: "Schools & Educational Institutions", icon: GraduationCap, desc: "Nurturing the next generation of visionary thinkers and ethical leaders." },
  { title: "Colleges & Skill Development Centres", icon: Zap, desc: "Equipping young talent with real-world technology and entrepreneurial abilities." },
  { title: "Hospitals & Healthcare Infrastructure", icon: HeartPulse, desc: "State-of-the-art medical and wellness facilities serving communities." },
];

function FounderStoryPage() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const device = useDevicePerformance();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (device.reducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero elements staggered entrance
      gsap.fromTo(
        ".story-hero-item",
        { opacity: 0, y: 35, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      // 2. Section cards entrance on scroll
      const cards = gsap.utils.toArray<HTMLElement>(".story-reveal-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.98, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [device.reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-accent-gold selection:text-black overflow-x-hidden relative"
    >
      <SmoothScrollProvider reducedMotion={device.reducedMotion} />

      {/* Ambient atmospheric backdrop lighting */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-950/25 blur-[140px] rounded-full" />
          <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-accent-gold/10 blur-[130px] rounded-full" />
          <div className="absolute top-2/3 -left-40 w-[600px] h-[600px] bg-emerald-900/20 blur-[130px] rounded-full" />
        </div>

        <Nav />

        <main className="relative z-10 pt-28 md:pt-36 pb-24">
          {/* ========================================================================= */}
          {/* HERO SECTION: FOUNDER SPOTLIGHT                                           */}
          {/* ========================================================================= */}
          <section className="px-6 md:px-10 max-w-[1300px] mx-auto">
            <div className="relative rounded-3xl border border-accent-gold/40 bg-gradient-to-br from-black via-neutral-950 to-emerald-950/40 p-8 md:p-14 shadow-[0_0_60px_rgba(212,175,55,0.14)] overflow-hidden">
              <div className="absolute top-0 right-0 size-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column: Founder Photo & Profile Frame */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="story-hero-item relative group w-full max-w-[320px] md:max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden border border-accent-gold/50 shadow-[0_0_35px_rgba(212,175,55,0.22)] bg-neutral-950">
                    <img
                      src="/team/suraj-ishwar.png"
                      alt="SURAJ ISHWAR - FOUNDER & CEO GADGET DASH, FOUNDER THE BILLIONAIRE'S AQUA™"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 inset-x-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-accent-gold/40 text-[0.62rem] tracking-[0.2em] font-display text-accent-gold uppercase font-bold">
                        FOUNDER &amp; VISIONARY
                      </span>
                    </div>
                  </div>

                  {/* Founder Profile Details */}
                  <div className="story-hero-item mt-6 w-full max-w-[320px] md:max-w-[360px] text-left space-y-1.5">
                    <h2 className="font-display text-2xl md:text-3xl tracking-[0.08em] text-white uppercase font-bold">
                      SURAJ ISHWAR
                    </h2>
                    <p className="font-body text-[0.68rem] md:text-[0.74rem] tracking-[0.18em] text-accent-gold uppercase font-semibold">
                      CO-FOUNDER &amp; CEO - DUDE SALAD
                    </p>
                    <p className="font-body text-[0.68rem] md:text-[0.74rem] tracking-[0.18em] text-accent-gold uppercase font-semibold">
                      FOUNDER &amp; CEO - GADGET DASH™
                    </p>
                    <p className="font-body text-[0.68rem] md:text-[0.74rem] tracking-[0.18em] text-accent-gold uppercase font-semibold">
                      FOUNDER, CHAIRMAN &amp; MD - THE BILLIONAIRE&apos;S AQUA™
                    </p>
                  </div>
                </div>

                {/* Right Column: Hero Headline & Manifesto */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="story-hero-item inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent-gold/40 bg-accent-gold/10 backdrop-blur-md">
                    <Sparkles className="size-3.5 text-accent-gold" />
                    <span className="font-display text-[0.64rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
                      FOUNDER&apos;S JOURNEY &amp; PHILOSOPHY
                    </span>
                  </div>

                  <h1 className="story-hero-item font-display font-bold text-[clamp(2.2rem,4.5vw,3.6rem)] tracking-[0.04em] text-foreground uppercase leading-[1.08]">
                    WHERE IT ALL STARTED.
                  </h1>

                  <blockquote className="story-hero-item border-l-2 border-accent-gold pl-5 space-y-3 italic text-foreground/90 font-body text-sm md:text-base leading-relaxed">
                    <p>
                      &ldquo;My entrepreneurial journey did not begin with a successful company,
                      a large team or everything figured out. It began with an idea, the willingness
                      to take a risk, and the courage to start.&rdquo;
                    </p>
                    <p className="text-accent-gold font-medium not-italic text-xs md:text-sm font-body">
                      - Suraj Ishwar
                    </p>
                  </blockquote>

                  <p className="story-hero-item font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                    From facing losses in early ventures and discovering the mechanics of business
                    to founding Gadget Dash, innovating Theft Shield, and carrying a 5-year vision
                    to craft a ₹5,000 Crore luxury water brand, this is the unfiltered story of
                    resilience, lessons, and relentless ambition.
                  </p>

                  <div className="story-hero-item flex flex-wrap gap-3 pt-2">
                    <div className="px-4 py-2 rounded-xl bg-black/60 border border-hairline flex items-center gap-2">
                      <Target className="size-4 text-accent-gold" />
                      <span className="font-display text-xs tracking-[0.15em] uppercase text-white font-bold">
                        Target: ₹5,000 Cr by 2030
                      </span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-black/60 border border-hairline flex items-center gap-2">
                      <Compass className="size-4 text-accent-gold" />
                      <span className="font-display text-xs tracking-[0.15em] uppercase text-white font-bold">
                        Vision In Motion Since 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* CHAPTER 1 & 2: EARLY LESSONS & THE PIVOT                                  */}
          {/* ========================================================================= */}
          <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-20 md:mt-28 space-y-16">
            {/* Timeline Item 1: Dude Salad */}
            <div className="story-reveal-card grid lg:grid-cols-12 gap-8 items-start p-8 md:p-12 rounded-3xl border border-hairline bg-black/40 backdrop-blur-md relative overflow-hidden group hover:border-accent-gold/40 transition-colors duration-500">
              <div className="lg:col-span-4 space-y-3">
                <span className="px-3 py-1 rounded-md text-[0.62rem] tracking-[0.25em] font-display uppercase bg-accent-gold/15 border border-accent-gold/40 text-accent-gold font-bold">
                  MILESTONE 01
                </span>
                <h3 className="font-display text-2xl md:text-3xl tracking-[0.06em] text-foreground uppercase font-bold">
                  DUDE SALAD &amp; LESSONS THROUGH LOSS
                </h3>
                <p className="font-body text-xs text-accent-gold uppercase tracking-[0.15em] font-semibold">
                  The Courage to Start
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4 font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                <p>
                  My first startup was <span className="text-foreground font-semibold">Dude Salad</span>.
                  It did not turn out the way I had initially imagined, and I experienced financial loss
                  along the way. But I never considered it a failure.
                </p>
                <p>
                  It became one of the most important learning experiences of my entrepreneurial journey.
                  It taught me how businesses actually work, how customers think, what decisions matter,
                  what mistakes to avoid and, most importantly, how to continue moving forward when things
                  don&apos;t go as planned.
                </p>
                <div className="p-4 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-foreground font-medium italic">
                  &ldquo;I lost money, but I gained experience. And that experience became the foundation for everything that came next.&rdquo;
                </div>
              </div>
            </div>

            {/* Timeline Item 2: Dropshipping to Gadget Dash */}
            <div className="story-reveal-card grid lg:grid-cols-12 gap-8 items-start p-8 md:p-12 rounded-3xl border border-hairline bg-black/40 backdrop-blur-md relative overflow-hidden group hover:border-accent-gold/40 transition-colors duration-500">
              <div className="lg:col-span-4 space-y-3">
                <span className="px-3 py-1 rounded-md text-[0.62rem] tracking-[0.25em] font-display uppercase bg-accent-gold/15 border border-accent-gold/40 text-accent-gold font-bold">
                  MILESTONE 02
                </span>
                <h3 className="font-display text-2xl md:text-3xl tracking-[0.06em] text-foreground uppercase font-bold">
                  LEARNING, EXPERIMENTING &amp; THE PIVOT
                </h3>
                <p className="font-body text-xs text-accent-gold uppercase tracking-[0.15em] font-semibold">
                  Why Sell For Others When You Can Build Your Own?
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4 font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                <p>
                  After Dude Salad, I started exploring <span className="text-foreground font-semibold">Dropshipping</span>.
                  Dropshipping taught me a different side of business: understanding products, customers,
                  online selling, marketing and the importance of execution.
                </p>
                <p>
                  But while doing it, I started asking myself a simple question:
                </p>
                <blockquote className="border-l-2 border-accent-gold pl-4 text-foreground font-display text-base md:text-lg tracking-[0.08em] uppercase font-bold">
                  &ldquo;Why should I keep selling someone else’s products when I can build something of my own?&rdquo;
                </blockquote>
                <p>
                  That question changed the direction of my journey. I wanted to create products that belonged
                  to us, build our own identity, and create something that could grow beyond simply selling products.
                  That thought became the beginning of <span className="text-accent-gold font-semibold">Gadget Dash</span>.
                </p>
              </div>
            </div>

            {/* Timeline Item 3: Building Theft Shield */}
            <div className="story-reveal-card grid lg:grid-cols-12 gap-8 items-start p-8 md:p-12 rounded-3xl border border-hairline bg-black/40 backdrop-blur-md relative overflow-hidden group hover:border-accent-gold/40 transition-colors duration-500">
              <div className="lg:col-span-4 space-y-3">
                <span className="px-3 py-1 rounded-md text-[0.62rem] tracking-[0.25em] font-display uppercase bg-accent-gold/15 border border-accent-gold/40 text-accent-gold font-bold">
                  MILESTONE 03
                </span>
                <h3 className="font-display text-2xl md:text-3xl tracking-[0.06em] text-foreground uppercase font-bold">
                  SURAJ ISHWAR&apos;S THEFT SHIELD
                </h3>
                <p className="font-body text-xs text-accent-gold uppercase tracking-[0.15em] font-semibold">
                  From Concept to Market Reality
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4 font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                <p>
                  I founded <span className="text-foreground font-semibold">GADGET DASH</span> with the vision of building a company around products, technology and innovation. Initially, GADGET DASH was primarily a product-based company: create our own products, build our own identity, and take those products to the market.
                </p>
                <p>
                  One of the defining milestones in this journey was <span className="text-accent-gold font-semibold">Suraj Ishwar’s Theft Shield</span>. It was one of my own product concepts, developed and introduced to the market under Gadget Dash. The product received a positive response and continues to exist in the market with two iterations:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-black/60 border border-hairline flex items-center gap-3">
                    <Award className="size-5 text-accent-gold shrink-0" />
                    <div>
                      <p className="font-display text-xs tracking-[0.15em] text-foreground uppercase font-bold">
                        Premium Product
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground">High-tier security &amp; finish</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/60 border border-hairline flex items-center gap-3">
                    <ShieldCheck className="size-5 text-accent-gold shrink-0" />
                    <div>
                      <p className="font-display text-xs tracking-[0.15em] text-foreground uppercase font-bold">
                        Standard Product
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground">Accessible protection for all</p>
                    </div>
                  </div>
                </div>
                <p className="pt-2">
                  This experience taught me much more than just product development. It taught me about customers, positioning, pricing, product presentation, marketing, and what it takes to build something that people are genuinely willing to choose.
                </p>
              </div>
            </div>

            {/* Timeline Item 4: Gadget Dash Evolution */}
            <div className="story-reveal-card p-8 md:p-12 rounded-3xl border border-accent-gold/40 bg-gradient-to-br from-emerald-950/50 via-black to-neutral-950 relative overflow-hidden">
              <div className="max-w-3xl space-y-4">
                <span className="px-3 py-1 rounded-md text-[0.62rem] tracking-[0.25em] font-display uppercase bg-accent-gold/15 border border-accent-gold/40 text-accent-gold font-bold">
                  THE EVOLUTION
                </span>
                <h3 className="font-display text-2xl md:text-4xl tracking-[0.06em] text-foreground uppercase font-bold">
                  FROM PRODUCT COMPANY TO TECHNOLOGY ECOSYSTEM
                </h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  As GADGET DASH grew, I realised that I did not want it to remain limited to products alone. I wanted to create a company that could build its own products while also empowering other businesses to build theirs. That led GADGET DASH to evolve into a comprehensive <span className="text-foreground font-semibold">Product + Service based technology company</span>.
                </p>

                {/* Evolution Stage Flow */}
                <div className="py-4">
                  <div className="flex flex-wrap items-center gap-3 font-display text-xs md:text-sm tracking-[0.12em] text-foreground uppercase font-bold">
                    <span className="px-3.5 py-1.5 rounded-lg bg-black/60 border border-hairline">Product-Based Company</span>
                    <ArrowRight className="size-4 text-accent-gold" />
                    <span className="px-3.5 py-1.5 rounded-lg bg-black/60 border border-accent-gold/50 text-accent-gold">Product + Service Company</span>
                    <ArrowRight className="size-4 text-accent-gold" />
                    <span className="px-3.5 py-1.5 rounded-lg bg-accent-gold/20 border border-accent-gold text-accent-gold">Technology &amp; Innovation Company</span>
                  </div>
                </div>
              </div>

              {/* Service Capabilities Grid */}
              <div className="mt-8 pt-8 border-t border-hairline/80">
                <p className="font-display text-xs tracking-[0.2em] text-accent-gold uppercase font-bold mb-4">
                  Gadget Dash Active Ecosystem Services:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {GADGET_DASH_SERVICES.map((service) => (
                    <div
                      key={service}
                      className="p-2.5 rounded-lg bg-black/50 border border-hairline/60 flex items-center gap-2 hover:border-accent-gold/40 transition-colors"
                    >
                      <CheckCircle2 className="size-3.5 text-accent-gold shrink-0" />
                      <span className="font-body text-[0.68rem] text-white/90 font-medium truncate">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* THE GENESIS OF THE BILLIONAIRE'S AQUA™                                    */}
          {/* ========================================================================= */}
          <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-24 md:mt-32">
            <div className="story-reveal-card relative rounded-3xl border border-accent-gold/50 bg-gradient-to-b from-neutral-950 via-black to-emerald-950/60 p-8 md:p-14 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)]">
              <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent-gold/40 bg-accent-gold/10">
                  <Flame className="size-3.5 text-accent-gold" />
                  <span className="font-display text-[0.64rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
                    THE VISION SINCE 2022
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-[0.06em] text-foreground uppercase leading-tight">
                  THE QUESTION THAT LED TO SOMETHING BIGGER
                </h2>

                <blockquote className="border-l-2 border-accent-gold pl-5 text-lg md:text-2xl font-display uppercase tracking-[0.08em] text-accent-gold font-bold">
                  &ldquo;What can we build that is bigger than what we have done before?&rdquo;
                </blockquote>

                <div className="space-y-4 font-body text-xs md:text-sm text-muted-foreground leading-relaxed pt-2">
                  <p>
                    I wanted to create something that wasn&apos;t just another product. Something that people could connect with emotionally. Something with a strong identity that could carry an empowering message, and eventually become a brand with a life of its own.
                  </p>
                  <p>
                    That thought had actually been in my mind since <span className="text-foreground font-semibold">2022</span>. I had a vision that by <span className="text-accent-gold font-semibold">2027</span>, I wanted to launch a major drinking-water product. At that stage, it was only an idea. But I kept working towards it. And eventually, that idea became <span className="text-foreground font-semibold">THE BILLIONAIRE’S AQUA™</span>.
                  </p>
                </div>
              </div>

              {/* 4 Core Pillars */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-10 border-t border-hairline">
                {CORE_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-black/60 border border-hairline/80 space-y-2.5 hover:border-accent-gold/60 transition-all duration-400"
                  >
                    <pillar.icon className="size-5 text-accent-gold" />
                    <h4 className="font-display text-sm tracking-[0.12em] text-foreground uppercase font-bold">
                      {pillar.title}
                    </h4>
                    <p className="font-body text-[0.72rem] text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* PHILOSOPHY: MORE THAN WATER. A STANDARD.                                 */}
          {/* ========================================================================= */}
          <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-24 md:mt-32 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
                BRAND PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl md:text-5xl tracking-[0.06em] text-foreground uppercase font-bold">
                WHY &ldquo;THE BILLIONAIRE&apos;S AQUA&rdquo;?
              </h2>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                The name was never chosen simply because of money. For me, Billionaire represents a mindset.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card A: The Mindset */}
              <div className="story-reveal-card p-8 md:p-10 rounded-3xl border border-hairline bg-black/40 space-y-5">
                <h3 className="font-display text-xl md:text-2xl tracking-[0.1em] text-accent-gold uppercase font-bold">
                  THE BILLIONAIRE MINDSET
                </h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Before someone becomes successful financially, they first need to develop the mindset to think beyond limitations. A mindset to:
                </p>
                <ul className="space-y-2.5 font-display text-xs md:text-sm tracking-[0.12em] text-foreground uppercase font-semibold">
                  <li className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-accent-gold" />
                    Think Bigger &amp; Dream Bigger
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-accent-gold" />
                    Set Higher Standards
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-accent-gold" />
                    Stay Disciplined &amp; Keep Learning
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-accent-gold" />
                    Take Calculated Risks
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-accent-gold" />
                    Build Something Extraordinary
                  </li>
                </ul>
              </div>

              {/* Card B: The Bottle as a Catalyst */}
              <div className="story-reveal-card p-8 md:p-10 rounded-3xl border border-hairline bg-black/40 space-y-5">
                <h3 className="font-display text-xl md:text-2xl tracking-[0.1em] text-accent-gold uppercase font-bold">
                  THE BOTTLE AS A DAILY REMINDER
                </h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Today, especially among the younger generation, there is incredible potential that lacks enough direction or consistency.
                </p>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Every time someone picks up the bottle, looks at it or drinks from it, the product communicates a message:
                </p>
                <div className="p-4 rounded-xl bg-black/80 border border-accent-gold/40 text-center font-display text-base tracking-[0.15em] text-accent-gold uppercase font-bold">
                  THINK BIGGER. STAY FOCUSED. BELIEVE IN YOURSELF. RAISE YOUR STANDARD.
                </div>
                <p className="font-body text-[0.72rem] text-muted-foreground italic">
                  &ldquo;Sometimes, motivation doesn&apos;t need a long speech. One sentence at the right moment can change how someone thinks.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* WHAT I BELIEVE: 6 PRINCIPLES OF LEADERSHIP                                */}
          {/* ========================================================================= */}
          <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-24 md:mt-32">
            <div className="story-reveal-card p-8 md:p-14 rounded-3xl border border-hairline bg-black/60 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-hairline pb-6">
                <div>
                  <span className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
                    CORE BELIEFS
                  </span>
                  <h2 className="font-display text-2xl md:text-4xl tracking-[0.06em] text-foreground uppercase font-bold mt-1">
                    WHAT MY JOURNEY HAS TAUGHT ME
                  </h2>
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.15em]">
                  Principles Forged in Experience
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    num: "01",
                    title: "No Overnight Success",
                    text: "I believe success doesn't happen overnight. There is no shortcut to building something meaningful.",
                  },
                  {
                    num: "02",
                    title: "Start Before You Are Ready",
                    text: "Waiting for perfect conditions is the enemy of progress. Courage is beginning when the road is unclear.",
                  },
                  {
                    num: "03",
                    title: "Failure is a Teacher",
                    text: "Failure is never the end of the journey if you are willing to analyze, adapt, and learn from it.",
                  },
                  {
                    num: "04",
                    title: "Relentless Belief",
                    text: "The people who continue believing in their vision when there is no guarantee of success are the ones who create difference.",
                  },
                  {
                    num: "05",
                    title: "Details Matter",
                    text: "From product formulation and packaging to communication and culture, every small nuance matters.",
                  },
                  {
                    num: "06",
                    title: "Build With Great People",
                    text: "No empire is built by one person alone. Great brands are created by a united family sharing one vision.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-5 rounded-2xl bg-black/40 border border-hairline/70 space-y-2 hover:border-accent-gold/50 transition-colors"
                  >
                    <span className="font-display text-xs tracking-[0.2em] text-accent-gold font-bold">
                      {item.num}
                    </span>
                    <h4 className="font-display text-base tracking-[0.08em] text-foreground uppercase font-bold">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* THE VISION BEYOND: INFRASTRUCTURE, CAFES, & CONGLOMERATE ECOSYSTEM        */}
          {/* ========================================================================= */}
          <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-24 md:mt-32">
            <div className="story-reveal-card p-8 md:p-14 rounded-3xl border border-accent-gold/40 bg-gradient-to-br from-black via-neutral-950 to-emerald-950/50 relative overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.12)]">
              <div className="max-w-3xl space-y-4">
                <span className="px-3 py-1 rounded-md text-[0.62rem] tracking-[0.25em] font-display uppercase bg-accent-gold/15 border border-accent-gold/40 text-accent-gold font-bold">
                  THE FUTURE ECOSYSTEM
                </span>
                <h2 className="font-display text-2xl md:text-4xl tracking-[0.06em] text-foreground uppercase font-bold">
                  THE VISION BEYOND THE BILLIONAIRE&apos;S AQUA™
                </h2>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  My vision does not end with THE BILLIONAIRE’S AQUA™. I see this as one step in a much larger journey. Once established, I want to take the vision further by building new brands, cultural landmarks, and community-building infrastructure.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pt-8 border-t border-hairline">
                {FUTURE_INFRASTRUCTURE.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-black/60 border border-hairline hover:border-accent-gold/50 transition-all duration-300 space-y-2.5"
                  >
                    <item.icon className="size-5 text-accent-gold" />
                    <h4 className="font-display text-sm tracking-[0.1em] text-foreground uppercase font-bold">
                      {item.title}
                    </h4>
                    <p className="font-body text-[0.72rem] text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conglomerate Vision Quote */}
              <div className="mt-10 p-6 rounded-2xl bg-black/80 border border-accent-gold/30 space-y-3">
                <p className="font-display text-sm md:text-base tracking-[0.12em] text-accent-gold uppercase font-bold">
                  From technology to products. From products to brands. From brands to businesses. From businesses to infrastructure.
                </p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  &ldquo;Today, I am building one step at a time. Tomorrow, I want those steps to become an ecosystem. A legacy built on vision, innovation, ambition and higher standards. This is not the destination. This is the foundation.&rdquo;
                </p>
                <p className="font-display text-xs tracking-[0.25em] text-foreground/80 uppercase font-semibold">
                  Many More Plans Hidden…
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* NAVIGATION FOOTER CTA                                                     */}
          {/* ========================================================================= */}
          <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-20 text-center">
            <div className="p-8 md:p-12 rounded-3xl border border-hairline bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1">
                <h4 className="font-display text-lg md:text-xl tracking-[0.1em] text-foreground uppercase font-bold">
                  EXPLORE THE PEOPLE BEHIND THE BRAND
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  Meet the functional leadership team turning this vision into reality.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate({ to: "/ourteam" })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold text-black font-body text-xs tracking-[0.16em] uppercase font-bold transition-all hover:bg-accent-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
                >
                  Meet Our Team
                  <ChevronRight className="size-4" />
                </button>
                <button
                  onClick={() => navigate({ to: "/" })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline text-foreground font-body text-xs tracking-[0.16em] uppercase font-semibold hover:border-accent-gold hover:text-accent-gold transition-colors cursor-pointer"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
