import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full bg-white/90 backdrop-blur-md px-6 py-4 flex justify-between items-center z-50 border-b border-stone-200/80 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#" className="text-xl font-bold text-amber-800 tracking-tight">U.S.</a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-stone-600 hover:text-amber-700 transition font-medium">About</a>
        <a href="#skills" className="text-stone-600 hover:text-amber-700 transition font-medium">Skills</a>
        <a href="#projects" className="text-stone-600 hover:text-amber-700 transition font-medium">Projects</a>
        <a href="#education" className="text-stone-600 hover:text-amber-700 transition font-medium">Education</a>
        <a href="#contact" className="text-stone-600 hover:text-amber-700 transition font-medium">Contact</a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-5 py-2.5 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition shadow-md"
        >
          Resume
        </a>
      </div>
      <div className="md:hidden flex items-center gap-3">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-700 text-white font-semibold rounded-lg text-sm">
          Resume
        </a>
        <a href="#contact" className="text-stone-600 hover:text-amber-700 transition font-medium">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
