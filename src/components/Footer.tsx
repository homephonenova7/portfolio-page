
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-xl font-bold">dileepa.dev</span>
            <p className="mt-2 text-sm text-foreground/70">
              © {new Date().getFullYear()} Dileepa. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <div className="flex space-x-6">
              <a
                href="#home"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#skills"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Education
              </a>
              <a
                href="#projects"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
