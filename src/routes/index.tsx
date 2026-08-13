import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ProductSceneLazy } from "@/components/3d/ProductSceneLazy";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { ProgressRail } from "@/components/site/ProgressRail";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { CenterFocus } from "@/components/sections/CenterFocus";
import { ProductDetails } from "@/components/sections/ProductDetails";
import { ProductReveal } from "@/components/sections/ProductReveal";
import { ProductAngles } from "@/components/sections/ProductAngles";
import { Technology } from "@/components/sections/Technology";
import { FullscreenMoment } from "@/components/sections/FullscreenMoment";
import { Benefits } from "@/components/sections/Benefits";
import { CallToAction } from "@/components/sections/CallToAction";

const TITLE = "The Billionaire's Aqua | Premium Packaged Drinking Water";
const DESCRIPTION =
  "Discover THE BILLIONAIRE'S AQUA - A Premium Packaged Drinking Water Brand built around quality, consistency and a bigger vision. Starting from Pune, Maharashtra.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
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
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
});

function Index() {
  const device = useDevicePerformance();
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const scrollProgress = useScrollProgress(100);

  return (
    <>
      <Loader ready={ready && device.ready} />
      <SmoothScrollProvider reducedMotion={device.reducedMotion} />

      {/*
        Hero video background — fixed z-0, rendered BEFORE the WebGL canvas.
        Same z-index but earlier in DOM order means the WebGL Canvas paints
        ON TOP of the video, so the bottle is always in front of the video.
        The 40% black overlay keeps content readable. Fades out on scroll.
      */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ease-out"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 9) }}
        aria-hidden="true"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* 60% dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* persistent WebGL stage — fixed z-0, comes AFTER video so it renders on top */}
      <ProductSceneLazy device={device} onReady={onReady} />
      <div className="stage-atmosphere" aria-hidden="true" />

      <Nav />
      <ProgressRail />

      <main className="relative">
        <Hero ready={ready} />
        <ProductIntro />
        <CenterFocus />
        <ProductDetails />
        <ProductReveal />
        <ProductAngles />
        <Technology />
        <FullscreenMoment />
        <Benefits />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
