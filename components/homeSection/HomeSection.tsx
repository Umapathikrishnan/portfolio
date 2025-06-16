"use client";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 text-white text-center sm:text-left">
      {/* FULLSTACK (faded white) */}
      <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold tracking-[0.2em] text-white/35 leading-none">
        FULLSTACK
      </h1>

      {/* DEVELOPER */}
      <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-[0.2em] text-white leading-none mt-2">
        DEVELOPER
      </h2>

      {/* Subtitle */}
      <p className="font-extralight text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] mt-6 max-w-[60ch] mx-auto sm:mx-0 tracking-normal leading-snug">
        I build scalable web apps using modern JavaScript. I specialize in crafting clean APIs,
        intuitive UIs, and maintainable systems.
      </p>

      {/* +3 Years / CTA */}
      <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 sm:gap-12">
        {/* +3 Years of experience */}
        <div>
          <h3 className="text-[64px] sm:text-[72px] md:text-[80px] lg:text-[96px] font-bold text-white leading-none">
            +3
          </h3>
          <p className="text-white text-sm sm:text-base mt-1 leading-tight">
            Years of<br />experience
          </p>
        </div>

        {/* Download CV CTA */}
        <a
          href="/cv.pdf"
          download
          className="mt-8 w-[175px] h-[50px] bg-[#8FABF4] flex items-center justify-center gap-2 rounded-[10px] text-white text-sm font-light hover:brightness-110 transition"
        >
          <FontAwesomeIcon icon={faDownload} className="text-base" />
          Download CV
        </a>
      </div>
    </section>
  );
}
