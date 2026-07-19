import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { RfqForm } from '@/components/rfq/RfqForm';

/** Read the ?interest= query param to pre-populate the category dropdown */
function useInterestParam(): string {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('interest') ?? '';
  }, []);
}

export function Contact() {
  const defaultProductName = useInterestParam();

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
            Submit your casting requirements, technical drawings, or RFQ. Our foundry
            engineering team responds within 24 hours with pricing, lead time, and
            manufacturing feasibility.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Contact info ─────────────────────────────────── */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-tight mb-8">
                International Inquiries
              </h2>

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
                    <h3 className="font-heading font-bold uppercase text-gray-500 text-sm tracking-wider mb-1">Office &amp; Yard</h3>
                    <p className="text-charcoal font-bold text-lg leading-snug">
                      RIICOO Industrial Area,<br />
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-12 bg-gray-200 h-64 w-full relative overflow-hidden border border-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="font-heading font-bold uppercase tracking-wider text-sm">Interactive Map</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Form ─────────────────────────────────────────── */}
            <div className="lg:w-2/3">
              <div className="bg-light-steel p-8 md:p-12 border-t-4 border-primary">
                <h3 className="text-2xl font-heading font-bold text-charcoal uppercase tracking-tight mb-6">
                  Request a Casting Quote
                </h3>
                <RfqForm defaultProductName={defaultProductName} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
