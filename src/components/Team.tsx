"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Hina Zaib",
    role: "Founder & CEO",
    image: "/team/ceo.jpeg",
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-lexend font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">{member.name}</h3>
                <p className="text-yellow-500 font-medium tracking-wide text-sm uppercase">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
