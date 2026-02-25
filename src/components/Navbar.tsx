import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import profileImg from '../profile.jpg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center justify-between px-4 py-2 rounded-full transition-all duration-500 glass-card max-w-4xl w-full ${scrolled ? 'translate-y-0 scale-100 shadow-cyan-500/10' : 'translate-y-2'
          }`}
      >
        <a href="#" className="flex items-center gap-3 group px-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-slate-800 flex-shrink-0">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover object-center aspect-square group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <span className="hidden sm:block font-display font-medium text-white tracking-tight uppercase text-xs">
            Muhammad Faisal
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-display font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-4"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 rounded-full bg-white text-slate-950 text-xs font-display font-bold hover:bg-cyan-400 hover:text-white transition-all shadow-xl shadow-white/5"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 p-6 glass-card rounded-3xl md:hidden z-40"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-medium text-slate-300 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-cyan-500 text-white font-bold"
              >
                CONTACT ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
