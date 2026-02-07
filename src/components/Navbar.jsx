import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-stone-200/50 py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-10 h-10 bg-amber-900 text-amber-50 rounded-xl flex items-center justify-center font-playfair font-bold text-xl group-hover:bg-amber-800 transition-colors">U.</span>
          <span className="font-playfair font-bold text-stone-800 text-lg hidden sm:block">Udita Singh</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="relative text-stone-600 hover:text-stone-900 font-medium text-sm transition-colors py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1D-2HsjBosTw0uB1HFUXyM0BgPTyLpCVk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 bg-stone-900 text-white font-medium rounded-lg text-sm hover:bg-amber-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-stone-800 p-2"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-stone-100"
        >
          <div className="flex flex-col p-6 gap-4">
             {links.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-600 font-medium hover:text-amber-800"
              >
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" className="text-center py-3 bg-stone-900 text-white rounded-lg font-medium">
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
