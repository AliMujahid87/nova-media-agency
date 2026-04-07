"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      const timer = setTimeout(() => setLoading(false), 2500);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        setTimeout(() => setLoading(false), 2500);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Professional Easing Curves
  const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number]; 
  const cinematicEase = [0.6, 0.05, -0.01, 0.9] as [number, number, number, number]; 
  const exitEase = [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]; 

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05, // Subtle cinematic zoom-in on exit
            y: -40,
            transition: { duration: 1.2, ease: exitEase } 
          }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Logo and Orbital Container */}
          <div className="relative w-48 h-48 flex items-center justify-center scale-90 md:scale-100">
            {/* Orbital Rings - Smoother and Ethereal */}
            <motion.div
              animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-full h-full border-[0.5px] border-yellow-500/10 rounded-full shadow-[0_0_20px_rgba(255,193,7,0.05)]"
              style={{ rotateX: "72deg", rotateY: "12deg" }}
            />
            <motion.div
              animate={{ rotate: -360, opacity: [0.15, 0.3, 0.15] }}
              transition={{ 
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-[82%] h-[82%] border-[0.5px] border-yellow-500/20 rounded-full shadow-[0_0_30px_rgba(255,193,7,0.1)]"
              style={{ rotateX: "48deg", rotateY: "-22deg" }}
            />
            
            {/* Main Logo SVG - Silky Entrance */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: smoothEase }}
              className="relative z-10 w-24 h-24 pointer-events-none flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]">
                <defs>
                  <linearGradient id="loaderGrad" x1="15" y1="80" x2="85" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFEA6A" />
                    <stop offset="1" stopColor="#FF9800" />
                  </linearGradient>
                </defs>
                
                {/* Animated N Path */}
                <motion.path
                  d="M15 80 V 45 A 15 15 0 0 1 40 35 L 65 65 A 15 15 0 0 0 85 65"
                  stroke="url(#loaderGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 2.2, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Pulse Dot */}
                <motion.circle
                  cx="68"
                  cy="32"
                  r="14"
                  fill="#FFC107"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: 1,
                  }}
                  transition={{ 
                    scale: { duration: 1.5, repeat: Infinity, ease: smoothEase, repeatDelay: 1 },
                    opacity: { duration: 0.5, delay: 0.8 },
                  }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Staggered Text Reveal */}
          <div className="mt-14 md:mt-20 overflow-hidden px-4 text-center">
            <div className="flex flex-col items-center">
              <motion.h1 
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: smoothEase }}
                className="font-lexend font-black text-3xl md:text-5xl tracking-[0.3em] text-white"
              >
                NOVA
              </motion.h1>
              <div className="overflow-hidden mt-3">
                <motion.p
                  initial={{ y: 20, opacity: 0, letterSpacing: "0.2em" }}
                  animate={{ y: 0, opacity: 1, letterSpacing: "0.6em" }}
                  transition={{ delay: 1, duration: 1.5, ease: cinematicEase }}
                  className="font-sans font-bold text-[10px] md:text-[12px] text-yellow-500 uppercase whitespace-nowrap"
                >
                  Media Agency
                </motion.p>
              </div>
            </div>
          </div>

          {/* Ethereal Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 shadow-[0_-5px_15px_rgba(255,193,7,0.3)]"
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
