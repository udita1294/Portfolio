import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Select Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL"],
    },
    {
      title: "Frontend Engineering",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
    },
    {
      title: "Backend Architecture",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Microservices"],
    },
    {
      title: "Data & ML",
      skills: ["MongoDB", "PostgreSQL", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS (Certified Practitioner)", "Docker", "CI/CD", "Git/GitHub", "Vercel"],
    },
    {
      title: "Tools & Workflow",
      skills: ["VS Code", "Postman", "Figma", "Jira", "Agile Methodologies"],
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-stone-50 overflow-hidden">
      
      <div className="relative mx-auto max-w-6xl px-6 z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Proficiency
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl bg-white border border-stone-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-stone-800 font-playfair group-hover:text-amber-700 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md bg-stone-50 border border-stone-100 text-sm font-medium text-stone-600 group-hover:bg-amber-50 group-hover:text-amber-900 group-hover:border-amber-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
