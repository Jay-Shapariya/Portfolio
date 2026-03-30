import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Project from "./components/Project";
import AITools from "./components/AITools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Project />
      <AITools />
      <Contact />
      <Footer />
      <Navbar />
    </div>
  );
};

export default App;
