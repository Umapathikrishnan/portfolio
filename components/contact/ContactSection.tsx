"use client";

import { SendHorizonal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  return (
    <section className="w-full px-8 py-16 text-left">
      {/* Heading */}
      <div className="mb-12 space-y-4 text-center sm:text-left">
        <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold text-white/35 tracking-[0.2em] uppercase leading-none">
          Say Hello
        </h2>
      </div>

      {/* Contact Container */}
      <div className="mx-full bg-[#1D1D1D] p-4 sm:p-8 rounded-[10px] space-y-6 w-full max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <input
            type="text"
            placeholder="Your Name"
            className={cn(
              "bg-[#575757] text-white placeholder-white/60 px-4 py-3 rounded-md outline-none",
              "focus:ring-2 focus:ring-[#8FABF4]"
            )}
          />
          {/* Email Field */}
          <input
            type="email"
            placeholder="Your Email"
            className={cn(
              "bg-[#575757] text-white placeholder-white/60 px-4 py-3 rounded-md outline-none",
              "focus:ring-2 focus:ring-[#8FABF4]"
            )}
          />
        </div>

        {/* Message Field */}
        <textarea
          rows={5}
          placeholder="Your Message"
          className={cn(
            "w-full bg-[#575757] text-white placeholder-white/60 px-4 py-3 rounded-md outline-none",
            "focus:ring-2 focus:ring-[#8FABF4] resize-none"
          )}
        />

        {/* Send Button */}
        <button
          type="submit"
          className="mt-4 inline-flex items-center gap-2 bg-[#8FABF4] text-white font-medium px-6 py-3 rounded-md hover:bg-[#A0C3FF] transition-colors duration-200"
        >
          <SendHorizonal className="w-5 h-5" />
          Send Message
        </button>
      </div>
    </section>
  );
}
