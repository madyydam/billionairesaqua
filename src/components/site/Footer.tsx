import { scrollToSection } from "@/components/SmoothScrollProvider";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5.5" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M19 19h-3v-4.7c0-1.1-.9-2-2-2s-2 .9-2 2V19H9V9.5h3v1.3c.6-.8 1.6-1.3 2.7-1.3 2.2 0 4 1.8 4 4V19zM5 19h3V9.5H5V19zM6.5 7.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="instagram-footer-gradient" cx="20%" cy="105%" r="120%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="12%" stopColor="#fdf497" />
          <stop offset="48%" stopColor="#fd5949" />
          <stop offset="72%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#instagram-footer-gradient)" />
      <rect
        x="4.2"
        y="4.2"
        width="15.6"
        height="15.6"
        rx="4.2"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.9" fill="none" stroke="#FFFFFF" strokeWidth="1.7" />
      <circle cx="16.4" cy="7.6" r="1.05" fill="#FFFFFF" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M15.5 12h-2.5v8h-3.2v-8H7.7v-2.7h2.1V7.5c0-2.3 1.4-3.5 3.5-3.5 1 0 2 .1 2 .1v2.3h-1.2c-1.1 0-1.4.7-1.4 1.4v1.5h2.6l-.4 2.7z"
      />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      />
      <path fill="#FFFFFF" d="M9.6 15.5V8.5l6.4 3.5-6.4 3.5z" />
    </svg>
  );
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5.5" fill="#000000" stroke="#333333" strokeWidth="0.8" />
      <g transform="translate(12 12) scale(0.62) translate(-12 -12)">
        <path
          fill="#FFFFFF"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </g>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/141063907/",
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thebillionairesaqua.india/",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593097688006",
    icon: FacebookIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@THEBILLIONAIRESAQUA",
    icon: YouTubeIcon,
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
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4 text-center md:text-left pt-2 md:pt-1">
          {/* Left / Last on mobile: Copyright */}
          <div className="order-3 md:order-1 flex justify-center md:justify-start items-center">
            <p className="font-body text-[0.62rem] md:text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase">
              © 2026 THE BILLIONAIRE&apos;S AQUA. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Center / First on mobile: Suraj Ishwar Group Emblem Logo (Prominent, Perfect Middle) */}
          <div className="order-1 md:order-2 flex justify-center items-center justify-self-center">
            <img
              src="/logos/billionaires-aqua-emblem.webp"
              alt="Suraj Ishwar Group - The Billionaire's Aqua Emblem"
              className="h-20 md:h-28 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            />
          </div>

          {/* Right / Second on mobile: Social Media Links (Slightly Smaller Icons) */}
          <div className="order-2 md:order-3 flex justify-center md:justify-end items-center">
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
      </div>
    </footer>
  );
}

