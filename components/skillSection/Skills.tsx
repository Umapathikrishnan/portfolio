"use client";

import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "/assets/js.svg" },
  { name: "TypeScript", icon: "/assets/ts.svg" },
  { name: "React", icon: "/assets/reactjs.svg" },
  { name: "Next JS", icon: "/assets/nextjs.svg" },
  { name: "Node JS", icon: "/assets/nodejs.svg" },
  { name: "Nest JS", icon: "/assets/nestjs.svg" },
  { name: "Tailwind CSS", icon: "/assets/tailwindcss.svg" },
  { name: "GraphQL", icon: "/assets/gql.svg" },
  { name: "Firebase", icon: "/assets/firebase.svg" },
  { name: "MySQL", icon: "/assets/mysql.svg" },
  { name: "Vue.js", icon: "/assets/vuejs.svg" },
  { name: "Nuxt.js", icon: "/assets/nuxtjs.svg" },
  { name: "AWS", icon: "/assets/aws.svg" },
  { name: "Google Cloud", icon: "/assets/gcp.svg" },
  { name: "Git", icon: "/assets/git.svg" },
  { name: "Figma", icon: "/assets/figma.svg" },
  { name: "Redis", icon: "/assets/redis.svg" },
  { name: "MongoDB", icon: "/assets/mongodb.svg" },
  { name: "Postman", icon: "/assets/postman.svg" },
  { name: "Jest", icon: "/assets/jest.svg" },
];

const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
const secondRow = skills.slice(Math.ceil(skills.length / 2));

const SkillCard = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={cn(
        "relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 m-2",
        "flex flex-col items-center justify-center gap-2",
        "rounded-xl border p-4 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
      )}
    >
      <img src={icon} alt={name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <p className="text-xs sm:text-sm text-white font-light tracking-wide text-center">{name}</p>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="w-full px-4 sm:px-8 py-12 sm:py-16 text-center sm:text-left">
      {/* Heading */}
      <div className="mb-10 sm:mb-12 space-y-4" >
        <motion.h2 className="text-[48px] sm:text-[72px] lg:text-[96px] font-bold text-white/35 tracking-[0.2em] uppercase leading-none" initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0 }}>
          My Arsenal
        </motion.h2>
        <motion.p className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight text-white max-w-3xl mx-auto sm:mx-0" initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          My core toolkit, technologies and skills I've leveled up through real-world projects.
        </motion.p>
      </div>

      {/* Horizontal Marquees */}
      <motion.div className="relative flex w-full flex-col items-center justify-center overflow-hidden" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>

        {/* Keep original gradients untouched */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </motion.div>
    </section>
  );
}
