import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Strength {
  title: string;
  description: string;
}

interface AboutSectionProps {
  title?: string;
  bio?: string;
  strengths?: Strength[];
}

export default function AboutSection({
  title = "ABOUT",
  bio = "I'm a creative technologist who thrives at the intersection of design and engineering. With a background in competitive programming and a passion for building beautiful, functional products, I bring both technical rigor and creative vision to every project. My approach combines analytical problem-solving with user-centered design thinking.",
  strengths = [
    {
      title: "Competitive Programming",
      description: "Expert-level problem solver with strong algorithmic thinking and optimization skills. Active on Codeforces and LeetCode."
    },
    {
      title: "Creative Technology",
      description: "Bridging the gap between design and development. Proficient in modern frameworks, design tools, and creative coding."
    },
    {
      title: "Entrepreneurial Mindset",
      description: "Product-focused approach with experience in building MVPs, user research, and iterative development cycles."
    },
    {
      title: "Learning Consistency",
      description: "Committed to continuous growth. Daily practice in coding, design, and exploring emerging technologies."
    }
  ]
}: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen px-6 py-32 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-20 tracking-tighter text-white"
        >
          {title}
        </motion.h2>

        {/* Editorial Layout */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-white/30 pl-6">
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                {bio}
              </p>
            </div>
          </motion.div>

          {/* Strengths Table */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="border-b border-white/10 pb-6 last:border-0"
              >
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">
                  {strength.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <blockquote className="text-3xl md:text-5xl font-light text-white/60 italic max-w-4xl mx-auto">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>
          <p className="text-white/40 mt-4 text-sm tracking-widest">— STEVE JOBS</p>
        </motion.div>
      </div>
    </section>
  );
}