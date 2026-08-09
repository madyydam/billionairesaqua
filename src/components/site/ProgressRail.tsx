import { TIMELINE } from "@/config/productAnimation";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { scrollToSection } from "@/components/SmoothScrollProvider";
import { cn } from "@/lib/utils";

const LABELS: Record<string, string> = {
  hero: "Hero",
  intro: "Introduction",
  focus: "Focus",
  details: "Details",
  reveal: "Reveal",
  angles: "Every angle",
  technology: "Technology",
  moment: "The moment",
  cta: "Get started",
};

/** Minimal scene rail, mirroring the dot navigation in the reference. */
export function ProgressRail() {
  const progress = useScrollProgress(200);

  return (
    <nav
      aria-label="Scene navigation"
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
    >
      {TIMELINE.map((scene, i) => {
        const next = TIMELINE[i + 1]?.at ?? 1.0001;
        const active = progress >= scene.at - 0.001 && progress < next;
        return (
          <button
            key={scene.id}
            onClick={() => scrollToSection(scene.id)}
            aria-label={`Go to ${LABELS[scene.id] ?? scene.id}`}
            aria-current={active ? "true" : undefined}
            className="group flex min-h-6 items-center justify-center"
          >
            <span
              className={cn(
                "size-1.5 rounded-full transition-all duration-500",
                active
                  ? "scale-150 bg-foreground"
                  : "bg-muted-foreground/40 group-hover:bg-accent-gold",
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
