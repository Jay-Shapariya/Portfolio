import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { springConfigs } from "../utils/motionVariants";
import useAnalytics from "../hooks/useAnalytics";

const OPSBINARY_PROJECT = {
    title: "OpsBinary",
    description:
        "OpsBinary is an all-in-one CRM and business operations platform that brings sales, customer and vendor management, invoicing, inventory, procurement, projects, and team workflows together. Real-time analytics, approval workflows, QR tools, role-based access, notifications, and an AI assistant for business questions and document insights help teams reduce manual work and manage operations with greater clarity.",
    image: "/image/OpsBinary.png",
    techStack: ["Flutter", "RazorPay", "AI ChatBot", "Riverpod", "RestAPI"],
    links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ops.binary" },
        { label: "App Store", url: "https://apps.apple.com/us/app/opsbinary/id6815221724" },
    ],
    glowColor: "rgba(59, 130, 246, 0.3)",
};

const OpsBinaryProject = () => {
    const [mountNode, setMountNode] = useState(null);

    useEffect(() => {
        const projectsGrid = document.querySelector("#project .grid");
        if (!projectsGrid) return undefined;

        // Mount this card at the start of the existing Featured Projects grid.
        const node = document.createElement("div");
        node.className = "contents";
        projectsGrid.insertBefore(node, projectsGrid.firstChild);
        setMountNode(node);

        return () => node.remove();
    }, []);

    return mountNode ? createPortal(<ProjectCard project={OPSBINARY_PROJECT} index={0} />, mountNode) : null;
};

const ProjectCard = ({ project, index }) => {
    const { trackEvent } = useAnalytics();

    return (
        <motion.div
            className="group relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springConfigs.gentle, delay: index * 0.05 }}
        >
            <div className="absolute inset-0 glass-dark" />
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${project.glowColor}, transparent 70%)` }}
            />
            <div className="relative z-10 p-6 flex flex-col h-full">
                <motion.div
                    className="relative w-full h-96 mb-4 rounded-2xl overflow-hidden border border-white/40"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <img src={project.image} alt={`${project.title} logo`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <h3 className="text-text-primary text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-semibold text-text-primary border border-white/40 hover:bg-white/50 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    {project.links.map((link) => {
                        const isPlayStore = link.label === "Play Store";
                        const isAppStore = link.label === "App Store";

                        return (
                            <motion.a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => trackEvent("project_link_click", {
                                    project: project.title,
                                    link_label: link.label,
                                    url: link.url,
                                })}
                                className="flex-1 relative overflow-hidden px-3 py-2.5 rounded-xl text-sm font-bold transition-all border backdrop-blur-sm"
                                style={{
                                    background: isPlayStore
                                        ? "linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.1))"
                                        : "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1))",
                                    borderColor: isPlayStore ? "rgba(52, 211, 153, 0.3)" : "rgba(59, 130, 246, 0.3)",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: isPlayStore
                                        ? "0 8px 24px rgba(52, 211, 153, 0.3)"
                                        : "0 8px 24px rgba(59, 130, 246, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={springConfigs.bouncy}
                            >
                                <span className="text-text-primary flex items-center justify-center gap-2">
                                    {isPlayStore && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M3.6 2.2a1.8 1.8 0 0 0-.6 1.3v17a1.8 1.8 0 0 0 .6 1.3L13.1 12 3.6 2.2Zm10.5 8.7 2.8-2.9L6.5 1.8l7.6 9.1Zm0 2.2-7.6 9.1 10.4-6.2-2.8-2.9Zm1.5-1.1 3.2 1.9c.9.5.9 1.3 0 1.8l-2.6 1.5-3.1-3.2 2.5-2Z" />
                                        </svg>
                                    )}
                                    {isAppStore && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M17.1 12.6c0-2.3 1.9-3.4 2-3.5a4.4 4.4 0 0 0-3.5-1.9c-1.5-.2-3 .9-3.8.9-.8 0-2-1-3.3-.9a4.8 4.8 0 0 0-4 2.5c-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.7 2.5 3 2.4 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8 2.1-1.2 2.9-2.4a10.7 10.7 0 0 0 1.3-2.7 4.2 4.2 0 0 1-2.2-4.2ZM14.6 5.6A4.3 4.3 0 0 0 15.6 2a4.4 4.4 0 0 0-3 1.5 4.1 4.1 0 0 0-1 3.4 3.7 3.7 0 0 0 3-1.3Z" />
                                        </svg>
                                    )}
                                    {link.label}
                                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default OpsBinaryProject;
