import { motion, Variants } from 'motion/react';
import { Mail, Linkedin, ChevronDown, Github, Box } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="min-h-[100vh] flex flex-col justify-center relative px-6 sm:px-12 lg:px-24 pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            <h2 className="text-cyan-400 font-display font-semibold tracking-widest uppercase text-xs">
              SOFTWARE ENGINEERING STUDENT
            </h2>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-8xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tighter"
          >
            Muhammad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400 text-glow">
              Faisal.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-sans"
          >
            Crafting digital experiences at the intersection of <span className="text-white">C++</span>, <span className="text-white">Python</span>, and <span className="text-white">Modern Web</span>. Currently shaping the future at <span className="text-cyan-400 font-medium">FAST NUCES CFD</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-display font-bold text-xs tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET IN TOUCH <Mail className="w-4 h-4" />
              </span>
            </a>

            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-faisal-2189b8328?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { icon: Github, href: "https://github.com/Faisal-khan-SE" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] lg:h-[700px] w-full perspective-1000"
        >
          {/* 3D Model Platform */}
          <div className="absolute inset-x-0 bottom-20 h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl rounded-full scale-110 -z-10" />

          <div className="w-full h-full flex items-center justify-center p-8">
            <model-viewer
              src="/model.glb"
              alt="3D Portfolio Character Model"
              auto-rotate
              camera-controls
              touch-action="pan-y"
              shadow-intensity="2"
              exposure="1"
              environment-intensity="1.5"
              rotation-per-second="20deg"
              style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.1))' }}
            >
              <div slot="progress-bar" className="hidden"></div>
            </model-viewer>
          </div>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-display font-medium text-slate-500 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
