// Centralized Framer Motion Variants Library
// Apple-inspired motion system with spring physics

export const motionVariants = {
    // Screen entrance - used for page sections
    screenEnter: {
        initial: { opacity: 0, y: 30, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            mass: 0.8
        }
    },

    // Stagger container for list items
    staggerContainer: {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    },

    // Item in stagger list
    staggerItem: {
        initial: { opacity: 0, y: 20, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    },

    // Glass hover effect
    glassHover: {
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25
        }
    },

    // Press feedback (tap/click)
    pressFeedback: {
        scale: 0.96,
        transition: {
            duration: 0.1,
            ease: "easeOut"
        }
    },

    // Card lift on hover
    cardLift: {
        y: -4,
        scale: 1.01,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25
        }
    },

    // Float idle animation (breathing effect)
    floatIdle: {
        y: [0, -8, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },

    // Gentle breathing scale
    breathingScale: {
        scale: [1, 1.005, 1],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },

    // Fade in from bottom
    fadeInUp: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 20
        }
    },

    // Fade in with scale
    fadeInScale: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

// Preset spring configurations
export const springConfigs = {
    // Gentle spring for large elements
    gentle: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 1
    },

    // Bouncy spring for interactive elements
    bouncy: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8
    },

    // Smooth spring for transitions
    smooth: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
    },

    // Quick spring for immediate feedback
    quick: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.5
    }
};

// Viewport options for scroll animations
export const viewportOptions = {
    // Trigger once when scrolled into view
    once: {
        once: true,
        margin: "-100px"
    },

    // Trigger earlier for smoother experience
    early: {
        once: true,
        margin: "-150px"
    },

    // Always animate (for repeating animations)
    always: {
        once: false,
        margin: "-50px"
    }
};

export default motionVariants;
