import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-4xl bg-white/70 backdrop-blur-xl border border-stone-200/50 rounded-full px-6 py-3 flex justify-between items-center z-50 shadow-lg shadow-stone-200/20"
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <a href="#" className="text-2xl font-bold font-playfair text-amber-800 tracking-tight mr-8">U.S.</a>
      
      <div className="hidden md:flex items-center gap-1">
        {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-amber-800 hover:bg-amber-50 rounded-full transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 ml-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-stone-800 text-amber-50 text-sm font-medium rounded-full hover:bg-stone-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Resume
        </a>
      </div>
      
      {/* Mobile Menu Icon Placeholder - simpler for now */}
      <div className="md:hidden ml-4">
         <a href="#contact" className="text-stone-600">Menu</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
