import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, ArrowUp } from "lucide-react";
import images from "../constants/images";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  screenshots: string[];
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: "project1",
    title:
      "Skill Bridge - a computer vision based mobile application for children with neurodevelopmental disorders",
    description:
      "SkillBridge – A cutting-edge computer vision-based learning app designed to support skill development in children with neurodevelopmental disorders.",
    image: images.skillbridgethumb,
    detailedDescription:
      "SkillBridge – A cutting-edge computer vision-based learning app designed to support skill development in children with neurodevelopmental disorders. Built with Expo (React Native) for cross-platform compatibility and enhanced with Kotlin Native Modules for seamless integration of advanced functionalities. The app leverages MediaPipe for real-time hand gesture and facial recognition, enabling intuitive, gesture-driven interactive games that promote motor skills, cognitive abilities, and social engagement.\n\nKey features include:\n\nAdaptive UI: Tailored to individual learning needs, ensuring accessibility and engagement.\n\nGesture-Controlled Learning: Enables interaction through hand movements, fostering active participation.\n\nInteractive Games: Designed to develop fine motor skills, attention, and cognitive flexibility.\n\nProgress Tracking: Monitors skill development and provides insights for educators and caregivers.\n\nAndroid Compatibility: Optimized for a smooth user experience on Android devices.\n\nSkillBridge bridges the gap between traditional learning and modern assistive technology, empowering children with engaging, intuitive, and effective skill-building experiences.",
    technologies: [
      "Expo",
      "React Native",
      "MediaPipe",
      "Android Kotlin Native",
      "Firebase",
    ],
    github: "https://github.com/dileepapeiris/SkillBridge-mobile-App",
    liveDemo: "https://www.youtube.com/watch?v=KD801dvijow",
    screenshots: [
      images.sk1,
      images.sk2,
      images.sk3,
      images.sk4,
      images.sk5,
      images.sk6,
      images.sk7,
      images.sk8,
      images.sk9,
      images.sk10,
      images.sk11,
      images.sk12,
      images.sk13,
      images.sk14,
      images.sk15,
      images.sk16,
    ],
    videoUrl: "https://www.youtube.com/embed/KD801dvijow",
  },
  {
    id: "project2",
    title: "BookToGo.lk",
    description:
      "A thread-safe ticket booking platform built with Spring Boot, Angular and MySQL",
    image: images.booktogothumb,
    detailedDescription:
      "BookToGo.lk is a comprehensive ticket booking platform designed with thread safety and concurrent programming principles in mind. Built with a Spring Boot backend, Angular frontend, and MySQL database, this application ensures reliable ticket transactions even under high user load.\n\nThe system implements a shared ticket pool architecture where vendors can add multiple events and customers can purchase tickets in a thread-safe manner. I utilized reentrant locks and other concurrency control mechanisms to prevent race conditions and ensure data consistency.\n\nKey features include:\n\n- OOP design principles for clean, maintainable code\n- RESTful API architecture for seamless frontend-backend communication\n- Concurrent programming with thread safety mechanisms\n- Reentrant locks to prevent ticket double-booking\n- User authentication and authorization\n- Vendor dashboard for event management\n- Customer interfaces for ticket browsing and purchasing\n\nThe project demonstrates advanced Java concepts including concurrency control, multithreading, and proper resource management in a real-world application scenario.",
    technologies: [
      "Spring Boot",
      "Angular",
      "MySQL",
      "REST API",
      "Concurrent Programming",
      "Java",
      "TypeScript",
    ],
    github:
      "https://github.com/dileepapeiris/BookToGo.lk-a-Real-Time-Event-Ticketing-Full-Stack-Application",
    liveDemo: "https://www.youtube.com/watch?v=QGpfjjG4KLc",
    screenshots: [
      images.booktogo1,
      images.booktogo2,
      images.booktogo3,
      images.booktogo4,
      images.booktogo5,
      images.booktogo6,
      images.booktogo7,
      images.booktogo8,
      images.booktogo9,
      images.booktogo10,
      images.booktogo11,
      images.booktogo12,
      images.booktogo13,
      images.booktogo14,
    ],
    videoUrl: "https://www.youtube.com/embed/QGpfjjG4KLc",
  },
  {
    id: "project3",
    title: "Sri Dewananda Damma School Mobile Application",
    description:
      "A comprehensive mobile application for Sri Dewananda Damma School",
    image: images.sddsthumb,
    detailedDescription:
      "This project involved developing both an official mobile application for Sri Dewananda Damma School, designed to enhance communication between the school, students, and parents.\n\nThe mobile application provides several key features including:\n\n- Real-time announcements and notifications for school events\n- Digital access to study materials and resources\n- Parent-teacher communication portal\n- School calendar and event scheduling\n- Photo and video galleries of school activities\n\n\nThe complementary application serves as an administrative hub and public-facing platform, showcasing the school's achievements, curriculum, and facilities while providing a content management system for school staff.",
    technologies: ["Projects for real clients"],
    github:
      "https://github.com/dileepapeiris/Official-Mobile-Application-Of-Sri-Dewananada-Damma-School",
    liveDemo: "https://www.youtube.com/watch?v=6-OrXYGvTvI",
    screenshots: [
      images.sdds1,
      images.sdds2,
      images.sdds3,
      images.sdds4,
      images.sdds5,
      images.sdds6,
      images.sdds7,
      images.sdds8,
      images.sdds9,
      images.sdds10,
      images.sdds11,
      images.sdds12,
      images.sdds13,
      images.sdds14,
      images.sdds15,
      images.sdds16,
      images.sdds17,
      images.sdds18,
      images.sdds19,
    ],
    videoUrl: "https://www.youtube.com/embed/6-OrXYGvTvI",
  },
  {
    id: "project4",
    title: "Stitching Guide Mobile App",
    description:
      "An interactive mobile application that provides step-by-step stitching guidance with voice instructions",
    image: images.stitchingthumb,
    detailedDescription:
      "The Stitching Guide Mobile App is a comprehensive learning tool designed to help users master stitching techniques through an interactive and accessible interface. Built with Expo (React Native), this application combines visual guidance with audio instructions to create an immersive learning experience.\n\n🧐 Key Features:\n\n✅ Expo Speech Integration – The app leverages Expo Speech to provide audio descriptions for each stitching step, making it accessible for users who prefer auditory learning or have visual impairments.\n\n✅ Seven Detailed Steps – The application covers essential stitching techniques through a structured seven-step process, each with clear instructions and visual aids.\n\n✅ GIF Animations – Dynamic visual demonstrations show the exact movements required for each stitch, making it easier to understand complex techniques.\n\n✅ Rich UI – The user interface is designed with simplicity and engagement in mind, featuring intuitive navigation and visually appealing elements.\n\n✅ Cross-Platform Compatibility – Built with Expo, the app runs seamlessly on both Android and iOS devices without requiring separate codebases.\n\n🛠️ Tech Stack:\n\n- Framework: Expo (React Native)\n- Speech API: Expo Speech for audio instructions\n- Media Support: GIF animations for step-by-step visual guidance\n- State Management: React Hooks for efficient state handling\n\nThis project demonstrates my ability to create educational applications that combine multiple sensory inputs (visual and auditory) to enhance the learning experience, while maintaining a clean and accessible user interface.",
    technologies: [
      "Expo",
      "React Native",
      "Expo Speech",
      "React Hooks",
      "Animation",
      "UI/UX Design",
    ],
    github: "https://github.com/dileepapeiris/Stiching-Guide-Mobile-App",
    liveDemo: "https://www.youtube.com/watch?v=S6F01OS9RwI",
    screenshots: [
      images.stitching7,
      images.stitching1,
      images.stitching2,
      images.stitching3,
      images.stitching4,
      images.stitching5,
      images.stitching6,
    ],
    videoUrl: "https://www.youtube.com/embed/S6F01OS9RwI",
  },
  {
    id: "project5",
    title: "AI Learning Platform",
    description:
      "An interactive platform for learning AI and machine learning concepts.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    detailedDescription:
      "This AI learning platform provides interactive tutorials, exercises, and visualizations to help users understand AI and machine learning concepts. It includes hands-on coding exercises with TensorFlow and PyTorch, as well as visualization tools to explain complex algorithms. The platform is built with React and Python, using WebAssembly to run Python code in the browser.",
    technologies: [
      "React",
      "Python",
      "TensorFlow",
      "PyTorch",
      "WebAssembly",
      "D3.js",
    ],
    github: "https://github.com/dileepa/ai-learning-platform",
    liveDemo: "https://ai-learning.dileepa.dev",
    screenshots: [
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const foundProject = projects.find((p) => p.id === id);

    // Simulate API call
    setTimeout(() => {
      setProject(foundProject || null);
      setLoading(false);
    }, 500);

    // Add scroll listener for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // New navigation function that includes project ID in state
  const navigateToProjectsSection = () => {
    navigate("/", {
      state: {
        scrollToSection: "projects",
        highlightProject: id,
      },
    });
  };

  const navigateToHomeProjects = () => {
    // Navigate back to the homepage
    navigate("/");

    // Use setTimeout to ensure navigation happens before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const yOffset = -80; // Adjust based on your header height
        const y =
          projectsSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });

        // Optional: Highlight the current project in the list
        setTimeout(() => {
          const projectElement = document.querySelector(
            `[data-project-id="${id}"]`
          );
          if (projectElement) {
            projectElement.classList.add("highlight-project");
            // Remove the highlight after a short delay
            setTimeout(() => {
              projectElement.classList.remove("highlight-project");
            }, 2000);
          }
        }, 800);
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-primary hover:text-primary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back to homepage
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Back button - Updated to use the new navigation function */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={navigateToHomeProjects}
          className="flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </motion.button>

        {/* Hero section */}
        <div className="mb-12">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {project.technologies.map((tech, index) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  About the Project
                </h2>
                <p className="text-foreground/80 whitespace-pre-line">
                  {project.detailedDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Video section */}
            {project.videoUrl && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 bg-card rounded-xl overflow-hidden shadow-sm border border-border/50"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Project Demo</h2>
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.videoUrl}
                      title="Project Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Screenshots section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 p-6">
              <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
              <div className="space-y-4">
                {project.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          y: showBackToTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
        aria-label="Back to top"
        style={{ visibility: showBackToTop ? "visible" : "hidden" }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
};

export default ProjectDetail;
