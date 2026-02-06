import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">

      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* Glow effect */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

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
          Hi, I'm <span className="text-blue-400">Udita Singh</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-medium mb-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Full-Stack Developer | Machine Learning Enthusiast
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6 text-gray-400 max-w-2xl mx-auto"
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
            className="px-6 py-3 bg-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-gray-300 font-semibold rounded-lg hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
