import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-stone-700 relative overflow-hidden">

      {/* Summer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-100/80"></div>

      {/* Soft glow effects */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200/40 blur-3xl rounded-full"></div>

      {/* Content */}
      <motion.div
        className="relative text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi, I'm <span className="text-amber-600">Udita Singh</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-medium mb-4 text-stone-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Full-Stack Developer | Machine Learning Enthusiast
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6 text-stone-500 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Building scalable web applications with React, Node.js, and MongoDB. 
          Passionate about creating impactful solutions with modern technologies.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-amber-200/50 hover:bg-amber-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-amber-400/60 font-semibold rounded-xl text-stone-700 hover:bg-amber-50 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
