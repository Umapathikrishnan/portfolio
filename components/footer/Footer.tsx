import React from "react";

const Footer = () => {
  return (
<footer className="w-full bg-[#1D1D1D] px-6 sm:px-12 py-10 text-white">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
    <p className="text-xs text-white/50 text-center sm:text-left">
      © {new Date().getFullYear()} 🇮🇳 Umapathi K — Designed with purpose.
    </p>
  </div>
</footer>
  );
};

export default Footer;
