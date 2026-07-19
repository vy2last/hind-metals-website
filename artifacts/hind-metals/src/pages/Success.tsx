import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export function Success() {
  return (
    <div className="flex flex-col pt-32 pb-24 min-h-[70vh]">
      <section className="flex-1 flex items-center justify-center py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-charcoal mb-4"
          >
            Inquiry <span className="text-primary">Received</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-gray-600 mb-3"
          >
            Thank you for reaching out to Hind Metals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="text-gray-500 mb-10"
          >
            Our foundry engineering team will review your requirements and respond
            within <strong className="text-charcoal">24 business hours</strong> with
            pricing, lead time, and manufacturing feasibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg">Back to Home</Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-charcoal text-charcoal">
                Explore Capabilities
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
