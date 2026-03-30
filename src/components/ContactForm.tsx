"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  websiteUrl: z.string().url({ message: "Please enter a valid URL (e.g., https://example.com)." }).or(z.literal("")),
  selectedPackage: z.string().min(1, { message: "Please select a package." }),
  utmSource: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      websiteUrl: "",
      selectedPackage: "",
      utmSource: "",
    },
  });

  useEffect(() => {
    // Capture UTM params
    const params = new URLSearchParams(window.location.search);
    const utms = params.get("utm_source") || "Direct";
    setValue("utmSource", utms);

    // Listen to Pricing table clicks
    const handleSelectPackage = (e: Event) => {
      const customEvent = e as CustomEvent;
      setValue("selectedPackage", customEvent.detail);
    };

    window.addEventListener("selectPackage", handleSelectPackage);
    return () => window.removeEventListener("selectPackage", handleSelectPackage);
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Message received. We'll be in touch shortly!");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-zinc-900 text-zinc-100 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-lexend font-extrabold tracking-tight mb-6">
              Let&apos;s Scale Your <span className="text-yellow-500">Vision</span>.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ready to dominate your market? Drop us a line below and let&apos;s craft a digital strategy that converts clicks into revenue.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500 font-medium uppercase tracking-wider mb-1">Email Us</span>
                <a href="mailto:hello@novamedia.com" className="text-xl text-white font-medium hover:text-yellow-500 transition-colors">
                  hello@novamedia.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500 font-medium uppercase tracking-wider mb-1">Call Us</span>
                <span className="text-xl text-white font-medium">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-zinc-900/80 p-8 rounded-2xl shadow-2xl border border-zinc-800 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                <input
                  {...register("name")}
                  className={`w-full bg-black/50 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-yellow-500'} rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Work Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className={`w-full bg-black/50 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-yellow-500'} rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-colors`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              {/* Website URL */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Website URL <span className="text-zinc-500 font-normal">(optional)</span></label>
                <input
                  {...register("websiteUrl")}
                  type="url"
                  className={`w-full bg-black/50 border ${errors.websiteUrl ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-yellow-500'} rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-colors`}
                  placeholder="https://yourcompany.com"
                />
                {errors.websiteUrl && <p className="mt-1 text-sm text-red-500">{errors.websiteUrl.message}</p>}
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Select a Package</label>
                <select
                  {...register("selectedPackage")}
                  className={`w-full bg-black/50 border ${errors.selectedPackage ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-yellow-500'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none`}
                >
                  <option value="" disabled>Choose your tier...</option>
                  <option value="starter">Starter</option>
                  <option value="smart-boost">Smart Boost</option>
                  <option value="enhanced-reach">Enhanced Reach</option>
                  <option value="custom">Custom Needs</option>
                </select>
                {errors.selectedPackage && <p className="mt-1 text-sm text-red-500">{errors.selectedPackage.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 hover:opacity-90 text-zinc-950 font-bold py-4 rounded-full transition-opacity shadow-lg shadow-yellow-500/25 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request Free Consultation"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
