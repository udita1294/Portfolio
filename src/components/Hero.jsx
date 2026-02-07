import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Hero = () => {
  const socialLinks = [
    { href: 'https://github.com/udita1294', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/udita-singh1294', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:udita1294@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-stone-800 relative overflow-hidden pt-20">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-amber-50/30 to-white" />

      {/* Subtle organic shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-200/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      {/* Content */}
      <motion.div
        className="relative text-center px-6 max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className="inline-block py-1 px-3 rounded-full bg-amber-100/50 border border-amber-200/50 text-amber-900 text-sm font-medium tracking-wider uppercase mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-playfair font-bold mb-6 text-stone-900 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Udita <span className="text-amber-800/90 italic">Singh</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crafting digital experiences with <span className="font-semibold text-amber-900">Code</span> & <span className="font-semibold text-amber-900">Creativity</span>.
          <br className="hidden md:block" /> Full-Stack Developer & CS Undergrad.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {socialLinks.map(({ href, icon: Icon, label }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="w-14 h-14 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-amber-800 hover:border-amber-300 hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            >
              <Icon className="text-2xl group-hover:-rotate-12 transition-transform duration-300" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 hover:text-amber-800 transition p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, repeatType: "loop" }}
        aria-label="Scroll to content"
      >
        <HiOutlineChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default Hero;
