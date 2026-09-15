import { useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";

interface MaintenanceViewProps {
  notice?: string | null;
  onRetry: () => Promise<void> | void;
}

export function MaintenanceView({ notice, onRetry }: MaintenanceViewProps) {
  const [retrying, setRetrying] = useState(false);

  const handleRetry = async () => {
    setRetrying(true);
    try {
      await onRetry();
    } finally {
      setTimeout(() => setRetrying(false), 500);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#070709] text-foreground px-4 py-12 overflow-hidden selection:bg-accent-gold selection:text-black">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[550px] bg-radial from-accent-gold/15 via-emerald-950/15 to-transparent blur-3xl opacity-75 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-accent-gold/5 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Main Luxury Glass Card */}
      <div className="relative z-10 w-full max-w-xl text-center space-y-6 rounded-3xl border border-accent-gold/30 bg-black/80 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_0_80px_rgba(212,175,55,0.14)]">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <img
            src="/logos/the-b-aqua-tagline.webp"
            alt="The Billionaire's Aqua"
            className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          />
        </div>

        {/* Top Status Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/40 bg-accent-gold/10">
          <Sparkles className="size-3.5 text-accent-gold" />
          <span className="font-display text-[0.68rem] tracking-[0.25em] text-accent-gold uppercase font-bold">
            INFRASTRUCTURE STATUS • SCHEDULED MAINTENANCE
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-[0.08em] text-foreground uppercase">
            ARCHITECTURAL ENHANCEMENT
          </h1>
          <p className="font-body text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            {notice ||
              "The Billionaire's Aqua platform is undergoing scheduled enhancements to ensure uncompromising excellence. Full operational capability will resume momentarily."}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3 flex justify-center">
          <button
            onClick={handleRetry}
            disabled={retrying}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-accent-gold text-black font-body text-xs tracking-[0.18em] uppercase font-bold transition-all hover:bg-accent-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`size-3.5 ${retrying ? "animate-spin" : ""}`} />
            {retrying ? "Checking System Status..." : "Reconnect System"}
          </button>
        </div>

        {/* Footer Subtext */}
        <div className="pt-4 border-t border-white/10 text-[0.68rem] tracking-[0.15em] text-muted-foreground/60 uppercase">
          The Billionaire's Aqua Platform
        </div>
      </div>
    </div>
  );
}
