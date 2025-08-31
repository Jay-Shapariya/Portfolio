import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <div id="experience" className="bg-[#F9F9F9] py-24 h-auto">
      <div className="container my-12 mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-[#147efb] text-[1.5rem] md:text-[1.75rem] font-bold mb-4 uppercase">
            Work Experience
          </h3>
          <h4 className="text-[#2d2e32] text-2xl md:text-3xl font-semibold mb-8">
            My Professional Journey
          </h4>
        </motion.div>

        <div
          id="container"
          className="mx-auto my-0 max-w-[120rem] px-4 md:px-8 lg:px-16 py-0"
        >
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h5 className="text-[#2d2e32] text-xl md:text-2xl font-bold mb-2">
                      {experience.title}
                    </h5>
                    <p className="text-[#147efb] text-lg md:text-xl font-semibold mb-2">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                    <div className="flex items-center mb-2">
                      <svg
                        className="w-4 md:w-5 h-4 md:h-5 text-[#767676] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#767676] text-base md:text-lg">
                        {experience.dates}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 md:w-5 h-4 md:h-5 text-[#767676] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#767676] text-base md:text-lg">
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + idx * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <span className="text-[#000000] mr-3 mt-2">-</span>
                        <span className="text-[#767676] text-base md:text-lg leading-relaxed">
                          {responsibility}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {experience.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + idx * 0.05,
                        ease: "easeOut",
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
