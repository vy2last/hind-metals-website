import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-charcoal text-gray-300 py-2 hidden md:block text-sm border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+919414058143" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 9414058143</span>
            </a>
            <a href="mailto:hindmetals.jaipur@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <span>hindmetals.jaipur@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">Exporting to 30+ Countries</span>
            <span className="text-gray-600">·</span>
            <span>RIICOO Industrial Area, Jaipur, India</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 py-3"
            : "bg-white py-5"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <img 
                src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/logo.png`} 
                alt="Hind Metals Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight leading-none uppercase">HIND METALS</span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-widest uppercase mt-1">Global Metals Exporter</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button variant="default" className="ml-4">
                  Request Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
            <nav className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors",
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link href="/contact">
                  <Button className="w-full">Request Quote</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
