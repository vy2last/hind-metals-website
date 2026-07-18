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
            A certified foundry and metal casting manufacturer with 25+ years of precision engineering heritage and a growing global OEM client base.
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
                Founded in Rajasthan — one of India's established industrial manufacturing belts — Hind Metals has grown over 25 years from a foundry serving local industries into a certified metal casting manufacturer exporting to clients across Asia, the Middle East, Africa, and Europe. Our foundation is unchanged: no casting leaves our facility without meeting spec.
              </p>
              
              <p>
                OEM manufacturers, EPC contractors, infrastructure developers, and industrial equipment makers rely on us for custom cast iron and alloy castings because we operate like a precision instrument — consistent, traceable, and accountable. From pattern design through final casting, machining, and inspection, every component is manufactured and certified to your exact technical requirements. We understand that an off-spec casting doesn't just cost money — it shuts down an assembly line or stalls a project.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-steel p-8 border-t-4 border-charcoal">
                  <h3 className="font-heading font-bold text-2xl uppercase mb-4 text-charcoal">Our Mission</h3>
                  <p className="text-gray-600">To be the most reliable certified foundry partner for global industrial buyers — delivering precision castings with verified quality, complete documentation, and on-time shipments without compromise.</p>
                </div>
                <div className="bg-charcoal p-8 border-t-4 border-primary text-white">
                  <h3 className="font-heading font-bold text-2xl uppercase mb-4">Our Vision</h3>
                  <p className="text-gray-300">To make India-origin precision castings the preferred choice for quality-driven global OEMs and EPC contractors — with Hind Metals as the benchmark for foundry engineering integrity and export excellence.</p>
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-tight mb-8 border-l-4 border-primary pl-6">Why Global Buyers Choose Us</h2>
              
              <ul className="space-y-6 list-none pl-0">
                {[
                  { title: "In-House Foundry & Pattern Shop", desc: "Full foundry capability from pattern making and mould design through melting, casting, fettling, shot blasting, and machining — controlled under one roof." },
                  { title: "Internationally Certified Quality", desc: "Castings certified to ASTM, EN, IS, and BS standards. Every production batch includes chemical composition reports, hardness testing, and dimensional inspection records." },
                  { title: "Export-Ready Documentation", desc: "Material Test Certificates, third-party inspection by SGS or Bureau Veritas, COO, commercial invoice, and BL — all handled in-house for smooth global customs clearance." },
                  { title: "Engineering & Application Support", desc: "Our foundry engineers assist with DFM reviews, alloy selection, wall thickness optimisation, and grade equivalency — ensuring castings perform in your application." }
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
          <h2 className="text-3xl font-heading font-bold uppercase text-charcoal mb-6">Start a Foundry Partnership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Whether you need a trial casting order or a long-term OEM supply agreement, our foundry engineering team is ready to review your technical drawings, discuss alloy requirements, and provide a competitive manufacturing quote.</p>
          <Link href="/contact">
            <Button size="lg">Contact Our Team</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
