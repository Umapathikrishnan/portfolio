"use client";

import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Card() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative h-[582px] w-[388px] overflow-hidden rounded-[20px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-inner shadow-white/10"
    >
      {/* Background pastel circles */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-300/30 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 h-32 w-32 rounded-full bg-green-300/20 blur-2xl"></div>

      <div className="flex h-full w-full">
        {/* Left: Image expands on hover */}
        <motion.div
          className="relative h-full overflow-hidden"
          variants={{
            rest: { width: "50%" },
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/profile.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right: Always show social icons */}
        <div className="relative h-full w-1/2 flex items-center justify-center">
          <motion.div
            className="absolute flex flex-col items-center justify-center space-y-5 z-50"
            variants={{
              rest: { opacity: 1 },
              hover: { opacity: 1 }, // Keep icons visible on hover
            }}
            transition={{ duration: 0.4 }}
          >
            <a href="https://github.com/Umapathikrishnan" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="text-white text-xl hover:text-[#8FABF4] transition" />
            </a>
            <a href="https://www.linkedin.com/in/umapathi-k-236820185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl hover:text-[#8FABF4] transition" />
            </a>
            <a href="mailto:umapathikrishnank@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl hover:text-[#8FABF4] transition" />
            </a>
            <a href="https://www.youtube.com/@codeclover3167" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="text-white text-xl hover:text-[#8FABF4] transition" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Left-side vertical name: hidden on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-start pl-4"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="rotate-270 transform text-4xl font-bold tracking-[0.2em] text-white uppercase whitespace-nowrap">
          Umapathi K
        </h1>
      </motion.div>
    </motion.div>
  );
}
