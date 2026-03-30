"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Ultimate Guide to Meta Ads in 2026",
    category: "Paid Advertising",
    date: "March 20, 2026",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Content is Still King: SEO Strategies",
    category: "Organic SEO",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Scaling Revenue with Conversion Rate Optimization",
    category: "CRO",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-black border-t border-zinc-900 text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4"
          >
            Insights & <span className="text-yellow-500">Strategies</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Stay ahead of the curve with our latest articles on digital marketing, SEO, and growth hacking.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 border border-zinc-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-zinc-950 text-xs font-bold uppercase px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-sm mb-3">
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold font-lexend text-white group-hover:text-yellow-500 transition-colors leading-snug">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
