import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScrollProvider";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", id: "hero" },
  { label: "Our Story", id: "intro" },
  { label: "Our Water", id: "reveal" },
  { label: "Products", id: "details" },
  { label: "Quality", id: "technology" },
  { label: "Partner With Us", id: "cta" },
];

export function Nav() {
  const progress = useScrollProgress(60);
  const [open, setOpen] = useState(false);
  const solid = progress > 0.03;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  const textThemeClass = solid
    ? "text-muted-foreground hover:text-foreground focus-visible:text-foreground"
    : "text-[#2D3738]/70 hover:text-[#2D3738] focus-visible:text-[#2D3738]";

  const textForegroundThemeClass = solid ? "text-foreground" : "text-[#2D3738]";

  const buttonThemeClass = solid
    ? "border-hairline text-foreground hover:border-accent-gold hover:text-accent-gold"
    : "border-[#2D3738]/20 text-[#2D3738] hover:border-brand-green hover:text-brand-green";

  const brandTheClass = solid ? "text-muted-foreground" : "text-[#2D3738]/50";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid
          ? "border-b border-hairline bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <button
          onClick={() => go("hero")}
          className="flex items-baseline gap-2 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="The Billionaire's Aqua — back to top"
        >
          <span
            className={cn("font-display text-[0.6rem] tracking-[0.4em] uppercase", brandTheClass)}
          >
            The
          </span>
          <span
            className={cn(
              "font-display text-sm tracking-[0.3em] uppercase",
              textForegroundThemeClass,
            )}
          >
            Billionaire&apos;s Aqua
          </span>
        </button>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={cn(
                "group relative font-body text-[0.72rem] tracking-[0.2em] uppercase transition-colors focus-visible:outline-none",
                textThemeClass,
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 group-hover:w-full",
                  solid ? "bg-accent-gold" : "bg-brand-green",
                )}
              />
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className={cn(
              "rounded-full px-6 py-2.5 font-body text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              buttonThemeClass,
            )}
          >
            Enquire now
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "flex min-h-11 min-w-11 items-center justify-center transition-colors duration-350 md:hidden",
            textForegroundThemeClass,
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="flex flex-col px-6 py-6">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="border-b border-hairline py-5 text-left font-display text-xl tracking-[0.08em] text-foreground uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-6 rounded-full bg-foreground py-4 font-body text-[0.72rem] tracking-[0.22em] text-background uppercase"
            >
              Enquire now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
