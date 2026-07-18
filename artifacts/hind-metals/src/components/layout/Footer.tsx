import { Link } from "wouter";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block flex items-center gap-3">
              <img 
                src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/logo.png`} 
                alt="Hind Metals Logo" 
                className="h-12 w-auto bg-white p-1 rounded-sm"
              />
              <span className="font-heading font-bold text-2xl tracking-tight uppercase">HIND METALS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              ISO-certified metals exporter from India. Supplying ferrous and non-ferrous metals to OEM manufacturers, EPC contractors, and distributors in 30+ countries. Mill-certified quality. Export-ready operations.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders if any */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
                { name: "Request Quote", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-6">Materials</h4>
            <ul className="space-y-4">
              {[
                "Steel & Iron",
                "Copper & Brass",
                "Aluminum",
                "Stainless Steel",
                "Specialty Alloys"
              ].map((product) => (
                <li key={product}>
                  <Link href="/products" className="text-gray-400 hover:text-primary transition-colors block">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="leading-relaxed">RIICOO Industrial Area,<br />Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919414058143" className="hover:text-primary transition-colors">+91 9414058143</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hindmetals.jaipur@gmail.com" className="hover:text-primary transition-colors">hindmetals.jaipur@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hind Metals. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm space-x-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
