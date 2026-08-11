import React from "react";
import profile from "../assets/WhatsApp Image 2026-05-23 at 7.20.16 AM.jpeg"
export default function About() {
  return (
    <section className="relative bg-black text-white px-6 md:px-16 py-16 min-h-screen overflow-hidden" id="about">

      <div
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 overflow-hidden rounded-full border border-white/10">
            <img
              src={profile}
              alt="Your Name"
              className="w-full h-full object-cover rounded-full"
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div className="flex-1">
           
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400">
              Vasu Agarwal
            </h1>

            <p className="text-lg text-gray-300 mt-1">Full Stack Developer</p>

            <p className="text-gray-400 mt-4 leading-relaxed max-w-2xl">
              Hi, I'm Vasu Agarwal, a Computer Science and Engineering student
              and aspiring Backend Developer passionate about building scalable
              applications with Java and Spring Boot. I enjoy solving Data
              Structures & Algorithms problems, developing real-world projects,
              and continuously improving my software engineering skills.
              Currently seeking opportunities to learn, collaborate, and
              contribute while growing into a professional backend engineer.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6 max-w-xl">
              <div className="bg-white/5 border border-white/10 rounded-lg text-center py-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Experience
                </p>
               
                <p className="font-semibold mt-1">0+ years</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg text-center py-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Specialty
                </p>
               
                <p className="font-semibold mt-1">Full Stack Dev</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg text-center py-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Focus
                </p>
              
                <p className="font-semibold mt-1">Backend &amp; Software Dev</p>
              </div>
            </div>

          
            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="bg-white text-black font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-white/30 text-white font-medium px-5 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>


          <p className="text-gray-300 leading-relaxed max-w-3xl">
            I'm a Software Developer and Web Developer —
            passionate about building fast, resilient applications and sharing
            coding insights on Github and LinkedIn
          </p>
          <p className="text-gray-500 mt-4 max-w-3xl">
            I love turning ideas into scalable, user-friendly products that make
            an impact.
          </p>
        </div>
      </div>
    </section>
  );
}
