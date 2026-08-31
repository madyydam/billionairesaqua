import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { scrollToSection } from "@/components/SmoothScrollProvider";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", id: "hero", to: "/" },
  { label: "Our Story", id: "intro", to: "/#intro" },
  { label: "Founder", id: "founder", to: "/founder" },
  { label: "Our Team", id: "team", to: "/team" },
  { label: "Our Water", id: "reveal", to: "/#reveal" },
  { label: "Products", id: "details", to: "/#details" },
  { label: "Quality", id: "technology", to: "/#technology" },
  { label: "Partner With Us", id: "cta", to: "/#cta" },
];

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const isTeamPage = pathname === "/team";
  const isFounderPage = pathname === "/founder";

  const progress = useScrollProgress(60);
  const [open, setOpen] = useState(false);
  const solid = progress > 0.03 || isTeamPage || isFounderPage;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (link: (typeof LINKS)[number]) => {
    setOpen(false);

    if (link.to === "/team") {
      if (isTeamPage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate({ to: "/team" });
      }
      return;
    }

    if (link.to === "/founder") {
      if (isFounderPage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate({ to: "/founder" });
      }
      return;
    }

    if (link.id === "hero") {
      if (pathname !== "/") {
        navigate({ to: "/" });
      } else {
        scrollToSection("hero");
      }
      return;
    }

    // Anchor sections on homepage
    if (pathname !== "/") {
      window.location.href = `/#${link.id}`;
    } else {
      scrollToSection(link.id);
    }
  };

  const goContact = () => {
    setOpen(false);
    if (pathname !== "/") {
      window.location.href = "/#contact";
    } else {
      scrollToSection("contact");
    }
  };

  const goHome = () => {
    setOpen(false);
    if (pathname !== "/") {
      navigate({ to: "/" });
    } else {
      scrollToSection("hero");
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid
          ? "border-b border-hairline bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 md:px-8 md:py-3.5">
        <button
          onClick={goHome}
          suppressHydrationWarning
          className="flex items-center gap-1.5 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group cursor-pointer"
          aria-label="The Billionaire's Aqua home"
        >
          <span className="font-brand font-bold text-sm md:text-[0.95rem] tracking-[0.18em] text-white uppercase">
            THE
          </span>
          <span className="font-brand font-bold text-sm md:text-[0.95rem] tracking-[0.18em] text-white uppercase">
            BILLIONAIRE&apos;S
          </span>
          <span className="font-brand font-bold text-sm md:text-[0.95rem] tracking-[0.18em] text-white uppercase">
            AQUA
          </span>
        </button>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:gap-7 md:flex">
          {LINKS.map((link) => {
            const isActive =
              link.to === "/team"
                ? isTeamPage
                : link.to === "/founder"
                  ? isFounderPage
                  : !isTeamPage && !isFounderPage && link.id === "hero";
            return (
              <button
                key={link.id}
                suppressHydrationWarning
                onClick={() => go(link)}
                className={cn(
                  "group relative font-body text-[0.64rem] tracking-[0.16em] uppercase transition-colors focus-visible:outline-none focus-visible:text-foreground cursor-pointer",
                  isActive
                    ? "text-accent-gold font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-accent-gold transition-all duration-500",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </button>
            );
          })}
          <button
            onClick={goContact}
            suppressHydrationWarning
            className="rounded-full border border-hairline px-4 py-1.5 md:px-4.5 md:py-1.5 font-body text-[0.62rem] tracking-[0.16em] text-foreground uppercase transition-colors duration-500 hover:border-accent-gold hover:text-accent-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
          >
            Enquire now
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          suppressHydrationWarning
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex min-h-9 min-w-9 items-center justify-center text-foreground md:hidden cursor-pointer"
        >
          {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="flex flex-col px-6 py-5">
            {LINKS.map((link) => {
              const isActive =
                link.to === "/team"
                  ? isTeamPage
                  : link.to === "/founder"
                    ? isFounderPage
                    : false;
              return (
                <button
                  key={link.id}
                  onClick={() => go(link)}
                  className={cn(
                    "border-b border-hairline py-3.5 text-left font-display text-base tracking-[0.08em] uppercase transition-colors",
                    isActive ? "text-accent-gold font-semibold" : "text-foreground",
                  )}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={goContact}
              className="mt-4 rounded-full bg-foreground py-3 font-body text-[0.66rem] tracking-[0.2em] text-background uppercase"
            >
              Enquire now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
