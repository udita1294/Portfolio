import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-stone-900 text-stone-400 py-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <a href="#" className="flex items-center gap-2 mb-6 group">
          <span className="w-8 h-8 bg-stone-800 text-stone-200 rounded-lg flex items-center justify-center font-playfair font-bold text-lg group-hover:bg-amber-700 hover:text-white transition-all">U.</span>
        </a>

        <div className="flex gap-8 mb-8 text-sm font-medium tracking-wide">
          <a href="https://www.linkedin.com/in/udita-singh1294" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">LinkedIn</a>
          <a href="https://github.com/udita1294" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">GitHub</a>
          <a href="mailto:udita1294@gmail.com" className="hover:text-amber-500 transition-colors">Email</a>
          <a href="https://leetcode.com/u/udita_1294" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">LeetCode</a>
        </div>
        
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} Udita Singh. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
