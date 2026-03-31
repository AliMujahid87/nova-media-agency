"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { Loader2, MapPin, Mail, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const inputClass =
  "w-full bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    const handleSelectPackage = (e: Event) => {
      const customEvent = e as CustomEvent;
      // Optionally auto-fill subject with package name
    };
    window.addEventListener("selectPackage", handleSelectPackage);
    return () => window.removeEventListener("selectPackage", handleSelectPackage);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit");
      toast.success("Message received. We'll be in touch shortly!");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "HEAD OFFICE",
      value: "Elite Business Center Building, Offices #410-412, Al Barsha 1, Dubai",
    },
    {
      icon: Mail,
      label: "EMAIL SUPPORT",
      value: "info@mydedicatedmarketers.com",
      href: "mailto:info@mydedicatedmarketers.com",
    },
    {
      icon: Phone,
      label: "LET'S TALK",
      value: "+971 58 624 0820",
      href: "tel:+971586240820",
    },
    {
      icon: Clock,
      label: "WORKING HOURS",
      value: "Monday to Saturday 9am to 5pm",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black border-t border-zinc-900 text-zinc-100 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl md:text-4xl font-lexend font-extrabold tracking-tight mb-4">
              How We Can Assist You?
            </h2>
            <p className="text-zinc-400 text-[15px] mb-10 leading-relaxed max-w-sm">
              Our team provides strategic guidance, innovative solutions, and dedicated support to drive your business forward.
            </p>

            <div className="border-t border-zinc-800 mb-8" />

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-yellow-500 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[13px] text-zinc-300 hover:text-yellow-400 transition-colors leading-relaxed"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[13px] text-zinc-300 leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 mb-8" />

            {/* Social Media */}
            <p className="text-white font-semibold text-[15px] mb-4">Follow our social media</p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-yellow-400 transition-colors group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-yellow-400 transition-colors group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-black"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* TikTok/Other */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-yellow-400 transition-colors group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-yellow-400 transition-colors group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-yellow-400 transition-colors group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/80 p-8 rounded-2xl shadow-2xl border border-zinc-800"
          >
            <h3 className="text-2xl font-bold font-lexend mb-2">Send us a message</h3>
            <p className="text-zinc-400 text-[13px] mb-7 leading-relaxed">
              Please feel free to send us any questions, feedback or suggestions you might have.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Company */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Name</label>
                  <input {...register("name")} placeholder="Name" className={inputClass} />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Company</label>
                  <input {...register("company")} placeholder="Company" className={inputClass} />
                </div>
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Phone</label>
                  <input {...register("phone")} placeholder="Phone" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email</label>
                  <input {...register("email")} type="email" placeholder="Email" className={inputClass} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Subject</label>
                <input {...register("subject")} placeholder="Subject" className={inputClass} />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Message</label>
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 hover:opacity-90 text-zinc-950 font-bold py-4 rounded-full transition-opacity shadow-lg shadow-yellow-500/25 flex items-center justify-center uppercase tracking-widest text-xs disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
