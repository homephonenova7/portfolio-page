
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [100, 0, 0, 100]);

  return (
    <section id="contact" className="py-20 min-h-screen relative">
      <motion.div
        style={{ opacity, y }}
        ref={containerRef}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:contact@dileepa.dev" className="text-foreground hover:text-primary transition-colors">
                  contact@dileepa.dev
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 text-primary mr-3" />
                <a href="https://linkedin.com/in/dileepa" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  linkedin.com/in/dileepa
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 text-primary mr-3" />
                <a href="https://github.com/dileepa" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  github.com/dileepa
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3">Follow Me</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/dileepa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://linkedin.com/in/dileepa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="mailto:contact@dileepa.dev"
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <div className="flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
