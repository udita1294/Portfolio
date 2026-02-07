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
              className="group relative rounded-2xl border border-amber-200/60 bg-white/80 backdrop-blur-sm overflow-hidden shadow-lg shadow-amber-100/50 hover:border-amber-400/60 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-lg bg-amber-700/95 backdrop-blur-sm text-white text-sm font-semibold shadow-md">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-800 mb-2">{project.name}</h3>
                <p className="text-amber-800 font-semibold mb-3">{project.subtitle}</p>
                <p className="text-stone-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-amber-100/80 border border-amber-200/60 text-xs text-stone-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-stone-500 flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold transition-colors shadow-md shadow-amber-200/40"
                >
                  <span>View Project</span>
                  <FaExternalLinkAlt className="text-sm" />
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
