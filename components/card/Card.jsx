"use client";

import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Card() {
  return (
    <div className="group relative h-[582px] w-[388px] overflow-hidden rounded-[20px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-inner shadow-white/10">
      {/* Background pastel circles */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-300/30 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 h-32 w-32 rounded-full bg-green-300/20 blur-2xl"></div>

      <div className="flex h-full w-full transition-all duration-500 group-hover:grid group-hover:grid-cols-3">
        {/* Local image */}
        <div className="relative h-full w-1/2 overflow-hidden transition-all duration-500 group-hover:w-full">
          <Image
            src="/assets/profile.png"
            alt="Profile"
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        {/* Name on hover */}
        <div className="col-span-1 hidden h-full items-center justify-center group-hover:flex">
          <h1 className="rotate-270 transform text-4xl font-bold tracking-[0.2em] whitespace-nowrap text-white uppercase">
            Umapathi K
          </h1>
        </div>
        {/* Icons on hover */}
        <div className="flex h-full w-1/2 flex-col items-center justify-center space-y-5 transition-all duration-500 group-hover:w-full">
          <a href="https://github.com" target="_blank" rel="noreferrer" alt="GitHub">
            <FontAwesomeIcon icon={faGithub} className="hover:text-black transition text-white text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" alt="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-600 transition text-white text-xl" />
          </a>
          <a href="mailto:example@example.com" alt="Email">
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-red-500 transition text-white text-xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" alt="YouTube">
            <FontAwesomeIcon icon={faYoutube} className="hover:text-red-600 transition text-white text-xl" />
          </a>
        </div>
      </div>

      {/* Name on default */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start pl-4 transition-opacity duration-300 group-hover:opacity-0">
        <h1 className="rotate-270 transform text-4xl font-bold tracking-[0.2em] whitespace-nowrap text-white uppercase">
  Umapathi K
</h1>

      </div>
    </div>
  );
}
