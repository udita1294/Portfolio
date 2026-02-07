import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-amber-100/80 border-t border-amber-200/60 text-stone-700 py-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-lg font-medium">© {new Date().getFullYear()} Udita Singh</p>
      <div className="mt-3 space-x-6">
        <a href="https://www.linkedin.com/in/udita-singh1294" className="hover:text-amber-600 transition">LinkedIn</a>
        <a href="https://github.com/udita1294" className="hover:text-amber-600">GitHub</a>
        <a href="mailto:udita1294@gmail.com" className="hover:text-amber-600 transition">Email</a>
        <a href="https://leetcode.com/u/udita_1294" className="hover:text-amber-600">LeetCode</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
