import { scrollToSection } from "@/components/SmoothScrollProvider";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline bg-black/60 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-6 mb-16">
          {/* Left Column: Stacked Logos (Up & Down) + Brand Text */}
          <div className="md:col-span-2 space-y-6">
            {/* Logos Stacked Up and Down */}
            <div className="space-y-4">
              <img
                src="/logos/billionaires-aqua-emblem.webp"
                alt="The Billionaire's Aqua Official Brand Emblem"
                className="h-32 md:h-40 w-auto object-contain rounded-2xl border border-accent-gold/40 bg-emerald-950/40 p-3 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              />
              <img
                src="/logos/suraj-ishwar-group.webp"
                alt="The Suraj Ishwar Group"
                className="h-20 md:h-24 w-auto object-contain rounded-xl border border-accent-gold/25 bg-black/50 p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              />
            </div>

            {/* Brand Text */}
            <div className="space-y-3 pt-2">
              <p className="font-editorial font-bold text-lg md:text-xl tracking-wide text-white uppercase">
                <span className="font-display text-xs tracking-[0.32em] text-accent-gold block mb-0.5">THE</span>
                BILLIONAIRE&apos;S <span className="font-display text-xs tracking-[0.32em] text-accent-gold inline-block ml-1">AQUA</span>
              </p>
              <p className="font-body text-[0.72rem] tracking-[0.24em] text-accent-gold uppercase font-medium">
                More Than Water. A Standard.
              </p>
              <p className="font-body text-[0.68rem] leading-relaxed text-muted-foreground uppercase max-w-xs">
                Premium packaged drinking water crafted for quality, consistency, and a bigger vision.
              </p>
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

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-hairline pt-10 gap-6">
          <p className="font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
            © 2026 THE BILLIONAIRE&apos;S AQUA. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
