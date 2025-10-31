import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
}

interface ProjectGalleryProps {
  title?: string;
  projects?: Project[];
}

export default function ProjectGallery({
  title = "FEATURED PROJECTS",
  projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory management",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tools: ["React", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      category: "Web Development"
    },
    {
      title: "AI Image Generator",
      description: "Machine learning model for creative image synthesis",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tools: ["Python", "TensorFlow", "FastAPI"],
      githubUrl: "https://github.com",
      category: "Machine Learning"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking with social features",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      tools: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com",
      category: "Mobile"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics platform for business intelligence",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tools: ["D3.js", "React", "Express"],
      githubUrl: "https://github.com",
      category: "Data Science"
    }
  ]
}: ProjectGalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen px-6 py-32 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-center mb-20 tracking-tighter text-white"
        >
          {title}
        </motion.h2>

        {/* Projects Grid - Collage Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => {
            // Create varied grid layouts for collage effect
            const gridClass = [
              "lg:col-span-7 lg:row-span-2",
              "lg:col-span-5 lg:row-span-1",
              "lg:col-span-5 lg:row-span-1",
              "lg:col-span-7 lg:row-span-2"
            ][index % 4];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative overflow-hidden border border-white/10 ${gridClass}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>

                {/* Category Label */}
                {project.category && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs tracking-[0.2em] text-white/80 uppercase border border-white/30 px-3 py-1 bg-black/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 bg-white/10 text-white/90 border border-white/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white hover:text-white/70 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white hover:text-white/70 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}