import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C7Ak-ZDS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Custom water-drop cursor.
* – Main drop follows the pointer instantly
* – A soft ring trails behind with damping
* – Ripple burst on click
* – Scales up when hovering buttons / links
* – Default cursor hidden via global style injected here
*/
function WaterCursor() {
	const dropRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	const rippleContainer = (0, import_react.useRef)(null);
	const pos = (0, import_react.useRef)({
		x: -200,
		y: -200
	});
	const ring = (0, import_react.useRef)({
		x: -200,
		y: -200
	});
	const raf = (0, import_react.useRef)(0);
	const hovered = (0, import_react.useRef)(false);
	const animate = (0, import_react.useCallback)(() => {
		const dx = pos.current.x - ring.current.x;
		const dy = pos.current.y - ring.current.y;
		ring.current.x += dx * .12;
		ring.current.y += dy * .12;
		const drop = dropRef.current;
		const ringEl = ringRef.current;
		if (drop) drop.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translateX(-50%) translateY(-50%)`;
		if (ringEl) ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translateX(-50%) translateY(-50%)`;
		raf.current = requestAnimationFrame(animate);
	}, []);
	(0, import_react.useEffect)(() => {
		const style = document.createElement("style");
		style.id = "water-cursor-hide";
		style.textContent = `*, *::before, *::after { cursor: none !important; }`;
		document.head.appendChild(style);
		const onMove = (e) => {
			pos.current.x = e.clientX;
			pos.current.y = e.clientY;
		};
		const onEnter = (e) => {
			const t = e.target;
			if (t.tagName === "BUTTON" || t.tagName === "A" || t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.closest("button") || t.closest("a")) {
				hovered.current = true;
				dropRef.current?.classList.add("water-cursor--hover");
				ringRef.current?.classList.add("water-cursor__ring--hover");
			}
		};
		const onLeave = () => {
			hovered.current = false;
			dropRef.current?.classList.remove("water-cursor--hover");
			ringRef.current?.classList.remove("water-cursor__ring--hover");
		};
		const onClick = (e) => {
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
	function spawnRipple(x, y) {
		if (!rippleContainer.current) return;
		const el = document.createElement("div");
		el.className = "water-ripple";
		el.style.left = `${x}px`;
		el.style.top = `${y}px`;
		rippleContainer.current.appendChild(el);
		el.addEventListener("animationend", () => el.remove(), { once: true });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
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
          transform: scale(1.55);
          filter: drop-shadow(0 4px 14px rgba(0,179,198,0.85));
        }

        /* ── Trailing ring ── */
        .water-cursor__ring {
          position: fixed;
          top: 0; left: 0;
          z-index: 99998;
          pointer-events: none;
          will-change: transform;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(0,179,198,0.45);
          transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease;
        }
        .water-cursor__ring--hover {
          width: 64px; height: 64px;
          border-color: rgba(0,179,198,0.8);
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
      ` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: ringRef,
			className: "water-cursor__ring",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dropRef,
			className: "water-cursor",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 28 36",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M14 2 C14 2 3 14 3 22 C3 28.627 7.925 34 14 34 C20.075 34 25 28.627 25 22 C25 14 14 2 14 2Z",
					fill: "rgba(0,179,198,0.18)",
					stroke: "rgba(0,179,198,0.9)",
					strokeWidth: "1.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "10.5",
					cy: "17",
					rx: "2.5",
					ry: "4.5",
					fill: "rgba(255,255,255,0.45)",
					transform: "rotate(-20 10.5 17)"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: rippleContainer,
			"aria-hidden": "true"
		})
	] });
}
var styles_default = "/assets/styles-fyq3gSVL.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "The Billionaire's Aqua"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Manrope:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400..700;1,400..700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaterCursor, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
var $$splitComponentImporter = () => import("./routes-Bxk34Yjs.mjs");
var TITLE = "Billionaire's Aqua | Premium Packaged Drinking Water";
var DESCRIPTION = "Discover THE BILLIONAIRE'S AQUA — a premium packaged drinking water brand built around quality, consistency and a bigger vision. Starting from Pune, Maharashtra.";
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Product",
				name: "The Billionaire's Aqua",
				description: DESCRIPTION,
				category: "Packaged drinking water",
				offers: {
					"@type": "Offer",
					price: "1699",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			})
		}]
	})
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
