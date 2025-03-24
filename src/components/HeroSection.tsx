import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
  const nameText = "Dileepa";
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

      <div className="relative z-10 max-w-5xl text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {" "}
          {/* Increased space-y-4 to space-y-8 */}
          <div className="overflow-hidden">
            <motion.div
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              {/* Introduction text */}
              {text.split(" ").map((word, index) => (
                <React.Fragment key={`word-${index}`}>
                  {index > 0 && <span className="inline-block">&nbsp;</span>}
                  <motion.span
                    variants={letterVariants}
                    className="inline-block whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                </React.Fragment>
              ))}

              {/* Name with highlight */}
              <motion.span
                ref={nameRef}
                variants={letterVariants}
                className="inline-block text-primary relative ml-1 mr-1"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {nameText}
              </motion.span>
            </motion.div>

            {/* Create a separate container for description with more controlled wrapping */}
            <motion.div
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
              className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-relaxed" // Added leading-relaxed
            >
              {/* Description text in its own container for better wrapping control */}
              <div className="py-2">
                {" "}
                {/* Added padding to prevent cutoff */}
                {desc.split(" ").map((word, index) => (
                  <React.Fragment key={`desc-word-${index}`}>
                    {index > 0 && <span className="inline-block">&nbsp;</span>}
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
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-12 max-w-3xl mx-auto text-lg text-foreground/70" /* Increased mt-6 to mt-12 */
          >
            <div className="glass px-6 py-4 rounded-xl backdrop-blur-sm">
              {" "}
              {/* Increased padding */}I have published to srilanka's first
              computer vision based mobile app to play store . (Currently In
              Review State)
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="mt-16" /* Increased mt-10 to mt-16 */
          >
            <a
              href="/Dileepa_CV.pdf" // Replace with your actual CV file path
              download="Dileepa_CV.pdf" // Add download attribute
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white dark:text-black bg-primary rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-primary/90"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Download My CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2" /* Changed bottom-10 to bottom-16 */
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
