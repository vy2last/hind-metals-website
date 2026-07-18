import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
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
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Submit your casting requirements, technical drawings, or RFQ. Our foundry engineering team responds within 24 hours with pricing, lead time, and manufacturing feasibility.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-tight mb-8">International Inquiries</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light-steel flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase text-gray-500 text-sm tracking-wider mb-1">Phone</h3>
                    <p className="text-charcoal font-bold text-lg">+91 9414058143</p>
                    <p className="text-sm text-gray-500 mt-1">Mon–Sat, 9am–6pm IST · WhatsApp available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light-steel flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase text-gray-500 text-sm tracking-wider mb-1">Email</h3>
                    <p className="text-charcoal font-bold text-lg">hindmetals.jaipur@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">For quotes, specs &amp; export inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light-steel flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase text-gray-500 text-sm tracking-wider mb-1">Office & Yard</h3>
                    <p className="text-charcoal font-bold text-lg leading-snug">
                      RIICOO Industrial Area,<br />
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gray-200 h-64 w-full relative overflow-hidden border border-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="font-heading font-bold uppercase tracking-wider text-sm">Interactive Map</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-light-steel p-8 md:p-12 border-t-4 border-primary">
                <h3 className="text-2xl font-heading font-bold text-charcoal uppercase tracking-tight mb-6">Request a Casting Quote</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Company Name *</label>
                      <input type="text" className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Contact Person *</label>
                      <input type="text" className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Email Address *</label>
                      <input type="email" className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Phone / WhatsApp *</label>
                      <input type="tel" className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Country *</label>
                      <input type="text" placeholder="e.g. UAE, USA, Germany..." className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Casting Category</label>
                      <select className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none rounded-none">
                        <option>Select Category...</option>
                        <option>Cast Iron Components</option>
                        <option>Earthing &amp; Grounding Equipment</option>
                        <option>Construction Equipment Castings</option>
                        <option>OEM Precision Castings</option>
                        <option>Specialty Alloy Castings</option>
                        <option>Other / Multiple</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Alloy / Grade Required</label>
                      <input type="text" placeholder="e.g. Grey Iron IS 210 Gr. FG 260, ASTM A536..." className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Preferred Incoterms</label>
                      <select className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none rounded-none">
                        <option>Select Incoterms...</option>
                        <option>FOB – Nhava Sheva (Mumbai)</option>
                        <option>CIF – Destination Port</option>
                        <option>CFR – Destination Port</option>
                        <option>EXW – Jaipur Factory</option>
                        <option>Open to Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Casting Requirements &amp; Specifications</label>
                    <textarea 
                      rows={5} 
                      placeholder="Please describe the component, dimensions/weight, quantity (pieces or MT), required standards (ASTM/EN/IS/BS), surface finish, and any drawing references or special requirements..."
                      className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Submit Casting Inquiry
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
