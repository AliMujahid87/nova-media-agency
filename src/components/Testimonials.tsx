"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, BrightEdge Retail",
    text: "Nova Media Agency completely transformed our online presence. Their team delivered a stunning website and a digital marketing strategy that tripled our leads in just three months. Highly recommended!",
    rating: 5,
  },
  {
    name: "James Patel",
    role: "Founder, UrbanFit Apparel",
    text: "Working with Nova has been a game-changer. Their branding expertise gave us a fresh identity that truly resonates with our audience. Sales have never been better.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, Solaris Tech",
    text: "From SEO to social media management, Nova handles it all with precision. Their data-driven approach and creative flair set them apart from every other agency we've worked with.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Co-Founder, GreenLeaf Organics",
    text: "Nova Media Agency built us an e-commerce platform that's fast, beautiful, and easy to manage. Our conversion rate jumped 40% within the first month of launch.",
    rating: 5,
  },
  {
    name: "Rachel Gomez",
    role: "Owner, Bella Vista Photography",
    text: "The team at Nova is incredibly talented and genuinely cares about their clients' success. They designed a portfolio site that perfectly showcases my work and attracts new bookings weekly.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "CTO, NexGen Solutions",
    text: "Their app development skills are top-notch. Nova delivered a polished, user-friendly mobile app ahead of schedule. Communication was seamless throughout the entire project.",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-black border-t border-zinc-900 text-zinc-100 font-inter relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-yellow-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-yellow-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-4"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-tight"
          >
            What Our Clients Say About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it — hear from the brands and
            businesses that trust Nova to deliver results.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-zinc-900/80 border border-zinc-800/60 p-7 rounded-2xl hover:border-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/5 group flex flex-col relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-yellow-500/20 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors">
                <Quote className="w-5 h-5 text-yellow-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-400 leading-relaxed text-[13px] flex-grow mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 flex items-center justify-center text-zinc-950 font-bold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-white font-bold text-sm group-hover:text-yellow-500 transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
