"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white font-inter overflow-hidden relative">
      <div className="absolute top-1/2 -left-[10%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 -right-[10%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ABOUT US Header Section */}
      <div className="w-full max-w-[1200px] mx-auto mb-20 relative z-10 border border-t-0 border-white/10 rounded-b-[4rem] bg-zinc-950 overflow-hidden pt-16 pb-20 px-4 sm:px-8">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-yellow-500/20 blur-[90px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering brands with innovative strategies and creative solutions, we pave the way for long-term success and growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent z-10MIX"></div>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Our Dedicated Team"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-500 mb-2">Our Mission</h2>
            <h3 className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-6 leading-tight">
              We Don&apos;t Just Market. We <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Build Empires.</span>
            </h3>
            
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              At NOVA Media Agency, we believe standard agency models are broken. Our philosophy is rooted in becoming an extension of your internal team—delivering elite, data-backed execution without the traditional agency bloat.
            </p>
            
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Founded by industry veterans who have managed over $50M in profitable ad spend, we understand the distinct difference between generating vanity metrics and generating actual profit.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-lexend font-extrabold text-white mb-2">94%</span>
                <span className="text-sm text-yellow-500 font-bold uppercase tracking-widest">Client Retention</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-lexend font-extrabold text-white mb-2">$100M+</span>
                <span className="text-sm text-amber-500 font-bold uppercase tracking-widest">Revenue Generated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
