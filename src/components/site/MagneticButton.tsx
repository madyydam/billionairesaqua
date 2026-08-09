import { useRef, type ButtonHTMLAttributes } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "quiet";
};

/**
 * Premium CTA with a subtle magnetic hover. Motion is skipped when the user
 * prefers reduced motion; the button itself stays a real, focusable <button>.
 */
export function MagneticButton({ variant = "solid", className, children, ...props }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const move = (event: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.18, y: y * 0.24, duration: 0.5, ease: "power3.out" });
  };

  const leave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-body text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11",
        variant === "solid" && "bg-foreground text-background hover:bg-accent-gold",
        variant === "outline" &&
          "border border-hairline text-foreground hover:border-accent-gold hover:text-accent-gold",
        variant === "quiet" &&
          "px-0 text-muted-foreground hover:text-foreground [&>span.line]:hover:w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
