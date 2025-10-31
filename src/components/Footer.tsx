import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, FileText, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  resumeUrl?: string;
  githubUrl?: string;
  codeforcesUrl?: string;
  linkedinUrl?: string;
  tagline?: string;
}

export default function Footer({
  resumeUrl = "#",
  githubUrl = "https://github.com/username",
  codeforcesUrl = "https://codeforces.com/profile/username",
  linkedinUrl = "https://linkedin.com/in/username",
  tagline = "Crafted with passion & precision"
}: FooterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 relative">
      <div className="max-w-6xl w-full text-center space-y-16">
        {/* Large Thank You Text */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-[8vw] md:text-[6rem] lg:text-[8rem] font-black leading-none tracking-tighter text-white"
        >
          THANKS FOR
          <br />
          VISITING
        </motion.h2>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
          >
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
          >
            <a href={codeforcesUrl} target="_blank" rel="noopener noreferrer">
              <Code2 className="w-5 h-5 mr-2" />
              Codeforces
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
          >
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
        </motion.div>

        {/* Signature Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-white/60 text-lg italic">{tagline}</p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-white/20"></div>
            <p className="text-white/40 text-sm tracking-[0.3em]">
              {new Date().getFullYear()}
            </p>
            <div className="h-px w-16 bg-white/20"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}