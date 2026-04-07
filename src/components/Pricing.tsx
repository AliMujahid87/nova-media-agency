"use client";

import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { Rocket, TrendingUp, Target, Crown, Shield, Trophy, LucideIcon } from "lucide-react";
import Magnetic from "./Magnetic";
import { useEffect, useState, useRef } from "react";

// Counter Component for Animated Prices
const PriceCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const target = parseInt(value.replace(/,/g, ""));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // Increased to 2s for better visibility
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for counter
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOutExpo * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

interface PricingFeature {
  title: string;
  desc?: string;
}

interface PricingPackage {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  price: string;
  features: PricingFeature[];
  bullets: string[];
}

// Interactive Pricing Card
const PricingCard = ({ pkg, index }: { pkg: PricingPackage; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleSelect = (packageName: string) => {
    window.dispatchEvent(new CustomEvent("selectPackage", { detail: packageName }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const isPremium = pkg.name.includes("ELITE") || pkg.name.includes("PREMIUM");

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative rounded-3xl p-8 flex flex-col items-center border transition-all duration-500 overflow-hidden ${
        isPremium 
        ? "bg-zinc-950 border-yellow-500/20 shadow-[0_0_40px_rgba(255,193,7,0.05)]" 
        : "bg-[#0a0a0a] border-white/5"
      } hover:border-yellow-500/40`}
    >
      {/* Interactive Hover Glow */}
      <motion.div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,193,7,0.1), transparent 40%)`
          )
        }}
      />

      {isPremium && (
        <div className="absolute top-4 right-6">
          <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
            <span className="text-[9px] font-black text-yellow-500 uppercase tracking-tighter">Most Popular</span>
          </div>
        </div>
      )}

      {/* Top Icon with Background Glow */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <pkg.icon size={48} className="text-yellow-500 stroke-[1] relative z-10 group-hover:scale-110 transition-transform duration-500" />
      </div>
      
      {/* Header Info */}
      <h3 className="text-xl font-lexend font-extrabold tracking-tight mb-2 text-center text-white">{pkg.name}</h3>
      <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase mb-8 text-center font-bold px-4 py-1 bg-white/5 rounded-full">{pkg.subtitle}</p>
      
      <div className="flex items-end justify-center mb-10 relative w-full border-b border-white/5 pb-8">
        <span className="text-[10px] text-yellow-500 font-black mr-2 mb-2 tracking-widest">AED</span>
        <span className="text-5xl leading-none font-black font-lexend text-white">
          <PriceCounter value={pkg.price} />
        </span>
        <span className="text-[10px] text-zinc-500 font-bold ml-2 mb-2 tracking-widest uppercase">/Mo</span>
      </div>
      
      {/* Features Blocks */}
      <div className="flex flex-col gap-6 w-full px-2 flex-grow mb-10">
        {pkg.features.map((feat: PricingFeature, i: number) => (
          <div key={i} className="flex flex-col items-start border-l-2 border-zinc-800 pl-4 group-hover:border-yellow-500/30 transition-colors">
            <span className="font-bold text-zinc-100 text-[14px] mb-1">{feat.title}</span>
            {feat.desc && <span className="text-[12px] text-zinc-400 leading-relaxed font-medium">{feat.desc}</span>}
          </div>
        ))}
      </div>
      
      {/* Bulltes */}
      <div className="w-full flex flex-col gap-3.5 mb-10 pl-2">
        {pkg.bullets.map((bullet: string, i: number) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isPremium ? 'bg-yellow-500' : 'bg-zinc-700'} group-hover:bg-yellow-500`} />
            <span className="text-[13px] text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">{bullet}</span>
          </div>
        ))}
      </div>
      
      {/* Button */}
      <Magnetic>
        <button
          onClick={() => handleSelect(pkg.name)}
          className="w-full py-4 px-10 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl bg-yellow-500 text-zinc-950 hover:bg-white hover:text-zinc-950 active:scale-95 shadow-yellow-500/10"
        >
          SELECT PACKAGE
        </button>
      </Magnetic>
    </motion.div>
  );
};

export default function Pricing() {
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
    <section id="pricing" className="py-24 bg-[#050505] border-t border-zinc-900 text-white font-inter relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black text-yellow-500 tracking-[0.2em] uppercase mb-6"
          >
            PRICING PLAN
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-lexend font-black tracking-tighter mb-8 max-w-4xl mx-auto leading-none"
          >
            Maximize Your ROI with<br />Expert <span className="text-yellow-500">Marketing</span> Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            Choose the perfect marketing package tailored to your business goals and watch your success unfold.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-[1240px] mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
