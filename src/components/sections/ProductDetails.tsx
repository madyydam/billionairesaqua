import { useState, useEffect } from "react";
import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { scrollToSection } from "@/components/SmoothScrollProvider";

const PRODUCTS = [
  {
    id: "250ml",
    size: "250 ML",
    image: "/products/250ml.webp",
    tagline: "For events, hospitality & on-the-go occasions.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "250 ML",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹10*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "500ml",
    size: "500 ML",
    image: "/products/500ml.webp",
    tagline: "For everyday convenience.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "500 ML",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹15*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "1l",
    size: "1 L",
    image: "/products/1l.webp",
    tagline: "For personal everyday hydration.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "1 L",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹20*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "2l",
    size: "2 L",
    image: "/products/2l.webp",
    tagline: "For sharing and extended use.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "2 L",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹30*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "5l",
    size: "5 L",
    image: "/products/5l.webp",
    tagline: "For larger-volume requirements.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "5 L",
      packaging: "Premium Food-Grade PET (100% Recyclable)",
      mrp: "₹65*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "3 Months from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
  {
    id: "20l",
    size: "20 L",
    image: "/products/20l.webp",
    tagline: "For homes, offices and institutional requirements.",
    specs: {
      product: "Packaged Drinking Water",
      quantity: "20 L",
      packaging: "Premium Food-Grade Polycarbonate Can (Returnable)",
      mrp: "₹90*",
      batch: "Variable (See Neck)",
      date: "Variable (See Neck)",
      expiry: "30 Days from date of packaging",
      bis: "IS 14543 (Pending Certification)",
      fssai: "Under Process",
      manufacturer: "Contract Manufacturer (Verification in progress)",
    },
  },
];

export function ProductDetails() {
  const [activeId, setActiveId] = useState("1l");
  const activeProduct = PRODUCTS.find((p) => p.id === activeId) || PRODUCTS[2]!;

  // Preload all bottle size images on mount for instant zero-latency transitions
  useEffect(() => {
    PRODUCTS.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  return (
    <Section id="details" scene="details" labelledBy="details-title">
      <div className="w-full grid gap-8 lg:grid-cols-12 items-center mt-10">
        {/* Left Column: Title & Size Selector */}
        <div className="lg:col-span-4 space-y-6">
          <Reveal>
            <Eyebrow>Our Collection</Eyebrow>
            <Display
              id="details-title"
              className="mt-4 text-[clamp(2.2rem,4.5vw,3.2rem)] leading-none"
            >
              A size for
              <br />
              every occasion.
            </Display>
            <Body className="mt-4 text-muted-foreground text-sm">
              A size for every occasion. A standard for every sip. Explore our premium packaging
              options.
            </Body>
          </Reveal>

          {/* Size Selector Buttons */}
          <Reveal className="grid grid-cols-3 gap-2.5 pt-2" delay={0.1}>
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`py-3 px-2 text-center rounded-lg border font-display text-[0.72rem] tracking-[0.2em] transition-all duration-500 uppercase focus-visible:outline-none ${
                  activeId === p.id
                    ? "border-accent-gold bg-accent-gold/15 text-accent-gold shadow-[0_0_20px_rgba(212,175,55,0.25)] scale-[1.02]"
                    : "border-hairline bg-transparent text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {p.size}
              </button>
            ))}
          </Reveal>

          {/* Active Product Details Card */}
          <Reveal className="border border-hairline p-5 bg-black/30 rounded-xl backdrop-blur-sm" delay={0.15}>
            <p className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase mb-1">
              Selected Size
            </p>
            <h3 className="font-display text-xl tracking-[0.15em] text-foreground uppercase mb-2">
              {activeProduct.size}
            </h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed mb-5">
              {activeProduct.tagline}
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-2.5 rounded-full border border-accent-gold text-accent-gold font-body text-[0.68rem] tracking-[0.2em] uppercase hover:bg-accent-gold hover:text-background transition-all duration-500 focus-visible:outline-none text-center"
            >
              Enquire {activeProduct.size} Size
            </button>
          </Reveal>
        </div>

        {/* Center Column: Interactive Bottle Image Showcase */}
        <div className="lg:col-span-4 flex justify-center items-center py-4">
          <Reveal className="w-full max-w-sm" delay={0.1}>
            <div className="relative group border border-hairline/80 bg-gradient-to-b from-black/60 via-black/40 to-black/70 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[420px] shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden">
              {/* Radial ambient glow behind bottle */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60 group-hover:opacity-90"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.18) 0%, rgba(10, 40, 25, 0.1) 50%, transparent 80%)"
                }}
              />
              
              {/* Size Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full border border-accent-gold/40 bg-black/60 backdrop-blur-md font-display text-[0.65rem] tracking-[0.2em] text-accent-gold uppercase">
                {activeProduct.size}
              </div>

              {/* Dynamic Bottle Image */}
              <div className="relative z-10 w-full h-[340px] md:h-[370px] flex items-center justify-center py-2">
                <img
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={`The Billionaire's Aqua ${activeProduct.size}`}
                  loading="eager"
                  decoding="async"
                  className="max-h-full max-w-full object-contain transition-all duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] group-hover:scale-105 animate-in fade-in zoom-in-95"
                />
              </div>

              {/* Caption under bottle */}
              <div className="relative z-10 mt-3 text-center">
                <span className="font-display text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase">
                  Official {activeProduct.size} Bottling
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Technical Specification Grid */}
        <div className="lg:col-span-4 bg-black/40 border border-hairline rounded-xl p-6 space-y-4">
          <Reveal>
            <h4 className="font-display text-xs tracking-[0.3em] text-accent-gold uppercase border-b border-hairline pb-3">
              Official Specifications
            </h4>
          </Reveal>

          <Reveal
            className="divide-y divide-hairline text-[0.7rem] font-body tracking-[0.08em] uppercase text-muted-foreground"
            delay={0.1}
          >
            <div className="flex justify-between py-2.5 gap-2">
              <span>Product</span>
              <span className="text-foreground text-right">{activeProduct.specs.product}</span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>Net Quantity</span>
              <span className="text-foreground text-right">{activeProduct.specs.quantity}</span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>Packaging</span>
              <span className="text-foreground text-right max-w-[170px] leading-tight">
                {activeProduct.specs.packaging}
              </span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>MRP</span>
              <span className="text-foreground text-right">{activeProduct.specs.mrp}</span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>Batch No.</span>
              <span className="text-foreground text-right font-mono text-[0.65rem]">
                {activeProduct.specs.batch}
              </span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>Date of Packaging</span>
              <span className="text-foreground text-right">{activeProduct.specs.date}</span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>Use By / Expiry</span>
              <span className="text-foreground text-right">{activeProduct.specs.expiry}</span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>BIS Standard</span>
              <span className="text-foreground text-right text-accent-gold-light">
                {activeProduct.specs.bis}
              </span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>FSSAI License</span>
              <span className="text-foreground text-right text-accent-gold-light">
                {activeProduct.specs.fssai}
              </span>
            </div>
            <div className="flex justify-between py-2.5 gap-2">
              <span>Processor / Manufacturer</span>
              <span className="text-foreground text-right text-[0.65rem] max-w-[170px] normal-case leading-tight">
                {activeProduct.specs.manufacturer}
              </span>
            </div>
          </Reveal>

          <Reveal
            className="pt-1 text-[0.6rem] text-muted-foreground/60 italic leading-relaxed text-center"
            delay={0.2}
          >
            * Prices are subject to local taxes and shipping fees. Certification specifics are
            updated in accordance with regulatory launch phases.
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

