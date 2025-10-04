import { motion } from 'framer-motion';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <a href={project.link}>
            <img src={project.image} alt={project.name} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p></a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
