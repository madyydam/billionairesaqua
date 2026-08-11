import { useState } from "react";
import { Section, Display, Eyebrow, Body } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Mail, MapPin, Phone, HelpCircle } from "lucide-react";
import { toast } from "sonner";
import { scrollToSection } from "@/components/SmoothScrollProvider";

const FAQS = [
  {
    q: "What is Billionaire's Aqua?",
    a: "Billionaire's Aqua is a premium packaged drinking water brand built around quality, consistency, and a bigger vision.",
  },
  {
    q: "Where is Billionaire's Aqua launching?",
    a: "We are launching initially in Pune and PCMC, followed by a phased expansion across Maharashtra and eventually across India.",
  },
  {
    q: "What sizes are available?",
    a: "Our collection will be available in 250ml, 500ml, 1L, 2L, 5L, and 20L returnable cans.",
  },
  {
    q: "Is Billionaire's Aqua available for distributors?",
    a: "Yes, we are actively building a strong distribution network. Interested partners can fill out the Partner With Us form.",
  },
  {
    q: "How can I become a distributor?",
    a: "Submit your details via the Partner With Us distributor application form on this website. Our business development team will contact you.",
  },
  {
    q: "Where is the water manufactured?",
    a: "The water is processed and packaged at state-of-the-art licensed contract manufacturing facilities under strict quality controls.",
  },
  {
    q: "What certifications does Billionaire's Aqua have?",
    a: "All manufacturing operations are audited and certified. We present only officially verified certifications (FSSAI/BIS) in accordance with the regulatory standards.",
  },
];

export function CallToAction() {
  const [activeTab, setActiveTab] = useState<"enquiry" | "partner" | "faq">("enquiry");

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry submitted successfully! Our team will get back to you.");
    (e.target as HTMLFormElement).reset();
  };

  const handleDistributorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Distributor application received! Our team will contact you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="cta" scene="cta" labelledBy="cta-title" className="items-center py-20">
      <div className="w-full space-y-16">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Connect With Us</Eyebrow>
              <Display
                id="cta-title"
                className="mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none lowercase first-letter:uppercase"
              >
                Grow with us.
              </Display>
              <Body className="mt-6 text-muted-foreground">
                We are building the foundation for a scalable, premium packaged drinking water
                business, beginning with focused regional expansion and a long-term national vision.
              </Body>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex justify-start lg:justify-end gap-6 border-b border-hairline pb-4 w-full">
            <button
              onClick={() => setActiveTab("enquiry")}
              className={`pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${
                activeTab === "enquiry"
                  ? "text-accent-gold-light font-semibold"
                  : "text-muted-foreground hover:text-accent-gold-light"
              }`}
            >
              Enquiries
              {activeTab === "enquiry" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold-light shadow-[0_0_8px_rgba(0,179,198,0.5)]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("partner")}
              className={`pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${
                activeTab === "partner"
                  ? "text-accent-gold-light font-semibold"
                  : "text-muted-foreground hover:text-accent-gold-light"
              }`}
            >
              Partner With Us
              {activeTab === "partner" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold-light shadow-[0_0_8px_rgba(0,179,198,0.5)]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${
                activeTab === "faq"
                  ? "text-accent-gold-light font-semibold"
                  : "text-muted-foreground hover:text-accent-gold-light"
              }`}
            >
              FAQs
              {activeTab === "faq" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold-light shadow-[0_0_8px_rgba(0,179,198,0.5)]" />
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Contact details & Brand values */}
          <div className="lg:col-span-4 space-y-8">
            <Reveal className="space-y-6">
              <h4
                id="contact"
                className="font-display text-sm tracking-[0.2em] text-foreground uppercase border-b border-hairline pb-3"
              >
                THE BILLIONAIRE&apos;S AQUA
              </h4>
              <div className="flex items-start gap-4 text-muted-foreground">
                <MapPin className="size-5 text-accent-gold shrink-0 mt-0.5" />
                <div className="font-body text-xs tracking-wider space-y-1">
                  <p className="text-foreground font-semibold">Pune Office</p>
                  <p>Pune, PCMC, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-muted-foreground">
                <Mail className="size-5 text-accent-gold shrink-0 mt-0.5" />
                <div className="font-body text-xs tracking-wider space-y-1">
                  <p className="text-foreground font-semibold">Email Us</p>
                  <a
                    href="mailto:enquiry@billionairesaqua.com"
                    className="hover:text-accent-gold transition-colors"
                  >
                    enquiry@billionairesaqua.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 text-muted-foreground">
                <Phone className="size-5 text-accent-gold shrink-0 mt-0.5" />
                <div className="font-body text-xs tracking-wider space-y-1">
                  <p className="text-foreground font-semibold">Phone Support</p>
                  <a
                    href="tel:+917822059936"
                    className="hover:text-accent-gold transition-colors"
                  >
                    +91 78220 59936
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal
              className="border border-hairline p-6 rounded-xl bg-black/20 space-y-4"
              delay={0.1}
            >
              <h5 className="font-display text-[0.62rem] tracking-[0.25em] text-accent-gold uppercase">
                Institutional Bulk Supply
              </h5>
              <p className="font-body text-[0.72rem] text-muted-foreground leading-relaxed">
                Premium hydration customized for Corporate Offices, Luxury Hotels, Fine-dining
                Restaurants, Events, and Special Occasions.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Dynamic Form / FAQ view */}
          <div className="lg:col-span-8 bg-black/40 border border-hairline rounded-xl p-8">
            {/* Tab 1: Enquiry Form */}
            {activeTab === "enquiry" && (
              <Reveal>
                <form onSubmit={handleEnquirySubmit} className="space-y-6">
                  <h4 className="font-display text-xs tracking-[0.25em] text-accent-gold uppercase mb-4">
                    Business &amp; Institutional Enquiry
                  </h4>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Company / Institution
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Mobile Number
                      </label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Enquiry Type
                      </label>
                      <select
                        required
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors select-custom"
                      >
                        <option className="bg-neutral-950" value="general">
                          General Enquiry
                        </option>
                        <option className="bg-neutral-950" value="distributor">
                          Distributor Partnership
                        </option>
                        <option className="bg-neutral-950" value="retailer">
                          Retailer Supply
                        </option>
                        <option className="bg-neutral-950" value="corporate">
                          Corporate Supply
                        </option>
                        <option className="bg-neutral-950" value="bulk">
                          Bulk Order
                        </option>
                        <option className="bg-neutral-950" value="partnership">
                          Strategic Partnership
                        </option>
                        <option className="bg-neutral-950" value="investor">
                          Investor / Business Opportunities
                        </option>
                      </select>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-foreground text-background font-body text-[0.72rem] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-background transition-colors duration-500 flex items-center justify-center gap-2 focus-visible:outline-none"
                  >
                    Send Enquiry <ArrowRight className="size-4" />
                  </button>
                </form>
              </Reveal>
            )}

            {/* Tab 2: Distributor Form */}
            {activeTab === "partner" && (
              <Reveal>
                <form onSubmit={handleDistributorSubmit} className="space-y-6">
                  <div className="mb-4">
                    <h4 className="font-display text-xs tracking-[0.25em] text-accent-gold uppercase">
                      Distributor Partner Application
                    </h4>
                    <p className="font-body text-[0.68rem] text-muted-foreground mt-1">
                      We are building a strong distribution network for the next generation of
                      premium packaged drinking water.
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Company Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Mobile Number
                      </label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        City
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        State
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Business Type
                      </label>
                      <input
                        required
                        placeholder="Retail / Wholesale / Beverage Dist."
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Years in Business
                      </label>
                      <input
                        required
                        type="number"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Current Distribution Network
                      </label>
                      <textarea
                        placeholder="Briefly describe your existing distribution network and outlets covered..."
                        rows={3}
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Investment &amp; Infrastructure Capacity
                      </label>
                      <input
                        placeholder="E.g., Warehouse space, delivery vehicles, available capital..."
                        type="text"
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase">
                        Additional Message
                      </label>
                      <textarea
                        rows={3}
                        className="w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-foreground text-background font-body text-[0.72rem] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-background transition-colors duration-500 flex items-center justify-center gap-2 focus-visible:outline-none"
                  >
                    Submit Application <ArrowRight className="size-4" />
                  </button>
                </form>
              </Reveal>
            )}

            {/* Tab 3: FAQs */}
            {activeTab === "faq" && (
              <Reveal>
                <div id="faq" className="space-y-6">
                  <h4 className="font-display text-xs tracking-[0.25em] text-accent-gold uppercase mb-4 flex items-center gap-2">
                    <HelpCircle className="size-4" /> Frequently Asked Questions
                  </h4>
                  <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                      <div key={idx} className="border border-hairline p-5 rounded-lg bg-black/20">
                        <h5 className="font-display text-xs tracking-[0.15em] text-foreground uppercase mb-2">
                          {faq.q}
                        </h5>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
