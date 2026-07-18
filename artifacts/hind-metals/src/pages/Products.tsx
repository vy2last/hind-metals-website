import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import productsSteelImg from "@assets/generated_images/products-steel.jpg";
import productsCopperImg from "@assets/generated_images/products-copper.jpg";
import productsAluminumImg from "@assets/generated_images/products-aluminum.jpg";

const categories = [
  {
    id: "steel",
    name: "Steel & Iron",
    desc: "The structural foundation of industry. We supply a comprehensive range of mild steel, structural steel, and TMT products.",
    items: ["MS Plates & Sheets", "Angles & Channels", "Structural Beams (I/H)", "MS Pipes (Seamless & Welded)", "TMT Bars", "HR/CR Coils"],
    img: productsSteelImg
  },
  {
    id: "copper",
    name: "Copper & Brass",
    desc: "High-conductivity and corrosion-resistant alloys for electrical, plumbing, and decorative applications.",
    items: ["Copper Sheets & Plates", "Copper Rods & Wires", "Brass Extrusions", "Brass Sheets & Foils", "Copper Pipes & Tubes"],
    img: productsCopperImg
  },
  {
    id: "aluminum",
    name: "Aluminum",
    desc: "Lightweight, durable, and highly versatile. Perfect for fabrication, transport, and architectural use.",
    items: ["Aluminum Sheets & Coils", "Custom Extrusions", "Checker Plates", "Round & Square Pipes", "Aluminum Rods"],
    img: productsAluminumImg
  },
  {
    id: "stainless",
    name: "Stainless Steel",
    desc: "Premium corrosion resistance for demanding environments, food processing, and medical manufacturing.",
    items: ["SS Sheets (304, 316, 430)", "SS Pipes & Tubes", "SS Angles & Flats", "Decorative SS Profiles"],
    img: productsSteelImg // Fallback
  },
  {
    id: "specialty",
    name: "Specialty Alloys",
    desc: "Custom metallurgical solutions for specific high-stress, high-temperature, or high-wear applications.",
    items: ["Bronze", "Lead", "Zinc", "High-Carbon Steel", "Tool Steel"],
    img: productsCopperImg // Fallback
  }
];

export function Products() {
  return (
    <div className="flex flex-col pt-32 pb-24">
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2122_1px,transparent_1px),linear-gradient(to_bottom,#1f2122_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6"
          >
            Our <span className="text-primary">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ferrous and non-ferrous metals sourced from certified Indian mills. ASTM, EN, IS, and JIS compliant grades available for export in standard and custom specifications.
          </motion.p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                    <img 
                      src={category.img} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 border-8 border-white mix-blend-overlay pointer-events-none" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  <h2 className="text-4xl font-heading font-bold uppercase text-charcoal mb-4">{category.name}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{category.desc}</p>
                  
                  <div className="bg-light-steel p-8 border-l-4 border-primary">
                    <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-gray-500 mb-4">Available Formats</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-charcoal font-medium">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link href={`/contact?interest=${category.id}`}>
                      <Button>Request Quote for {category.name}</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-heading font-bold uppercase mb-4">International Quality Standards & Certifications</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm mb-10">All materials are sourced from BIS-certified and ISO-accredited mills. Documentation provided per buyer's requirements.</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            <span className="font-heading font-bold text-xl tracking-widest uppercase">ASTM / ASME</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">EN / DIN</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">IS Standards</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">JIS</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">ISO 9001</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">Mill Test Certified</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">SGS Inspectable</span>
          </div>
        </div>
      </section>
    </div>
  );
}
