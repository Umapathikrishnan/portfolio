"use client";

import { useEffect, useState } from "react";
import {
  HomeIcon,
  CodeIcon,
  FolderIcon,
  MailIcon,
  MenuIcon,
  ChevronLeftIcon
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
  { href: "#skills", icon: <CodeIcon className="w-5 h-5" />, label: "Skills" },
  { href: "#projects", icon: <FolderIcon className="w-5 h-5" />, label: "Projects" },
  { href: "#contact", icon: <MailIcon className="w-5 h-5" />, label: "Contact" },
];

export default function Dock() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Close dock by default on mobile (<640px)
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 640;
      setIsOpen(!isMobile);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        "fixed z-50 transition-all duration-300",
        "top-4 left-4 sm:top-4 sm:left-[3%] sm:translate-x-0"
      )}
    >
      {/* Dock Container */}
      <div
        className={clsx(
          "flex items-center gap-3 rounded-[15px] bg-[#292725] text-white shadow-md px-3",
          "transition-all duration-300",
          isOpen ? "py-3" : "py-2"
        )}
      >
        {/* Toggle button inside the dock */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          {isOpen ? (
            <ChevronLeftIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>

        {/* Dock links (only when open) */}
        {isOpen && (
          <motion.div className="flex justify-around items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {navLinks.map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="group flex flex-col items-center justify-center hover:text-[#8FABF4] transition-colors duration-300"
              >
                <div className="p-2 rounded-full transition-all group-hover:bg-white/10">
                  {icon}
                </div>
                <span className="text-[10px] mt-1">{label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
