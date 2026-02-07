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
    blue: "from-amber-100 to-orange-100 border-amber-200/80 text-amber-900",
    indigo: "from-orange-100 to-amber-100 border-orange-200/80 text-orange-900",
    purple: "from-rose-100 to-amber-100 border-rose-200/80 text-rose-900",
    pink: "from-pink-100 to-amber-100 border-pink-200/80 text-pink-900",
    green: "from-stone-100 to-amber-50 border-stone-200/80 text-stone-800",
    yellow: "from-yellow-100 to-amber-100 border-yellow-200/80 text-amber-900",
    orange: "from-orange-100 to-amber-100 border-orange-200/80 text-orange-900",
    cyan: "from-orange-50 to-amber-50 border-orange-200/80 text-amber-900"
  };

  return (
    <section id="skills" className="relative py-24 bg-amber-50/50">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-stone-800 text-center mb-14"
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
              className={`relative rounded-2xl border bg-gradient-to-br ${colorClasses[category.color]} backdrop-blur-sm p-6 shadow-lg shadow-amber-100/50`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-stone-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/80 border border-amber-200/60 text-sm font-medium text-stone-700 shadow-sm"
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
