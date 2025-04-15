import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  isPage?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "home" },
  { name: "Skills", href: "skills" },
  { name: "Education", href: "education" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavigation = (item: NavItem) => {
    if (item.isPage) {
      navigate(item.href);
    } else {
      const element = document.getElementById(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="cursor-pointer flex items-center"
            >
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center"
              >
                {/* Profile Image - Increased size */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
                  <img
                    src="/profile-image.png"
                    alt="Dileepa's Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  id="logo-text"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  dileepa.dev
                </span>
              </ScrollLink>
            </motion.div>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`relative text-sm font-medium transition-colors cursor-pointer hover:text-primary ${
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
                onSetActive={() => setActiveSection(item.href)}
              >
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
