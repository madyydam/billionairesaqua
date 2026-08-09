import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ProductSceneLazy } from "@/components/3d/ProductSceneLazy";
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

const TITLE = "The Billionaire's Aqua — Premium 500ml Drinking Water";
const DESCRIPTION =
  "A cinematic 3D product experience for The Billionaire's Aqua: mineral-balanced 500ml packaged drinking water, engineered down to the last detail.";

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

  return (
    <>
      <Loader ready={ready && device.ready} />
      <SmoothScrollProvider reducedMotion={device.reducedMotion} />

      {/* persistent WebGL stage, fixed behind the document */}
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
