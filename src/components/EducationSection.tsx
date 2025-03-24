
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const education = [
  {
    school: "University of Westminster",
    logo: "🎓",
    degree: "BEng (Hons) Software Engineering",
    year: "2023 - 2027",
    description: "Specializing in web development, Android Native and Expo + React native Mobile application development and full stack development. Participated in numerous hackathons and coding competitions."
  },
  {
    school: "Taxila Cental College - Horana",
    logo: "🏫",
    degree: "Advanced Level - Physical Science Stream",
    year: "2018 - 2020",
    description: "Studied Mathematics, Physics, and Chemistry. Participated in various programming competitions and science exhibitions."
  },
  {
    school: "Online Courses & Certifications",
    logo: "🌐",
    degree: "LinkedIn Certifications",
    year: "2014 - Present",
    description: "Completed certifications in Java , Springboot , Angular , OOP , Python, Html, CSS and various programming languages through LinkedIn learning."
  }
];

const EducationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="education" className="py-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-2">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold"
              >
                Academic Background
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-foreground/70"
              >
                My educational journey has equipped me with both theoretical knowledge and practical skills in software engineering and computer science.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              </motion.div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8 space-y-16">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 relative"
              >
                <div className="md:w-12 flex-shrink-0 flex items-start justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                    {item.logo}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.school}
                      </h3>
                      <span className="text-sm font-medium text-foreground/60 mt-1 md:mt-0">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-primary font-medium mt-1">
                      {item.degree}
                    </p>
                    <p className="mt-4 text-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
