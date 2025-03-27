import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../lib/utils";
import { useIsMobile } from "../hooks/use-mobile";
import { ScrollArea } from "./ui/scroll-area";

const skills = [
  {
    name: "Java",
    icon: "☕",
    description:
      "Building robust, scalable backend systems and enterprise applications with Java SE/EE",
  },
  {
    name: "React",
    icon: "⚛️",
    description:
      "Creating responsive, interactive user interfaces with React's component-based architecture",
  },
  {
    name: "Next.js",
    icon: "▲",
    description:
      "Developing high-performance web applications with server-side rendering and static generation",
  },
  {
    name: "Expo",
    icon: "📱",
    description:
      "Streamlining mobile development workflow with unified tooling and components",
  },
  {
    name: "React Native",
    icon: "📲",
    description:
      "Building cross-platform mobile applications with native performance using JavaScript",
  },
  {
    name: "Spring Boot",
    icon: "🍃",
    description:
      "Creating production-ready microservices and API endpoints with minimal configuration",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    description:
      "Designing and optimizing relational databases with a focus on performance and data integrity",
  },
  {
    name: "Python",
    icon: "🐍",
    description:
      "Implementing data analysis, automation, and backend services with clean, readable code",
  },
  {
    name: "Android Native",
    icon: "🤖",
    description:
      "Developing high-performance Android applications using Kotlin and Java with the Android SDK",
  },
];

const MacbookScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobileHook = useIsMobile();
  const [isMobile, setIsMobile] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileHook);

    // Add this scroll cleanup function
    const handleScrollEnd = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // If we've scrolled past the section bottom
        if (rect.bottom < 0) {
          // Reset the visibility completely
          if (containerRef.current) {
            containerRef.current.style.opacity = "0";
            containerRef.current.style.pointerEvents = "none";
          }
        } else if (rect.top < window.innerHeight && rect.bottom > 0) {
          // We're viewing the section
          if (containerRef.current) {
            containerRef.current.style.removeProperty("pointer-events");
            // Let the animation handle opacity
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEnd);
    return () => window.removeEventListener("scroll", handleScrollEnd);
  }, [isMobileHook]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale the laptop based on initial scroll
  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0.6, isMobile ? 1 : 1.5]
  );

  // Control the laptop's position and rotation
  const translate = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 150, 150, 800]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [-28, 0, 0, -20]
  );

  // Control the title's visibility
  const textTransform = useTransform(scrollYProgress, [0, 0.1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Detect when content has been consumed
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isAtBottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + 50;

    if (isAtBottom && !reachedEnd) {
      setReachedEnd(true);
    } else if (!isAtBottom && reachedEnd) {
      setReachedEnd(false);
    }
  };

  // Adjust the container opacity to fade out earlier
  const containerOpacity = useTransform(
    containerScrollProgress,
    [0.7, 0.85], // Make it fade out earlier
    [1, 0]
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: "200vh",
        marginBottom: "100px", // Increase margin between sections
      }}
    >
      <motion.div
        ref={containerRef}
        style={{
          opacity: containerOpacity,
          position: "sticky", // Ensure this is sticky
          top: 0,
          zIndex: 10, // Lower z-index to ensure it doesn't overlap
        }}
        className="flex h-screen items-center justify-center [perspective:800px]"
      >
        <div className="scale-[0.4] sm:scale-[0.6] md:scale-100 flex flex-col items-center justify-center">
          <motion.h2
            style={{
              translateY: textTransform,
              opacity: textOpacity,
            }}
            className="mb-20 text-center text-3xl font-bold text-foreground"
          >
            <span>My Skills & Technologies</span>
          </motion.h2>

          <Lid
            scaleX={scaleX}
            scaleY={scaleY}
            rotate={rotate}
            translate={translate}
            reachedEnd={reachedEnd}
            onScroll={handleScroll}
          />

          <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-secondary dark:bg-secondary/30">
            <div className="relative h-10 w-full">
              <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
            </div>
            <div className="relative flex">
              <div className="mx-auto h-full w-[10%] overflow-hidden">
                <SpeakerGrid />
              </div>
              <div className="mx-auto h-full w-[80%]">
                <Keypad />
              </div>
              <div className="mx-auto h-full w-[10%] overflow-hidden">
                <SpeakerGrid />
              </div>
            </div>
            <Trackpad />
            <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-secondary/80 to-muted dark:from-secondary/30 dark:to-muted/30" />
          </div>
        </div>
      </motion.div>

      {/* Add a clearer spacer with more height to ensure proper section separation */}
      <div className="h-[30vh] md:h-[50vh]" aria-hidden="true"></div>
    </section>
  );
};

const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  reachedEnd,
  onScroll,
}: {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  reachedEnd: boolean;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px #171717 inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white text-2xl font-bold">dileepa.dev</span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-secondary/20 dark:bg-[#272729]">
          <ScrollArea className="h-full w-full p-4" onScroll={onScroll}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/80 hover:border-primary/20 transition-colors group"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-xl mb-4">
                      {skill.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="mt-2 text-foreground/70">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </motion.div>
    </div>
  );
};

const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{children}</div>
  );
};

const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[4px] p-[0.5px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white/20"
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const Keypad = () => {
  return (
    <div className="mx-1 h-full rounded-md bg-[#050505] p-1">
      <Row>
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <KBtn key={i}>{i + 1}</KBtn>
          ))}
        <KBtn>
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </Row>

      {Array(4)
        .fill(null)
        .map((_, i) => (
          <Row key={i}>
            {Array(14)
              .fill(null)
              .map((_, j) => (
                <KBtn key={j}></KBtn>
              ))}
          </Row>
        ))}

      <Row>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        ></KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        ></KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        ></KBtn>
        <KBtn className="w-[8.2rem]"></KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        ></KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        ></KBtn>
        <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3 w-6"></KBtn>
          <div className="flex">
            <KBtn className="h-3 w-6"></KBtn>
            <KBtn className="h-3 w-6"></KBtn>
            <KBtn className="h-3 w-6"></KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};

const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export default MacbookScroll;
