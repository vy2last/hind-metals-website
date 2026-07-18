import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Truck, Scissors, ShieldCheck, Clock } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Pattern, Mould & Die Engineering",
    desc: "In-house pattern shop and die design capability producing wooden, aluminium, and resin patterns plus high-pressure die tooling from customer drawings or samples. Tooling optimised for dimensional accuracy, yield, and casting integrity across grey iron, ductile iron, aluminium die castings, and alloy grades."
  },
  {
    icon: Truck,
    title: "International Export & Logistics",
    desc: "End-to-end export management — packaging, freight forwarding, LCL/FCL coordination, and full documentation (MTC, COO, BL, inspection reports) for smooth customs clearance at destination ports worldwide."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Third-Party Inspection",
    desc: "Spectrometric chemical analysis, Brinell/Rockwell hardness testing, dimensional CMM inspection, and visual QC on every production run. Third-party inspection by SGS or Bureau Veritas available on request."
  },
  {
    icon: Clock,
    title: "OEM Long-Term Supply Programmes",
    desc: "Dedicated casting supply agreements for OEM manufacturers — scheduled production runs, reserved foundry capacity, and price-locked contracts to support your assembly planning cycle without supply disruptions."
  }
];

export function Services() {
  return (
    <div className="flex flex-col pt-32 pb-24">
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            End-to-end foundry manufacturing services — from pattern engineering and casting production through quality inspection, machining, and export documentation.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal uppercase tracking-tight mb-6">Full-Cycle Foundry Manufacturing</h2>
            <p className="text-lg text-gray-600">
              From pattern design, die tooling, and mould engineering through casting (iron, aluminium die casting, and alloy), fettling, machining, inspection, and export — we manage the complete manufacturing cycle so your procurement team receives certified, production-ready parts at your door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-steel p-10 relative group hover:bg-charcoal hover:text-white transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 flex items-center justify-center rounded-bl-3xl group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl uppercase mb-4 pr-12">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-charcoal text-white relative">
        <div className="metal-pattern-dark absolute inset-0 opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-heading font-bold uppercase text-center mb-16">Industries We Serve</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "OEM Manufacturers",
              "EPC & Infrastructure",
              "Electrical & Earthing",
              "Construction Equipment",
              "Pump & Valve Industry",
              "Mining & Quarrying",
              "Defense & Aerospace",
              "Agricultural Machinery"
            ].map((industry) => (
              <div key={industry} className="flex flex-col items-center text-center gap-4 p-6 border border-gray-800 bg-gray-900/50 hover:border-primary transition-colors">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <span className="font-heading font-bold uppercase tracking-wider text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold uppercase tracking-tight mb-6">Need a Custom Casting Manufactured?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">Share your technical drawings, alloy grade, weight, and quantity. Our foundry engineering team will respond within 24 hours with a complete quote covering unit price, tooling, lead time, and export documentation.</p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-transparent hover:text-white">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
