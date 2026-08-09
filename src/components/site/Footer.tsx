import { scrollToSection } from "@/components/SmoothScrollProvider";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.3em] text-foreground uppercase">
            The Billionaire&apos;s Aqua
          </p>
          <p className="mt-3 font-body text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
            Packaged drinking water · 500ml
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {["intro", "technology", "details", "cta"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="font-body text-[0.66rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {id}
            </button>
          ))}
        </nav>

        <p className="font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
