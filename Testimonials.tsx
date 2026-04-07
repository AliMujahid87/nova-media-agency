"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    quote:
      "NOVA completely transformed our digital presence. Within 3 months, our lead generation increased by 300% and our cost per acquisition dropped by half. Their team feels like an extension of ours.",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Marketing Director",
    company: "Luminary E-Commerce",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    quote:
      "We scaled from $50K to $350K in monthly revenue after partnering with NOVA. Their data-driven approach to paid advertising is unlike anything we've experienced. Absolutely world-class.",
  },
  {
    id: 3,
    name: "Amira Hassan",
    role: "Founder",
    company: "Nexus Wellness",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    quote:
      "From branding to social media to our entire web presence — NOVA handled it all flawlessly. Their creative team has an incredible eye for design and truly understands modern brand storytelling.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "COO",
    company: "Velocity Motors",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    quote:
      "The ROI we've seen working with NOVA has been extraordinary. They don't just run campaigns — they build growth engines. Our digital marketing spend now generates a consistent 5x return.",
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    role: "Brand Manager",
    company: "Aura Interiors",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    quote:
      "NOVA's SEO strategy put us on the first page of Google for every competitive keyword in our niche. Organic traffic grew 400% in six months. They truly deliver on their promises.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) => {
        const next = prev + newDirection;
        if (next < 0) return testimonials.length - 1;
        if (next >= testimonials.length) return 0;
        return next;
      });
    },
    []
  );

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 bg-black border-t border-zinc-900 text-white font-inter relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-4"
          >
            CLIENT TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-tight"
          >
            Hear It From the Brands{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              We&apos;ve Scaled
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Real results, real stories. Our clients&apos; success is the ultimate measure of our work.
          </motion.p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-11 h-11 rounded-full bg-zinc-900/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-500/5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-11 h-11 rounded-full bg-zinc-900/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-500/5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card Container */}
          <div className="relative min-h-[380px] md:min-h-[320px] flex items-center justify-center px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={t.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="w-full"
              >
                <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-yellow-500/10 transition-colors duration-500">
                  {/* Decorative quote icon */}
                  <div className="absolute top-6 right-8 md:top-8 md:right-12">
                    <Quote className="w-16 h-16 md:w-20 md:h-20 text-yellow-500/[0.06] fill-yellow-500/[0.06] rotate-180" />
                  </div>

                  {/* Subtle glow on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/0 group-hover:bg-yellow-500/5 rounded-full blur-[60px] transition-all duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    {/* Avatar & Info */}
                    <div className="flex flex-col items-center md:items-start shrink-0">
                      <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden ring-2 ring-yellow-500/20 ring-offset-2 ring-offset-zinc-900 mb-4">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>

                      <h4 className="text-white font-bold text-base leading-tight text-center md:text-left">
                        {t.name}
                      </h4>
                      <p className="text-yellow-500/80 text-xs font-semibold tracking-wide mt-0.5">
                        {t.role}
                      </p>
                      <p className="text-zinc-500 text-xs tracking-wide">
                        {t.company}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="flex-1">
                      <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className="relative group/dot"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === current
                      ? "w-8 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-sm shadow-yellow-500/30"
                      : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
