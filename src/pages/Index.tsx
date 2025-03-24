
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "Dileepa.dev | Software Engineer";
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
