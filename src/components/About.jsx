import { motion } from 'framer-motion';
import profile_img from '../assets/profile_img.jpeg';

const badge = "px-3 py-1 rounded-lg bg-amber-100 border border-amber-200/80 text-stone-600 text-sm";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white/60">
      {/* soft spotlights */}
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
          About Me
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 items-stretch">
          {/* Left: bio card */}
          <motion.div
            className="relative rounded-2xl border border-amber-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-amber-100/50"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-8 text-stone-600">
              I'm a <span className="text-amber-800 font-semibold">Full-Stack Developer</span> and 
              <span className="text-amber-800 font-semibold"> Machine Learning Enthusiast</span> currently pursuing 
              my Bachelor's in Computer Science at KIET Group of Institutions with a CGPA of 8.1/10.0. 
              I specialize in building scalable web applications using the MERN stack and have experience 
              integrating ML models into production applications.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              With hands-on experience in React.js, Node.js, MongoDB, and cloud technologies like AWS, 
              I've developed full-stack applications including a food redistribution platform with ML-powered 
              decision support. I'm passionate about creating impactful solutions that solve real-world problems 
              and am always eager to learn and grow with innovative teams.
            </p>

            {/* badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className={badge}>React.js</span>
              <span className={badge}>Node.js</span>
              <span className={badge}>MongoDB</span>
              <span className={badge}>Express.js</span>
              <span className={badge}>Python</span>
              <span className={badge}>Machine Learning</span>
              <span className={badge}>AWS</span>
              <span className={badge}>TypeScript</span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-amber-600 bg-amber-700 px-5 py-2.5 font-semibold text-white hover:bg-amber-800 transition shadow-md shadow-amber-200/40"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-amber-300 px-5 py-2.5 font-semibold text-stone-700 hover:bg-amber-50 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right: visual card / photo placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-300 to-orange-300 opacity-30 blur-xl" />
            <div className="relative h-full rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-lg shadow-amber-100/50">
              <div className="flex h-72 md:h-full items-center justify-center rounded-2xl overflow-hidden border border-amber-200/40 bg-amber-50/50">
                <img src={profile_img} alt="Udita Singh" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
