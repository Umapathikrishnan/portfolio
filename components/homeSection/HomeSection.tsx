"use client";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export default function HomeSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 text-white text-center sm:text-left sm:flex sm:flex-col sm:items-start sm:justify-center space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-12">
      {/* FULLSTACK (faded white) */}
      <motion.h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold tracking-[0.2em] text-white/35 leading-none" initial={{ transform: "translateY(20px)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}>
        FULLSTACK
      </motion.h1>

      {/* DEVELOPER */}
      <motion.h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-[0.2em] text-white leading-none mt-2" initial={{ transform: "translateY(20px)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        DEVELOPER
      </motion.h2>

      {/* Subtitle */}
      <motion.p initial={{ transform: "translateY(20px)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }} exit={{ opacity: 0, transition: { duration: 0.2 } }} className="font-extralight text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] mt-6 max-w-[60ch] mx-auto sm:mx-0 tracking-normal leading-snug">
        I build scalable web apps using modern JavaScript. I specialize in crafting clean APIs,
        intuitive UIs, and maintainable systems.
      </motion.p>

      {/* +3 Years / CTA */}
      <motion.div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 sm:gap-12" initial={{ transform: "translateY(20px)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }} exit={{ opacity: 0, transition: { duration: 0.2 } }}>
        {/* Experience */}
        <div>
          <h3 className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[80px] font-bold text-white leading-none">
            {(() => {
              const startDate = new Date("2022-04-01");
              const currentDate = new Date();
              const totalMonths =
                (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
                (currentDate.getMonth() - startDate.getMonth());
              const years = Math.floor(totalMonths / 12);
              const months = totalMonths % 12;
              return `${years}y ${months}m`;
            })()}
          </h3>
          <p className="text-white text-sm sm:text-base mt-2 leading-tight">
            Of Experience
          </p>
        </div>

        {/* Download CV CTA */}
        <motion.a
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="/cv.pdf"
          download
          className="mt-8 w-[175px] h-[50px] bg-[#8FABF4] flex items-center justify-center gap-2 rounded-[10px] text-white text-sm font-light hover:brightness-110 transition"
        >
          <FontAwesomeIcon icon={faDownload} className="text-base" />
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
}
