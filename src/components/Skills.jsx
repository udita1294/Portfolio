import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "C++", "C", "Python"],
      color: "blue"
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "indigo"
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "RESTful APIs", "TypeScript", "FastAPI"],
      color: "purple"
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Classification", "Regression", "Model Selection", "Hyperparameter Tuning"],
      color: "pink"
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose ODM", "Oracle", "MySQL"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      skills: ["VS Code", "Postman", "Multer", "JWT Authentication", "Clerk Authentication"],
      color: "yellow"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Certified Cloud Practitioner)", "Git", "GitHub", "Vercel", "Render"],
      color: "orange"
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "Authentication & Authorization", "Role-Based Access Control"],
      color: "cyan"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
    indigo: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-400",
    purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
    pink: "from-pink-500/20 to-pink-600/10 border-pink-500/30 text-pink-400",
    green: "from-green-500/20 to-green-600/10 border-green-500/30 text-green-400",
    yellow: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-400",
    orange: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400",
    cyan: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400"
  };

  return (
    <section id="skills" className="relative py-24 bg-neutral-900">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl border bg-gradient-to-br ${colorClasses[category.color]} backdrop-blur-md p-6 shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)]`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm"
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
