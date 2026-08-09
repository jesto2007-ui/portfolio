import { useEffect, useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "MERN Full Stack Developer",
  "Data Science & Analytics Professional",
  "Computer Vision Enthusiast",
  "Machine Learning Practitioner",
];

const MagneticButton = ({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
  target?: string;
  rel?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className={`magnetic-btn ${className}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      {children}
    </a>
  );
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full animate-pulse" />

      {/* Red accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 w-full h-1 bg-primary origin-left"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground font-body text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-4"
        >
          JESTON ABRAHAM D
        </motion.h1>

        {/* Cycling subtitle */}
        <div className="h-10 md:h-14 lg:h-16 mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="text-lg md:text-xl lg:text-2xl text-primary font-body font-medium max-w-3xl"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton href="#projects" className="btn-primary">
            View Work
          </MagneticButton>
          <MagneticButton
            href="/Jeston_Abraham_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume
          </MagneticButton>
          <MagneticButton href="#contact" className="btn-outline">
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      {/* Red diagonal accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-0 top-0 w-2 h-1/2 bg-primary origin-top hidden lg:block"
      />

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs uppercase tracking-widest font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
