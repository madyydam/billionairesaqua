import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import {
  Sparkles,
  Users,
  ArrowRight,
  Compass,
  Zap,
  Award,
  ChevronRight,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: "leadership" | "brand" | "sales" | "research" | "community";
  image: string;
  bio: string;
  shortBio?: string;
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
    role: "Head of Market Intelligence & Research",
    department: "Market Intelligence & Research",
    category: "leadership",
    image: "/team/Vipul Sachin Yadav.jpeg",
    shortBio: "Research. Intelligence. Insights. Strategic Growth.",
    bio: "Vipul Sachin Yadav serves as the Head of Market Intelligence & Research at THE BILLIONAIRE’S AQUA™, leading the company’s market intelligence, research and business analytics function.\n\nWith experience in market research and business analytics, Vipul focuses on understanding market trends, customer behaviour, competitor activity and emerging business opportunities.\n\nHis responsibilities include market and consumer research, competitor and pricing analysis, data collection, business analytics, market intelligence and research-based strategic insights.\n\nIn his leadership role, Vipul is responsible for transforming research and data into meaningful insights and actionable recommendations that support the company’s strategic planning and growth.\n\nHis work contributes to building a research-driven and informed approach to the growth of THE BILLIONAIRE’S AQUA™.",
    highlights: [
      "Market & Consumer Research",
      "Competitor & Pricing Elasticity Analysis",
      "Business Analytics & Data Intelligence",
      "Research-Driven Strategic Insights",
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
  {
    id: "atharva-shirke",
    name: "Atharva Shirke",
    role: "Chief of Public Relations",
    department: "Public Relations & Communications",
    category: "leadership",
    image: "/team/Atharva Satish Shirke.jpeg",
    shortBio: "Building Relationships. Shaping Perception. Representing the Vision.",
    bio: "Atharva Shirke serves as the Chief of Public Relations at THE BILLIONAIRE’S AQUA™, leading the company’s Public Relations and Corporate Communications function.\n\nWith his involvement in business research and organizational activities, Atharva has developed an understanding of the brand, its vision and its business direction. In his current leadership role, he focuses on building professional relationships, strengthening the company’s public presence, coordinating corporate communications and supporting the brand’s reputation and external image.\n\nHis responsibilities include PR strategy, media relations, corporate communication, stakeholder relationships, event communication and public representation of the brand.\n\nAtharva’s role is centred on ensuring that every external interaction reflects the professionalism, vision and standards of THE BILLIONAIRE’S AQUA™.",
    highlights: [
      "PR Strategy & Media Relations",
      "Corporate Communications & Brand Voice",
      "Stakeholder & Professional Relationships",
      "Public Representation & Event Communication",
    ],
  },
  {
    id: "shravani-sardal",
    name: "Shravani Sardal",
    role: "Business Development & Brand Associate",
    department: "Business Development & Brand",
    category: "sales",
    image: "/team/Shravani Sardal.jpeg",
    bio: "Shravani is a part of The Billionaire’s Aqua team, contributing towards the brand’s business development, growth and market expansion. Her role focuses on identifying new opportunities, building meaningful connections, supporting collaborations and helping strengthen the brand’s presence in the market. With a growth-oriented mindset and a long-term approach, she aims to contribute not just to the growth of the brand today, but to building a strong and sustainable business for tomorrow. Growing with the brand, building relationships, and creating opportunities for what comes next.",
    highlights: [
      "Market Expansion & Growth Initiatives",
      "Strategic Collaborations & Partnerships",
      "Brand Relationship Building",
      "Sustainable Long-Term Business Growth",
    ],
  },
];

const TITLE = "The People Behind The Vision | The Billionaire's Aqua™";
const DESCRIPTION =
  "Behind every ambitious brand is a team of people who bring different skills, perspectives and responsibilities together. Meet the dedicated team building THE BILLIONAIRE'S AQUA™.";

export const Route = createFileRoute("/ourteam")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/ourteam" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/ourteam" }],
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
              name: "SURAJ ISHWAR",
              jobTitle: "FOUNDER, CHAIRMAN & MANAGING DIRECTOR",
            },
          },
        }),
      },
    ],
  }),
});

function TeamPage() {
  const [activeModalMember, setActiveModalMember] = useState<TeamMember | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const device = useDevicePerformance();

  // Handle modal keyboard accessibility & body scroll lock
  useEffect(() => {
    if (!activeModalMember) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalMember(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeModalMember]);

  useEffect(() => {
    if (device.reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero text & metrics staggered entrance
      gsap.fromTo(
        ".hero-anim-item",
        { opacity: 0, y: 30, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );


      // 3. Team cards staggered scroll entrance
      gsap.fromTo(
        ".team-card-animate",
        {
          opacity: 0,
          y: 45,
          scale: 0.94,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid-container",
            start: "top 85%",
            once: true,
          },
        }
      );

      // 4. Philosophy Section entrance on scroll
      gsap.fromTo(
        ".philosophy-section-animate",
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section-animate",
            start: "top 85%",
            once: true,
          },
        }
      );

      // 5. CTA Section entrance on scroll
      gsap.fromTo(
        ".cta-section-animate",
        {
          opacity: 0,
          y: 35,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section-animate",
            start: "top 88%",
            once: true,
          },
        }
      );

      // 6. Background ambient glow parallax on scroll
      gsap.to(".bg-glow-orb-1", {
        y: 160,
        ease: "none",
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      gsap.to(".bg-glow-orb-2", {
        y: -160,
        ease: "none",
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [device.reducedMotion]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#061213] text-foreground selection:bg-accent-gold selection:text-background relative">
      <SmoothScrollProvider reducedMotion={device.reducedMotion} />

      {/* Brand Green Cinematic Atmosphere with scroll parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_10%,rgba(0,168,185,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(6,78,59,0.3),transparent_75%)]" />
        <div className="bg-glow-orb-1 absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-radial from-brand-green/25 via-emerald-950/45 to-transparent blur-3xl opacity-75 will-change-transform" />
        <div className="bg-glow-orb-2 absolute bottom-0 right-0 w-[600px] h-[600px] bg-radial from-brand-green/20 via-emerald-950/40 to-transparent blur-3xl opacity-60 will-change-transform" />
        <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-radial from-brand-green/15 via-emerald-950/25 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="stage-atmosphere" aria-hidden="true" />

      <Nav />

      <main className="relative z-10 pt-24 md:pt-32 pb-20">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO HEADER                                                    */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-10 max-w-[1400px] mx-auto text-center space-y-5">
          <div className="hero-anim-item inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent-gold/40 bg-accent-gold/10 backdrop-blur-md">
            <Sparkles className="size-3 text-accent-gold" />
            <span className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase font-bold">
              THE BILLIONAIRE&apos;S AQUA™
            </span>
          </div>

          <h1 className="hero-anim-item font-display font-bold text-[clamp(2.2rem,5.5vw,4.2rem)] tracking-[0.04em] text-foreground uppercase leading-[1.08] max-w-5xl mx-auto drop-shadow-md">
            THE PEOPLE BEHIND THE VISION
          </h1>

          <div className="hero-anim-item w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto" />

          <p className="hero-anim-item font-body text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto tracking-wide">
            Behind every ambitious brand is a team of people who bring different skills,
            perspectives and responsibilities together. At{" "}
            <span className="text-foreground font-semibold">THE BILLIONAIRE’S AQUA™</span>, each team
            member contributes to a specific part of our journey, from brand building and technology
            to sales, research, customer relationships and business growth.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-anim-item grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-y border-brand-green/30">
            <div className="p-3 bg-[#08181a]/85 border border-brand-green/35 rounded-xl backdrop-blur-md">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">{TEAM_MEMBERS.length}+</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                Core Functional Leads
              </p>
            </div>
            <div className="p-3 bg-[#08181a]/85 border border-brand-green/35 rounded-xl backdrop-blur-md">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">PUNE</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                Headquarters &amp; Hub
              </p>
            </div>
            <div className="p-3 bg-[#08181a]/85 border border-brand-green/35 rounded-xl backdrop-blur-md">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">100%</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                Commitment to Quality
              </p>
            </div>
            <div className="p-3 bg-[#08181a]/85 border border-brand-green/35 rounded-xl backdrop-blur-md">
              <p className="font-display text-xl md:text-2xl font-bold text-accent-gold">₹5,000 CR</p>
              <p className="font-body text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                2030 Brand Target
              </p>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: TEAM DIRECTORY (CLEAN PHOTOS + DETAILS DOWNSIDE + STAGGER)     */}
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
              {TEAM_MEMBERS.length} Members
            </span>
          </div>

          {/* 5 in a row on laptop/desktop (lg:grid-cols-10 with col-span-2), 3 on tablet (sm:grid-cols-3), 2 on mobile (grid-cols-2) */}
          <div className="team-grid-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-10 gap-3 sm:gap-3.5 lg:gap-4">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={member.id}
                className={cn(
                  "team-card-animate group relative flex flex-col justify-between rounded-2xl border border-brand-green/30 bg-[#081719]/90 hover:border-accent-gold/60 backdrop-blur-md overflow-hidden p-3 transition-all duration-400 hover:shadow-[0_0_25px_rgba(0,168,185,0.25)] hover:-translate-y-1.5",
                  "lg:col-span-2",
                  idx === 10 && "lg:col-start-4"
                )}
              >
                {/* Top Section: Clean Photo + Info downside */}
                <div className="space-y-3">
                  {/* Clean Framed Photo */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#040e0f] border border-brand-green/25 group-hover:border-accent-gold/40 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Information Downside of Photo */}
                  <div className="space-y-1.5">
                    {/* Department Tag */}
                    <span className="inline-block px-2 py-0.5 rounded-md text-[0.48rem] sm:text-[0.52rem] tracking-[0.12em] font-display uppercase bg-accent-gold/10 border border-accent-gold/30 text-accent-gold max-w-full truncate font-semibold">
                      {member.department}
                    </span>

                    {/* Member Name */}
                    <h3 className="font-display text-[0.74rem] sm:text-[0.82rem] lg:text-[0.85rem] xl:text-[0.92rem] font-bold tracking-[0.03em] text-foreground uppercase leading-snug line-clamp-2 pt-0.5">
                      {member.name}
                    </h3>

                    {/* Member Role / Title */}
                    <p className="font-body text-[0.54rem] sm:text-[0.58rem] lg:text-[0.6rem] tracking-[0.08em] text-accent-gold uppercase font-semibold line-clamp-2 leading-tight">
                      {member.role}
                    </p>

                    {/* Bio excerpt / short tagline */}
                    <p className="font-body text-[0.66rem] sm:text-[0.72rem] text-muted-foreground leading-relaxed line-clamp-3 pt-0.5">
                      {member.shortBio || member.bio}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-3 mt-2 border-t border-hairline/60">
                  <button
                    onClick={() => setActiveModalMember(member)}
                    className="w-full py-1.5 px-2 rounded-lg border border-accent-gold/30 bg-accent-gold/5 hover:bg-accent-gold hover:text-black font-body text-[0.54rem] sm:text-[0.58rem] tracking-[0.12em] text-accent-gold uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="size-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: OUR TEAM PHILOSOPHY (COMPACT SINGLE-SCREEN VIEW)               */}
        {/* ========================================================================= */}
        <section className="philosophy-section-animate px-6 md:px-10 max-w-[1400px] mx-auto mt-14 md:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-accent-gold/50 bg-gradient-to-b from-neutral-950 via-black to-emerald-950/60 p-6 md:p-8 lg:p-10 text-center shadow-[0_0_60px_rgba(212,175,55,0.15)]">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto space-y-4 sm:space-y-5">
              {/* Badge & Title */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent-gold/50 bg-accent-gold/15 backdrop-blur-md">
                  <Compass className="size-3 text-accent-gold" />
                  <span className="font-display text-[0.62rem] tracking-[0.25em] text-accent-gold uppercase font-bold">
                    GUIDING PRINCIPLES
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.06em] text-foreground uppercase font-bold leading-tight">
                  OUR TEAM PHILOSOPHY
                </h2>
              </div>

              {/* Slogan Banner */}
              <div className="inline-block py-1.5 px-4 rounded-xl border border-accent-gold/40 bg-accent-gold/10 backdrop-blur-sm">
                <p className="font-display text-xs sm:text-sm md:text-base tracking-[0.16em] text-accent-gold uppercase font-bold">
                  Different Skills. Different Responsibilities. One Team. One Vision.
                </p>
              </div>

              {/* Core Narrative */}
              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At <strong className="text-foreground">THE BILLIONAIRE’S AQUA™</strong>, a strong brand is built by people who take ownership of their responsibilities, bring ideas forward, and work together toward a common mission: building a premium Indian brand from Pune to India and eventually to the world.
              </p>

              {/* 3 Core Execution Pillars */}
              <div className="grid sm:grid-cols-3 gap-3 md:gap-4 pt-1 text-left">
                <div className="p-4 bg-black/60 border border-hairline hover:border-accent-gold/40 rounded-xl space-y-1.5 transition-colors">
                  <div className="flex items-center gap-2">
                    <Award className="size-4 text-accent-gold shrink-0" />
                    <h4 className="font-display text-xs sm:text-sm tracking-[0.12em] text-foreground uppercase font-bold">
                      Individual Ownership
                    </h4>
                  </div>
                  <p className="font-body text-[0.68rem] sm:text-xs text-muted-foreground leading-relaxed">
                    Every team member owns their domain with autonomy, precision, and unwavering accountability.
                  </p>
                </div>

                <div className="p-4 bg-black/60 border border-hairline hover:border-accent-gold/40 rounded-xl space-y-1.5 transition-colors">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4 text-accent-gold shrink-0" />
                    <h4 className="font-display text-xs sm:text-sm tracking-[0.12em] text-foreground uppercase font-bold">
                      Speed &amp; Adaptability
                    </h4>
                  </div>
                  <p className="font-body text-[0.68rem] sm:text-xs text-muted-foreground leading-relaxed">
                    Rapid execution across research, client pitching, creative media, and market expansion.
                  </p>
                </div>

                <div className="p-4 bg-black/60 border border-hairline hover:border-accent-gold/40 rounded-xl space-y-1.5 transition-colors">
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-accent-gold shrink-0" />
                    <h4 className="font-display text-xs sm:text-sm tracking-[0.12em] text-foreground uppercase font-bold">
                      Unified Ambition
                    </h4>
                  </div>
                  <p className="font-body text-[0.68rem] sm:text-xs text-muted-foreground leading-relaxed">
                    Standing as one family dedicated to achieving our ₹5,000 Crore milestone and national leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CAREERS & COLLABORATION CTA                                    */}
        {/* ========================================================================= */}
        <section className="cta-section-animate px-6 md:px-10 max-w-[1400px] mx-auto mt-20 text-center space-y-6">
          <div className="p-8 md:p-12 rounded-2xl border border-brand-green/30 bg-[#08181a]/85 backdrop-blur-md max-w-3xl mx-auto space-y-4 shadow-[0_0_40px_rgba(0,168,185,0.12)]">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-green/40 bg-[#061213]/80 text-foreground font-body text-xs tracking-[0.2em] uppercase hover:border-accent-gold hover:text-accent-gold transition-colors"
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
                <p className="font-body text-xs tracking-[0.15em] text-muted-foreground uppercase font-semibold">
                  {activeModalMember.role}
                </p>
                {activeModalMember.shortBio && (
                  <p className="font-body text-xs italic text-accent-gold/90 pt-1">
                    &ldquo;{activeModalMember.shortBio}&rdquo;
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-display text-xs tracking-[0.25em] text-accent-gold uppercase font-bold mb-2">
                  Complete Profile &amp; Role Mandate
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
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
