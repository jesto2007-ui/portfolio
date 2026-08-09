import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-heading font-bold text-2xl">
              JESTON<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground font-body text-sm mt-2">
              MERN Full Stack Developer | Data Science Professional
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:shadow-[var(--shadow-glow)] transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2025 Jeston Abraham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
