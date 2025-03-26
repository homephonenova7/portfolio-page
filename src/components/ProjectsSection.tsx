import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import images from "../constants/images"

const projects = [
  {
    id: "project1",
    title: "Skill Bridge",
    description:
      "A computer vision based mobile application to help kids with neurodevelopmental disorders improve critical executive functions, everyday life skills, and fundamental vocational abilities",
    image: images.skillbridgethumb,
    tags: [
      "Expo",
      "Android Kotlin Native",
      "React Native",
      "Firebase",
      "Mediapipe",
    ],
  },
  {
    id: "project2",
    title: "BookToGo.lk",
    description: "A Real-Time Event Ticketing Full Stack Application",
    image: images.booktogothumb,
    tags: ["SpringBoot", "Angular", "MySQL"],
  },
  {
    id: "project3",
    title: "Sri Dewananda Damma School'Mobile Application",
    description:
      "A Official website and Mobile Application for Sri Dewananda Damma School",
    image: images.sddsthumb,
    tags: ["Expo"],
  },
  {
    id: "project4",
    title: "Stiching Guide Mobile App",
    description: "A mobile application for guiding stiching",
    image: "/images/projects/stitching-guide.jpg",
    tags: ["Expo"],
  },
  {
    id: "project5",
    title: "Fitness Tracker App",
    description:
      "A mobile application for tracking workouts and nutrition with analytics.",
    image: images.skillbridgethumb,
    tags: ["React Native", "Firebase", "Chart.js"],
  },
  {
    id: "project6",
    title: "Life On Land Website",
    description:
      "A website about United Nations Sustainable Development Goals (SDGs)",
    image: "/images/projects/life-on-land.jpg",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    id: "project7",
    title: "University Student Activity Management System",
    description:
      "A comprehensive system for managing university student activities and events.",
    image: "/images/projects/activity-management.jpg",
    tags: ["Java"],
  },
  {
    id: "project8",
    title: "Guts",
    description:
      "A gaming community platform for connecting players and organizing tournaments.",
    image: "/images/projects/guts.jpg",
    tags: ["React", "Firebase", "Socket.io"],
  },
  {
    id: "project9",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with modern web technologies.",
    image: "/images/projects/portfolio.jpg",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
  },
];

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <span className="text-sm font-medium text-foreground/70">
                  FEATURED WORK
                </span>
              </motion.div>
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore some of my recent projects and collaborations
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mt-16 w-full">
          <motion.div
            style={{ y }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card overflow-hidden rounded-xl border border-border/50 hover:border-primary/20 transition-colors duration-300 h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 flex-grow">
                      {project.description}
                    </p>
                    {/* Temporarily hidden - can be re-enabled later */}
                    {false && (
                      <button
                        onClick={() => navigate(`/project/${project.id}`)}
                        className="mt-auto text-sm font-medium text-primary hover:text-primary/80 flex items-center transition-colors"
                      >
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
