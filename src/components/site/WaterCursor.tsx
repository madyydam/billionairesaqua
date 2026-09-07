import { useEffect, useRef } from "react";

/**
 * Custom water-drop cursor.
 * – Main drop follows pointer / touch accurately
 * – Hidden by default (never stuck at 0,0 on mobile or load)
 * – On mobile: appears exactly where the user touches, tracks drag, and fades on release
 * – On desktop: follows pointer, ripples on click, scales on hover
 */
export function WaterCursor() {
  const dropRef = useRef<HTMLDivElement>(null);
  const rippleContainer = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -200, y: -200 });
  const rafId = useRef<number | null>(null);
  const isDirty = useRef(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    // Only inject cursor: none for mouse / fine pointer devices
    let style: HTMLStyleElement | null = null;
    if (isFinePointer) {
      style = document.createElement("style");
      style.id = "water-cursor-hide";
      style.textContent = `*, *::before, *::after { cursor: none !important; }`;
      document.head.appendChild(style);
    }

    const updatePosition = () => {
      rafId.current = null;
      if (dropRef.current) {
        dropRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      isDirty.current = false;
    };

    const scheduleUpdate = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    };

    const showDrop = (x: number, y: number) => {
      pos.current.x = x;
      pos.current.y = y;
      isDirty.current = true;
      scheduleUpdate();
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      dropRef.current?.classList.add("is-active");
    };

    const hideDrop = (delay = 0) => {
      if (delay > 0) {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => {
          dropRef.current?.classList.remove("is-active");
        }, delay);
      } else {
        dropRef.current?.classList.remove("is-active");
      }
    };

    // ── Mouse / Fine Pointer Handlers ──
    const onMouseMove = (e: MouseEvent) => {
      showDrop(e.clientX, e.clientY);
    };

    const onMouseLeave = () => {
      hideDrop(0);
    };

    const onMouseEnter = () => {
      dropRef.current?.classList.add("is-active");
    };

    const onHoverCheck = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (
        t.tagName === "BUTTON" ||
        t.tagName === "A" ||
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.tagName === "SELECT" ||
        t.closest("button") ||
        t.closest("a")
      ) {
        dropRef.current?.classList.add("water-cursor--hover");
      } else {
        dropRef.current?.classList.remove("water-cursor--hover");
      }
    };

    const onClick = (e: MouseEvent) => {
      spawnRipple(e.clientX, e.clientY);
    };

    // ── Touch / Mobile Handlers ──
    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches?.[0];
      if (!touch) return;
      showDrop(touch.clientX, touch.clientY);
      spawnRipple(touch.clientX, touch.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches?.[0];
      if (!touch) return;
      showDrop(touch.clientX, touch.clientY);
    };

    const onTouchEnd = () => {
      // Fade out smoothly once finger is lifted
      hideDrop(350);
    };

    // Attach mouse listeners
    if (isFinePointer) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave, { passive: true });
      document.addEventListener("mouseenter", onMouseEnter, { passive: true });
      window.addEventListener("mouseover", onHoverCheck, { passive: true });
      window.addEventListener("click", onClick, { passive: true });
    }

    // Attach touch listeners for mobile
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      if (style) style.remove();
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);

      if (isFinePointer) {
        window.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mouseenter", onMouseEnter);
        window.removeEventListener("mouseover", onHoverCheck);
        window.removeEventListener("click", onClick);
      }

      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

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
          will-change: transform, opacity;
          opacity: 0;
          transform: translate3d(-200px, -200px, 0) translate(-50%, -50%);
          transition: width 0.25s ease, height 0.25s ease, opacity 0.3s ease;
        }
        .water-cursor.is-active {
          opacity: 1;
        }
        .water-cursor svg {
          width: 28px;
          height: 34px;
          filter: drop-shadow(0 2px 8px rgba(0,168,185,0.6));
          transition: transform 0.25s ease, filter 0.25s ease;
        }
        .water-cursor--hover svg {
          transform: scale(1.45);
          filter: drop-shadow(0 4px 16px rgba(0,168,185,0.95));
        }

        /* ── Click / Touch ripple ── */
        .water-ripple {
          position: fixed;
          top: 0; left: 0;
          z-index: 99997;
          pointer-events: none;
          width: 8px; height: 8px;
          margin-left: -4px; margin-top: -4px;
          border-radius: 50%;
          border: 1.5px solid rgba(0,168,185,0.75);
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
            fill="rgba(0,45,65,0.35)"
            stroke="rgba(0,168,185,0.92)"
            strokeWidth="1.5"
          />
          {/* Inner highlight */}
          <ellipse
            cx="10.5"
            cy="17"
            rx="2.5"
            ry="4.5"
            fill="rgba(255,255,255,0.45)"
            transform="rotate(-20 10.5 17)"
          />
        </svg>
      </div>

      {/* Ripple spawn container */}
      <div ref={rippleContainer} aria-hidden="true" />
    </>
  );
}
