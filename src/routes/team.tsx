import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import {
  Sparkles,
  Users,
  Search,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  Zap,
  Mail,
  Award,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: "leadership" | "brand" | "sales" | "research" | "community";
  image: string;
  bio: string;
  highlights: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "anushka-sambarkar",
    name: "Anushka Dhananjay Sambarkar",
    role: "Head of Brand & Communications",
    department: "Brand & Communications",
    category: "brand",
    image: "/team/Anushka Dhananjay Sambarkar.jpeg",
    bio: "Anushka leads the Brand & Communications function at THE BILLIONAIRE’S AQUA™, focusing on how the brand communicates its vision, identity and story to the world. She is responsible for developing the brand voice, storytelling concepts, communication strategies and social media communication while ensuring consistency across every customer touchpoint. Her role also extends to investor presentations, pitching, campaign concepts and creative communication initiatives. With a strong focus on communication and storytelling, she contributes to building a brand identity that is clear, memorable and emotionally connected with its audience. As the brand grows, she will play an important role in shaping how THE BILLIONAIRE’S AQUA™ is perceived across India and future international markets.",
    highlights: [
      "Brand Voice & Narrative Strategy",
      "Investor Presentations & Pitching",
      "Omnichannel Storytelling Concepts",
      "Nationwide Brand Perception",
    ],
  },
  {
    id: "divija-deshpande",
    name: "Divija Dhananjay Deshpande",
    role: "Head of Business Development & Client Relations",
    department: "Business Development & Client Relations",
    category: "sales",
    image: "/team/Divija Dhananjay Deshpande.jpeg",
    bio: "Divija leads Business Development & Client Relations, focusing on creating meaningful business relationships and identifying opportunities that can contribute to the company’s long-term growth. Her responsibilities include client communication, business calls, pitching, presentation development, relationship management and partnership discussions. She works closely with potential clients, businesses and strategic partners to understand their requirements and identify opportunities for collaboration. Her role is important in developing the business network of THE BILLIONAIRE’S AQUA™ and creating strong relationships that can support the brand as it moves from its initial Pune market towards wider expansion.",
    highlights: [
      "Strategic Enterprise Partnerships",
      "High-Value Client Relationship Management",
      "Cross-Industry Collaboration Pitches",
      "Regional & Statewide Network Scale",
    ],
  },
  {
    id: "aditya-jaunjal",
    name: "Aditya Sandipan Jaunjal",
    role: "Head of Media & Creative Production",
    department: "Media & Creative Production",
    category: "brand",
    image: "/team/Aditya Sandipan Jaunjal.jpeg",
    bio: "Aditya leads the Media & Creative Production function and is responsible for bringing the brand’s ideas to life through visual storytelling. His work includes video shooting, video editing, reels, short-form content, product videos, brand films and creative visual campaigns. He focuses on creating content that communicates the premium identity and ambition of THE BILLIONAIRE’S AQUA™ in a modern and engaging way. As digital media becomes an important part of the brand’s growth strategy, his role will contribute to creating a strong visual presence across Instagram, YouTube, Facebook, LinkedIn and other platforms while supporting future advertising and product-launch campaigns.",
    highlights: [
      "Cinematic Brand Films & Video Direction",
      "Short-Form Video & Viral Reel Production",
      "Multi-Platform Visual Consistency",
      "Product-Launch Campaign Aesthetics",
    ],
  },
  {
    id: "aditya-ekbote",
    name: "Aditya Sidram Ekbote",
    role: "Head of Sales & Business Development",
    department: "Sales & Business Development",
    category: "sales",
    image: "/team/Aditya Sidram Ekbote.jpeg",
    bio: "Aditya leads the Sales & Business Development function with a focus on creating a structured and scalable sales ecosystem for THE BILLIONAIRE’S AQUA™. His responsibilities include lead generation, customer acquisition, sales pitching, retail and B2B sales, distributor and dealer development, follow-ups and sales planning. He will work towards understanding the market, identifying potential customers and developing relationships across retail, corporate, hospitality and other business channels. His contribution will be important in transforming the brand from a product entering the market into a business with a strong customer and distribution network.",
    highlights: [
      "B2B & Retail Distribution Architecture",
      "Dealer & Franchise Channel Expansion",
      "Lead Generation & Acquisition Pipelines",
      "Corporate & Hospitality Penetration",
    ],
  },
  {
    id: "mansi-salunke",
    name: "Mansi Mahendra Salunke",
    role: "Head of Marketing & Business Strategy",
    department: "Marketing & Business Strategy",
    category: "leadership",
    image: "/team/Mansi Mahendra Salunke.jpeg",
    bio: "Mansi leads Marketing & Business Strategy, working at the intersection of brand growth, marketing communication and strategic planning. Her responsibilities include content development, social media management, marketing campaigns, business analysis, storytelling, campaign ideas and identifying opportunities for brand growth. She contributes to understanding how the brand should communicate with different audiences and how marketing initiatives can support the company’s larger business objectives. Her role will be particularly important during the pre-launch and launch phases, helping THE BILLIONAIRE’S AQUA™ build awareness, create audience engagement and establish a strong position in the market.",
    highlights: [
      "Integrated Go-To-Market Campaigns",
      "Audience Segmentation & Positioning",
      "Data-Driven Growth Analytics",
      "Pre-Launch & Launch Orchestration",
    ],
  },
  {
    id: "rudraksh-kankal",
    name: "Rudraksh Vijay Kankal",
    role: "Head of Market Intelligence & Research",
    department: "Market Intelligence & Research",
    category: "research",
    image: "/team/Rudraksh Vijay Kankal.jpeg",
    bio: "Rudraksh leads Market Intelligence & Research, focusing on understanding the market before major business decisions are made. His work includes competitor research, market research, consumer research, customer insights, pricing research, retail market surveys, brand analysis and data collection. He contributes by identifying market trends, understanding customer expectations and studying the competitive environment in which THE BILLIONAIRE’S AQUA™ will operate. His research will support decisions related to pricing, positioning, distribution, product strategy and market expansion, helping the company make decisions based on information rather than assumptions.",
    highlights: [
      "Competitive Landscape & Benchmarking",
      "Consumer Behavioral Analysis",
      "Pricing Elasticity & Positioning Studies",
      "Evidence-Based Strategy Support",
    ],
  },
  {
    id: "rushikesh-kadam",
    name: "Rushikesh Tukaram Kadam",
    role: "Content & Digital Communications Lead",
    department: "Content & Digital Communications",
    category: "brand",
    image: "/team/Rushikesh Tukaram Kadam.jpeg",
    bio: "Rushikesh leads the Content & Digital Communications function and focuses on building the brand’s communication across digital platforms. His responsibilities include creating content for Instagram, LinkedIn, Facebook and X, developing website content, writing captions, preparing campaign copy and supporting digital storytelling. He works to ensure that every message shared by THE BILLIONAIRE’S AQUA™ reflects the brand’s tone, vision and positioning. As the company builds its online presence before the product launch, his role will contribute to maintaining consistency, improving audience communication and creating a strong digital identity for the brand.",
    highlights: [
      "Digital Brand Voice Governance",
      "Social Copywriting & Creative Storytelling",
      "Web Content & Campaign Messaging",
      "High-Engagement Digital Identities",
    ],
  },
  {
    id: "vipul-yadav",
    name: "Vipul Sachin Yadav",
    role: "Market Research & Business Analytics Lead",
    department: "Market Research & Business Analytics",
    category: "research",
    image: "/team/Vipul Sachin Yadav.jpeg",
    bio: "Vipul works across Market Research & Business Analytics, focusing on converting collected information into useful business insights. His responsibilities include customer and consumer research, competitor analysis, pricing research, retail market data, data collection, analysis and preparation of research findings and reports. He supports the team by identifying patterns, opportunities and important market information that can contribute to better business decisions. His analytical contribution will become increasingly valuable as THE BILLIONAIRE’S AQUA™ collects more market feedback, evaluates customer behaviour and prepares for expansion into new markets.",
    highlights: [
      "Quantitative Retail Market Analysis",
      "Predictive Customer Behavior Modeling",
      "Business Intelligence Dashboards",
      "Expansion Feasibility Research",
    ],
  },
  {
    id: "jagruti-babar",
    name: "Jagruti Abhijeet Babar",
    role: "Brand Partnerships & Events Lead",
    department: "Brand Partnerships & Events",
    category: "community",
    image: "/team/Jagruti Abhijeet Babar.jpeg",
    bio: "Jagruti leads Brand Partnerships & Events, focusing on expanding the visibility and reach of THE BILLIONAIRE’S AQUA™ through partnerships, collaborations and brand experiences. Her responsibilities include identifying partnership opportunities, coordinating events, supporting brand activations, exploring corporate and hospitality collaborations and developing relationships with organisations and communities. She will contribute to creating opportunities where consumers can experience and interact with the brand beyond traditional digital marketing. As the company grows, her role can support event-based marketing, strategic collaborations, product launches and offline brand-building initiatives.",
    highlights: [
      "Luxury Event Activations & Sponsorships",
      "Hospitality & VIP Lounge Collabs",
      "Offline Brand Experience Design",
      "Community & Corporate Outreach",
    ],
  },
  {
    id: "vaibhavi-saudagar",
    name: "Vaibhavi Saudagar",
    role: "Customer Experience & Community Engagement Lead",
    department: "Customer Experience & Community Engagement",
    category: "community",
    image: "/team/Vaibhavi Saudagar.jpeg",
    bio: "Vaibhavi leads Customer Experience & Community Engagement, focusing on building meaningful relationships between THE BILLIONAIRE’S AQUA™ and the people who interact with the brand. Her responsibilities include understanding customer feedback, coordinating customer communication, supporting community engagement, identifying customer expectations and developing initiatives that create stronger relationships with the audience. She will help the company understand how customers perceive the brand and where their experience can be improved. As the customer base grows, her role will contribute towards building trust, engagement, loyalty and a strong community around THE BILLIONAIRE’S AQUA™",
    highlights: [
      "Client Loyalty & Retention Systems",
      "Customer Sentiment & Voice Analysis",
      "Community Building & VIP Touchpoints",
      "End-to-End Experience Assurance",
    ],
  },
];

const CATEGORIES = [
  { label: "All Team Members", value: "all" },
  { label: "Marketing & Strategy", value: "leadership" },
  { label: "Brand & Creative", value: "brand" },
  { label: "Sales & Business Development", value: "sales" },
  { label: "Research & Intelligence", value: "research" },
  { label: "Community & Partnerships", value: "community" },
];

const TITLE = "The People Behind The Vision | The Billionaire's Aqua™";
const DESCRIPTION =
  "Behind every ambitious brand is a team of people who bring different skills, perspectives and responsibilities together. Meet the dedicated team building THE BILLIONAIRE'S AQUA™.";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/team" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/team" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Organization",
            name: "The Billionaire's Aqua",
            url: "https://thebillionairesaqua.com",
            founder: {
              "@type": "Person",
              name: "Suraj Ishwar",
              jobTitle: "Founder & Chairman / Managing Director",
            },
          },
        }),
      },
    ],
  }),
});

function TeamPage() {
  const [activeModalMember, setActiveModalMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-gold selection:text-background">
      {/* Background cinematic atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial from-accent-gold/10 via-brand-green/5 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-radial from-accent-gold/5 via-emerald-950/20 to-transparent blur-3xl opacity-40" />
      </div>

      <Nav />

      <main className="relative z-10 pt-24 md:pt-32 pb-20">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO HEADER                                                    */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-10 max-w-[1400px] mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent-gold/40 bg-accent-gold/10 backdrop-blur-md">
            <Sparkles className="size-3 text-accent-gold" />
            <span className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
              THE BILLIONAIRE&apos;S AQUA™
            </span>
          </div>

          <h1 className="font-display font-bold text-[clamp(2.2rem,5.5vw,4.2rem)] tracking-[0.04em] text-foreground uppercase leading-[1.08] max-w-5xl mx-auto drop-shadow-md">
            THE PEOPLE BEHIND THE VISION
          </h1>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto" />

          <p className="font-body text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto tracking-wide">
            Behind every ambitious brand is a team of people who bring different skills,
            perspectives and responsibilities together. At{" "}
            <span className="text-foreground font-semibold">THE BILLIONAIRE’S AQUA™</span>, each team
            member contributes to a specific part of our journey, from brand building and technology
            to sales, research, customer relationships and business growth.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-y border-hairline/80">
            <div className="p-3 bg-black/40 border border-hairline rounded-xl backdrop-blur-sm">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">10+</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                Core Functional Leads
              </p>
            </div>
            <div className="p-3 bg-black/40 border border-hairline rounded-xl backdrop-blur-sm">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">PUNE</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                Headquarters &amp; Hub
              </p>
            </div>
            <div className="p-3 bg-black/40 border border-hairline rounded-xl backdrop-blur-sm">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">100%</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                Commitment to Quality
              </p>
            </div>
            <div className="p-3 bg-black/40 border border-hairline rounded-xl backdrop-blur-sm">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">₹5,000 CR</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                2030 Brand Target
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: FOUNDER & CHAIRMAN SPOTLIGHT                                   */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-10 max-w-[1400px] mx-auto mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-accent-gold/40 bg-gradient-to-br from-black via-neutral-950 to-emerald-950/40 p-6 md:p-10 shadow-[0_0_50px_rgba(212,175,55,0.12)]">
            <div className="absolute top-0 right-0 size-80 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Portrait */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group w-full max-w-[280px] aspect-[3/3.8] rounded-2xl overflow-hidden border border-accent-gold/50 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                  <img
                    src="/team/suraj-ishwar.png"
                    alt="Suraj Ishwar - Founder & Chairman / Managing Director"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-display text-[0.6rem] tracking-[0.25em] text-accent-gold uppercase font-semibold block">
                      FOUNDER &amp; CHAIRMAN
                    </span>
                    <h3 className="font-display text-xl tracking-[0.08em] text-white uppercase font-bold">
                      Suraj Ishwar
                    </h3>
                    <p className="font-body text-[0.65rem] text-white/70 tracking-wider uppercase">
                      Managing Director
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Vision & Leadership Content */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-accent-gold/30 bg-accent-gold/10">
                  <ShieldCheck className="size-3.5 text-accent-gold" />
                  <span className="font-display text-[0.62rem] tracking-[0.25em] text-accent-gold uppercase font-bold">
                    LEADERSHIP &amp; VISION
                  </span>
                </div>

                <h2 className="font-display text-xl md:text-3xl tracking-[0.08em] text-foreground uppercase font-bold leading-tight">
                  ONE VISION. ONE STANDARD. ONE FAMILY.
                </h2>

                <blockquote className="border-l-2 border-accent-gold pl-4 space-y-2.5 italic text-foreground/90 font-body text-xs md:text-sm leading-relaxed">
                  <p>
                    &ldquo;I believe every great brand begins with a simple decision — to build
                    something that people can trust and remember.&rdquo;
                  </p>
                  <p>
                    &ldquo;THE BILLIONAIRE&apos;S AQUA™ is our commitment to building a premium
                    Indian water brand with a long-term vision. From Pune to the world, we are
                    building a standard that reflects precision, ambition, and collective
                    growth.&rdquo;
                  </p>
                </blockquote>

                <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-hairline/80 font-body text-xs">
                  <div className="flex items-start gap-2.5 p-2.5 bg-black/40 rounded-xl border border-hairline">
                    <Target className="size-3.5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-[0.7rem] tracking-[0.15em] text-foreground uppercase font-bold">
                        ₹5,000 Cr Milestone
                      </p>
                      <p className="text-muted-foreground text-[0.68rem] mt-0.5">
                        Targeting national leadership and legacy scale by 2030.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 bg-black/40 rounded-xl border border-hairline">
                    <Users className="size-3.5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-[0.7rem] tracking-[0.15em] text-foreground uppercase font-bold">
                        Unified Execution
                      </p>
                      <p className="text-muted-foreground text-[0.68rem] mt-0.5">
                        Empowering specialized leaders across marketing, sales &amp; operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: TEAM DIRECTORY (SMALL COMPACT CARDS)                          */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-10 max-w-[1400px] mx-auto mt-16 md:mt-20">
          <div className="mb-8 pb-4 border-b border-hairline flex items-center justify-between">
            <div>
              <span className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
                CORE TEAM
              </span>
              <h2 className="font-display text-xl md:text-2xl tracking-[0.08em] text-foreground uppercase font-bold mt-0.5">
                The Functional Leadership
              </h2>
            </div>
            <span className="font-display text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hidden sm:block">
              10 Members
            </span>
          </div>

          {/* Responsive 3-in-a-row grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-hairline bg-black/40 hover:border-accent-gold/60 backdrop-blur-sm overflow-hidden transition-all duration-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:-translate-y-1"
              >
                {/* Member Image */}
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-neutral-900 border-b border-hairline">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Department Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[0.56rem] tracking-[0.2em] font-display uppercase bg-black/80 border border-accent-gold/40 text-accent-gold backdrop-blur-md">
                      {member.department}
                    </span>
                  </div>

                  {/* Name & Title over Bottom of Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <h3 className="font-display text-base md:text-lg font-bold tracking-[0.05em] text-white uppercase leading-snug">
                      {member.name}
                    </h3>
                    <p className="font-body text-[0.66rem] tracking-[0.14em] text-accent-gold uppercase font-semibold mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
                  <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Action Button */}
                  <button
                    onClick={() => setActiveModalMember(member)}
                    className="w-full py-2 px-3.5 rounded-xl border border-accent-gold/30 bg-accent-gold/5 hover:bg-accent-gold hover:text-black font-body text-[0.62rem] tracking-[0.18em] text-accent-gold uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read In-Depth Profile</span>
                    <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: OUR TEAM PHILOSOPHY (At Last Section)                          */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-10 max-w-[1400px] mx-auto mt-24 md:mt-32">
          <div className="relative overflow-hidden rounded-3xl border border-accent-gold/50 bg-gradient-to-b from-neutral-950 via-black to-emerald-950/60 p-8 md:p-16 text-center shadow-[0_0_60px_rgba(212,175,55,0.15)]">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/50 bg-accent-gold/15 backdrop-blur-md">
                <Compass className="size-3.5 text-accent-gold" />
                <span className="font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
                  GUIDING PRINCIPLES
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl tracking-[0.08em] text-foreground uppercase font-bold leading-tight">
                OUR TEAM PHILOSOPHY
              </h2>

              <div className="w-20 h-0.5 bg-accent-gold mx-auto" />

              <div className="space-y-6 text-muted-foreground font-body text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                <p>
                  At <strong className="text-foreground">THE BILLIONAIRE’S AQUA™</strong>, we believe
                  a strong brand is not built by one person alone. It is built by people who take
                  ownership of their responsibilities, bring their ideas forward and work together
                  towards a common vision.
                </p>
                <p>
                  Each member of our team has a different area of expertise, but every role
                  contributes to the same larger mission, building a premium Indian brand with the
                  ambition to grow from Pune to India and eventually to the world.
                </p>
              </div>

              {/* Bold Closing Motto */}
              <div className="pt-6 border-t border-hairline/80">
                <p className="font-display text-lg md:text-2xl tracking-[0.22em] text-accent-gold uppercase font-bold drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                  Different Skills. Different Responsibilities. One Team. One Vision.
                </p>
              </div>

              {/* 3 Core Execution Pillars */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 text-left">
                <div className="p-6 bg-black/50 border border-hairline rounded-2xl space-y-2">
                  <Award className="size-5 text-accent-gold" />
                  <h4 className="font-display text-sm tracking-[0.15em] text-foreground uppercase font-bold">
                    Individual Ownership
                  </h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    Every team member owns their domain with autonomy, precision, and unwavering
                    accountability.
                  </p>
                </div>
                <div className="p-6 bg-black/50 border border-hairline rounded-2xl space-y-2">
                  <Zap className="size-5 text-accent-gold" />
                  <h4 className="font-display text-sm tracking-[0.15em] text-foreground uppercase font-bold">
                    Speed &amp; Adaptability
                  </h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    Rapid execution from research and client calls to viral digital campaigns and
                    retail expansion.
                  </p>
                </div>
                <div className="p-6 bg-black/50 border border-hairline rounded-2xl space-y-2">
                  <Users className="size-5 text-accent-gold" />
                  <h4 className="font-display text-sm tracking-[0.15em] text-foreground uppercase font-bold">
                    Unified Ambition
                  </h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    Standing as one family dedicated to achieving our ₹5,000 Crore milestone and
                    global recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CAREERS & COLLABORATION CTA                                    */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-10 max-w-[1400px] mx-auto mt-20 text-center space-y-6">
          <div className="p-8 md:p-12 rounded-2xl border border-hairline bg-black/30 backdrop-blur-sm max-w-3xl mx-auto space-y-4">
            <h3 className="font-display text-xl md:text-2xl tracking-[0.15em] text-foreground uppercase font-bold">
              Want to Join The Billionaire&apos;s Aqua Family?
            </h3>
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
              We are constantly seeking exceptional minds in brand storytelling, supply chain,
              hydrology, sales, and community building.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="/#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold text-black font-body text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105"
              >
                Partner With Us
                <ChevronRight className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/thebillionairesaqua.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline bg-black/40 text-foreground font-body text-xs tracking-[0.2em] uppercase hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                Follow On Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* FULL BIO DETAIL MODAL                                                     */}
      {/* ========================================================================= */}
      {activeModalMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActiveModalMember(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-950 border border-accent-gold/50 rounded-3xl p-6 md:p-10 text-foreground shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalMember(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-accent-gold hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center border-b border-hairline pb-6">
              <div className="size-24 rounded-2xl overflow-hidden border border-accent-gold/40 shrink-0">
                <img
                  src={activeModalMember.image}
                  alt={activeModalMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="font-display text-[0.65rem] tracking-[0.25em] text-accent-gold uppercase font-bold">
                  {activeModalMember.department}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-[0.06em] uppercase">
                  {activeModalMember.name}
                </h3>
                <p className="font-body text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  {activeModalMember.role}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-display text-xs tracking-[0.25em] text-accent-gold uppercase font-bold mb-2">
                  Complete Profile &amp; Role Mandate
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {activeModalMember.bio}
                </p>
              </div>

              <div>
                <h4 className="font-display text-xs tracking-[0.25em] text-accent-gold uppercase font-bold mb-3">
                  Key Strategic Contributions
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeModalMember.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-black/60 border border-hairline rounded-xl flex items-center gap-2.5 font-body text-xs text-foreground/90"
                    >
                      <span className="size-1.5 rounded-full bg-accent-gold shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-hairline flex items-center justify-between">
                <span className="font-display text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  The Billionaire&apos;s Aqua™ • Pune
                </span>
                <button
                  onClick={() => setActiveModalMember(null)}
                  className="px-5 py-2 rounded-full bg-accent-gold text-black font-body text-xs tracking-wider uppercase font-bold hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
