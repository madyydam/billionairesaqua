import { scrollToSection } from "@/components/SmoothScrollProvider";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/141063907/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thebillionairesaqua.india/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593097688006",
    icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@THEBILLIONAIRESAQUA",
    icon: Youtube,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/thebbaqua",
    icon: XTwitterIcon,
  },
];

export function Footer() {
  const handleNav = (id: string, href?: string) => {
    if (href) {
      window.location.href = href;
      return;
    }
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    scrollToSection(id);
  };

  return (
    <footer className="relative z-10 border-t border-hairline bg-black/60 px-6 pt-14 pb-8 sm:pb-10 md:px-10 md:pt-16 md:pb-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-6 mb-8 md:mb-10">
          {/* Left Column: Brand Text Block + Tagline Logo underneath */}
          <div className="md:col-span-2 space-y-6">
            {/* Brand Text Block */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                <p className="font-display text-base md:text-lg tracking-[0.25em] text-foreground uppercase font-bold">
                  THE BILLIONAIRE&apos;S AQUA
                </p>
              </div>
              <p className="font-body text-[0.72rem] tracking-[0.24em] text-accent-gold uppercase font-semibold">
                MORE THAN WATER. A STANDARD.
              </p>
              <p className="font-body text-[0.68rem] leading-[1.95] tracking-[0.06em] text-muted-foreground uppercase max-w-xs">
                PREMIUM PACKAGED DRINKING WATER CRAFTED FOR QUALITY, CONSISTENCY, AND A BIGGER VISION.
              </p>
            </div>

            {/* Brand Tagline Logo underneath (reduced ~10-15% in size) */}
            <div className="pt-1">
              <img
                src="/logos/the-b-aqua-footer.jpg"
                alt="The Billionaire's Aqua Logo with Tagline"
                className="h-28 md:h-38 w-auto object-contain rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              />
            </div>
          </div>

          {/* Company Column */}
          <div>
            <p className="font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold">
              Company
            </p>
            <ul className="space-y-4">
              {[
                { label: "Our Story", id: "intro" },
                { label: "Founder's Story", id: "founder", href: "/founder" },
                { label: "Our Team", id: "team", href: "/ourteam" },
                { label: "Our Water", id: "reveal" },
                { label: "Quality", id: "technology" },
                { label: "Products", id: "details" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.id, item.href)}
                    className="font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Column */}
          <div>
            <p className="font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold">
              Business
            </p>
            <ul className="space-y-4">
              {[
                { label: "Distributor", id: "cta" },
                { label: "Corporate Enquiry", id: "contact" },
                { label: "Partner With Us", id: "cta" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <p className="font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold">
              Support
            </p>
            <ul className="space-y-4">
              {[
                { label: "Contact", id: "contact" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <p className="font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold">
              Legal
            </p>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms & Conditions", "Shipping Policy", "Refund Policy"].map(
                (policy) => (
                  <li key={policy}>
                    <button
                      onClick={() => handleNav("contact")}
                      className="font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left"
                    >
                      {policy}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright — Suraj Ishwar Group Logo — Social Links (No horizontal divider line, perfectly centered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-center md:text-left pt-1">
          {/* Left: Copyright */}
          <div className="flex justify-center md:justify-start items-center">
            <p className="font-body text-[0.62rem] md:text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase">
              © 2026 THE BILLIONAIRE&apos;S AQUA. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Center: Suraj Ishwar Group Emblem Logo (Prominent, Perfect Middle) */}
          <div className="flex justify-center items-center justify-self-center">
            <img
              src="/logos/billionaires-aqua-emblem.webp"
              alt="Suraj Ishwar Group - The Billionaire's Aqua Emblem"
              className="h-20 md:h-28 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            />
          </div>

          {/* Right: Social Media Links (Slightly Smaller Icons) */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="text-muted-foreground hover:text-accent-gold transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] focus-visible:outline-none focus-visible:text-accent-gold"
                  >
                    <Icon className="size-4 md:size-[1.125rem]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Very Bottom Credit */}
        <div className="pt-3 pb-2 text-center mt-3 border-t border-white/15">
          <p className="font-body text-[0.66rem] md:text-[0.72rem] tracking-[0.14em] text-muted-foreground">
            Designed and Developed by{" "}
            <a
              href="https://www.instagram.com/futoralift/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-bold underline underline-offset-4 decoration-blue-400/50 hover:decoration-blue-300 transition-colors duration-200"
            >
              FUTORALIFT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

