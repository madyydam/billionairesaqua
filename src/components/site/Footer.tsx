import { scrollToSection } from "@/components/SmoothScrollProvider";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline bg-black/60 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-6 mb-16">
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

            {/* Brand Tagline Logo underneath */}
            <div className="pt-1">
              <img
                src="/logos/the-b-aqua-tagline.webp"
                alt="The Billionaire's Aqua Logo with Tagline"
                className="h-32 md:h-44 w-auto object-contain rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.2)]"
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
                { label: "Our Water", id: "reveal" },
                { label: "Quality", id: "technology" },
                { label: "Products", id: "details" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
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
                    onClick={() => scrollToSection(item.id)}
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
                    onClick={() => scrollToSection(item.id)}
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
                      onClick={() => scrollToSection("contact")}
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

        {/* Bottom Bar with Centered Emblem Logo */}
        <div className="border-t border-hairline pt-10 flex flex-col items-center gap-6">
          <img
            src="/logos/billionaires-aqua-emblem.webp"
            alt="The Billionaire's Aqua Official Brand Emblem"
            className="h-20 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 pt-4 border-t border-hairline/40">
            <p className="font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
              © 2026 THE BILLIONAIRE&apos;S AQUA. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {[
                { name: "Instagram", href: "#" },
                { name: "Facebook", href: "#" },
                { name: "YouTube", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "Twitter", href: "#" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-accent-gold transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
