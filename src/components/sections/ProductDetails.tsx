import { useState } from "react";
import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { scrollToSection } from "@/components/SmoothScrollProvider";

const PRODUCTS = [
  {
    id: "250ml",
    size: "250 ML",
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

  return (
    <Section id="details" scene="details" labelledBy="details-title">
      <div className="w-full grid gap-12 lg:grid-cols-12 items-start mt-10">
        {/* Left Side: Title & Size Selector */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal>
            <Eyebrow>Our Collection</Eyebrow>
            <Display
              id="details-title"
              className="mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none"
            >
              A size for
              <br />
              every occasion.
            </Display>
            <Body className="mt-6 text-muted-foreground">
              A size for every occasion. A standard for every sip. Explore our premium packaging
              options.
            </Body>
          </Reveal>

          {/* Size Selector Buttons */}
          <Reveal className="grid grid-cols-3 gap-3 md:gap-4 pt-4" delay={0.1}>
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`py-3.5 px-2 text-center rounded-lg border font-display text-[0.72rem] tracking-[0.2em] transition-all duration-500 uppercase focus-visible:outline-none ${
                  activeId === p.id
                    ? "border-accent-gold bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                    : "border-hairline bg-transparent text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {p.size}
              </button>
            ))}
          </Reveal>

          {/* Active Product Details Card */}
          <Reveal className="border border-hairline p-6 bg-black/20 rounded-xl" delay={0.15}>
            <p className="font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase mb-2">
              Selected Size
            </p>
            <h3 className="font-display text-xl tracking-[0.15em] text-foreground uppercase mb-3">
              {activeProduct.size}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              {activeProduct.tagline}
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 rounded-full border border-accent-gold text-accent-gold font-body text-[0.68rem] tracking-[0.2em] uppercase hover:bg-accent-gold hover:text-background transition-all duration-500 focus-visible:outline-none"
            >
              Enquire Size
            </button>
          </Reveal>
        </div>

        {/* Right Side: Step 7 Technical Specification Grid */}
        <div className="lg:col-span-7 bg-black/40 border border-hairline rounded-xl p-8 space-y-6">
          <Reveal>
            <h4 className="font-display text-xs tracking-[0.3em] text-accent-gold uppercase border-b border-hairline pb-4">
              Official Product Information
            </h4>
          </Reveal>

          <Reveal
            className="divide-y divide-hairline text-[0.72rem] font-body tracking-[0.1em] uppercase text-muted-foreground"
            delay={0.1}
          >
            <div className="flex justify-between py-3.5 gap-4">
              <span>Product</span>
              <span className="text-foreground text-right">{activeProduct.specs.product}</span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>Net Quantity</span>
              <span className="text-foreground text-right">{activeProduct.specs.quantity}</span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>Packaging</span>
              <span className="text-foreground text-right max-w-xs">
                {activeProduct.specs.packaging}
              </span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>MRP</span>
              <span className="text-foreground text-right">{activeProduct.specs.mrp}</span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>Batch No.</span>
              <span className="text-foreground text-right font-mono text-[0.68rem]">
                {activeProduct.specs.batch}
              </span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>Date of Packaging</span>
              <span className="text-foreground text-right">{activeProduct.specs.date}</span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>Use By / Expiry</span>
              <span className="text-foreground text-right">{activeProduct.specs.expiry}</span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>BIS Standard</span>
              <span className="text-foreground text-right text-accent-gold-light">
                {activeProduct.specs.bis}
              </span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>FSSAI License</span>
              <span className="text-foreground text-right text-accent-gold-light">
                {activeProduct.specs.fssai}
              </span>
            </div>
            <div className="flex justify-between py-3.5 gap-4">
              <span>Processor / Manufacturer</span>
              <span className="text-foreground text-right text-[0.68rem] max-w-xs normal-case">
                {activeProduct.specs.manufacturer}
              </span>
            </div>
          </Reveal>

          <Reveal
            className="pt-2 text-[0.62rem] text-muted-foreground/60 italic leading-relaxed text-center"
            delay={0.2}
          >
            * Prices are subject to local taxes and shipping fees. Certification specifics are
            updated in accordance with the regulatory launch phases.
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
