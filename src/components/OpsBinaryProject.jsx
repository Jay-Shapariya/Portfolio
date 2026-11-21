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
    techStack: ["CRM", "AI Assistant", "Analytics", "Inventory", "Project Management"],
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
                    className="relative w-full h-96 mb-4 rounded-2xl overflow-hidden border border-white/40 bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <img src={project.image} alt={`${project.title} logo`} className="w-full h-full object-contain p-8" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <h3 className="text-text-primary text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-semibold text-text-primary border border-white/40 hover:bg-white/50 transition-colors">
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="px-3 py-1.5 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-semibold text-ios-blue border border-white/40 hover:bg-white/50 transition-colors">
                            +{project.techStack.length - 3}
                        </span>
                    )}
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
                                <span className="text-text-primary flex items-center justify-center">{link.label}</span>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default OpsBinaryProject;
