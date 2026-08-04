import React from "react";
import { motion } from "framer-motion";
import {
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiApachemaven,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <SiCss />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
  { name: "Maven", icon: <SiApachemaven />, color: "#C71A36" },
];

export default function Skills() {
  // duplicate the list so the marquee loops seamlessly
  const loopSkills = [...skills, ...skills];

  return (
    <motion.section
      id="skills"
      className="relative bg-black text-white py-16 overflow-hidden"
      initial={{ opacity: 0.15 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* ---------- Decorative glow orbs (matches About section) ---------- */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2">
          Modern Applications | Modern Technologies
        </p>
      </div>

      {/* ---------- Auto-scrolling icon marquee ---------- */}
      <div className="relative z-10 mt-12 overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-14 md:gap-20 px-8">
          {loopSkills.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex flex-col items-center gap-3 flex-shrink-0"
            >
              <div
                className="text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-sm text-gray-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Marquee animation ---------- */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
}
