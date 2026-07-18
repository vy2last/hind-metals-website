import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/hero-bg.jpg";
import aboutImg from "@assets/generated_images/about-company.jpg";
import productsSteelImg from "@assets/generated_images/products-steel.jpg";
import productsCopperImg from "@assets/generated_images/products-copper.jpg";
import productsAluminumImg from "@assets/generated_images/products-aluminum.jpg";
import servicesCuttingImg from "@assets/generated_images/services-cutting.jpg";
import servicesLogisticsImg from "@assets/generated_images/services-logistics.jpg";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden pt-20 pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10" />
          <img 
            src={heroBg} 
            alt="Steel factory interior" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">ISO-Certified Metal Casting &amp; Foundry Manufacturer</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">
                Cast with Precision.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Built for Industry.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Custom metal castings and foundry-manufactured industrial components for OEM manufacturers, EPC contractors, and infrastructure developers worldwide. Cast iron, aluminium die castings, alloy castings, earthing equipment, and precision engineering — made in India, trusted globally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(255,87,34,0.3)]">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-gray-500 text-white hover:bg-white hover:text-charcoal hover:border-white">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="metal-pattern absolute inset-0 opacity-20 mix-blend-overlay" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            {[
              { label: "Years in Foundry", value: "25+" },
              { label: "Custom Casting SKUs", value: "500+" },
              { label: "OEM Clients Served", value: "1,200+" },
              { label: "Export Destinations", value: "30+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-5xl font-heading font-black mb-2">{stat.value}</div>
                <div className="text-sm font-semibold tracking-wider uppercase text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">Your Global Foundry Partner</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">
                Cast in India.<br />Trusted Worldwide.
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Hind Metals is a certified metal casting and foundry manufacturer producing custom cast iron components, aluminium die castings, earthing equipment, construction castings, and precision OEM parts for clients across Asia, the Middle East, Europe, and beyond.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Rooted in Rajasthan — India's established industrial manufacturing belt — we combine decades of foundry expertise with rigorous quality control and international export logistics to deliver castings that meet global engineering standards every time.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                  Read Our Story
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gray-100 relative">
                {/* We'll use the about image here */}
                <div className="absolute inset-0 bg-charcoal translate-x-4 translate-y-4 -z-10" />
                <img 
                  src={aboutImg} 
                  alt="Warehouse inventory"
                  className="w-full h-full object-cover border-4 border-white shadow-xl"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Products Grid */}
      <section className="py-24 bg-light-steel">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">Foundry Capabilities</h2>
            <h3 className="text-4xl font-heading font-bold text-charcoal uppercase tracking-tight">Custom Casting Manufacturing</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Cast Iron Components", 
                desc: "Grey iron, ductile iron, and SG iron castings — manhole covers, gully traps, counterweights, and structural components.",
                img: productsSteelImg
              },
              { 
                name: "Earthing Equipment", 
                desc: "Cast iron earthing plates, earth pits, inspection chambers, and grounding accessories for electrical and infrastructure projects.",
                img: productsCopperImg
              },
              { 
                name: "Aluminium Die Castings", 
                desc: "High-pressure aluminium die castings for OEM components — lightweight, tight-tolerance parts for automotive, electrical, and industrial applications.",
                img: productsAluminumImg
              }
            ].map((product, i) => (
              <motion.div 
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white group overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-200">
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="p-8">
                  <h4 className="font-heading font-bold text-2xl uppercase mb-3 text-charcoal">{product.name}</h4>
                  <p className="text-gray-600 mb-6">{product.desc}</p>
                  <Link href="/products" className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    View Catalog <span className="text-lg">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/products">
              <Button size="lg" variant="default">View All Materials</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services/Why Choose Us */}
      <section className="py-24 bg-charcoal text-white relative">
        <div className="metal-pattern-dark absolute inset-0 opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">Foundry Manufacturing Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8">From Pattern to Export</h3>
              
              <div className="space-y-8">
                {[
                  { title: "Sand Casting & Pressure Die Casting", desc: "Traditional sand casting for grey/ductile iron and steel. High-pressure die casting (HPDC) for aluminium, zinc, and magnesium alloy components — all tooling designed in-house." },
                  { title: "VMC / HMC / CNC Precision Machining", desc: "Post-casting machining on Vertical & Horizontal Machining Centres and CNC turning centres — delivering assembly-ready, dimensionally verified finished parts." },
                  { title: "Powder Coating & Certified Export", desc: "In-house electrostatic powder coating, shot blasting, and RAL colour matching. Full MTC, COO, and third-party inspection documentation for every export shipment." }
                ].map((service, i) => (
                  <motion.div 
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="font-heading font-bold text-primary">0{i+1}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xl uppercase tracking-wide mb-2">{service.title}</h4>
                      <p className="text-gray-400">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={servicesCuttingImg} 
                alt="Cutting services" 
                className="w-full h-64 object-cover mt-8"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <img 
                src={servicesLogisticsImg} 
                alt="Logistics" 
                className="w-full h-64 object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 p-10 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase text-charcoal mb-4">Ready to discuss a custom casting requirement?</h3>
            <p className="text-gray-600 mb-8 text-lg">Share your technical drawings, material grade, and quantity. Our foundry engineering team responds within 24 hours with pricing, lead time, and manufacturing feasibility.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">Request a Casting Quote</Button>
              </Link>
              <a href="tel:+919414058143">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-charcoal text-charcoal">Speak to Our Engineers</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
