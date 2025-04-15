import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// Let's use img tag instead of Next Image since you're having issues with it
// import Image from "next/image";

const HeroSection: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(120, 120, 255, 0.15), transparent 40%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Connect logo and name with animation
    const nameElement = nameRef.current;
    logoRef.current = document.getElementById("logo-text") as HTMLSpanElement;

    if (nameElement && logoRef.current) {
      const handleNameHover = () => {
        logoRef.current?.classList.add("text-primary");
      };

      const handleNameLeave = () => {
        logoRef.current?.classList.remove("text-primary");
      };

      nameElement.addEventListener("mouseenter", handleNameHover);
      nameElement.addEventListener("mouseleave", handleNameLeave);

      return () => {
        nameElement.removeEventListener("mouseenter", handleNameHover);
        nameElement.removeEventListener("mouseleave", handleNameLeave);
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const text = "Hi! I am ";
  const nameText = "Dileepa Peiris";
  const desc =
    "Software engineering undergraduate with passion for creating efficient solutions to complex problems.";

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background element */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 backdrop-blur-3xl z-0"
      />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Remove the left side profile image div */}

          {/* Full width for content */}
          <div className="w-full text-left">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <motion.div
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap items-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                  {/* Introduction text */}
                  {text.split(" ").map((word, index) => (
                    <React.Fragment key={`word-${index}`}>
                      {index > 0 && (
                        <span className="inline-block">&nbsp;</span>
                      )}
                      <motion.span
                        variants={letterVariants}
                        className="inline-block whitespace-nowrap"
                      >
                        {word}
                      </motion.span>
                    </React.Fragment>
                  ))}

                  {/* Name with highlight */}
                  <div className="relative inline-flex flex-col items-center">
                    {/* Name - without the profile image above it */}
                    <motion.span
                      ref={nameRef}
                      variants={letterVariants}
                      className="inline-block text-primary relative ml-1"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {nameText}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Position title with company name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-3 flex items-center text-lg sm:text-xl text-foreground/70"
                >
                  <span>Trainee Software Engineer at</span>
                  <div className="ml-2 font-bold text-xl flex items-end">
                    <span className="text-orange-500">W</span>
                    <span className="text-orange-500">S</span>
                    <span className="text-foreground">O</span>
                    <span className="text-foreground text-sm align-sub relative bottom">
                      2
                    </span>
                  </div>
                </motion.div>

                {/* Description text */}
                <motion.div
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold tracking-tight leading-relaxed"
                >
                  <div className="py-2">
                    {desc.split(" ").map((word, index) => (
                      <React.Fragment key={`desc-word-${index}`}>
                        {index > 0 && (
                          <span className="inline-block">&nbsp;</span>
                        )}
                        <motion.span
                          variants={letterVariants}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>

                {/* Computer vision app achievement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="mt-4 flex items-center text-lg sm:text-xl"
                >
                  <div className="flex items-center py-2 px-4 bg-primary/10 rounded-lg border border-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-primary mr-2"
                    >
                      <path d="M12 15l-2-2h4l-2 2z"></path>
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <path d="M8 2v2"></path>
                      <path d="M16 2v2"></path>
                      <path d="M22 8h-2"></path>
                      <path d="M22 16h-2"></path>
                      <path d="M6 22v-2"></path>
                      <path d="M14 22v-2"></path>
                      <path d="M2 8h2"></path>
                      <path d="M2 16h2"></path>
                    </svg>
                    <span className="text-foreground">
                      Published Sri Lanka’s first computer vision based game on play store
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-foreground/50 mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/50"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
