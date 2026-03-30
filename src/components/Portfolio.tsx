"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    client: "TechFlow SaaS",
    budget: "$120k+ Generated",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    client: "Luminary E-Commerce",
    budget: "$350k Revenue Scaled",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    client: "Fintech Vault",
    budget: "300% Lead Growth",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    client: "Velocity Motors",
    budget: "$5M ROI",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black border-t border-zinc-900 text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4"
          >
            Proof is in the <span className="text-yellow-500">Numbers</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it. Here are some of the results we&apos;ve engineered for our partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800"
            >
              <Image
                src={project.image}
                alt={project.client}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-amber-500 font-bold text-sm tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.budget}
                </span>
                <h3 className="text-3xl font-lexend font-bold text-white mb-2">{project.client}</h3>
                <div className="h-[2px] w-0 bg-yellow-500 group-hover:w-16 transition-all duration-500 delay-200"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
