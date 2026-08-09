import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-20 bg-primary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border-8 border-primary-foreground/20 rotate-12" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-foreground/10 rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-4">
            LET'S <span className="relative inline-block">
              WORK
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary-foreground/30" />
            </span>
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground">
            TOGETHER
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background p-8 md:p-12 rounded-lg max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">
            CONTACT <span className="text-primary">ME</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:jesto2007@gmail.com" 
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-body font-medium">jesto2007@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:9841994149" 
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-body font-medium">9841994149</p>
              </div>
            </a>
            <a 
              href="https://github.com/jesto2007-ui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
              </div>
            </a>
             <a 
              href="https://www.linkedin.com/in/jeston-abraham-b07169341/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center border border-border">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-body font-medium">Chennai, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
