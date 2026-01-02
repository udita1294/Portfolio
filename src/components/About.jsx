import { motion } from 'framer-motion';
import profile_img from '../assets/profile_img.jpeg';

const badge = "px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-neutral-950">
      {/* soft spotlights */}
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
          About Me
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 items-stretch">
          {/* Left: bio card */}
          <motion.div
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-8 text-gray-300">
              I’m a <span className="text-blue-400 font-semibold">Full-Stack Developer</span> specializing in
              <span className="text-blue-400 font-semibold"> React, Node.js, and MongoDB</span>. I build scalable,
              responsive, and clean web apps with a strong focus on user experience.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              I love problem-solving, crafting thoughtful UI, and writing efficient, maintainable code. I’m
              actively looking for opportunities to contribute to impactful products and grow with a great team.
            </p>


            {/* badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className={badge}>React</span>
              <span className={badge}>Node.js</span>
              <span className={badge}>MongoDB</span>
              <span className={badge}>Express</span>
              <span className={badge}>Tailwind</span>
              
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-blue-500 bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-500 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 font-semibold text-gray-200 hover:bg-white hover:text-black transition"
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
            {/* glow outline */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-25 blur-xl" />
            <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6">
              <div className="flex h-72 md:h-full items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.25),transparent_45%)]">
                <img src={profile_img} alt="" srcset="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
