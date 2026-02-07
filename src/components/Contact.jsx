import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-white/60 text-stone-600">
      {/* Spotlights / Accent background */}
      <div className="pointer-events-none absolute -top-20 left-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-stone-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          className="bg-white/80 border border-amber-200/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg shadow-amber-100/50 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-amber-50/80 border border-amber-200/60 rounded-xl px-4 py-3 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-amber-50/80 border border-amber-200/60 rounded-xl px-4 py-3 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50"
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-amber-50/80 border border-amber-200/60 rounded-xl px-4 py-3 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50"
            ></textarea>
          </div>

          <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-xl transition shadow-md shadow-amber-200/40">
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-10 text-2xl text-stone-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/udita1294" className="hover:text-amber-700 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/udita-singh1294" className="hover:text-amber-700 transition"><FaLinkedin /></a>
          <a href="mailto:udita1294@gmail.com" className="hover:text-amber-700 transition"><FaEnvelope /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
