import React from "react";
import { motion } from "framer-motion";
import { springConfigs } from "../utils/motionVariants";

const Education = () => {
    const education = {
        degree: "B.Tech in Computer Science and Engineering",
        university: "Ahmedabad University",
        duration: "2020 – 2024",
        location: "Ahmedabad, Gujarat",
    };

    return (
        <div id="education" className="bg-transparent py-24 h-auto relative">
            <div className="container my-12 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h3 className="text-ios-blue text-[1.25rem] md:text-[1.5rem] font-bold mb-3 uppercase tracking-wider">
                        Education
                    </h3>
                    <h4 className="text-text-primary text-3xl md:text-4xl font-semibold tracking-tight">
                        Academic Background
                    </h4>
                </motion.div>

                <div
                    id="container"
                    className="mx-auto my-0 max-w-[120rem] px-0 md:px-8 py-0"
                >
                    <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-6">
                        <motion.div
                            className="glass-pearl p-6 md:p-8 relative overflow-hidden group cursor-default"
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={springConfigs.gentle}
                            whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                        >
                            {/* Selection Highlight Bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-ios-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div className="mb-4 lg:mb-0 flex items-start gap-4">
                                    {/* Graduation Cap Icon */}
                                    <motion.div
                                        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-ios-blue/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-ios-blue/30"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <svg
                                            className="w-6 h-6 md:w-8 md:h-8 text-ios-blue"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </motion.div>

                                    <div>
                                        <h5 className="text-text-primary text-xl md:text-2xl font-bold mb-1">
                                            {education.degree}
                                        </h5>
                                        <p className="text-ios-blue text-lg md:text-xl font-medium tracking-wide">
                                            {education.university}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:items-end gap-3">
                                    {/* Duration Badge */}
                                    <div className="flex items-center gap-2 bg-gradient-to-r from-ios-blue/10 to-cyan-500/10 px-4 py-2 rounded-xl border border-ios-blue/30">
                                        <svg
                                            className="w-4 h-4 text-ios-blue"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-text-primary text-sm md:text-base font-bold">
                                            {education.duration}
                                        </span>
                                    </div>

                                    {/* Location Badge */}
                                    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-violet-500/10 px-4 py-2 rounded-xl border border-purple-500/30">
                                        <svg
                                            className="w-4 h-4 text-purple-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-text-primary text-sm md:text-base font-bold">
                                            {education.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements/Highlights */}
                            <div className="mb-6 pl-2 border-l-2 border-[var(--glass-border)]">
                                <ul className="space-y-3">
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        <span className="text-ios-blue mr-3 mt-1.5 text-xs">●</span>
                                        <span className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                                            Specialized in mobile application development and software engineering
                                        </span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                    >
                                        <span className="text-ios-blue mr-3 mt-1.5 text-xs">●</span>
                                        <span className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                                            Gained comprehensive knowledge in data structures, algorithms, and system design
                                        </span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                    >
                                        <span className="text-ios-blue mr-3 mt-1.5 text-xs">●</span>
                                        <span className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                                            Completed multiple industry-relevant projects and internships
                                        </span>
                                    </motion.li>
                                </ul>
                            </div>

                            {/* Skills/Focus Areas */}
                            <div className="flex flex-wrap gap-2">
                                {["Computer Science", "Mobile Development", "Software Engineering"].map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="cursor-default bg-white/10 px-3 py-1.5 rounded-lg text-sm font-semibold border border-white/20 text-text-primary hover:text-ios-blue hover:border-ios-blue/50 transition-all duration-300"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
