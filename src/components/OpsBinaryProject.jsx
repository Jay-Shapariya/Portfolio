import React from "react";
import { motion } from "framer-motion";
import { springConfigs } from "../utils/motionVariants";
import useAnalytics from "../hooks/useAnalytics";

const OpsBinaryProject = () => {
    const { trackEvent } = useAnalytics();
    const links = [
        {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.ops.binary",
        },
        {
            label: "App Store",
            url: "https://apps.apple.com/us/app/opsbinary/id6815221724",
        },
    ];

    return (
        <section className="bg-transparent py-8 md:py-12 relative" aria-label="Featured project: OpsBinary">
            <div className="container mx-auto px-6 md:px-15 lg:px-20">
                <motion.article
                    className="group relative rounded-3xl overflow-hidden max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={springConfigs.gentle}
                >
                    <div className="absolute inset-0 glass-dark" />
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%)" }}
                    />
                    <div className="relative z-10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="relative min-h-64 md:min-h-80 rounded-2xl overflow-hidden border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-ios-blue/20 border border-white/30 flex items-center justify-center text-ios-blue text-3xl font-bold">
                                    OB
                                </div>
                                <p className="text-text-secondary text-sm">OpsBinary app image coming soon</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-ios-blue text-xs font-bold uppercase tracking-widest mb-3">Featured Project</p>
                            <h3 className="text-text-primary text-2xl md:text-3xl font-bold mb-3">OpsBinary</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                OpsBinary is a mobile app available on Android and iOS. Visit its store listing to learn more and download the app.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["Android", "iOS"].map((platform) => (
                                    <span key={platform} className="px-3 py-1.5 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-semibold text-text-primary border border-white/40">
                                        {platform}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                {links.map((link) => {
                                    const isPlayStore = link.label === "Play Store";
                                    return (
                                        <motion.a
                                            key={link.label}
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={() => trackEvent("project_link_click", {
                                                project: "OpsBinary",
                                                link_label: link.label,
                                                url: link.url,
                                            })}
                                            className="relative overflow-hidden px-4 py-3 rounded-xl text-sm font-bold transition-all border backdrop-blur-sm text-center text-text-primary"
                                            style={{
                                                background: isPlayStore
                                                    ? "linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.1))"
                                                    : "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1))",
                                                borderColor: isPlayStore ? "rgba(52, 211, 153, 0.3)" : "rgba(59, 130, 246, 0.3)",
                                            }}
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.96 }}
                                            transition={springConfigs.bouncy}
                                        >
                                            {link.label}
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
};

export default OpsBinaryProject;
