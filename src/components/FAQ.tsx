"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const questions = [
    {
      q: "How do I choose the right package for my business?",
      a: "The right package depends on your business goals, target audience, and the level of service you require. If you are unsure which package is best, our team is here to help. We offer free consultations where we assess your needs, understand your objectives, and recommend the most suitable package to help you achieve measurable results."
    },
    {
      q: "Can I upgrade or downgrade my package at any time?",
      a: "Yes, our packages are strictly flexible. You can request to upgrade or downgrade your package based on your evolving business milestones and changing marketing demands."
    },
    {
      q: "What is the duration of the marketing campaigns in your monthly packages?",
      a: "Our standard monthly packages run on a 30-day renewable cycle, but we usually recommend a commitment of at least 3-6 months to establish momentum and see sustainable growth."
    },
    {
      q: "Will I receive reports and updates on the progress of my campaigns?",
      a: "Absolutely! Transparency is crucial to our process. We provide comprehensive monthly performance reports detailing overall metrics, ad spend efficiency, and continuous optimization strategies."
    },
    {
      q: "How can I track the results of my campaigns?",
      a: "We implement advanced tracking systems including Google Analytics, Meta Pixel, and custom UTM parameters. You will always have clear visibility on leads, conversions, and exact ROI through our reporting dashboard."
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-zinc-900 text-white font-inter relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-4">
              COMMON QUESTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-lexend font-bold tracking-tight mb-6">
              Most Popular Questions
            </h2>
            <p className="text-[15px] text-slate-400 mb-8 leading-relaxed max-w-sm">
              Explore the answers to the most common questions we receive about our services and pricing. We are here to ensure you make the best decision for your business.
            </p>
            <Link 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex py-3.5 px-8 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-zinc-950 hover:opacity-90 transition-opacity shadow-lg shadow-yellow-500/10"
            >
              DISCOVER MORE
            </Link>
          </motion.div>

          {/* Right Column Accordions */}
          <div className="flex flex-col gap-4">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 rounded-xl border border-zinc-800/80 overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : index)} 
                    className="w-full flex items-center justify-between p-6 text-center lg:text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-[15px] text-zinc-100 lg:pr-8 leading-snug w-full">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-500' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-zinc-800/80"
                      >
                        <div className="p-6 pt-5 text-[14px] text-slate-400 leading-relaxed font-light bg-zinc-900/30">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
