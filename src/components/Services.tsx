"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, LineChart, Target, Zap, Layout } from "lucide-react";

const services = [
  {
    icon: <Target className="w-8 h-8 text-yellow-500" />,
    title: "Performance Marketing",
    description: "Data-driven paid advertising across Google, Meta, and TikTok designed to scale your ROI exponentially."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
    title: "Advanced SEO & Content",
    description: "Dominate search engine rankings with semantic keywords and authoritative backlink strategies."
  },
  {
    icon: <Layout className="w-8 h-8 text-orange-400" />,
    title: "Conversion Rate Optimization",
    description: "Engineering high-converting funnels and landing pages that turn idle browsers into paying customers."
  },
  {
    icon: <Globe className="w-8 h-8 text-yellow-300" />,
    title: "Social Media Dominance",
    description: "Organic community building and viral campaigns that create authentic relationships with your audience."
  },
  {
    icon: <LineChart className="w-8 h-8 text-yellow-600" />,
    title: "B2B Lead Generation",
    description: "Automated outbound systems and LinkedIn strategies that flood your CRM with qualified enterprise leads."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Growth Consulting",
    description: "Bi-weekly strategy sessions with our elite growth hackers to identify new market opportunities."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black border-t border-zinc-900 text-zinc-100 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4"
          >
            Full-Funnel <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Marketing Mastery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            We deploy multi-channel strategies engineered for one singular metric: your bottom-line revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="bg-zinc-900 border border-zinc-800/50 p-8 rounded-2xl hover:bg-zinc-800/80 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 group"
            >
              <div className="bg-black w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-yellow-500/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-lexend font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
