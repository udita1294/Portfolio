import { motion } from 'framer-motion';
import { FaAward, FaTrophy } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: <FaAward className="text-2xl" />
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      icon: <FaAward className="text-2xl" />
    },
    {
      title: "Full Stack Web Development Internship",
      issuer: "Microsoft Learn Student Ambassadors, KIET",
      icon: <FaAward className="text-2xl" />
    }
  ];

  const achievements = [
    {
      title: "Departmental Winner",
      event: "Innotech Technical Event",
      location: "KIET Ghaziabad",
      icon: <FaTrophy className="text-2xl" />
    },
    {
      title: "Participant",
      event: "NexGen Hacks Hackathon",
      location: "RKGIT Ghaziabad",
      icon: <FaTrophy className="text-2xl" />
    }
  ];

  return (
    <section id="certifications" className="relative py-24 bg-amber-50/50">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Certifications */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-stone-800 text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center">Certifications & Courses</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl border border-amber-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-amber-100/50 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-xl bg-amber-100 border border-amber-200/80 flex items-center justify-center text-amber-600 mx-auto mb-4">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-stone-800 mb-2">{cert.title}</h4>
                <p className="text-stone-500 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center">Achievements & Extracurricular Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl border border-amber-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-amber-100/50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-yellow-100 border border-yellow-200/80 flex items-center justify-center text-amber-600">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-stone-800 mb-1">{achievement.title}</h4>
                    <p className="text-amber-700 font-semibold mb-1">{achievement.event}</p>
                    <p className="text-stone-500 text-sm">{achievement.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
