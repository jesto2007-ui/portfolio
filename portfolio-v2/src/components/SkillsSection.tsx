import { motion } from "framer-motion";
import {
  Atom,
  Server,
  Route,
  Database,
  Braces,
  FileCode2,
  Palette,
  Terminal,
  Table2,
  GitBranch,
  Github,
  Code2,
  Send,
  ScanEye,
  BrainCircuit,
  Sigma,
  LineChart,
} from "lucide-react";

const techStack = [
  { name: "React.js", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Route },
  { name: "MongoDB", icon: Database },
  { name: "JavaScript", icon: Braces },
  { name: "HTML5", icon: FileCode2 },
  { name: "CSS3", icon: Palette },
  { name: "Python", icon: Terminal },
  { name: "NumPy / Pandas", icon: Table2 },
  { name: "Scikit-learn", icon: Sigma },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Computer Vision", icon: ScanEye },
  { name: "Data Analysis", icon: LineChart },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "VS Code", icon: Code2 },
  { name: "Postman", icon: Send },
];

const skills = [
  "HTML, CSS, JavaScript",
  "Python, NumPy, Pandas",
  "React.js",
  "MongoDB",
  "Data Analysis & Visualization",
  "Machine Learning & Computer Vision",
];

const tools = ["Visual Studio Code", "Git & GitHub", "Postman"];

const approach = [
  "Clean and scalable architecture",
  "User-centric UI/UX",
  "Cleaning and preprocessing data",
  "Data-driven problem solving",
  "Real-world application focus",
];

const MarqueeRow = ({
  items,
  reverse = false,
  duration = 32,
}: {
  items: typeof techStack;
  reverse?: boolean;
  duration?: number;
}) => (
  <div className="relative flex overflow-hidden group">
    <div
      className={`flex shrink-0 gap-4 py-2 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } group-hover:[animation-play-state:paused]`}
      style={{ animationDuration: `${duration}s` }}
    >
      {[...items, ...items].map((tech, i) => {
        const Icon = tech.icon;
        return (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-lg whitespace-nowrap hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
          >
            <Icon className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-foreground">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[hsl(0_0%_98%)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title mb-2 text-[hsl(0_0%_8%)]">
            TECH <span className="text-primary">STACK</span>
          </h2>
          <div className="red-accent-line" />
        </motion.div>
      </div>

      {/* Infinite marquee of tech icons */}
      <div className="space-y-4 mb-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <MarqueeRow items={techStack.slice(0, 9)} duration={30} />
        <MarqueeRow items={techStack.slice(8)} reverse duration={34} />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="bg-primary p-8 text-primary-foreground"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              SKILLS
            </h3>
            <ul className="space-y-3 font-body">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[hsl(0_0%_8%)] p-8 text-foreground"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              TOOLS
            </h3>
            <ul className="space-y-3 font-body text-[hsl(0_0%_70%)]">
              {tools.map((tool, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Approach Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-primary p-8 text-primary-foreground"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              APPROACH TO BUILD
            </h3>
            <ul className="space-y-3 font-body">
              {approach.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
