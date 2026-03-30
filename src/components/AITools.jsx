import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aiTools = [
  {
    name: "Cursor",
    logo: "https://www.cursor.com/assets/images/logo.svg",
    color: "#F54E00",
    description: "AI Code Editor",
  },
  {
    name: "Antigravity",
    logo: "https://antigravity.google/favicon.ico",
    color: "#4285F4",
    description: "Next-Gen IDE",
  },
  {
    name: "Stitch",
    logo: "https://stitch.ai/images/favicon.png",
    color: "#6E56CF",
    description: "Unified Workspace",
  },
  {
    name: "Google AI Studio",
    logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini-color.svg",
    color: "#4285F4",
    description: "AI Development",
  },
  {
    name: "Claude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg",
    color: "#D97757",
    description: "LLM by Anthropic",
  },
  {
    name: "Lovable",
    logo: "https://lovable.dev/favicon.svg",
    color: "#F3702F",
    description: "AI App Builder",
  },
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    color: "#10A37F",
    description: "LLM by OpenAI",
  },
  {
    name: "SunoAI",
    logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/suno.svg",
    color: "#E4542A",
    description: "AI Music",
  },
  {
    name: "Open Claw",
    logo: "https://raw.githubusercontent.com/openclaw/openclaw/main/assets/chrome-extension/icons/icon128.png",
    color: "#E22A26",
    description: "AI Agent",
  },
];

const AITools = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="ai-tools"
      className="bg-transparent lg:py-[8rem] md:py-[6rem] py-[4rem] px-0 h-auto relative overflow-hidden"
    >
      <div className="mx-auto max-w-[120rem] px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h3
            className="text-ios-blue text-[1.25rem] md:text-[1.5rem] font-bold mb-4 uppercase tracking-widest flex items-center justify-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-ios-blue animate-pulse"></span>
            AI Integration
          </motion.h3>
          <h2 className="text-text-primary lg:text-[3.5rem] md:text-[2.5rem] text-3xl font-semibold mb-6">
            Leveraging Modern AI Tools
          </h2>
          <p className="text-text-secondary text-[1.25rem] md:text-[1.5rem] max-w-3xl mx-auto">
            Empowering development workflows with the latest artificial intelligence
            and automation technologies to build faster and smarter.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-pearl p-6 h-full flex flex-col items-center justify-center text-center liquid-hover cursor-pointer relative overflow-hidden">
                {/* Brand Color Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: tool.color }}
                ></div>

                <div className="relative z-10 mb-5 w-16 h-16 flex items-center justify-center">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"; // Fallback AI icon
                    }}
                  />
                </div>

                <h4 className="text-text-primary text-xl font-bold mb-1 relative z-10 transition-colors duration-300 group-hover:text-[var(--text-primary)]">
                  {tool.name}
                </h4>
                <p className="text-text-secondary text-sm relative z-10">
                  {tool.description}
                </p>

                {/* Bottom Highlight Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: tool.color }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
