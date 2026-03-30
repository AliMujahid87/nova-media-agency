"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses looking to establish a digital presence.",
    monthlyPrice: 999,
    features: ["Social Media Management", "Basic SEO Optimization", "Monthly Performance Report", "Email Support"],
  },
  {
    id: "smart-boost",
    name: "Smart Boost",
    description: "Advanced growth tools for brands scaling their operations.",
    monthlyPrice: 2499,
    features: ["Everything in Starter", "PPC ad campaigns (Meta/Google)", "Conversion Rate Optimization", "Bi-weekly Strategy Calls", "Priority Support"],
    popular: true,
  },
  {
    id: "enhanced-reach",
    name: "Enhanced Reach",
    description: "Full-service digital marketing for market leaders.",
    monthlyPrice: 4999,
    features: ["Everything in Smart Boost", "Custom Funnel Building", "Advanced Content Marketing", "Dedicated Account Manager", "24/7 Phone Support"],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handleSelect = (packageId: string) => {
    // Dispatch event to pre-fill the form
    window.dispatchEvent(new CustomEvent("selectPackage", { detail: packageId }));
    
    // Scroll to contact form
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-black border-t border-zinc-900 text-white font-inter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4"
          >
            Transparent pricing for <span className="text-yellow-500">predictable growth</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-8"
          >
            Choose the package that aligns with your growth trajectory. No hidden fees.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-zinc-500"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-zinc-800 transition"
            >
              <span className="sr-only">Toggle Pricing Period</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-yellow-500 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isYearly ? "text-white" : "text-zinc-500"}`}>
              Yearly
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/20 text-yellow-500 border border-yellow-500/30">
                Save 20%
              </span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            // Price calculation logic
            const price = isYearly ? Math.round(tier.monthlyPrice * 0.8) : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col p-8 rounded-2xl ${
                  tier.popular
                    ? "bg-zinc-900 border-2 border-yellow-500 md:scale-110 z-10 shadow-2xl shadow-yellow-900/20"
                    : "bg-zinc-900/50 border border-zinc-800 shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-yellow-500 text-zinc-950 text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-yellow-500/40 border border-yellow-500/20">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-lexend font-bold mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-6 h-10">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${price}</span>
                  <span className="text-slate-400">/mo</span>
                </div>
                
                <button
                  onClick={() => handleSelect(tier.id)}
                  className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 mb-8 tracking-wide ${
                    tier.popular
                      ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-zinc-950 shadow-lg shadow-yellow-500/25 hover:opacity-90"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  Select {tier.name}
                </button>
                
                <div className="space-y-4 flex-1">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
