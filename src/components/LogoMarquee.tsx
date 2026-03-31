"use client";

import React from "react";
import { motion } from "framer-motion";
import { Command, Triangle, Hexagon, Circle, Square, Globe } from "lucide-react";

const logos = [
  { name: "TECHFLOW", icon: Command },
  { name: "LUMINA", icon: Triangle },
  { name: "NEXUS", icon: Hexagon },
  { name: "GLOBAL", icon: Globe },
  { name: "FLUX", icon: Circle },
  { name: "CORE", icon: Square },
  { name: "APEX", icon: Triangle },
  { name: "VORTEX", icon: Hexagon },
];

export default function LogoMarquee() {
  // Duplicate logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Side Fades for smooth entry/exit */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap gap-16 md:gap-24"
        animate={{
          x: [0, -1035], // Approximate half-width of the duplicated list
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer group"
          >
            <logo.icon className="w-6 h-6 md:w-8 md:h-8 group-hover:text-yellow-500 transition-colors" />
            <span className="text-xl md:text-2xl font-lexend font-bold tracking-tighter opacity-60 group-hover:opacity-100">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
