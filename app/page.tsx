"use client";

import Card from "@/components/card/Card";
import ContactSection from "@/components/contact/ContactSection";
import HomeSection from "@/components/homeSection/HomeSection";
import ProjectsSection from "@/components/projects/Projects";
import SkillsSection from "@/components/skillSection/Skills";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#8FABF4",
          zIndex: 9999,
        }}
      />
      {/* Left Sticky Card Section (hidden on mobile) */}
      <motion.div className="hidden lg:flex w-full lg:w-[30%] h-screen sticky top-0 items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Card />
      </motion.div>

      {/* Right Scrollable Content Section */}
      <div className="w-full lg:w-[70%] p-4 sm:p-6 lg:p-8 space-y-10 overflow-y-auto">
        <section className="min-h-screen rounded-xl p-4 sm:p-6 text-white" id="home">
          <HomeSection />
        </section>
        <section className="min-h-screen rounded-xl p-4 sm:p-6 text-white" id="skills">
          <SkillsSection />
        </section>
        <section className="min-h-screen rounded-xl p-4 sm:p-6 text-white" id="projects">
          <ProjectsSection />
        </section>
        <section className="min-h-screen rounded-xl p-4 sm:p-6 text-white" id="contact">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
