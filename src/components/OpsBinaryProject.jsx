import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { springConfigs } from "../utils/motionVariants";
import useAnalytics from "../hooks/useAnalytics";

const projects = [
    {
        title: "EatBinary Go",
        description:
            "EatBinary Go is a restaurant management app that streamlines front-of-house service. Staff can manage tables, customize and search menu items (including voice search), send Kitchen Order Tickets directly to the kitchen, and track running orders, KOT history, bills, payments, and order history. QR-based pairing connects the app to the EatBinary POS over the local network, keeping restaurant data synchronized for faster service and smoother coordination.",
        image: "/image/EatBinary Go.png",
        techStack: ["Flutter", "Riverpod", "Local Network", "POS Integration"],
        links: [
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.eatbinary.go" },
            { label: "App Store", url: "https://apps.apple.com/in/app/eatbinary-go/id6827100554" },
        ],
        glowColor: "rgba(249, 115, 22, 0.3)",
    },
    {
        title: "HRMS",
        description:
            "A smart, centralized Human Resource Management System that simplifies employee management and everyday HR operations. Employees can access attendance, working hours, leave applications and balances, salary details, and downloadable payslips, while HR teams can manage profiles, announcements, milestones, interview schedules, and notifications. By improving communication and transparency, HRMS streamlines administration and gives teams convenient access to essential workplace information.",
        image: "/image/HRMS.png",
        techStack: ["React Native", "JavaScript", "Android", "iOS"],
        links: [
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.hrmslb" },
            { label: "App Store", url: "https://apps.apple.com/in/app/hrms-lb/id6759902063" },
        ],
        glowColor: "rgba(14, 165, 233, 0.3)",
    },
    {
        title: "Suraksha Setu",
        description:
            "Suraksha Setu is a community-driven safety application that connects people in emergency situations with nearby individuals willing to help. Users can switch between Victim Mode to request assistance and Savior Mode to help others. With one-tap SOS alerts, nearby volunteer notifications, real-time location sharing, and navigation support, the platform enables faster and more coordinated responses. It also provides private in-app chat, allowing victims and saviors to communicate without sharing personal contact information. By building a connected network of community support, Suraksha Setu makes local assistance more accessible while complementing, not replacing, official emergency services.",
        image: "/image/Suraksha Setu.png",
        techStack: ["Flutter", "Bloc", "RestAPI"],
        links: [
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.suraksha.newsetu" },
            { label: "App Store", url: "https://apps.apple.com/in/app/suraksha-setu/id6757309764" },
        ],
        glowColor: "rgba(239, 68, 68, 0.3)",
    },
    {
        title: "OpsBinary",
        description:
            "An all-in-one business management platform designed to streamline operations by bringing sales, customer relationships, inventory, invoicing, procurement, and project management into a centralized workspace. It offers real-time dashboards, lead management, client and vendor tracking, automated invoicing, inventory monitoring, purchase approvals, and project management tools. Additional capabilities include QR code integration, intelligent notifications, and an AI-powered assistant for document summarization and business insights. With role-based access control, activity tracking, and an intuitive interface, the platform helps businesses reduce manual work, improve operational visibility, enhance collaboration, and manage daily workflows more efficiently.",
        image: "/image/OpsBinary.png",
        techStack: ["Flutter", "RazorPay", "AI ChatBot", "Riverpod", "RestAPI"],
        links: [
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ops.binary" },
            { label: "App Store", url: "https://apps.apple.com/us/app/opsbinary/id6815221724" },
        ],
        glowColor: "rgba(59, 130, 246, 0.3)",
    },
];

const OpsBinaryProject = () => {
    const [mountNodes, setMountNodes] = useState(null);

    useEffect(() => {
        const projectsGrid = document.querySelector("#project .grid");
        if (!projectsGrid) return undefined;

        const nodes = projects.map(() => {
            const node = document.createElement("div");
            node.className = "contents";
            return node;
        });

        // Put these featured projects at the beginning of the existing projects grid.
        [...nodes].reverse().forEach((node) => projectsGrid.insertBefore(node, projectsGrid.firstChild));
        setMountNodes(nodes);

        return () => nodes.forEach((node) => node.remove());
    }, []);

    if (!mountNodes) return null;

    return (
        <>
            {projects.map((project, index) =>
                createPortal(
                    <ProjectCard project={project} index={index} />,
                    mountNodes[index],
                    project.title
                )
            )}
        </>
    );
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
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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
