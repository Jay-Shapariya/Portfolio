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
    </div>
  );
};

export default App;
