import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full bg-black/70 backdrop-blur-md p-4 flex justify-between items-center z-50 border-b border-gray-800"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold text-blue-400">Udita Singh</div>
      <div className="space-x-6 text-gray-300">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
