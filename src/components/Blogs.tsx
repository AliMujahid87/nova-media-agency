"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Ultimate Guide to Building a Winning SEO Strategy",
    excerpt: "In today's competitive digital landscape, having a robust Search Engine Optimization (SEO) strategy is critical to ensuring your business stands out online. A winning SEO...",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How Social Media Marketing Can Transform Your Business",
    excerpt: "In today's digital-first world, social media is more than just a platform for sharing updates and photos—it's a powerful tool that can redefine your business...",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "10 Digital Marketing Trends to Watch in 2024",
    excerpt: "The digital marketing landscape is ever-evolving, and 2024 is poised to be a year of innovation and transformation. Businesses need to stay ahead of the...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Test Post for WordPress",
    excerpt: "This is a sample post created to test the basic formatting features of the WordPress CMS. Subheading Level 2. You can use bold text, italic...",
    image: "",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="bg-black border-t border-zinc-900 text-white font-inter">

      {/* Header Banner */}
      <div className="relative py-20 text-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] bg-yellow-500/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-lexend font-extrabold tracking-tight mb-6"
          >
            BLOG
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed px-4"
          >
            Explore expert insights, trends, and tips on digital marketing, SEO, branding, and more to grow your business.
          </motion.p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800/60" />

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.filter((p) => p.image).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-56 w-full rounded-xl overflow-hidden mb-5 border border-zinc-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          ))}

          {/* Text-only posts */}
          {blogPosts.filter((p) => !p.image).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <h3 className="text-[15px] font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
