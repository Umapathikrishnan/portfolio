import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hi, I'm Umapathi K <AuroraText colors={["#AAFFA9","#11FFBD"]} speed={3} >Full-Stack Web Developer </AuroraText></h1>
        <p className="mt-4 text-sm">Specialized in building robust, scalable web applications with modern JavaScript frameworks.</p>
      </div>
       
      <div className="flex items-center justify-center">
        <a
          href="/Download_Umapathi_K_CV.pdf"
          download="Umapathi_K_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
         <InteractiveHoverButton className="px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
          Download CV
        </InteractiveHoverButton>
        </a>
      </div>
        </main>
    </div>
  );
}
