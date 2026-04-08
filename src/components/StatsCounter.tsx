"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";

const stats = [
  { label: "Revenue Generated", value: 100, suffix: "M+", prefix: "$" },
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Client Retention", value: 94, suffix: "%" },
  { label: "Ad Spend Managed", value: 50, suffix: "M+", prefix: "$" },
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-6xl font-lexend font-extrabold text-white mb-3 flex items-center">
                {stat.prefix && <span className="text-yellow-500 mr-1">{stat.prefix}</span>}
                <Counter value={stat.value} />
                <span className="text-yellow-500 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-zinc-400 text-sm md:text-base font-medium tracking-wide uppercase">
                {stat.label}
              </p>

              {/* Decorative line under each stat for mobile/desktop */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-yellow-500/50 to-transparent rounded-full opacity-30 lg:hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
