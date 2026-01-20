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
      className="bg-transparent lg:py-[15rem] md:py-[8rem] sm:py-[8rem] py-[8rem] px-0 h-auto relative overflow-hidden"
    >
      <div
        id="container"
        className="mx-auto my-0 max-w-[120rem] px-4 md:px-8 lg:px-16 py-0 relative z-10"
      >
        <div
          id="abtcon"
          className="items-start grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 justify-center gap-10"
        >
          {/* Main Content Card - Widget Style */}
          <motion.div
            className="glass-pearl p-8 md:p-12 lg:p-16 w-full max-w-4xl mx-auto relative overflow-hidden"
            ref={ref}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={
              inView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 100, scale: 0.95 }
            }
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
          >
            {/* Ambient Glass Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-ios-blue opacity-10 blur-[100px] rounded-full pointer-events-none -mr-20 -mt-20"></div>

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">

              <div className="w-full">
                <motion.h3
                  className="text-ios-blue text-[1.25rem] md:text-[1.5rem] font-bold mb-4 uppercase tracking-widest flex items-center justify-center lg:justify-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="w-2 h-2 rounded-full bg-ios-blue animate-pulse"></span>
                  About Me
                </motion.h3>

                <motion.h4
                  className="text-text-primary lg:text-[3.5rem] md:text-[2.5rem] text-3xl font-semibold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Flutter App Developer <br />
                  <span className="text-text-secondary font-normal text-[2rem] md:text-3xl">based in Ahmedabad, Gujarat</span>
                </motion.h4>
              </div>

              <motion.div
                className="w-full h-[1px] bg-[var(--glass-border)]"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.p
                className="text-text-secondary text-[1.25rem] md:text-[1.5rem] font-medium leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Hey, my name is Jay Shapariya, a dedicated Flutter app developer
                with a passion for crafting user-centric mobile experiences.
                <br />
                <br />
                I thrive on continuous learning and innovation, always
                seeking ways to push the boundaries of what's possible in the
                mobile app world. Let's connect and explore how we can create
                remarkable mobile solutions together.
              </motion.p>

              <motion.div
                className="flex gap-6 items-center justify-center lg:justify-start mt-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Liquid Glass Action Pill */}
                <motion.button
                  type="button"
                  className="group relative px-8 py-4 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-lg backdrop-blur-md overflow-hidden"
                  onClick={() => window.open("/CV/Jay shapariya Resume.pdf")}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-ios-blue to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-3">
                    <span className="text-text-primary text-xl font-medium tracking-wide">Download CV</span>
                    {/* Micro-dot pulse indicator */}
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
