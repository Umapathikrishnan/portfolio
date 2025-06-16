"use client";

import { motion, easeOut } from "framer-motion";
import Card from "@/components/card/Card";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import HomeSection from "@/components/homeSection/HomeSection";
import ProjectsSection from "@/components/projects/Projects";
import SkillsSection from "@/components/skillSection/Skills";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Left Sticky Card Section (hidden on mobile) */}
      <div className="hidden lg:flex w-full lg:w-[30%] h-screen sticky top-0 items-center justify-center">
        <Card />
      </div>

      {/* Right Scrollable Content Section */}
      <div className="w-full lg:w-[70%] p-4 sm:p-6 lg:p-8 space-y-10 overflow-y-auto">
        <motion.section
          id="home"
          className="min-h-screen rounded-xl p-4 sm:p-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <HomeSection />
        </motion.section>

        <motion.section
          id="skills"
          className="min-h-screen rounded-xl p-4 sm:p-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <SkillsSection />
        </motion.section>

        <motion.section
          id="projects"
          className="min-h-screen rounded-xl p-4 sm:p-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ProjectsSection />
        </motion.section>

        <motion.section
          id="contact"
          className="min-h-screen rounded-xl p-4 sm:p-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ContactSection />
        </motion.section>

        {/* Optional Footer */}
        <Footer />
      </div>
    </main>
  );
}
