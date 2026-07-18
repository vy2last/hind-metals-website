import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import productsSteelImg from "@assets/generated_images/products-steel.jpg";
import productsCopperImg from "@assets/generated_images/products-copper.jpg";
import productsAluminumImg from "@assets/generated_images/products-aluminum.jpg";

const categories = [
  {
    id: "cast-iron",
    name: "Cast Iron Components",
    desc: "Grey iron and ductile iron castings for structural, civil, and industrial applications. Manufactured to IS 210, IS 1865, ASTM A48, ASTM A536, and EN 1561/1563 standards with full chemical and mechanical certification.",
    items: [
      "Manhole Covers & Frames (Light / Medium / Heavy Duty)",
      "Gully Traps & Grating",
      "Kerb Inlets & Road Drains",
      "Counterweights & Ballast",
      "Motor & Pump Housings",
      "Gear Blanks & Pulleys",
    ],
    img: productsSteelImg,
  },
  {
    id: "earthing",
    name: "Earthing & Grounding Equipment",
    desc: "Cast iron and other alloy earthing components for electrical, telecom, and power infrastructure projects. Designed to IEC, IS 3043, and BS 7430 standards for safe, long-life grounding installations.",
    items: [
      "Cast Iron Earthing Plates",
      "Earth Pit Covers & Inspection Chambers",
      "Earthing Electrodes & Rod Clamps",
      "GI & Copper Bonding Accessories",
      "Lightning Arrestor Bases",
      "Chemical Earth Pit Assemblies",
    ],
    img: productsCopperImg,
  },
  {
    id: "construction",
    name: "Construction Equipment Castings",
    desc: "Heavy-duty cast iron and alloy steel castings for construction machinery, material handling equipment, and civil infrastructure. Engineered for high-wear and high-load operating environments.",
    items: [
      "Excavator & Crane Counterweights",
      "Mixer Drum & Drum Liners",
      "Crusher Jaw Plates & Liners",
      "Conveyor Brackets & Pulleys",
      "Scaffold & Formwork Fittings",
      "Road Roller & Compactor Parts",
    ],
    img: productsAluminumImg,
  },
  {
    id: "oem",
    name: "OEM Precision Castings",
    desc: "Custom alloy and iron castings manufactured to buyer-supplied technical drawings. Produced in grey iron, ductile iron, alloy steel, and carbon steel grades for OEM assembly lines requiring consistent dimensional accuracy and traceability.",
    items: [
      "Pump Bodies & Impellers",
      "Valve Bodies & Bonnet Castings",
      "Gear Housings & Bearing Blocks",
      "Agricultural Implement Parts",
      "Hydraulic Manifold Blocks",
      "Flanges, Bushings & Adaptor Rings",
    ],
    img: productsSteelImg,
  },
  {
    id: "specialty",
    name: "Specialty Alloy Castings",
    desc: "High-performance castings in specialty alloy grades for demanding environments — elevated temperatures, corrosive media, high-wear surfaces, and critical structural applications requiring tighter tolerances.",
    items: [
      "High Chrome White Iron",
      "Heat-Resistant Alloy Castings",
      "Nickel Iron & SG Iron",
      "Austenitic Stainless Castings",
      "Tool Steel & High-Carbon Iron",
      "Custom Grade on Request",
    ],
    img: productsCopperImg,
  },
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
            Casting <span className="text-primary">Capabilities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Custom metal castings manufactured from buyer drawings in grey iron, ductile iron, alloy steel, and specialty grades. ASTM, EN, IS, and BS compliant — certified and export ready.
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
                className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 border-8 border-white mix-blend-overlay pointer-events-none" />
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <h2 className="text-4xl font-heading font-bold uppercase text-charcoal mb-4">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {category.desc}
                  </p>

                  <div className="bg-light-steel p-8 border-l-4 border-primary">
                    <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-gray-500 mb-4">
                      Representative Products
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-charcoal font-medium"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
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
          <h3 className="text-2xl font-heading font-bold uppercase mb-4">
            International Casting Standards &amp; Certifications
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm mb-10">
            All castings manufactured and certified to international standards. Documentation provided per buyer specification — third-party inspection available on request.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            <span className="font-heading font-bold text-xl tracking-widest uppercase">ASTM A48 / A536</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">EN 1561 / 1563</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">IS 210 / IS 1865</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">BS EN 124</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">ISO 9001</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">SGS Inspectable</span>
            <span className="font-heading font-bold text-xl tracking-widest uppercase">Mill Test Certified</span>
          </div>
        </div>
      </section>
    </div>
  );
}
