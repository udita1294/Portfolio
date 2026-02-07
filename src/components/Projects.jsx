import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-white/60">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-stone-800 text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl bg-white border border-stone-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 will-change-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" 
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-stone-800 text-xs font-bold shadow-sm border border-stone-200">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-playfair font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">{project.name}</h3>
                <p className="text-amber-700 font-medium mb-4 text-sm tracking-wide uppercase">{project.subtitle}</p>
                <p className="text-stone-600 mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-stone-100 text-xs font-medium text-stone-600 border border-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                   <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone-800 font-semibold hover:text-amber-700 transition-colors group/link"
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
