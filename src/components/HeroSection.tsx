import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface HeroSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  photoUrl?: string;
  contacts?: {
    codeforces?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
  techTools?: string[];
  softSkills?: string[];
}

export default function HeroSection({
  name = "Your Name",
  title = "Creative Technologist",
  bio = "Building at the intersection of design, code, and innovation. Passionate about creating elegant solutions to complex problems.",
  photoUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  contacts = {
    codeforces: "https://codeforces.com/profile/username",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    email: "hello@example.com"
  },
  techTools = ["React", "TypeScript", "Node.js", "Python", "Figma", "Tailwind CSS"],
  softSkills = ["Problem Solving", "Creative Thinking", "Team Leadership", "Fast Learner"]
}: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 film-grain relative">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-6xl w-full space-y-16"
      >
        {/* Main Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-[12vw] md:text-[10rem] font-black text-center tracking-tighter leading-none text-white"
        >
          PORTFOLIO
        </motion.h1>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div variants={fadeInUp} className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full"></div>
              <img
                src={photoUrl}
                alt={name}
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/20"
              />
            </div>
          </motion.div>

          {/* Intro Box */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="border border-white/20 p-8 bg-[#1a1a1a]/50 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{name}</h2>
              <p className="text-xl text-white/60 mb-4">{title}</p>
              <p className="text-white/80 leading-relaxed">{bio}</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Icons Row */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-6">
          {contacts.codeforces && (
            <a
              href={contacts.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Code2 className="w-6 h-6 text-white" />
            </a>
          )}
          {contacts.github && (
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
          )}
          {contacts.linkedin && (
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          )}
          {contacts.email && (
            <a
              href={`mailto:${contacts.email}`}
              className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          )}
        </motion.div>

        {/* Tech Tools Grid */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h3 className="text-center text-sm tracking-[0.3em] text-white/60 uppercase">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techTools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="px-6 py-2 border border-white/20 bg-[#1a1a1a]/30 text-white/90 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Badges */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h3 className="text-center text-sm tracking-[0.3em] text-white/60 uppercase">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm border-white/30 text-white bg-transparent hover:bg-white/5">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}