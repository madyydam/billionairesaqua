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
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-700"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <button
          onClick={() => go("hero")}
          className="flex items-baseline gap-2 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="The Billionaire's Aqua — back to top"
        >
          <span className="font-display text-[0.6rem] tracking-[0.4em] text-white/50 uppercase">
            The
          </span>
          <span className="font-display text-sm tracking-[0.3em] text-white uppercase">
            Billionaire&apos;s Aqua
          </span>
        </button>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="group relative font-body text-[0.72rem] tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white focus-visible:outline-none"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00B3C6] transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="rounded-full border border-white/25 px-6 py-2.5 font-body text-[0.7rem] tracking-[0.2em] text-white uppercase transition-colors duration-500 hover:border-[#00B3C6] hover:text-[#00B3C6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Enquire now
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex min-h-11 min-w-11 items-center justify-center text-white transition-colors duration-350 md:hidden"
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
