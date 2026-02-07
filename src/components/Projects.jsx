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
              className="group relative rounded-2xl border border-stone-200 bg-white/50 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-800 text-xs font-bold shadow-sm uppercase tracking-wider">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-playfair font-bold text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">{project.name}</h3>
                <p className="text-amber-700 font-medium mb-4 text-sm uppercase tracking-wide">{project.subtitle}</p>
                <p className="text-stone-600 mb-6 leading-relaxed font-light">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600 group-hover:bg-amber-50 group-hover:border-amber-100 group-hover:text-amber-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6 pt-4 border-t border-stone-100">
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-stone-500 flex items-start gap-2">
                        <span className="text-amber-500 mt-1.5 text-[10px]">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/link text-amber-800 font-semibold hover:text-amber-600 transition-colors"
                >
                  <span className="border-b border-transparent group-hover/link:border-amber-600 transition-all">View Project</span>
                  <FaExternalLinkAlt className="text-xs transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
