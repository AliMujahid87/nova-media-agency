"use client";

import { motion } from "framer-motion";
import { Command, Triangle, Hexagon } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-white min-h-screen flex items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-success/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sm font-medium text-slate-300 mb-6 backdrop-blur-sm">
              ✨ The New Standard of Growth
            </div>
            
            <h1 className="font-lexend text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              Scale Your Brand. <br />
              <span className="text-secondary">Dominate</span> Your Market.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl font-inter leading-relaxed">
              We build data-driven, high-converting digital marketing campaigns that turn clicks into loyal customers and maximize your ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={scrollToContact}
                className="w-[180px] h-[54px] bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-zinc-950 font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-yellow-500/20 text-lg flex items-center justify-center tracking-wide"
              >
                Start Scaling
              </button>
              <a
                href="#portfolio"
                className="w-[180px] h-[54px] bg-transparent text-white font-bold rounded-full hover:bg-zinc-900 transition-colors border-2 border-zinc-700 text-lg flex items-center justify-center tracking-wide"
              >
                View Our Work
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Trusted by 100+ Brands Worldwide</p>
              <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300 text-zinc-400">
                <div className="flex items-center gap-2 font-bold font-lexend text-xl">
                  <Command className="w-6 h-6" /> TECHFLOW
                </div>
                <div className="hidden sm:flex items-center gap-2 font-bold font-lexend text-xl">
                  <Triangle className="w-5 h-5 fill-current" /> LUMI
                </div>
                <div className="flex items-center gap-2 font-bold font-lexend text-xl">
                  <Hexagon className="w-6 h-6" /> NEXUS
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Animated Mesh/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center pointer-events-none"
          >
            {/* Elegant animated shapes simulating a 3D glass effect */}
            <div className="relative w-full max-w-[500px] aspect-square">
              <motion.div 
                animate={{ 
                  rotate: [0, 90, 180, 270, 360],
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "70% 30% 50% 50% / 30% 30% 70% 70%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-secondary to-orange-500 opacity-60 blur-md pointer-events-none"
              />
              <motion.div 
                animate={{ 
                  rotate: [360, 270, 180, 90, 0],
                  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 50% 30% 70% 50%", "50% 50% 20% 80% / 25% 80% 20% 75%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-8 bg-gradient-to-tl from-yellow-300 to-amber-400 opacity-50 blur-lg pointer-events-none"
              />
              
              {/* Glassmorphism overlay card */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between pointer-events-none"
              >
                <div className="w-full">
                  <div className="h-4 w-1/3 bg-slate-300/30 rounded mb-4"></div>
                  <div className="h-2 w-full bg-slate-300/20 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-slate-300/20 rounded"></div>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="h-24 w-1/2 bg-gradient-to-t from-secondary/40 to-transparent rounded-lg border border-white/5"></div>
                  <div className="h-32 w-1/2 bg-gradient-to-t from-success/40 to-transparent rounded-lg border border-white/5 self-end"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
