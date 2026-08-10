import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared section shell. `scene` links the block to a keyframe in
 * src/config/productAnimation.ts — the scroll driver reads these anchors.
 */
export function Section({
  id,
  scene,
  children,
  className,
  labelledBy,
}: {
  id: string;
  scene?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      data-scene={scene ?? id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative z-10 flex min-h-screen w-full items-center px-6 py-24 md:px-10",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1600px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-hairline px-4 py-1.5 font-body text-[0.62rem] tracking-[0.32em] text-muted-foreground uppercase",
        className,
      )}
    >
      <span className="size-1 rounded-full bg-accent-gold" aria-hidden="true" />
      {children}
    </span>
  );
}

export function Display({
  children,
  className,
  as: Tag = "h2",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  const classes = cn(
    "font-display text-[clamp(2.35rem,6.4vw,6.4rem)] leading-[0.95] tracking-[-0.03em] text-foreground uppercase",
    className,
  );
  if (Tag === "h1")
    return (
      <h1 id={id} className={classes}>
        {children}
      </h1>
    );
  if (Tag === "h3")
    return (
      <h3 id={id} className={classes}>
        {children}
      </h3>
    );
  return (
    <h2 id={id} className={classes}>
      {children}
    </h2>
  );
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "max-w-[42ch] font-body text-[0.95rem] leading-relaxed text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
