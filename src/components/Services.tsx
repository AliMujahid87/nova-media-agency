"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Layers, Search, MousePointerClick, Mail, Share2, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Bring your brand to life online with a website that's designed just for you. We build responsive, user-friendly sites that provide a smooth experience and help turn visitors into customers."
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Expand your reach with a custom-built mobile app that connects with your audience on the go. Our apps are designed to engage users and boost your business."
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Make a lasting impression with eye-catching designs that showcase your brand's personality. Whether it's for online or print, we create visuals that stand out."
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Develop a strong, recognizable brand that resonates with your audience. We'll help shape your brand's appearance and message for long-term success."
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your visibility and bring more traffic to your site with our SEO expertise. We use proven strategies to get you higher rankings and attract more potential customers."
  },
  {
    icon: MousePointerClick,
    title: "Pay Per Click (Paid Ads)",
    description: "Accelerate your business growth with pay-per-click advertising. Our tailored PPC strategies deliver targeted traffic, increased conversions, and measurable ROI, ensuring every click counts."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Elevate your business by connecting directly with your audience through expertly designed email campaigns that deliver results."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Harness the power of social media to connect with your audience, grow your brand, and achieve measurable business goals."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Get your brand noticed with targeted digital marketing strategies. From SEO to social media, we help you reach the right audience and increase conversions."
  }
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-black border-t border-zinc-900 text-zinc-100 font-inter relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-4"
          >
            WHAT WE OFFER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-tight"
          >
            Elevate Your Business with Our Expert Digital Marketing Solutions
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-zinc-900/80 border border-zinc-800/60 p-7 rounded-2xl hover:border-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/5 group flex flex-col cursor-pointer relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-yellow-500/20 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors">
                <service.icon className="w-6 h-6 text-yellow-500" />
              </div>

              <h3 className="text-[16px] font-bold text-white mb-3 leading-snug group-hover:text-yellow-500 transition-colors">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-[13px] flex-grow mb-6">{service.description}</p>

              {/* Learn More Button */}
              <button
                onClick={scrollToContact}
                className="w-full py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-zinc-800 text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-orange-500 group-hover:text-zinc-950 transition-all duration-300"
              >
                LEARN MORE
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
