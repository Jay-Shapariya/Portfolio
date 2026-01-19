import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Project = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const projects = [
        {
            title: "Eat at Home",
            description: "A comprehensive food delivery application that allows users to order delicious meals from local restaurants. Features include scheduled ordering for tomorrow, real-time tracking, multiple payment options, and personalized meal recommendations.",
            image: "/image/eat.png",
            techStack: ["Flutter", "Firebase", "RestAPIs", "GetX", "Provider"],
            links: [
                { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.eatathomeuser&pcampaignid=web_share" },
                { label: "App Store", url: "https://apps.apple.com/in/app/eat-at-home-daily-delights/id6523418467" }
            ],
            color: "from-green-500/20 to-emerald-500/5",
        },
        {
            title: "Eat at Home Kitchen App",
            description: "Kitchen-side companion app for restaurant partners to manage incoming orders from the Eat at Home platform. Features order management, kitchen workflow optimization, real-time notifications, and inventory tracking.",
            image: "/image/eat-host.png",
            techStack: ["Flutter", "Firebase", "RestAPIs", "GetX", "Provider"],
            links: [
                { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.eatathomehost&pcampaignid=web_share" },
                { label: "App Store", url: "https://apps.apple.com/in/app/eat-at-home-host/id6535681828" }
            ],
            color: "from-orange-500/20 to-red-500/5",
        },
        {
            title: "Hudlr",
            description: "A comprehensive fitness social platform where users can connect, share workouts, join live classes and training sessions, participate in fitness challenges, and engage with a community of fitness enthusiasts.",
            image: "/image/hudlr.jpeg",
            techStack: ["Kotlin", "Android Studio", "Firebase", "RestAPIs"],
            links: [
                { label: "Live Demo", url: "#" }
            ],
            color: "from-blue-500/20 to-indigo-500/5",
        },
        {
            title: "UnApp",
            description: "Revolutionary auto-pickup calling solution that intelligently handles incoming calls without disturbing users. Features AI-powered responses, call screening, smart notifications, and seamless call management using advanced telecom services.",
            image: "/image/unapp.png",
            techStack: ["Java", "Android Studio", "TelecomManager"],
            links: [
                { label: "Live Demo", url: "#" }
            ],
            color: "from-purple-500/20 to-pink-500/5",
        },
        {
            title: "Infix - LMS App",
            description: "This School Management System app is a comprehensive solution built with Flutter and Firebase, designed to streamline the administration and management of school operations. The app provides features for administrators, teachers, students, and parents to interact and manage various school activities efficiently.",
            image: "/image/infix.png",
            techStack: ["Flutter", "Firebase"],
            links: [
                { label: "Live Demo", url: "https://drive.google.com/file/d/1I2UroLQ36dF2nqGd-iOtcCzzxKd_fGAK/view?usp=sharing" }
            ],
            color: "from-blue-400/20 to-cyan-500/5",
        },
        {
            title: "Inga Taxi App",
            description: "This Taxi Booking App is a mobile application built with Flutter and Firebase, offering a seamless platform for users to book rides efficiently. It allows passengers to connect with drivers, track rides in real-time, and ensure a smooth, user-friendly experience.",
            image: "/image/inga.png",
            techStack: ["Flutter", "Firebase"],
            links: [
                { label: "Live Demo", url: "https://drive.google.com/file/d/1I8sizOreSDrMGjii4wbXcr0E6plc_ill/view?usp=sharing" }
            ],
            color: "from-yellow-500/20 to-amber-500/5",
        },
        {
            title: "Yoga App",
            description: "This Yoga App is built using Flutter, SQLite for local data storage, and the Provider package for state management. It offers a comprehensive platform for users to follow guided yoga workouts, track their progress, and customize their yoga routines.",
            image: "/image/yoga.jpeg",
            techStack: ["Flutter", "SQLite"],
            links: [
                { label: "Code", url: "https://github.com/Jay-Shapariya/yoga_app.git" },
                { label: "Live Demo", url: "https://www.un-app.ai/" }
            ],
            color: "from-teal-500/20 to-emerald-500/5",
        },
        {
            title: "E-Commerce App",
            description: "This Flutter E-Commerce App is a basic implementation of an online shopping application. It allows users to browse products, add them to the cart, and make purchases using Firebase as the backend for authentication and data storage.",
            image: "/image/ecommerce.png",
            techStack: ["Flutter", "Firebase"],
            links: [
                { label: "Code", url: "https://github.com/Jay-Shapariya/Flutter_E-Commerce_APP.git" },
                { label: "Screenshots", url: "https://drive.google.com/file/d/1Wp65FsYejnv4XAYvrfHyGd_x8jTN4P-Z/view?usp=sharing" }
            ],
            color: "from-pink-500/20 to-rose-500/5",
        },
        {
            title: "Seller Dashboard",
            description: "The Seller Dashboard is an integral part of the Flutter E-Commerce App, providing sellers with tools to manage their products, view orders, and keep track of their store's performance. It offers an intuitive interface powered by the Get library for state management.",
            image: "/image/seller.jpeg",
            techStack: ["Flutter", "Firebase"],
            links: [
                { label: "Code", url: "https://github.com/Jay-Shapariya/Flutter_E-Mart_Seller_App.git" },
                { label: "Screenshots", url: "https://drive.google.com/file/d/13VWX1ZKtRAPhkjGA_5_qwjwX-TMUyqqS/view?usp=sharing" }
            ],
            color: "from-indigo-500/20 to-violet-500/5",
        },
        {
            title: "To Do App",
            description: "This Flutter ToDo app is built from scratch with a clean UI, using the Provider package for state management. Each component is explained for easy learning and efficient task management.",
            image: "/image/to do.jpeg",
            techStack: ["Flutter", "Provider"],
            links: [
                { label: "Code", url: "https://github.com/Jay-Shapariya/todo-app-using-provider.git" }
            ],
            color: "from-cyan-500/20 to-blue-500/5",
        },
        {
            title: "HealthoHolic",
            description: "The goal of this project is to develop the user interface (UI) of a health and fitness app. The project's ultimate goal is to produce an app that is visually appealing, intuitive, and useful in assisting users in reaching their fitness goals.",
            image: "/image/healthoholic figma.jpeg",
            techStack: ["Figma"],
            links: [
                { label: "Figma Link", url: "https://www.figma.com/file/PNuoPtI7JYX1rKamMCSOeZ/HCI_Project_HealthoHolic?type=design&node-id=0%3A1&mode=design&t=DAwOqoYZhwAF3o1L-1" },
                { label: "Live Demo", url: "https://drive.google.com/file/d/1GBFJBevrFkjtBX72FMtEZNCbOh8K-eph/view?usp=sharing" }
            ],
            color: "from-red-500/20 to-orange-500/5",
        },
        {
            title: "HealthoHolic Mobile",
            description: "The goal of this project is to develop the user interface (UI) of a health and fitness app. The application is designed to provide users with a smooth and intuitive experience, incorporating principles of HCI.",
            image: "/image/health.jpeg",
            techStack: ["Flutter", "Provider"],
            links: [
                { label: "Code", url: "https://github.com/Jay-Shapariya/healthoholic-flutter-app.git" },
                { label: "Live Demo", url: "https://drive.google.com/file/d/1GBFJBevrFkjtBX72FMtEZNCbOh8K-eph/view?usp=sharing" }
            ],
            color: "from-green-500/20 to-teal-500/5",
        },
    ];

    const getIcon = (label) => {
        // ... (Icon logic remains the same, assuming standard icons)
        // For brevity in this artifact, I'll use simple generic SVGs if needed or rely on previous logic
        if (label === "Code") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
            );
        } else if (label === "Figma Link") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg>
            );
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            );
        }
    };

    return (
        <div id="project" className="bg-transparent py-32 relative" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-ios-blue text-lg font-bold mb-4 uppercase tracking-widest">
                        Selected Work
                    </h3>
                    <h4 className="text-text-primary text-3xl md:text-5xl font-bold tracking-tight">
                        Featured Projects
                    </h4>
                </motion.div>

                <div className="grid grid-cols-1 gap-20">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            project={project}
                            index={index}
                            getIcon={getIcon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Extracted Card Component for cleaner motion logic
const Card = ({ project, index, getIcon }) => {
    return (
        <motion.div
            className="group relative rounded-[2.5rem] bg-[#12151C] border border-white/5 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -5 }} // Subtle lift on hover
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

            <div className="flex flex-col lg:flex-row h-full relative z-10">
                {/* Image Section - Flutter Hero Illusion */}
                <div className="w-full lg:w-2/5 h-[200px] lg:h-auto relative overflow-hidden p-6 lg:p-8">
                    <motion.div
                        className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative"
                        whileHover={{ scale: 1.02 }} // Image scales inside container
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {/* Background Blur for depth */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 blur-xl`} />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover relative z-10"
                        />
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-6 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-text-primary mb-4">{project.title}</h3>
                    <p className="text-text-secondary text-lg leading-relaxed mb-8">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-sm font-medium text-text-primary border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {project.links.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-text-primary font-semibold transition-colors border border-white/5"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                                {getIcon(link.label)}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
