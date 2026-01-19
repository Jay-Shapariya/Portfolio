import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div
      id="home"
      ref={containerRef}
      className="bg-transparent flex flex-col justify-center min-h-screen w-full relative overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0" // Added padding for mobile
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
        >
          {/* Text Content - Contained in Glass Card for Mobile Feel */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20"
            style={{ y: textY }}
          >
            <motion.div
              className="glass-dark p-8 md:p-12 rounded-[32px] border border-white/5 relative overflow-hidden w-full"
              variants={itemVariants}
            >
              {/* Decorative Blur blob inside card */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-ios-blue/20 rounded-full blur-[80px]" />

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight tracking-tight relative z-10"
                variants={itemVariants}
              >
                Flutter App <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ios-blue to-cyan-400">
                  Developer
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 relative z-10"
                variants={itemVariants}
              >
                Hi, I'm Jay Shapariya. Building premium mobile experiences in Ahmedabad.
              </motion.p>

              <motion.div
                className="flex gap-6 justify-center lg:justify-start"
                variants={itemVariants}
              >
                {[
                  { icon: "brand-linkedin", href: "https://www.linkedin.com/in/jay-shapariya-885379250/" },
                  { icon: "brand-github", href: "https://github.com/Jay-Shapariya" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-pearl rounded-2xl hover:bg-white/10 transition-colors border border-white/5 text-text-primary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`tabler-icon tabler-icon-${social.icon}`}
                    >
                      {social.icon === "brand-linkedin" ? (
                        <>
                          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                          <path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </>
                      ) : (
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      )}
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Tech Stack - Mobile Pill Style */}
            <motion.div
              className="mt-12 w-full"
              variants={itemVariants}
            >
              <p className="text-sm font-semibold text-text-muted mb-4 uppercase tracking-widest pl-2">Tech Stack</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {["flutter,firebase", "kotlin,java", "figma,git", "mysql,c", "html,css"].map((icons, i) => (
                  <motion.div
                    key={i}
                    className="glass-pearl px-4 py-2 rounded-xl flex items-center justify-center border border-white/5"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${icons}`}
                      className="h-8 md:h-10"
                      alt="tech stack"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - contained shape */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
            variants={itemVariants}
            style={{ y: imageY }}
          >
            <div className="relative w-[160px] h-[160px] md:w-[240px] md:h-[240px] lg:w-[320px] lg:h-[320px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ios-blue to-purple-500 rounded-full blur-[80px] opacity-40 animate-pulse" />

              {/* Profile Image Container */}
              <div className="hero-img w-full h-full relative z-10 glass-border" />

              {/* Floating Artifacts (Parallax) */}
              <motion.div
                className="absolute -top-10 -right-10 glass-pearl p-4 rounded-2xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="https://skillicons.dev/icons?i=flutter" className="w-10 h-10" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 -left-10 glass-pearl p-4 rounded-2xl z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img src="https://skillicons.dev/icons?i=firebase" className="w-10 h-10" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
