"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Target, Crown, Shield, Trophy } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Pricing() {
  const handleSelect = (packageName: string) => {
    window.dispatchEvent(new CustomEvent("selectPackage", { detail: packageName }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const packages = [
    {
      icon: Rocket,
      name: "ESSENTIAL BOOST",
      subtitle: "IGNITE GROWTH",
      price: "1,050",
      features: [
        { title: "12 Posts", desc: "10 Feed Posts + 12 Story Posts\nInstagram, Facebook" },
        { title: "2 Reels", desc: "Instagram, Facebook" },
        { title: "Lead Generation", desc: "Meta Ads (Limited)" }
      ],
      bullets: [
        "Instagram Highlights",
        "Graphic Designing",
        "Video Editing",
        "Caption Writing",
        "Hashtag Research",
        "Profile Optimization"
      ]
    },
    {
      icon: TrendingUp,
      name: "SMART BOOST",
      subtitle: "EXPAND HORIZONS",
      price: "1,550",
      features: [
        { title: "20 Posts", desc: "20 Feed Posts + 20 Story Posts\nInstagram, Facebook" },
        { title: "2 Reels", desc: "Instagram, Facebook (One Optional:\nTikTok, LinkedIn, or Twitter)" },
        { title: "Production (1 Hour)", desc: "1 Time Photography & Videography" },
        { title: "Lead Generation", desc: "Meta Ads (Limited)" }
      ],
      bullets: [
        "Instagram Highlights",
        "Graphic Designing",
        "Video Editing",
        "Caption Writing",
        "Hashtag Research",
        "Profile Optimization"
      ]
    },
    {
      icon: Target,
      name: "ENHANCED REACH",
      subtitle: "EXPAND HORIZONS",
      price: "2,250",
      features: [
        { title: "25 Posts", desc: "25 Feed Posts + 25 Story Posts\nInstagram, Facebook" },
        { title: "4 Reels", desc: "Instagram, Facebook (Two Optional:\nTikTok, LinkedIn, or Twitter)" },
        { title: "Production (2 Hour)", desc: "1 Time Photography & Videography" },
        { title: "SEO (Basic)", desc: "On Page SEO\nOff Page SEO\n05 Competitive Key Words" },
        { title: "Lead Generation", desc: "Google Ads & Meta Ads (Limited)" }
      ],
      bullets: [
        "Instagram Highlights",
        "Graphic Designing",
        "Video Editing",
        "Caption Writing",
        "Hashtag Research",
        "Profile Optimization"
      ]
    },
    {
      icon: Crown,
      name: "PREMIUM GROWTH",
      subtitle: "LEAD MARKETS",
      price: "3,050",
      features: [
        { title: "30 Posts", desc: "30 Feed Posts + 30 Story Posts\nInstagram, Facebook" },
        { title: "6 Reels", desc: "Instagram, Facebook (Two Optional:\nTikTok, LinkedIn, or Twitter)" },
        { title: "Production (3 Hour)", desc: "1 Time Photography & Videography" },
        { title: "SEO (Basic)", desc: "On Page SEO\nOff Page SEO\nBusiness Profile\n10 Competitive Key Words" },
        { title: "Email Marketing (Limited)", desc: "Campaign Setup\nBasic Newsletter\nAudience Segmentation" },
        { title: "Lead Generation", desc: "Google Ads & Meta Ads (Limited)" }
      ],
      bullets: [
        "Instagram Highlights",
        "Graphic Designing",
        "Video Editing",
        "Caption Writing",
        "Hashtag Research",
        "Profile Optimization"
      ]
    },
    {
      icon: Shield,
      name: "ELITE IMPACT",
      subtitle: "UNLEASH POWER",
      price: "5,050",
      features: [
        { title: "30 Posts", desc: "30 Feed Posts + 30 Story Posts\nInstagram, Facebook, LinkedIn,\nGoogle Business" },
        { title: "6 Reels", desc: "Instagram, Facebook (Two Optional:\nTikTok, LinkedIn, YouTube, or Twitter)" },
        { title: "Production (3 Hour)", desc: "1 Time Photography & Videography" },
        { title: "SEO (Advance)", desc: "On Page SEO\nOff Page SEO\nBusiness Profile\n20 Competitive Key Words" },
        { title: "Email Marketing (Limited)", desc: "Campaign Setup\nBasic Newsletter\nAudience Segmentation" },
        { title: "CRM", desc: "Setup & Automation" },
        { title: "Lead Generation", desc: "Google Ads, Tiktok, LinkedIn, Youtube &\nMeta Ads (Limited)" }
      ],
      bullets: [
        "Branding Guidelines",
        "Website Design & Development",
        "Company Profile"
      ]
    },
    {
      icon: Trophy,
      name: "ELITE IMPACT PLUS",
      subtitle: "ULTIMATE CONVERSIONS",
      price: "7,250",
      features: [
        { title: "30 Posts", desc: "30 Feed Posts + 30 Story Posts\nInstagram, Facebook, LinkedIn,\nGoogle Business" },
        { title: "6 Reels", desc: "Instagram, Facebook (Two Optional:\nTikTok, LinkedIn, YouTube, or Twitter)" },
        { title: "Production (6 Hour)", desc: "1 Time Photography & Videography" },
        { title: "SEO (Advance)", desc: "On Page SEO\nOff Page SEO\nBusiness Profile\n20 Competitive Key Words" },
        { title: "Email Marketing (Advance)", desc: "Automated Email Sequences\nPersonalized Campaigns\nA/B Testing & Analytics" },
        { title: "CRM", desc: "Setup & Automation" },
        { title: "CGI Commercial (1)", desc: "" },
        { title: "Lead Generation", desc: "Google Ads, Tiktok, LinkedIn, Youtube &\nMeta Ads (Limited)" },
        { title: "Complete Website Management", desc: "" }
      ],
      bullets: [
        "Branding Guidelines",
        "Website Design & Development",
        "Company Profile"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black border-t border-zinc-900 text-white font-inter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-4"
          >
            PRICING PLAN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            Maximize Your ROI with Our<br />Customized Marketing Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Choose the perfect marketing package tailored to your business goals and watch your success unfold.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-[1200px] mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#100d14] rounded-2xl p-8 flex flex-col items-center border border-white/5 relative group hover:border-yellow-500/20 transition-all shadow-xl hover:shadow-yellow-900/10"
            >
              {/* Top Icon */}
              <div className="mb-4">
                <pkg.icon size={42} className="text-yellow-500 stroke-[1.2]" />
              </div>
              
              {/* Header Info */}
              <h3 className="text-[17px] font-bold tracking-wider mb-2 text-center">{pkg.name}</h3>
              <p className="text-[11px] text-slate-400 tracking-widest uppercase mb-8 text-center">{pkg.subtitle}</p>
              
              <div className="flex items-end justify-center mb-8 relative w-full border-b border-white/5 pb-8">
                <span className="text-[10px] text-yellow-500 font-bold -rotate-90 relative top-1 origin-right transform tracking-widest">AED</span>
                <span className="text-[2.8rem] leading-none font-extrabold font-lexend ml-1 mr-2">{pkg.price}</span>
                <span className="text-[9px] text-yellow-500 font-bold mb-2 tracking-widest uppercase">/MONTHLY</span>
              </div>
              
              {/* Features Blocks */}
              <div className="flex flex-col gap-6 w-full text-center px-2 flex-grow mb-10">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="font-bold text-white text-[15px] mb-1.5">{feat.title}</span>
                    {feat.desc && <span className="text-[13px] text-slate-400 leading-relaxed whitespace-pre-line">{feat.desc}</span>}
                  </div>
                ))}
              </div>
              
              {/* Bulltes */}
              <div className="w-full flex flex-col gap-3.5 mb-10 pl-2">
                {pkg.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-[5px] h-[5px] rounded-full bg-yellow-500 shrink-0" />
                    <span className="text-[13px] text-slate-300 tracking-wide">{bullet}</span>
                  </div>
                ))}
              </div>
              
              {/* Button */}
              <Magnetic>
                <button
                  onClick={() => handleSelect(pkg.name)}
                  className="w-full py-3.5 px-10 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-zinc-950 hover:opacity-90 transition-opacity shadow-lg shadow-yellow-500/10 mt-auto"
                >
                  PURCHASE ORDER
                </button>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
