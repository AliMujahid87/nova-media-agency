"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === "complete") {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        // Minimum duration of 2s for a premium feel
        setTimeout(() => setLoading(false), 2000);
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
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Orbital Rings - Inspired by user screenshot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-[0.5px] border-yellow-500/10 rounded-full"
              style={{ rotateX: "65deg", rotateY: "15deg" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border-[0.5px] border-yellow-500/20 rounded-full"
              style={{ rotateX: "-45deg", rotateY: "-25deg" }}
            />
            
            {/* Main Logo SVG */}
            <div className="relative z-10 w-16 h-16 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,184,0,0.3)]">
                <defs>
                  <linearGradient id="loaderGrad" x1="25" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFEA6A" />
                    <stop offset="1" stopColor="#FF9800" />
                  </linearGradient>
                </defs>
                
                {/* Animated N Path */}
                <motion.path
                  d="M25 80 V 45 A 15 15 0 0 1 50 35 L 75 65 A 15 15 0 0 0 95 65"
                  stroke="url(#loaderGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Animated Dot */}
                <motion.circle
                  cx="78"
                  cy="30"
                  r="12"
                  fill="#FFC107"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1.2
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Text reveal */}
          <div className="mt-8 overflow-hidden">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="font-lexend font-black text-2xl tracking-[0.2em] text-white">
                NOVA
              </span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="font-sans font-bold text-[8px] tracking-[0.5em] text-yellow-500 uppercase mt-2"
              >
                Media Agency
              </motion.span>
            </motion.div>
          </div>

          {/* Progress loader bar at bottom */}
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
