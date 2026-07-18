import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div className="flex flex-col pt-32 pb-24">
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="metal-pattern-dark absolute inset-0 opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6"
          >
            About <span className="text-primary">Hind Metals</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            A certified Indian metals exporter with 25+ years of manufacturing heritage and a growing global client base.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-tight mb-8 border-l-4 border-primary pl-6">Our Story</h2>
            
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
                Founded in Rajasthan — the industrial heartland of India — Hind Metals has grown over 25 years from a regional stockist into a trusted export partner for buyers across Asia, the Middle East, Africa, and Europe. Our foundation remains unchanged: no order ships without meeting spec.
              </p>
              
              <p>
                International procurement managers, OEM manufacturers, EPC contractors, and infrastructure developers rely on us because we operate like a precision instrument — consistent, traceable, and accountable. Every batch comes with full mill traceability and can be independently verified. We understand that a delayed or off-spec materials shipment doesn't just cost money; it shuts down a production line or stalls a construction site.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-steel p-8 border-t-4 border-charcoal">
                  <h3 className="font-heading font-bold text-2xl uppercase mb-4 text-charcoal">Our Mission</h3>
                  <p className="text-gray-600">To be the most reliable certified metals export partner for global industrial buyers — delivering verified quality, transparent documentation, and on-time shipments without compromise.</p>
                </div>
                <div className="bg-charcoal p-8 border-t-4 border-primary text-white">
                  <h3 className="font-heading font-bold text-2xl uppercase mb-4">Our Vision</h3>
                  <p className="text-gray-300">To establish India-origin metals as the preferred choice for quality-driven global buyers — making Hind Metals synonymous with engineering integrity and export excellence worldwide.</p>
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-tight mb-8 border-l-4 border-primary pl-6">Why Global Buyers Choose Us</h2>
              
              <ul className="space-y-6 list-none pl-0">
                {[
                  { title: "Export-Ready Operations", desc: "Full export documentation — commercial invoice, packing list, COO, MTC, BL, and inspection certificates — handled in-house for smooth customs clearance." },
                  { title: "Internationally Certified Quality", desc: "Materials sourced from BIS, ISO, and third-party certified mills, compliant with ASTM, EN, IS, JIS, and DIN standards depending on your project requirements." },
                  { title: "Competitive FOB & CIF Pricing", desc: "Deep mill relationships and bulk purchasing power translate into highly competitive export pricing with flexible Incoterms to suit your procurement model." },
                  { title: "Technical Sales Support", desc: "Our team speaks the language of procurement engineers — grade equivalencies, mechanical properties, dimensional tolerances, and application suitability guidance." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="font-heading font-bold text-lg uppercase text-charcoal block mb-1">{item.title}</strong>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-steel py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold uppercase text-charcoal mb-6">Start a Global Partnership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Whether you're a first-time importer of Indian metals or an established distributor looking for a more reliable partner, our export team is ready to discuss your requirements and provide a competitive quote.</p>
          <Link href="/contact">
            <Button size="lg">Contact Our Team</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
