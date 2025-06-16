"use client";

import { SendHorizonal } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      className="w-full px-8 py-16 text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      {/* Heading */}
      <div className="mb-12 space-y-4 text-center sm:text-left">
        <motion.h2
          className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold text-white/35 tracking-[0.2em] uppercase leading-none"
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Say Hello
        </motion.h2>
      </div>

      {/* Contact Form */}
      <form
        action="https://formsubmit.co/umapathikrishnank@gmail.com"
        method="POST"
        className="mx-full bg-[#1D1D1D] p-4 sm:p-8 rounded-[10px] space-y-6 w-full max-w-3xl"
      >
        {/* Disable CAPTCHA and redirect on success */}
        <input type="hidden" name="_captcha" value="false" />
        {/* <input type="hidden" name="_next" value="#" /> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <motion.input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className={cn(
              "bg-[#575757] text-white placeholder-white/60 px-4 py-3 rounded-md outline-none",
              "focus:ring-2 focus:ring-[#8FABF4]"
            )}
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          {/* Email Field */}
          <motion.input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className={cn(
              "bg-[#575757] text-white placeholder-white/60 px-4 py-3 rounded-md outline-none",
              "focus:ring-2 focus:ring-[#8FABF4]"
            )}
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Message Field */}
        <motion.textarea
          name="message"
          required
          rows={5}
          placeholder="Share your thoughts, ideas, or just say hi 👋"
          className={cn(
            "w-full bg-[#575757] text-white placeholder-white/60 px-4 py-3 rounded-md outline-none",
            "focus:ring-2 focus:ring-[#8FABF4] resize-none"
          )}
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Send Button */}
        <motion.button
          type="submit"
          className="mt-4 inline-flex items-center gap-2 bg-[#8FABF4] text-white font-medium px-6 py-3 rounded-md hover:bg-[#A0C3FF] transition-colors duration-200"
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileFocus={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
        >
          <SendHorizonal className="w-5 h-5" />
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
