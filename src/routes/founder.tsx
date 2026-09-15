import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Sparkles, ArrowRight, ShieldCheck, Target, Award, Users } from "lucide-react";

const TITLE = "Founder Story | Demonstration Preview";
const DESCRIPTION = "Sample demonstration overview and leadership showcase.";

export const Route = createFileRoute("/founder")({
  component: FounderStoryPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
});

export function FounderStoryPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent-gold selection:text-black">
      <Nav />
      <main className="relative pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto space-y-16">
        {/* Hero Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/10">
            <Sparkles className="size-3 text-accent-gold" />
            <span className="font-display text-[0.65rem] tracking-[0.2em] text-accent-gold uppercase font-bold">
              LEADERSHIP • DEMO PREVIEW
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-wide uppercase text-foreground">
            THE FOUNDER'S JOURNEY
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            This section represents a sample demonstration layout. Real proprietary founder story and corporate milestones are securely synchronized from the private control service.
          </p>
        </section>

        {/* Sample Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Core Vision", desc: "Sample demonstration framework for brand vision.", icon: Target },
            { title: "Quality Standards", desc: "Sample demonstration framework for quality benchmarks.", icon: ShieldCheck },
            { title: "Global Expansion", desc: "Sample demonstration framework for scale and execution.", icon: Award },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                <Icon className="size-6 text-accent-gold" />
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Back Link */}
        <div className="text-center pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold text-black font-body text-xs tracking-wider uppercase font-bold hover:bg-accent-gold-light transition-all"
          >
            Return to Showcase
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
