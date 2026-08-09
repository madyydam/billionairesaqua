import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScrollProvider";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Product", id: "intro" },
  { label: "Technology", id: "technology" },
  { label: "Details", id: "details" },
  { label: "About", id: "benefits" },
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
          <span className="font-display text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase">
            The
          </span>
          <span className="font-display text-sm tracking-[0.3em] text-foreground uppercase">
            Billionaire&apos;s Aqua
          </span>
        </button>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="group relative font-body text-[0.72rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-gold transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => go("cta")}
            className="rounded-full border border-hairline px-6 py-2.5 font-body text-[0.7rem] tracking-[0.2em] text-foreground uppercase transition-colors duration-500 hover:border-accent-gold hover:text-accent-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Shop now
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex min-h-11 min-w-11 items-center justify-center text-foreground md:hidden"
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
              onClick={() => go("cta")}
              className="mt-6 rounded-full bg-foreground py-4 font-body text-[0.72rem] tracking-[0.22em] text-background uppercase"
            >
              Shop now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
