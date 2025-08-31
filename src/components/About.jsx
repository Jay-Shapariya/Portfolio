import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="about"
      className="bg-[#F9F9F9] lg:py-[15rem] md:py-[8rem] sm:py-[8rem] py-[8rem] px-0 h-auto"
    >
      <div
        id="container"
        className="mx-auto my-0 max-w-[120rem] px-4 md:px-8 lg:px-16 py-0"
      >
        <div
          id="abtcon"
          className="items-center grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center text-center lg:text-start"
        >
          <motion.div
            id="img"
            className="relative flex justify-center text-center mb-12"
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-img h-[25rem] w-[25rem] md:h-[30rem] md:w-[30rem] lg:h-[40rem] lg:w-[40rem] text-center"></div>
          </motion.div>
          <motion.div
            className="px-4 md:px-8 lg:px-10"
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h3
              className="text-[#147efb] text-[1.5rem] md:text-[1.75rem] font-bold mb-4 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              About Me
            </motion.h3>
            <motion.h4
              className="text-[#2d2e32] lg:text-[2.5rem] md:text-[2rem] text-3xl font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Flutter App Developer <br /> based in Ahmedabad, Gujarat 📍
            </motion.h4>
            <motion.p
              className="text-[#767676] text-[1.5rem] md:text-[1.75rem] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Hey, my name is Jay Shapariya, a dedicated Flutter app developer
              with a passion for crafting user-centric mobile experiences.
              <br />
              <br /> I thrive on continuous learning and innovation, always
              seeking ways to push the boundaries of what's possible in the
              mobile app world. Let's connect and explore how we can create
              remarkable mobile solutions together.
            </motion.p>
            <motion.div
              className="flex gap-4 items-center justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <motion.button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl md:text-3xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2"
                onClick={() => window.open("/CV/Jay shapariya Resume.pdf")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
              <motion.img
                src="/image/manT.png"
                alt="work emoji"
                className="w-[30px] md:w-[40px]"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
