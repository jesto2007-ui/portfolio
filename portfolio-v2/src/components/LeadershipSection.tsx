import { motion } from "framer-motion";
import { Award, Users, GraduationCap } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Leadership & Activities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title mb-2 text-3xl md:text-4xl">
              LEADERSHIP <span className="text-primary">&</span> ACTIVITIES
            </h2>
            <div className="red-accent-line mb-8" />
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold">Event Coordinator</h3>
                  <p className="text-muted-foreground font-body"> ALL Symposium</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold">Working On Projects</h3>
                  <p className="text-muted-foreground font-body">Computer Vision and Image Enhancement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold">Participating Hackathon</h3>
                  <p className="text-muted-foreground font-body">Software Engineering Challenge</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold">Volunteer</h3>
                  <p className="text-muted-foreground font-body">CSE Symposium</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="section-title mb-2 text-3xl md:text-4xl">
              <span className="text-primary">ACHIEVEMENTS</span>
            </h2>
            <div className="red-accent-line mb-8" />
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-glow-pulse">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold">Patent Published</h3>
                <p className="text-muted-foreground font-body">GAN-AUGMENTED ATTENTION FOR REAL-TIME UNDERWATER MINE AND ANOMALY DETECTION (JUNE/2026)</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-glow-pulse">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold">Top 8 Selected Team</h3>
                <p className="text-muted-foreground font-body">MSME Project (2025)</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-glow-pulse">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold">Google Gemini Student Ambassador</h3>
                <p className="text-muted-foreground font-body">GSA (2026)</p>
              </div>
            </div>
                 <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-glow-pulse">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold">Internshala Student Partner</h3>
                <p className="text-muted-foreground font-body">ISP (2026)</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-glow-pulse">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold">GirlScript Summer of Code Ambassador</h3>
                <p className="text-muted-foreground font-body">GSSoC (2025)</p>
              </div>
            </div>
            
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="section-title mb-2 text-3xl md:text-4xl">
            EDUCATION
          </h2>
          <div className="red-accent-line mb-8" />
          
          <div className="bg-card border border-border p-8 rounded-lg flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">
                Bachelor of Engineering – Computer Science Engineering
              </h3>
              <p className="text-primary font-body font-medium mb-2">
                St. Joseph's Institute of Technology, Chennai
              </p>
              <p className="text-muted-foreground font-body">
                CGPA: <span className="text-foreground font-semibold">8.33</span>
              </p>
            </div>
          </div>
           <div className="bg-card border border-border p-8 rounded-lg flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">
               Schooling - Higher Secondary Education
              </h3>
              <p className="text-primary font-body font-medium mb-2">
                Montfort.Matric.Higher.Secondary.School , Chennai
              </p>
               <p className="text-muted-foreground font-body">
                Percentage: <span className="text-foreground font-semibold">76%</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
