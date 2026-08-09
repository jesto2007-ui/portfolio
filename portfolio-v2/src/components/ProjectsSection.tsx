import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BookieReserve – Smart Booking Website",
    tech: "React, Node.js, Express.js, MongoDB",
    description: [
      "Full-stack booking platform developed during internship at Zuntra Digitals Pvt. Ltd.",
      "Secure authentication, booking workflows, admin dashboard",
      "REST API integration and responsive UI",
    ],
    featured: true,
    github: "https://github.com/jesto2007-ui/BookieReserve-final",
  },
  {
    title:"AquaThreat (Underwater Mine Detection)",
    tech: "Python, Computer Vision, Deep Learning",
    description: [
    "Detects and identifies underwater mines from underwater images",
    "Uses deep learning and computer vision techniques for underwater object detection",
    "Designed to improve underwater mine detection in challenging low-visibility environments",
    ],
    featured: false,
    github: "https://github.com/Rithikis14/AquaThreat",
  },
  {
    title: "Underwater Image Enhancement & Proposed Model",
    tech: "Python, Computer Vision, Deep Learning",
    description: [
    "Evaluated 7 underwater image enhancement models for improving image quality in challenging underwater environments",
    "Compared enhancement performance using metrics such as PSNR, SSIM, UIQM, and UCIQE",
    "Proposed a new enhancement approach to improve underwater visibility, color restoration, and image quality",
    ],
    featured: false,
    github: "https://github.com/jesto2007-ui/Under-Water-Object-Enhancement",
  },
  {
    title: "PDF Summarizing Bot (NLP + RAG)",
    tech: "Python, NLP, RAG",
    description: [
      "Summarizes uploaded PDF documents",
      "Enables document-based question answering",
      "Context-aware responses using retrieval augmented generation",
    ],
    featured: false,
    github: "https://github.com/jesto2007-ui/Intelligent-PDF-Knowledge-Bot-NLP-",
  },
    {
    title: "Point of Sale (POS) System",
    tech:  "React, Node.js, Express.js, MongoDB",
    description: [
     "Developed a point-of-sale system for managing products, sales, inventory, and transactions",
    "Built an analytics dashboard to visualize sales performance, revenue, and business insights",
    "Implemented real-time inventory tracking and management for efficient business operations",
    ],
    featured: false,
    github: "https://github.com/Rithikis14/POS_ZyVoxa",
  },
  {
    title: "Face Mask Detection",
    tech: "Python, OpenCV, Deep Learning",
    description: [
      "Computer vision-based face mask detection",
      "Real-time image and video classification",
    ],
    featured: false,
    github: "https://github.com/jesto2007-ui/-Face-Mask-Detection-Computer-vision-",
  },
  {
    title: "Heart Disease Prediction",
    tech: "Python, Machine Learning, Scikit-learn",
    description: [
      "Machine learning model using medical datasets",
      "Data preprocessing, model training, and evaluation",
    ],
    featured: false,
    github: "https://github.com/jesto2007-ui/Heart-Diseases-Prediction",
  },
  {
    title: "Calculator Application",
    tech: "HTML, CSS, JavaScript",
    description: [
      "Responsive calculator using HTML, CSS, and JavaScript",
    ],
    featured: false,
    github: "https://github.com/jesto2007-ui/calculator",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title mb-2">
            <span className="text-primary">PROJECTS</span>
          </h2>
          <div className="red-accent-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`card-dark group cursor-pointer block ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-heading font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-primary font-body text-sm mb-4">
                Tech: {project.tech}
              </p>
              
              <ul className="space-y-2 text-muted-foreground font-body">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
