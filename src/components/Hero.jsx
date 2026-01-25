import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { motionVariants, springConfigs } from "../utils/motionVariants";
import { SiShopify } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects - reduced intensity for smoothness
  const textY = useTransform(scrollY, [0, 600], [0, 80]);
  const imageY = useTransform(scrollY, [0, 600], [0, -40]);
  const imageRotate = useTransform(scrollY, [0, 600], [0, 2]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Tech Stack Data with names
  const techStack = [
    { name: "Flutter", icon: "flutter" },
    { name: "Dart", icon: "dart" },
    { name: "Swift", icon: "swift" },
    { name: "Kotlin", icon: "kotlin" },
    { name: "Java", icon: "java" },
    { name: "JavaScript", icon: "js" },
    { name: "Firebase", icon: "firebase" },
    { name: "Supabase", icon: "supabase" },
    { name: "Shopify", icon: "shopify", reactIcon: <SiShopify className="text-[#96BF48]" /> },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "XML", icon: "xml", reactIcon: <BsFiletypeXml className="text-ios-blue" /> },
    { name: "GitHub", icon: "github" },
    { name: "Figma", icon: "figma" },
    { name: "Git", icon: "git" },
  ];

  // Component to render icon based on type
  const TechIcon = ({ tech }) => {
    if (tech.reactIcon) {
      return (
        <div className="text-3xl flex items-center justify-center w-8 h-8">
          {tech.reactIcon}
        </div>
      );
    }
    return (
      <img
        src={`https://skillicons.dev/icons?i=${tech.icon}`}
        className="h-8 w-8"
        alt={tech.name}
      />
    );
  };

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      transition: springConfigs.smooth
    }
  };

  // Floating icons data
  const floatingIcons = [
    { emoji: "📱", x: "15%", y: "20%", duration: 20, delay: 0 },
    { emoji: "💻", x: "85%", y: "30%", duration: 25, delay: 2 },
    { emoji: "⚙️", x: "10%", y: "70%", duration: 22, delay: 4 },
    { emoji: "🔗", x: "90%", y: "75%", duration: 23, delay: 1 },
    { emoji: "📱", x: "50%", y: "15%", duration: 24, delay: 3 },
    { emoji: "💻", x: "45%", y: "85%", duration: 26, delay: 5 },
    { emoji: "⚙️", x: "30%", y: "40%", duration: 21, delay: 6 },
    { emoji: "🔗", x: "70%", y: "60%", duration: 27, delay: 7 },
    { emoji: "📱", x: "20%", y: "85%", duration: 29, delay: 8 },
    { emoji: "💻", x: "80%", y: "10%", duration: 28, delay: 9 },
    { emoji: "⚙️", x: "40%", y: "90%", duration: 30, delay: 1.5 },
    { emoji: "🔗", x: "60%", y: "5%", duration: 25, delay: 2.5 },
  ];

  return (
    <div
      id="home"
      ref={containerRef}
      className="bg-transparent flex flex-col justify-center min-h-screen w-full relative overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0"
    >
      {/* Floating Background Icons */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl pointer-events-none select-none"
          style={{
            left: icon.x,
            top: icon.y,
            opacity: 0.1,
            zIndex: 0,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}

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
              animate={{ scale: [1, 1.005, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Decorative Blur blob inside card with pulse */}
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-ios-blue/20 rounded-full blur-[100px]"
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight tracking-tight relative z-10"
                variants={itemVariants}
              >
                Mobile App <br />
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

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 relative z-10"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, '#contact')}
                  className="group relative px-6 py-3 bg-gradient-to-r from-ios-blue to-cyan-500 rounded-xl font-semibold text-white overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 122, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfigs.bouncy}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-ios-blue opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let's Connect
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.a>

                <motion.a
                  href="/CV/Jay Shapariya Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 glass-pearl border border-white/20 rounded-xl font-semibold text-text-primary overflow-hidden hover:bg-white/10"
                  whileHover={{ scale: 1.05, borderColor: "rgba(0, 122, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfigs.bouncy}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Resume
                  </span>
                </motion.a>

                <motion.a
                  href="https://calendly.com/shapariyajay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 glass-pearl border border-white/20 rounded-xl font-semibold text-text-primary overflow-hidden hover:bg-white/10"
                  whileHover={{ scale: 1.05, borderColor: "rgba(0, 122, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfigs.bouncy}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Schedule Meet
                  </span>
                </motion.a>
              </motion.div>

              <motion.div
                className="flex gap-6 justify-center lg:justify-start relative z-10"
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

            {/* Tech Stack - Flowing River Animation */}
            <motion.div
              className="mt-12 w-full overflow-hidden"
              variants={itemVariants}
            >
              <p className="text-sm font-semibold text-text-muted mb-4 uppercase tracking-widest pl-2">Tech Stack</p>

              {/* First Row - Left to Right */}
              <div className="relative mb-4">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                    <motion.div
                      key={i}
                      className="glass-pearl px-4 py-3 rounded-xl flex items-center gap-3 border border-white/5 flex-shrink-0"
                      whileHover={{ scale: 1.1, animationPlayState: "paused" }}
                    >
                      <TechIcon tech={tech} />
                      <span className="text-text-primary font-medium whitespace-nowrap">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Second Row - Right to Left */}
              <div className="relative">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: [-1000, 0],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {[...techStack, ...techStack, ...techStack].reverse().map((tech, i) => (
                    <motion.div
                      key={i}
                      className="glass-pearl px-4 py-3 rounded-xl flex items-center gap-3 border border-white/5 flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <TechIcon tech={tech} />
                      <span className="text-text-primary font-medium whitespace-nowrap">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - contained shape */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
            variants={itemVariants}
            style={{ y: imageY, rotate: imageRotate }}
          >
            <div className="relative w-[160px] h-[160px] md:w-[240px] md:h-[240px] lg:w-[320px] lg:h-[320px]">
              {/* Background Glow - enhanced */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-violet-500 via-purple-500 to-pink-500 rounded-full blur-[100px] opacity-30"
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile Image Container */}
              <div className="hero-img w-full h-full relative z-10 glass-border" style={{ animationDuration: "12s" }} />

              {/* Floating Artifacts (Parallax) - slower, gentler */}
              <motion.div
                className="absolute -top-10 -right-10 glass-pearl p-4 rounded-2xl z-20"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="https://skillicons.dev/icons?i=flutter" className="w-10 h-10" alt="Flutter" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 -left-10 glass-pearl p-4 rounded-2xl z-20"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <img src="https://skillicons.dev/icons?i=firebase" className="w-10 h-10" alt="Firebase" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

