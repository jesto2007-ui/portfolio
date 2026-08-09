import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const ProfilePhoto = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="relative mx-auto w-full max-w-sm" style={{ perspective: 1000 }}>
      {/* Glow behind the frame */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-3 bg-primary/30 blur-2xl rounded-2xl"
        aria-hidden="true"
      />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border-2 border-primary overflow-hidden shadow-[var(--shadow-card)] animate-border-glow"
      >
        {/* Full, uncropped photo */}
        <img
          src={profilePhoto}
          alt="Jeston Abraham"
          className="w-full h-auto aspect-[4/5] object-cover object-center"
        />

        {/* Corner accents */}
        <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary-foreground/80" />
        <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary-foreground/80" />

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
          <p className="font-heading font-bold text-white text-sm md:text-base tracking-wide">
            JESTON ABRAHAM D
          </p>
          <p className="text-white/70 text-xs font-body">
            CSE Undergraduate · Full Stack &amp; Data Science
          </p>
        </div>
      </motion.div>

      {/* Floating accent square */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-4 w-10 h-10 bg-primary rounded-md"
      />
    </div>
  );
};

export default ProfilePhoto;
