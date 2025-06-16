"use client";

import { HomeIcon, CodeIcon, FolderIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { href: "#home", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
  { href: "#skills", icon: <CodeIcon className="w-5 h-5" />, label: "Skills" },
  { href: "#projects", icon: <FolderIcon className="w-5 h-5" />, label: "Projects" },
  { href: "#contact", icon: <MailIcon className="w-5 h-5" />, label: "Contact" },
];

export default function Dock() {
  return (
    <div
      className={clsx(
        "fixed top-[80vh] sm:top-4 z-50 w-full max-w-xs sm:max-w-md",
        "left-1/2 sm:left-[3%]",
        "-translate-x-1/2 sm:translate-x-0"
      )}
    >
      <div
        className={clsx(
          "flex justify-around items-center px-4 py-3 rounded-[15px]",
          "bg-[#292725] text-white shadow-md"
        )}
      >
        {navLinks.map(({ href, icon, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="group flex flex-col items-center justify-center text-white hover:text-[#8FABF4] transition-colors duration-300"
          >
            <div className="p-2 rounded-full transition-all group-hover:bg-white/10">
              {icon}
            </div>
            <span className="text-[10px] mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
