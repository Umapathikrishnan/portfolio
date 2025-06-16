"use client";

import { projects } from "@/data/projectData";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marquee } from "@/components/magicui/marquee";

export default function ProjectsSection() {
  return (
    <section className="w-full sm:px-8 py-16 text-left space-y-8">
      {/* Heading */}
 <div className="mb-12 space-y-4 text-center sm:text-left">
  <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold text-white/35 tracking-[0.2em] uppercase leading-none">
    Featured
  </h2>
  <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-white tracking-[0.2em] leading-none uppercase">
    Projects
  </h2>
  <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-extralight text-white max-w-3xl mx-auto sm:mx-0">
    Things I've built out of curiosity and passion
  </p>
</div>


      {/* Projects Marquee or Scroll */}
      {projects.length > 4 ? (
        <Marquee pauseOnHover className="[--duration:50s] sm:[--duration:30s]">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Marquee>
      ) : (
        <div className="flex w-full overflow-x-auto space-x-6 no-scrollbar pb-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({
  title,
  subtitle,
  github,
  live,
  tech,
}: {
  title: string;
  subtitle: string;
  github: string;
  live?: string;
  tech: string[];
}) {
  return (
    <div className="w-[300px] sm:w-[400px] h-[380px] bg-[#1D1D1D] rounded-[10px] p-6 flex flex-col justify-between flex-shrink-0">
      {/* Title + Subtitle */}
      <div className="space-y-2">
        <h3 className="text-white text-[20px] font-extrabold uppercase">{title}</h3>
        <p className="text-white/60 text-sm font-light">{subtitle}</p>
      </div>

      {/* Tech Icons */}
      <div className="flex overflow-x-auto space-x-2 no-scrollbar py-2">
        {tech.map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt="tech-icon"
            className="w-6 h-6 flex-shrink-0"
          />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white text-sm font-medium bg-[#8FABF4] px-4 py-2 rounded-md hover:bg-[#A0C3FF] transition"
        >
          <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          GitHub
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-sm font-medium border border-[#8FABF4] px-4 py-2 rounded-md hover:bg-[#8FABF4]/10 transition"
          >
            View Live
          </a>
        )}
      </div>
    </div>
  );
}
