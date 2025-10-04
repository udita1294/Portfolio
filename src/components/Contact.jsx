import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-neutral-950 text-gray-300">
      {/* Spotlights / Accent background */}
      <div className="pointer-events-none absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          className="bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)] space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition">
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-10 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/udita1294" className="hover:text-blue-400 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/udita-singh1294" className="hover:text-blue-400 transition"><FaLinkedin /></a>
          <a href="mailto:udita1294@gmail.com" className="hover:text-blue-400 transition"><FaEnvelope /></a>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
