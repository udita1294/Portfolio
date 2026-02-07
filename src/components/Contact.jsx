import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-white/60">
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p 
          className="text-stone-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </motion.p>

        <motion.div
          className="bg-white border border-stone-100 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
           className="flex justify-center gap-8 mt-16"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
        >
           {[
             { icon: FaGithub, href: "https://github.com/udita1294" },
             { icon: FaLinkedin, href: "https://www.linkedin.com/in/udita-singh1294" },
             { icon: FaEnvelope, href: "mailto:udita1294@gmail.com" }
           ].map((item, i) => (
             <a 
               key={i}
               href={item.href}
               target="_blank"
               rel="noopener noreferrer"
               className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-800 hover:scale-110 transition-all"
            >
              <item.icon className="text-xl" />
            </a>
           ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
