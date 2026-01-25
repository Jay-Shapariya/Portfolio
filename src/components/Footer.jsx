import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { springConfigs } from "../utils/motionVariants";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative py-16 md:py-20 overflow-hidden rounded-t-[32px]">
      {/* Glass background with top-only rounded corners */}
      <div
        className="absolute inset-0 glass-dark border-t border-white/10 rounded-t-[32px]"
        style={{ borderRadius: '32px 32px 0 0' }}
      ></div>

      <div
        id="container"
        className="mx-auto my-0 max-w-[120rem] px-4 md:px-8 lg:px-16 py-0 relative z-10"
      >
        <motion.div
          className="flex flex-col lg:flex-row gap-8 items-center justify-between"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left side - branding */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <motion.h2
              className="text-text-primary text-2xl md:text-3xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Jay Shapariya
            </motion.h2>
            <p className="text-text-secondary text-base md:text-lg">
              Flutter App Developer • Mobile Innovator
            </p>
          </div>

          {/* Center - Quick links */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {[
              { text: "Home", href: "#home" },
              { text: "About", href: "#about" },
              { text: "Experience", href: "#experience" },
              { text: "Education", href: "#education" },
              { text: "Projects", href: "#project" },
              { text: "Contact", href: "#contact" },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="text-text-secondary hover:text-ios-blue text-base md:text-lg font-medium transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={springConfigs.bouncy}
              >
                {link.text}
              </motion.a>
            ))}
          </div>

          {/* Right side - social links + email button */}
          <div className="flex items-center gap-4">
            {/* Email Button */}
            <motion.a
              href="mailto:shapariyajay@gmail.com"
              className="glass-pearl p-3 rounded-xl hover:bg-white/10 transition-colors border border-white/5 text-text-primary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={springConfigs.bouncy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jay-shapariya-885379250/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pearl p-3 rounded-xl hover:bg-white/10 transition-colors border border-white/5 text-text-primary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={springConfigs.bouncy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pearl p-3 rounded-xl hover:bg-white/10 transition-colors border border-white/5 text-text-primary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={springConfigs.bouncy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom divider and copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm md:text-base">

            </p>
            <p className="text-text-muted text-sm md:text-base">
              © {currentYear} Jay Shapariya. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
