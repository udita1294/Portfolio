import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "All India Council for Technical Education (AICTE)",
      position: "Frontend Web Development Intern",
      location: "Remote",
      period: "Aug 2024 – Sep 2024",
      description: "Completed 6 week internship focused on React.js, HTML5, and modern frontend development practices",
      icon: <FaBriefcase className="text-2xl" />
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-neutral-950">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <p className="text-lg text-blue-400 font-semibold mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <span className="text-gray-500">📍</span>
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-gray-500">📅</span>
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
