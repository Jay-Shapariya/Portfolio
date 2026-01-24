import React, { useRef } from "react";
import { motion } from "framer-motion";
import { springConfigs } from "../utils/motionVariants";

const Project = () => {
    const projects = [
        {
            title: "Eat at Home",
            description: "Food delivery app with scheduled ordering, real-time tracking, and personalized recommendations.",
            image: "/image/eatathome.png",
            techStack: ["Flutter", "Firebase", "GetX"],
            links: [
                { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.eatathomeuser&pcampaignid=web_share" },
                { label: "App Store", url: "https://apps.apple.com/in/app/eat-at-home-daily-delights/id6523418467" }
            ],
            glowColor: "rgba(34, 197, 94, 0.3)",
        },

        {
            title: "Hudlr",
            description: "Fitness social platform for workouts, live classes, and community challenges.",
            image: "/image/hudlr.png",
            techStack: ["Kotlin", "Android", "Firebase"],
            links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.hudlrio" }],
            glowColor: "rgba(59, 130, 246, 0.3)",
        },
        {
            title: "UnApp",
            description: "Auto-pickup calling solution with AI-powered responses and smart call management.",
            image: "/image/unapp.png",
            techStack: ["Java", "Android", "TelecomManager"],
            links: [{ label: "Live Demo", url: "#" }],
            glowColor: "rgba(168, 85, 247, 0.3)",
        },
        {
            title: "WeTrain AE",
            description: "WeTrain is a modern fitness platform that connects users with certified personal trainers for personalized workouts and one-on-one training sessions. The app enables trainer discovery, custom workout plans, progress tracking, and secure in-app payments—all in one seamless experience.",
            image: "/image/wetrain.png",
            techStack: ["Flutter", "Firebase", "RestAPIs"],
            links: [
                { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.abtach.wetrain" },
                { label: "App Store", url: "https://apps.apple.com/pk/app/wetrain-ae/id6467429964" }
            ],
            glowColor: "rgba(249, 115, 22, 0.3)",
        },
        {
            title: "Eat at Home Kitchen",
            description: "Kitchen-side app for order management, workflow optimization, and real-time notifications.",
            image: "/image/eathost.png",
            techStack: ["Flutter", "Firebase", "RestAPIs"],
            links: [
                { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.eatathomehost&pcampaignid=web_share" },
                { label: "App Store", url: "https://apps.apple.com/in/app/eat-at-home-host/id6535681828" }
            ],
            glowColor: "rgba(249, 115, 22, 0.3)",
        },
        {
            title: "Infix - LMS App",
            description: "School management system for administrators, teachers, students, and parents.",
            image: "/image/infix.png",
            techStack: ["Flutter", "Firebase"],
            links: [{ label: "Live Demo", url: "https://drive.google.com/file/d/1I2UroLQ36dF2nqGd-iOtcCzzxKd_fGAK/view?usp=sharing" }],
            glowColor: "rgba(14, 165, 233, 0.3)",
        },
        {
            title: "HealthoHolic",
            description: "Health and fitness app UI design focused on user experience and visual appeal.",
            image: "/image/healthfigma.png",
            techStack: ["Figma"],
            links: [
                { label: "Figma", url: "https://www.figma.com/file/PNuoPtI7JYX1rKamMCSOeZ/HCI_Project_HealthoHolic?type=design&node-id=0%3A1&mode=design&t=DAwOqoYZhwAF3o1L-1" },
                { label: "Demo", url: "https://drive.google.com/file/d/1GBFJBevrFkjtBX72FMtEZNCbOh8K-eph/view?usp=sharing" }
            ],
            glowColor: "rgba(239, 68, 68, 0.3)",
        },
        {
            title: "HealthoHolic Mobile",
            description: "Mobile implementation of health and fitness app with HCI principles.",
            image: "/image/healthapp.png",
            techStack: ["Flutter", "Provider"],
            links: [
                { label: "Code", url: "https://github.com/Jay-Shapariya/healthoholic-flutter-app.git" },
                { label: "Demo", url: "https://drive.google.com/file/d/1GBFJBevrFkjtBX72FMtEZNCbOh8K-eph/view?usp=sharing" }
            ],
            glowColor: "rgba(34, 197, 94, 0.3)",
        },
    ];

    return (
        <div id="project" className="bg-transparent py-20 md:py-32 relative">
            <div className="container mx-auto px-15 md:px-15 lg:px-20">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-ios-blue text-base md:text-lg font-bold mb-4 uppercase tracking-widest">
                        Selected Work
                    </h3>
                    <h4 className="text-text-primary text-3xl md:text-5xl font-bold tracking-tight">
                        Featured Projects
                    </h4>
                </motion.div>

                {/* Grid Layout - 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 md:gap-20">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Compact Project Card Component
const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="group relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springConfigs.gentle, delay: index * 0.05 }}
        >
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 glass-dark"></div>

            {/* Animated Glow */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.glowColor}, transparent 70%)`
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Image */}
                <motion.div
                    className="relative w-full h-96 mb-4 rounded-2xl overflow-hidden border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Title */}
                <h3 className="text-text-primary text-xl font-bold mb-2 line-clamp-1">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {project.description}
                </p>

                {/* Tech Stack - Always Visible */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-semibold text-text-primary border border-white/20"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-semibold text-ios-blue border border-white/20">
                            +{project.techStack.length - 3}
                        </span>
                    )}
                </div>

                {/* Futuristic Links with Icons */}
                <div className="flex gap-2">
                    {project.links.map((link, i) => {
                        const isPlayStore = link.label === "Play Store";
                        const isAppStore = link.label === "App Store";
                        const isCode = link.label === "Code";
                        const isFigma = link.label === "Figma" || link.label === "Figma Link";

                        return (
                            <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group/btn flex-1 relative overflow-hidden px-3 py-2.5 rounded-xl text-sm font-bold transition-all border"
                                style={{
                                    background: isPlayStore
                                        ? "linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.1))"
                                        : isAppStore
                                            ? "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1))"
                                            : "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.1))",
                                    borderColor: isPlayStore
                                        ? "rgba(52, 211, 153, 0.3)"
                                        : isAppStore
                                            ? "rgba(59, 130, 246, 0.3)"
                                            : "rgba(139, 92, 246, 0.3)"
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: isPlayStore
                                        ? "0 8px 24px rgba(52, 211, 153, 0.3)"
                                        : isAppStore
                                            ? "0 8px 24px rgba(59, 130, 246, 0.3)"
                                            : "0 8px 24px rgba(139, 92, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={springConfigs.bouncy}
                            >
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />

                                <div className="flex items-center justify-center gap-2 relative z-10">
                                    {/* Icon */}
                                    {isPlayStore && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                    )}
                                    {isAppStore && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                        </svg>
                                    )}
                                    {isCode && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C7.7 2.1 6.6 2.4 6.6 2.4a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 005.2 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                                        </svg>
                                    )}
                                    {isFigma && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15.5 2H8.5a5.5 5.5 0 000 11h7a5.5 5.5 0 000-11zm0 11H12v11a5.5 5.5 0 005.5-5.5V13z" />
                                        </svg>
                                    )}
                                    {!isPlayStore && !isAppStore && !isCode && !isFigma && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                        </svg>
                                    )}

                                    <span className="text-text-primary">{link.label}</span>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
