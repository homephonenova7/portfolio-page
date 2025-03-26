
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";


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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    detailedDescription: "This e-commerce platform provides a complete solution for online shopping with features like product search, filtering, user authentication, cart management, and payment processing. The application is built with a React frontend, Node.js backend, and MongoDB database, following best practices for scalability and security.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Stripe API"],
    github: "https://github.com/dileepa/ecommerce-platform",
    liveDemo: "https://ecommerce-platform-demo.dileepa.dev",
    screenshots: [
      "images/projects/SkillBridge/1.jpg",
      "images/projects/SkillBridge/2.jpg",
      "images/projects/SkillBridge/3.jpg",
      "images/projects/SkillBridge/4.jpg",
      "images/projects/SkillBridge/5.jpg",
      "images/projects/SkillBridge/6.jpg",
      "images/projects/SkillBridge/7.jpg",
      "images/projects/SkillBridge/8.jpg",
      "images/projects/SkillBridge/9.jpg",
      "images/projects/SkillBridge/10.jpg",
      "images/projects/SkillBridge/11.jpg",
      "images/projects/SkillBridge/12.jpg",
      "images/projects/SkillBridge/13.jpg",
      "images/projects/SkillBridge/14.jpg",
      "images/projects/SkillBridge/15.jpg",
      "images/projects/SkillBridge/16.jpg",
    ],
    videoUrl: "https://youtu.be/QGpfjjG4KLc"
  },
  {
    id: "project2",
    title: "Smart Home Dashboard",
    description: "An IoT dashboard for monitoring and controlling smart home devices.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80",
    detailedDescription: "This smart home dashboard allows users to monitor and control their IoT devices from a single interface. It integrates with various smart home protocols and provides real-time data visualization, automation rules, and voice control capabilities. The dashboard is built with React for the frontend and uses MQTT for real-time device communication.",
    technologies: ["React", "MQTT", "Chart.js", "Node.js", "WebSockets", "Raspberry Pi"],
    github: "https://github.com/dileepa/smart-home-dashboard",
    screenshots: [
      "https://images.unsplash.com/photo-1563974318767-a4de855d7b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1585058558967-eeb3f12928e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: "project3",
    title: "AI Learning Platform",
    description: "An interactive platform for learning AI and machine learning concepts.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    detailedDescription: "This AI learning platform provides interactive tutorials, exercises, and visualizations to help users understand AI and machine learning concepts. It includes hands-on coding exercises with TensorFlow and PyTorch, as well as visualization tools to explain complex algorithms. The platform is built with React and Python, using WebAssembly to run Python code in the browser.",
    technologies: ["React", "Python", "TensorFlow", "PyTorch", "WebAssembly", "D3.js"],
    github: "https://github.com/dileepa/ai-learning-platform",
    liveDemo: "https://ai-learning.dileepa.dev",
    screenshots: [
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project4",
    title: "Fitness Tracker App",
    description: "A mobile application for tracking workouts and nutrition with analytics.",
    image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    detailedDescription: "This fitness tracker app helps users track their workouts, nutrition, and health metrics. It provides personalized recommendations based on user goals and analytics to visualize progress over time. The app is built with React Native for cross-platform mobile support and uses Firebase for real-time data synchronization and user authentication.",
    technologies: ["React Native", "Firebase", "Chart.js", "Expo", "Redux", "Google Fit API"],
    github: "https://github.com/dileepa/fitness-tracker-app",
    screenshots: [
      "https://images.unsplash.com/photo-1579458342504-f5e85831cbf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const foundProject = projects.find(p => p.id === id);
    
    // Simulate API call
    setTimeout(() => {
      setProject(foundProject || null);
      setLoading(false);
    }, 500);
  }, [id]);

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
          onClick={() => navigate('/')}
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
        {/* Back button */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/')}
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
                <h2 className="text-xl font-semibold mb-4">About the Project</h2>
                <p className="text-foreground/80 whitespace-pre-line">
                  {project.detailedDescription}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
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
    </div>
  );
};

export default ProjectDetail;
