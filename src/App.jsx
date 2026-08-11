import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
// import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
// import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import ParticlesBckground from "./components/ParticlesBckground";
import CustonCursor from "./components/CustonCursor";
import React from "react";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {/* Portfolio is rendered from the beginning */}
      <div className="relative gradient text-white min-h-screen">
        <ParticlesBckground />
        <CustonCursor />

        <NavBar />

        <div className="relative z-10">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

      {/* Intro stays ON TOP of the portfolio */}
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
    </>
  );
}
