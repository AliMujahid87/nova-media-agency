"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Aisha Rahman",
    role: "Chief Growth Officer",
    image: "/team/team-1.png",
  },
  {
    name: "Zainab Malik",
    role: "Head of Strategy",
    image: "/team/team-2.png",
  },
  {
    name: "Nadia Hussain",
    role: "Director of Paid Media",
    image: "/team/team-3.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-black border-t border-zinc-900 text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4"
          >
            Meet the <span className="text-yellow-500">Experts</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            The minds behind the revenue pipelines. Our dedicated team is ready to scale your vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/50 transition-colors"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-lexend font-bold text-white mb-1">{member.name}</h3>
                <p className="text-yellow-500 font-medium tracking-wide text-sm uppercase">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
