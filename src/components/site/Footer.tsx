import { scrollToSection } from "@/components/SmoothScrollProvider";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline bg-black/60 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1600px] space-y-16">
        {/* Big Brand Logos Showcase */}
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-hairline/80 pb-16">
          {/* Logo Card 1: The Billionaire's Aqua Emblem */}
          <div className="flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl bg-gradient-to-br from-emerald-950/80 via-black to-neutral-950 border border-accent-gold/40 shadow-[0_0_40px_rgba(212,175,55,0.15)] group hover:border-accent-gold transition-all duration-700">
            <img
              src="/logos/billionaires-aqua-emblem.webp"
              alt="The Billionaire's Aqua Official Brand Emblem"
              className="h-44 md:h-56 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-105"
            />
            <p className="mt-4 font-display text-xs tracking-[0.3em] text-accent-gold uppercase font-semibold">
              Official Brand Trademark
            </p>
          </div>

          {/* Logo Card 2: The Suraj Ishwar Group */}
          <div className="flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl bg-gradient-to-br from-black via-neutral-950 to-black border border-accent-gold/40 shadow-[0_0_40px_rgba(212,175,55,0.15)] group hover:border-accent-gold transition-all duration-700">
            <img
              src="/logos/suraj-ishwar-group.webp"
              alt="The Suraj Ishwar Group — Always Help Others"
              className="h-44 md:h-56 w-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-105"
            />
            <p className="mt-4 font-display text-xs tracking-[0.3em] text-accent-gold uppercase font-semibold">
              Parent Enterprise
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-6 mb-16">
          {/* Logo Column */}
          <div className="md:col-span-2 space-y-4">
            <p className="font-body font-bold text-base tracking-wide text-accent-gold uppercase">
              THE BILLIONAIRE&apos;S AQUA
            </p>
            <p className="font-body text-[0.72rem] tracking-[0.24em] text-accent-gold uppercase">
              More Than Water. A Standard.
            </p>
            <p className="font-body text-[0.65rem] leading-relaxed text-muted-foreground uppercase max-w-xs">
              Premium packaged drinking water crafted for quality, consistency, and a bigger vision.
            </p>
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
