"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-xl" : "bg-black"
      }`}
    >
      {/* Top Social Bar */}
      <div className={`hidden md:flex items-center px-8 py-2 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'hidden' : 'flex'}`}>
        <div className="flex items-center gap-4 text-zinc-500">
          <Link href="#" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
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
              About us
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
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-xl absolute w-full border-t border-white/5 h-screen">
          <div className="px-6 pt-6 pb-12 space-y-6 flex flex-col items-center">
            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="text-xl font-medium text-white">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-xl font-medium text-white">About us</a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-xl font-medium text-white">Services</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="text-xl font-medium text-white">Pricing</a>
            <a href="#team" onClick={(e) => scrollToSection(e, "team")} className="text-xl font-medium text-white">Team</a>
            <a href="#blogs" onClick={(e) => scrollToSection(e, "blogs")} className="text-xl font-medium text-white">Blogs</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-xl font-medium text-yellow-400">Contact Us</a>
            
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="mt-4 flex items-center justify-center w-full max-w-xs h-[50px] rounded-full text-zinc-950 font-bold tracking-wider bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500"
            >
              GET STARTED
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
