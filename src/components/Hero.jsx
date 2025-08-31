import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[#F9F9F9] flex lg:flex-col h-auto lg:h-[100vh] w-full relative justify-center py-44 lg:py-0 px-0"
    >
      <div
        id="container"
        className="mx-auto my-0 max-w-[120rem] px-4 md:px-8 lg:px-16 py-0"
      >
        <div
          id="content"
          className="flex flex-col lg:flex-row text-center items-center gap-12 lg:gap-40 h-auto lg:h-[80rem] justify-center relative"
        >
          <div
            id="hero-main"
            className="flex flex-col-reverse lg:flex-row items-center gap-12 h-auto text-center lg:gap-40 justify-center relative"
          >
            <motion.div
              id="hero-text"
              className="flex flex-col max-w-[50rem] gap-2 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-[#2D2E32] lg:text-8xl md:text-7xl sm:text-6xl text-5xl mb-8 mt-8 font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Flutter App Developer
              </motion.h1>
              <img />
              <motion.p
                className="text-[#555555] text-lg md:text-xl lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Hi, I'm Jay Shapariya. A passionate Flutter App Developer based
                in Ahmedabad, Gujarat 📍
              </motion.p>
              <motion.span
                className="flex justify-center gap-5 mr-10 my-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/jay-shapariya-885379250/"
                  className="text-[#2d2e32] text-4xl md:text-5xl transition-all duration-200 hover:text-[#147EFB]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/Jay-Shapariya"
                  className="text-[#2d2e32] text-4xl md:text-5xl transition-all duration-200 hover:text-[#147EFB]"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </motion.a>
              </motion.span>
            </motion.div>
            <motion.div
              className="hero-img h-[25rem] w-[25rem] md:h-[30rem] md:w-[30rem] lg:h-[40rem] lg:w-[40rem]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            ></motion.div>
          </div>
          <motion.div
            className="flex lg:flex-row items-center bottom-20 text-[#767676] text-2xl md:text-3xl left-0 lg:absolute static flex-col text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#2d2e32] border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-solid border-[#2d2e32] font-semibold mb-8 pb-8 lg:mb-0 lg:pb-0 lg:mr-20 lg:pr-8">
              Tech Stack
            </p>
            <motion.ul
              className="flex gap-8 md:gap-12 justify-center flex-wrap py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <img
                  src="https://skillicons.dev/icons?i=flutter,firebase"
                  className="h-16 md:h-20"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <img
                  src="https://skillicons.dev/icons?i=kotlin,java"
                  className="h-16 md:h-20"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <img
                  src="https://skillicons.dev/icons?i=figma,git"
                  className="h-16 md:h-20"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <img
                  src="https://skillicons.dev/icons?i=mysql,c"
                  className="h-16 md:h-20"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <img
                  src="https://skillicons.dev/icons?i=html,css"
                  className="h-16 md:h-20"
                />
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
