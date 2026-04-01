"use client";

import { motion } from "framer-motion";
import { Command, Zap, TrendingUp, Target, Rocket, Shield, Activity } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import LogoMarquee from "@/components/LogoMarquee";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-white min-h-screen flex items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sm font-medium text-slate-300 mb-6 backdrop-blur-sm"
            >
              ✨ The New Standard of Growth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="font-lexend text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
            >
              Scale Your Brand. <br />
              <span className="text-secondary">Dominate</span> Your Market.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl font-inter leading-relaxed"
            >
              We build data-driven, high-converting digital marketing campaigns that turn clicks into loyal customers and maximize your ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto"
            >
              <Magnetic>
                <button
                  onClick={scrollToContact}
                  className="w-[180px] h-[54px] bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-zinc-950 font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-yellow-500/20 text-lg flex items-center justify-center tracking-wide"
                >
                  Start Scaling
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href="#portfolio"
                  className="w-[180px] h-[54px] bg-transparent text-white font-bold rounded-full hover:bg-zinc-900 transition-colors border-2 border-zinc-700 text-lg flex items-center justify-center tracking-wide"
                >
                  View Our Work
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="w-full lg:w-[150%] -ml-[5%] lg:-ml-[25%] opacity-40"
            >
              <LogoMarquee />
            </motion.div>
          </motion.div>

          {/* Right Column: Growth Engine 3D Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative h-[400px] lg:h-[550px] flex items-start justify-center"
          >
            {/* The Growth Engine Container */}
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">

              {/* Outer Glows */}
              <div className="absolute inset-0 bg-yellow-500/5 blur-[120px] rounded-full animate-pulse" />

              {/* 1. THE OUTER ORBIT (Slow, Large) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[95%] h-[95%] border border-white/5 rounded-full"
              >
                {/* Floating STRATEGY Tag */}
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-2xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">Strategy</span>
                </motion.div>

                {/* Floating DATA-DRIVEN Tag */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-2xl"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <Activity className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">Data Driven</span>
                </motion.div>
              </motion.div>

              {/* 2. THE MIDDLE ORBIT (Counter-Rotate, Glassy) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[75%] h-[75%] border border-yellow-500/10 rounded-full"
              >
                {/* Floating ROI Tag */}
                <motion.div
                  className="absolute top-1/2 -right-4 -translate-y-1/2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-yellow-500/20 rounded-full flex items-center gap-2 shadow-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="w-4 h-4 text-yellow-500" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">ROI Focus</span>
                </motion.div>

                {/* Floating SCALABILITY Tag */}
                <motion.div
                  className="absolute top-1/2 -left-4 -translate-y-1/2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-yellow-500/20 rounded-full flex items-center gap-2 shadow-2xl"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">Scalability</span>
                </motion.div>
              </motion.div>

              {/* 3. THE INNER ORBIT (Fast, Dashed) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-[55%] h-[55%] border border-dashed border-white/10 rounded-full"
              >
                {/* Floating ADS Tag */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-950/90 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">Paid Ads</span>
                </motion.div>

                {/* Floating RETENTION Tag */}
                <motion.div
                  className="absolute top-1/2 -left-4 -translate-y-1/2 px-4 py-2 bg-zinc-950/90 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-xl"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">Retention</span>
                </motion.div>
              </motion.div>

              {/* 4. THE CENTRAL CORE (Pulsating) */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Multi-layered Glows */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-amber-600 rounded-3xl rotate-45 opacity-20 blur-sm" />

                {/* Core Brand Element */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="relative z-10 w-20 h-20 bg-zinc-900 border-2 border-yellow-500/50 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.3)] cursor-pointer overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent group-hover:opacity-100 transition-opacity opacity-0" />
                  <Command className="w-10 h-10 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                </motion.div>

                {/* Satellite Particles */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
                    style={{ rotate: angle }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -top-1 left-1/2 w-1 h-1 bg-yellow-400 rounded-full blur-[1px]" />
                  </motion.div>
                ))}
              </div>

              {/* Abstract Floating Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                <motion.path
                  d="M 50 10 Q 90 50 50 90 Q 10 50 50 10"
                  fill="none"
                  stroke="url(#coreGradient)"
                  strokeWidth="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
