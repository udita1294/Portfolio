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
          className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: bio card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-stone-800 mb-6 font-playfair">
               From Logic to <span className="text-amber-700 italic">Creation</span>
            </h3>
            <p className="text-lg leading-relaxed text-stone-600 mb-6">
              I'm a <span className="text-amber-800 font-semibold">Full-Stack Developer</span> and 
              <span className="text-amber-800 font-semibold"> Machine Learning Enthusiast</span> pursuing 
              my Bachelor's in Computer Science at KIET Group of Institutions. My journey is driven by a curiosity to solve complex problems through elegant code.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-8">
              I specialize in the <span className="font-medium text-stone-800">MERN stack</span> and cloud technologies. Whether it's architecting a scalable backend or fine-tuning a neural network, I thrive on the challenge of building software that matters.
            </p>

            {/* badges */}
            <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">Tech Arsenal</h4>
            <div className="flex flex-wrap gap-2 mb-10">
              {["React.js", "Node.js", "MongoDB", "Express.js", "Python", "Machine Learning", "AWS", "TypeScript"].map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-200 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-stone-900 px-6 py-3 font-medium text-white hover:bg-amber-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-6 py-3 font-medium text-stone-700 hover:bg-stone-50 transition-all hover:border-stone-400"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right: visual card / photo placeholder */}
          <motion.div
            className="relative pl-6 md:pl-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src={profile_img} alt="Udita Singh" className="w-full h-auto object-cover" />
               <div className="absolute inset-0 bg-stone-900/10 hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-4 right-4 -bottom-4 -left-4 bg-amber-100 rounded-2xl -z-10 -rotate-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
