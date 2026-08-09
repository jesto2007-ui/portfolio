import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const internships = [
  {
    title: "Data Analyst Intern",
    company: "Trios Technology Pvt. Ltd.",
    points: [
      "Python-based data analysis",
      "Data preprocessing and real-world datasets",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Zuntra Digitals Pvt. Ltd.",
    points: [
      "Developed BookieReserve project",
      "Frontend, backend APIs, database, and UI/UX",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "ZYVOXA Pvt. Ltd.",
    points: [
      "Developed a POS system for Clints",
      "Frontend, database,and analytics dashboard",
    ],
  },
  {
    title: "Image Model Developer Intern",
    company: "Technonauts Pvt. Ltd.",
    points: [
      "Propoused a model for Underwater Image Enhancement",
      "Image preprocessing, model training, and evaluation",
    ],
  },
];

const InternshipSection = () => {
  return (
    <section id="internship" className="relative py-24 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title mb-2">
            INTERNSHIP <span className="text-primary">EXPERIENCE</span>
          </h2>
          <div className="red-accent-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative border-l-4 border-primary pl-8 py-4"
            >
              <div className="absolute -left-3 top-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">
                {internship.title}
              </h3>
              <p className="text-primary font-body font-medium mb-4">
                {internship.company}
              </p>
              
              <ul className="space-y-2 text-muted-foreground font-body">
                {internship.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
