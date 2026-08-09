import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import ProfilePhoto from "@/components/ProfilePhoto";

const stats = [
  { value: 8, suffix: "", decimals: 0, label: "Projects Built" },
  { value: 4, suffix: "", decimals: 0, label: "Internships" },
  { value: 8.33, suffix: "", decimals: 2, label: "CGPA" },
  { value: 5, suffix: "+", decimals: 0, label: "Achievements" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-20">
      {/* Torn paper top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 torn-paper-bottom z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="section-title mb-2">
                ABOUT <span className="text-primary">ME</span>
              </h2>
              <div className="red-accent-line" />
            </div>
            
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                I am a Computer Science Engineering undergraduate specializing in MERN Full Stack Development and Data Science & Analytics. I build scalable web applications and intelligent systems that combine strong backend architecture with clean, user-focused design.
              </p>
              <p>
                With industry internship experience, I have worked on real-world projects involving web platforms, machine learning models, NLP-based systems, and computer vision applications. I enjoy solving complex problems, learning new technologies, and creating solutions that are both functional and visually impactful.
              </p>
              <p>
                I am currently seeking internship or entry-level opportunities where I can contribute, learn, and grow as a full stack and data-driven professional.
              </p>
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-primary pl-4"
                >
                  <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
                    <CountUp
                      end={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground font-body uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - full profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <ProfilePhoto />

            <div className="bg-primary p-6 md:p-8 relative mt-6">
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-foreground hidden md:block" />
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground mb-2">
                CREATIVE DEVELOPER
              </h3>
              <p className="text-primary-foreground/90 font-body text-sm md:text-base">
                Specializing in Full Stack Development, Data Science, and Intelligent Systems
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Torn paper bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 torn-paper-top z-10" />
    </section>
  );
};

export default AboutSection;
