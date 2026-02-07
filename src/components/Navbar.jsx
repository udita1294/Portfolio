import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full bg-white/80 backdrop-blur-md p-4 flex justify-between items-center z-50 border-b border-amber-200/80 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold text-amber-600">Udita Singh</div>
      <div className="hidden md:flex space-x-6 text-stone-600">
        <a href="#about" className="hover:text-amber-600 transition">About</a>
        <a href="#skills" className="hover:text-amber-600 transition">Skills</a>
        <a href="#projects" className="hover:text-amber-600 transition">Projects</a>
        <a href="#education" className="hover:text-amber-600 transition">Education</a>
        <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
      </div>
      <div className="md:hidden text-stone-600">
        <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
