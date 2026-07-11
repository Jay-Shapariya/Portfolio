import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset for better centering

      const sections = navItems.map((item) => {
        const element = document.getElementById(item.link.substring(1));
        if (element) {
          return {
            id: item.link.substring(1),
            offsetTop: element.offsetTop,
            offsetHeight: element.offsetHeight,
          };
        }
        return null;
      }).filter(Boolean);

      let currentSection = "home";
      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          (section.offsetTop + section.offsetHeight) > scrollPosition
        ) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Experience", link: "#experience" },
    { id: 4, text: "Education", link: "#education" },
    { id: 5, text: "Projects", link: "#project" },
    { id: 6, text: "Contact", link: "#contact" },
  ];

  return (
    <motion.div
      id="navBar"
      className="navBar flex justify-between items-center h-auto w-full mx-auto px-4 md:px-8 lg:px-12 lg:py-5 py-6 left-0 top-0 text-[1.5rem] md:text-[1.7rem] fixed z-[200]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <h1 className="w-full text-2xl md:text-3xl font-bold text-text-primary px-4 md:px-10 cursor-pointer tracking-tight">
        Jay Shapariya
      </h1>

      {/* Desktop Navigation (Glass Segmented Control) */}
      <div className="hidden md:flex items-center">
        <ul className="flex gap-2 items-center glass-dark p-2 rounded-full border border-white/40 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.link.substring(1);
            return (
              <li key={item.id} className="relative z-10">
                <a
                  href={item.link}
                  className={`block px-6 py-2 rounded-full text-base font-medium transition-colors duration-300 relative z-20 ${isActive ? "text-slate-900" : "text-text-secondary hover:text-text-primary"
                    }`}
                  onClick={() => setActiveSection(item.link.substring(1))}
                >
                  {item.text}
                </a>

                {/* Active Glass Pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full z-10 border border-white/40"
                    style={{
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      background: "rgba(255, 255, 255, 0.75)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer text-text-primary p-2">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>

      {/* Mobile Navigation Menu (Side Drawer) */}
      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed top-0 right-0 w-[80%] md:w-[60%] h-full bg-white/40 border-l border-white/30 z-[199] flex flex-col justify-center items-center shadow-2xl backdrop-blur-3xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Backdrop Blur Layer */}
            <div className="absolute inset-0 backdrop-blur-3xl bg-white/20 z-[-1]" />

            <ul className="flex flex-col gap-8 text-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={item.link}
                    onClick={handleNav}
                    className="text-3xl font-semibold text-text-primary hover:text-ios-blue transition-colors"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay Backdrop */}
      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[198] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleNav}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
