"use client";

import {
  Globe,
  Share2,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Command
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "App Development", href: "#services" },
      { name: "Graphic Design", href: "#services" },
      { name: "SEO", href: "#services" },
      { name: "Paid Ads", href: "#services" },
      { name: "Social Media", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Pricing", href: "#pricing" },
      { name: "Our Team", href: "#team" },
      { name: "Blog", href: "#blogs" },
      { name: "Career", href: "#" },
    ],
    contacts: [
      { name: "novamediaagency26@gmail.com", icon: Mail, href: "mailto:novamediaagency26@gmail.com" },
      { name: "+852 4677 8153", icon: Phone, href: "tel:+85246778153" },
      { name: "8th Floor, Asia Standard Tower, 59-65 Queen's Road Central, Hong Kong", icon: MapPin, href: "https://maps.google.com/?q=Asia+Standard+Tower+59-65+Queen's+Road+Central+Hong+Kong" },
    ]
  };

  const socials = [
    { icon: Globe, href: "https://www.instagram.com/thenovamediaagency?igsh=MXg0eXBsMmtnYW1xbA==", name: "Instagram" },
    { icon: Share2, href: "https://www.linkedin.com/company/the-nova-media-agency/", name: "LinkedIn" },
    { icon: Mail, href: "mailto:novamediaagency26@gmail.com", name: "Email" },
  ];

  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 font-inter text-zinc-400 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo & Brand Info */}
          <div className="flex flex-col gap-6">
            <div
              className="flex items-center gap-2 text-white font-lexend font-bold text-2xl cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center">
                {Command && <Command className="text-zinc-950 w-6 h-6 stroke-[2.5]" />}
              </div>
              <span>NOVA</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering brands through cutting-edge strategy and design. We turn clicks into loyal customers and maximize your ROI with data-driven marketing.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-500 hover:text-zinc-950 hover:border-yellow-500 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon ? <social.icon className="w-5 h-5" /> : <div className="w-5 h-5 bg-zinc-800 rounded" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Services) */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                    {ChevronRight && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (Company) */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                    {ChevronRight && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.contacts.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={contact.href}
                    className="text-sm hover:text-yellow-500 transition-colors flex items-start gap-3 group"
                  >
                    {contact.icon ? <contact.icon className="w-5 h-5 shrink-0 text-yellow-500/80 group-hover:text-yellow-500 transition-colors" /> : <div className="w-5 h-5 bg-zinc-800 rounded" />}
                    <span className="leading-tight">{contact.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-500">
            © {currentYear} NOVA Media Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-zinc-500 hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-yellow-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-yellow-500 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
