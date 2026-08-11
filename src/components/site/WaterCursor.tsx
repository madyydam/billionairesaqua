import { useEffect, useRef, useCallback } from "react";

/**
 * Custom water-drop cursor.
 * – Main drop follows the pointer instantly
 * – A soft ring trails behind with damping
 * – Ripple burst on click
 * – Scales up when hovering buttons / links
 * – Default cursor hidden via global style injected here
 */
export function WaterCursor() {
  const dropRef = useRef<HTMLDivElement>(null);
  const rippleContainer = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const hovered = useRef(false);

  const animate = useCallback(() => {
    const drop = dropRef.current;
    if (drop) {
      drop.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translateX(-50%) translateY(-50%)`;
    }
    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Inject global cursor:none
    const style = document.createElement("style");
    style.id = "water-cursor-hide";
    style.textContent = `*, *::before, *::after { cursor: none !important; }`;
    document.head.appendChild(style);

    const onMove = (e: PointerEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "BUTTON" ||
        t.tagName === "A" ||
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.tagName === "SELECT" ||
        t.closest("button") ||
        t.closest("a")
      ) {
        hovered.current = true;
        dropRef.current?.classList.add("water-cursor--hover");
      }
    };

    const onLeave = () => {
      hovered.current = false;
      dropRef.current?.classList.remove("water-cursor--hover");
    };

    const onClick = (e: MouseEvent) => {
      spawnRipple(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mouseover", onEnter, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    raf.current = requestAnimationFrame(animate);

    return () => {
      style.remove();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  function spawnRipple(x: number, y: number) {
    if (!rippleContainer.current) return;
    const el = document.createElement("div");
    el.className = "water-ripple";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    rippleContainer.current.appendChild(el);
    el.addEventListener("animationend", () => el.remove(), { once: true });
  }

  return (
    <>
      <style>{`
        /* ── Main water drop ── */
        .water-cursor {
          position: fixed;
          top: 0; left: 0;
          z-index: 99999;
          pointer-events: none;
          will-change: transform;
          transition: width 0.25s ease, height 0.25s ease;
        }
        .water-cursor svg {
          width: 28px;
          height: 34px;
          filter: drop-shadow(0 2px 6px rgba(0,179,198,0.55));
          transition: transform 0.25s ease, filter 0.25s ease;
        }
        .water-cursor--hover svg {
          transform: scale(1.45);
          filter: drop-shadow(0 4px 14px rgba(0,179,198,0.85));
        }

        /* ── Click ripple ── */
        .water-ripple {
          position: fixed;
          top: 0; left: 0;
          z-index: 99997;
          pointer-events: none;
          width: 8px; height: 8px;
          margin-left: -4px; margin-top: -4px;
          border-radius: 50%;
          border: 1.5px solid rgba(0,179,198,0.7);
          animation: water-ripple-expand 0.6s ease-out forwards;
        }
        @keyframes water-ripple-expand {
          from { transform: scale(1); opacity: 1; }
          to   { transform: scale(8); opacity: 0; }
        }
      `}</style>

      {/* Main water droplet */}
      <div ref={dropRef} className="water-cursor" aria-hidden="true">
        <svg viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Drop outer shape */}
          <path
            d="M14 2 C14 2 3 14 3 22 C3 28.627 7.925 34 14 34 C20.075 34 25 28.627 25 22 C25 14 14 2 14 2Z"
            fill="rgba(0,179,198,0.18)"
            stroke="rgba(0,179,198,0.9)"
            strokeWidth="1.5"
          />
          {/* Inner highlight */}
          <ellipse
            cx="10.5"
            cy="17"
            rx="2.5"
            ry="4.5"
            fill="rgba(255,255,255,0.55)"
            transform="rotate(-20 10.5 17)"
          />
        </svg>
      </div>

      {/* Ripple spawn container */}
      <div ref={rippleContainer} aria-hidden="true" />
    </>
  );
}
