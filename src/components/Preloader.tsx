"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === "complete") {
      const timer = setTimeout(() => setLoading(false), 2200);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        // Minimum duration for a premium feel
        setTimeout(() => setLoading(false), 2200);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100, 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Logo and Orbital Container */}
          <div className="relative w-40 h-40 flex items-center justify-center scale-90 md:scale-110">
            {/* Orbital Rings - Inspired by user screenshot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-[0.5px] border-yellow-500/10 rounded-full"
              style={{ rotateX: "70deg", rotateY: "10deg" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border-[0.5px] border-yellow-500/20 rounded-full"
              style={{ rotateX: "45deg", rotateY: "-20deg" }}
            />
            
            {/* Main Logo SVG - Perfectly Centered */}
            <div className="relative z-10 w-20 h-20 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,193,7,0.3)]">
                <defs>
                  <linearGradient id="loaderGrad" x1="15" y1="80" x2="85" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFEA6A" />
                    <stop offset="1" stopColor="#FF9800" />
                  </linearGradient>
                </defs>
                
                {/* Animated N Path - Shifted to center (15 to 85 instead of 25 to 95) */}
                <motion.path
                  d="M15 80 V 45 A 15 15 0 0 1 40 35 L 65 65 A 15 15 0 0 0 85 65"
                  stroke="url(#loaderGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.8, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Animated Dot - Shifted accordingly (cx=68 instead of 78) */}
                <motion.circle
                  cx="68"
                  cy="32"
                  r="14"
                  fill="#FFC107"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6,
                    repeat: Infinity,
                    repeatDelay: 1.5
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Text reveal section with better spacing */}
          <div className="mt-12 md:mt-16 overflow-hidden px-4 text-center">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-1"
            >
              <h1 className="font-lexend font-black text-3xl md:text-4xl tracking-[0.25em] text-white">
                NOVA
              </h1>
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="font-sans font-bold text-[9px] md:text-[11px] text-yellow-500 uppercase whitespace-nowrap"
              >
                Media Agency
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 shadow-[0_0_10px_rgba(255,193,7,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
