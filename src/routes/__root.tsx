import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { WaterCursor } from "@/components/site/WaterCursor";
import { Sparkles, Home } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-12 overflow-hidden selection:bg-accent-gold selection:text-background">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[500px] bg-radial from-accent-gold/15 via-emerald-950/20 to-transparent blur-3xl opacity-70 pointer-events-none" />
      </div>

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-lg text-center space-y-5 rounded-3xl border border-accent-gold/30 bg-black/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_60px_rgba(212,175,55,0.12)]">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent-gold/40 bg-accent-gold/10">
          <Sparkles className="size-3 text-accent-gold" />
          <span className="font-display text-[0.62rem] tracking-[0.25em] text-accent-gold uppercase font-bold">
            ERROR 404 • NOT FOUND
          </span>
        </div>

        {/* Cartoon Image at the Center */}
        <div className="relative my-3 flex justify-center items-center">
          <div className="absolute bottom-2 w-44 h-10 bg-accent-gold/25 rounded-full blur-xl pointer-events-none" />
          <img
            src="/404-cartoon.png"
            alt="Mike Wazowski 404 Not Found"
            className="relative z-10 w-48 sm:w-56 md:w-60 h-auto max-h-[300px] object-contain mx-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] select-none transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-[0.06em] text-foreground uppercase">
            PAGE NOT FOUND
          </h1>
          <p className="font-body text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
            The page you are looking for has evaporated, been relocated, or never existed in this realm.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent-gold text-black font-body text-xs tracking-[0.16em] uppercase font-bold transition-all hover:bg-accent-gold-light hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            <Home className="size-3.5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "root_error_boundary" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Billionaire's Aqua" },
      { property: "og:image", content: "/logos/the-b-aqua-tagline.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logos/the-b-aqua-tagline.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Antonio:wght@400;500;600;700&family=Manrope:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400..700;1,400..700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", href: "/logos/the-b-aqua-tagline.webp", type: "image/webp" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <WaterCursor />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Analytics />
    </QueryClientProvider>
  );
}
