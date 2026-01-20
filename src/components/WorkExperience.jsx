import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {

  const experiences = [
    {
      title: "Flutter Developer",
      company: "Strats360 Technolabs LLP",
      dates: "March 2025 - Present",
      location: "Ahmedabad, Gujarat",
      responsibilities: [
        "Developed a comprehensive food delivery application with both user and kitchen-side functionality.",
        "Enhanced existing Kotlin-based native Android projects with new features and optimizations.",
        "Gained expertise in iOS development for Flutter, expanding cross-platform development skills.",
      ],
      skills: ["Flutter", "Kotlin", "iOS"],
    },
    {
      title: "Mobile App Developer",
      company: "Un-App Intelligence Private Limited",
      dates: "April 2024 - July 2025",
      location: "Remote",
      responsibilities: [
        "Developed Un-App, an innovative Android application with automatic call pickup functionality using telecom services.",
        "Gained extensive expertise in Android native development and telecom services integration.",
        "Implemented TensorFlow Lite models for intelligent call handling and machine learning features.",
      ],
      skills: ["Android", "Telecom Services", "TensorFlow Lite", "Java"],
    },
    {
      title: "Intern Flutter Developer",
      company: "Plumscope LLP",
      dates: "Dec 2023 - April 2024",
      location: "Remote",
      responsibilities: [
        "Developed Infix, a comprehensive school management system using Flutter and Firebase.",
        "Created beautiful and intuitive user interfaces with a focus on user experience.",
        "Integrated Firebase services for real-time data management and cloud functionality.",
        "Mastered GetX state management framework for efficient app architecture.",
      ],
      skills: ["Flutter", "Firebase", "GetX"],
    },
    {
      title: "Intern Flutter Developer",
      company: "Inexture Solution Limited",
      dates: "May 2023 - July 2023",
      location: "Remote",
      responsibilities: [
        "Developed feature-rich Flutter e-commerce application with Firebase backend integration",
        "Enhanced Flutter development skills by building multiple foundational applications",
        "Learned REST API implementation and integration for dynamic data handling",
        "Gained experience in e-commerce functionalities including cart, payments, and user management",
      ],
      skills: ["Flutter", "Firebase", "REST API"],
    },
  ];

  return (
    <div id="experience" className="bg-transparent py-24 h-auto relative">
      {/* Background ambient glow/noise could go here if needed globally */}
      <div className="container my-12 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-ios-blue text-[1.25rem] md:text-[1.5rem] font-bold mb-3 uppercase tracking-wider">
            Work Experience
          </h3>
          <h4 className="text-text-primary text-3xl md:text-4xl font-semibold">
            My Professional Journey
          </h4>
        </motion.div>

        <div
          id="container"
          className="mx-auto my-0 max-w-[120rem] px-0 md:px-8 py-0"
        >
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="glass-pearl p-6 md:p-8 relative overflow-hidden group cursor-default"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50,
                  damping: 20
                }}
                whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              >
                {/* Selection Highlight Bar (Mobile List Style) */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-ios-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h5 className="text-text-primary text-xl md:text-2xl font-bold mb-1">
                      {experience.title}
                    </h5>
                    <p className="text-ios-blue text-lg md:text-xl font-medium tracking-wide">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center bg-glass-bg px-3 py-1 rounded-full border border-glass-border">
                      <svg
                        className="w-4 h-4 text-text-secondary mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-secondary text-sm md:text-base font-medium">
                        {experience.dates}
                      </span>
                    </div>
                    <div className="flex items-center bg-[var(--glass-bg)] px-3 py-1 rounded-full border border-[var(--glass-border)]">
                      <svg
                        className="w-4 h-4 text-text-secondary mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-secondary text-sm md:text-base font-medium">
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 pl-2 border-l-2 border-[var(--glass-border)]">
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + idx * 0.1,
                        }}
                      >
                        <span className="text-ios-blue mr-3 mt-1.5 text-xs">●</span>
                        <span className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                          {responsibility}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="cursor-default bg-[var(--glass-highlight)] px-3 py-1.5 rounded-lg text-sm font-medium border border-[var(--glass-border)] text-text-muted hover:text-white hover:border-ios-blue transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + idx * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
