"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-xl" : "bg-black"
        }`}
    >
      {/* Top Social Bar */}
      <div className={`hidden md:flex items-center px-8 py-2 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'hidden' : 'flex'}`}>
        <div className="flex items-center gap-4 text-zinc-500">
          <Link href="https://www.instagram.com/thenovamediaagency?igsh=MXg0eXBsMmtnYW1xbA==" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
          <Link href="https://www.linkedin.com/company/the-nova-media-agency/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </Link>
          <Link href="mailto:novamediaagency26@gmail.com" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </Link>
          <Link href="tel:+85246778153" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_2px_8px_rgba(255,184,0,0.4)]">
                {/* Re-creating the stylized N with a dot */}
                <path d="M25 80 V 45 A 15 15 0 0 1 50 35 L 75 65 A 15 15 0 0 0 95 65" stroke="url(#novaGrad)" strokeWidth="18" strokeLinecap="round" />
                <circle cx="78" cy="30" r="14" fill="#FFC107" />
                <defs>
                  <linearGradient id="novaGrad" x1="25" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFEA6A" />
                    <stop offset="1" stopColor="#FF9800" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-2xl tracking-wide text-white leading-none">
                NOVA
              </span>
              <span className="font-sans font-bold text-[8px] tracking-[0.25em] text-white leading-none mt-[3px]">
                MEDIA AGENCY
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wide">
            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Home
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-zinc-300 hover:text-yellow-400 transition-colors">
              About Us
            </a>

            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Services
            </a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Pricing
            </a>
            <a href="#team" onClick={(e) => scrollToSection(e, "team")} className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Team
            </a>
            <a href="#blogs" onClick={(e) => scrollToSection(e, "blogs")} className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Blogs
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-yellow-500 hover:text-yellow-300 transition-colors">
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="flex items-center justify-center px-6 h-[40px] rounded-full text-zinc-950 font-bold text-sm tracking-wider bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 hover:opacity-90 transition-opacity shadow-lg shadow-yellow-500/20"
            >
              GET STARTED
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col h-full bg-zinc-950">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-4 md:px-8 h-20 border-b border-white/5">
                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_2px_8px_rgba(255,184,0,0.4)]">
                      <path d="M25 80 V 45 A 15 15 0 0 1 50 35 L 75 65 A 15 15 0 0 0 95 65" stroke="url(#novaGradMobile)" strokeWidth="18" strokeLinecap="round" />
                      <circle cx="78" cy="30" r="14" fill="#FFC107" />
                      <defs>
                        <linearGradient id="novaGradMobile" x1="25" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFEA6A" />
                          <stop offset="1" stopColor="#FF9800" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="font-sans font-black text-xl tracking-wide text-white">NOVA</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col items-center justify-center space-y-8">
                <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="text-3xl font-lexend font-bold text-white hover:text-yellow-500 transition-colors">Home</a>
                <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-3xl font-lexend font-bold text-white hover:text-yellow-500 transition-colors">About Us</a>
                <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-3xl font-lexend font-bold text-white hover:text-yellow-500 transition-colors">Services</a>
                <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="text-3xl font-lexend font-bold text-white hover:text-yellow-500 transition-colors">Pricing</a>
                <a href="#team" onClick={(e) => scrollToSection(e, "team")} className="text-3xl font-lexend font-bold text-white hover:text-yellow-500 transition-colors">Team</a>
                <a href="#blogs" onClick={(e) => scrollToSection(e, "blogs")} className="text-3xl font-lexend font-bold text-white hover:text-yellow-500 transition-colors">Blogs</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-3xl font-lexend font-bold text-yellow-500 hover:text-yellow-300 transition-colors">Contact Us</a>

                <div className="w-full max-w-xs pt-8">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="flex items-center justify-center w-full h-[60px] rounded-full text-zinc-950 font-black text-lg tracking-widest bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 shadow-xl shadow-yellow-500/20"
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
