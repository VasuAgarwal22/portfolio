import React from "react";

// Shared particle field — same pattern used in Contact.jsx.
// If you already extracted Particles into its own file for Contact,
// delete this block and just `import Particles from "./Particles";` instead.
function Particles({ count = 45, color = "bg-white" }) {
  const particles = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 2 + 1; // 1px - 3px
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 8;
    const opacity = Math.random() * 0.5 + 0.3;

    return (
      <span
        key={i}
        className={`absolute rounded-full ${color} animate-float`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          opacity,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles}
    </div>
  );
}

// Placeholder "mission slot" — swap the empty state for a real
// project card once you have content. Keeping the same shape/props
// makes that a drop-in change later.
function MissionSlot({ index }) {
  return (
    <div className="group relative rounded-2xl border border-dashed border-white/25 bg-black/20 p-8 min-h-[280px] flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 hover:border-white/50 hover:bg-black/30">
      {/* scanning line sweep on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-[280px] transition-all duration-[1400ms] ease-in-out" />

      <span className="text-xs tracking-[0.2em] font-mono text-white/50 mb-4">
        SLOT {String(index).padStart(2, "0")}
      </span>

      <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-4">
        <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
      </div>

      <p className="text-sm text-white/50 max-w-[16rem]">
        Awaiting transmission — a project will be logged here soon.
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background glow, consistent with Contact section */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <Particles count={50} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="inline-block text-xs tracking-[0.3em] font-mono text-teal-400 mb-3">
            MISSION LOG
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-white/60 text-base md:text-lg">
            A record of things built along the way. New transmissions land here
            as they're completed.
          </p>
        </div>

        {/* Mission slots grid — replace with real ProjectCard components later */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MissionSlot index={1} />
          <MissionSlot index={2} />
          <MissionSlot index={3} />
        </div>
      </div>
    </section>
  );
}
