import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useAnalytics from "./hooks/useAnalytics";

const App = () => {
  useAnalytics();

  return (
    <div>
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Project />
      <Contact />
      <Footer />
      <Navbar />

      {/* SVG Filter for Liquid Glass Refraction */}
      <svg className="hidden" style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-refraction" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
            />
            
            {/* Red channel displacement */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />
            
            {/* Green channel displacement */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />
            
            {/* Blue channel displacement */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />
            
            {/* Blend together */}
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur in="output" stdDeviation="0.8" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default App;
