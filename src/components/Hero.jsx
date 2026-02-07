import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { useRef } from 'react';

const Hero = () => {
  const socialLinks = [
    { href: 'https://github.com/udita1294', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/udita-singh1294', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:udita1294@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center text-stone-800 relative overflow-hidden pt-20">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-stone-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,53,15,0.1),rgba(255,255,255,0)_50%)]" />
        
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px]" 
        />
        <motion.div
           animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 1 }}
           className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-rose-200/20 rounded-full blur-[80px]"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative text-center px-6 max-w-5xl mx-auto z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <span className="py-2 px-4 rounded-full bg-white/40 backdrop-blur-md border border-stone-200 text-stone-600 text-sm font-medium tracking-wide shadow-sm mb-8 inline-block hover:scale-105 transition-transform cursor-default">
            👋 Hello, I'm
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-9xl font-playfair font-bold mb-8 text-stone-900 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Udita <span className="relative inline-block text-amber-900/90 italic">
            Singh
            <motion.svg
               className="absolute w-full h-3 -bottom-1 left-0 text-amber-300/60 -z-10"
               viewBox="0 0 100 10"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1, delay: 1 }}
            >
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
            </motion.svg>
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting digital experiences with <span className="font-semibold text-stone-800">Code</span> & <span className="font-semibold text-stone-800">Creativity</span>. 
          <span className="block mt-2 text-stone-500 text-lg">Full-Stack Developer & CS Undergrad.</span>
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {socialLinks.map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-100 flex items-center justify-center text-stone-600 shadow-sm hover:text-amber-700 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-amber-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Icon className="text-2xl relative z-10" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-amber-800 transition group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
             <HiOutlineChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
