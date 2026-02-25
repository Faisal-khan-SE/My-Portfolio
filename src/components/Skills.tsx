import { motion } from 'motion/react';
import { Code2, Terminal, Monitor, Database, Cpu, Globe, Rocket, Zap, LucideIcon, Atom } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  level: string;
  span: string;
  color: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'C++', icon: Terminal, level: 'Advanced', span: 'md:col-span-2 md:row-span-2', color: 'from-blue-500/20 to-indigo-500/20', description: 'Expertise in OOP, memory management, and high-performance algorithms for system-level development.' },
  { name: 'Python', icon: Code2, level: 'Intermediate', span: 'md:col-span-1 md:row-span-1', color: 'from-yellow-500/10 to-green-500/10', description: 'Strong focus on scripting and logic implementation.' },
  { name: 'HTML/CSS', icon: Monitor, level: 'Advanced', span: 'md:col-span-1 md:row-span-2', color: 'from-pink-500/10 to-rose-500/10', description: 'Modern UI/UX with a focus on responsiveness and aesthetics.' },
  { name: 'JavaScript', icon: Globe, level: 'Intermediate', span: 'md:col-span-1 md:row-span-1', color: 'from-cyan-500/10 to-blue-500/10', description: 'Building interactive and dynamic web experiences.' },
  { name: 'React', icon: Atom, level: 'Intermediate', span: 'md:col-span-1 md:row-span-1', color: 'from-blue-400/10 to-cyan-400/10', description: 'Expertise in modern React (Hooks, Context, Performance) and building scalable SPAs.' },
  { name: 'Low Level', icon: Cpu, level: 'Intermediate', span: 'md:col-span-1 md:row-span-1', color: 'from-purple-500/10 to-indigo-500/10', description: 'Deep understanding of computer architecture.' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-400 font-display font-bold tracking-widest text-[10px] uppercase">EXPERT PERFORMANCE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            Technical <span className="text-slate-500">Arsenal.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-[2rem] border border-white/5 overflow-hidden glass-card p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-500 ${skill.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex justify-between items-start">
                <div className="p-4 bg-slate-950/50 rounded-2xl border border-white/5 text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-display font-bold text-slate-500 tracking-widest uppercase mb-1">STRENGTH</span>
                  <span className="text-xs font-display font-bold text-cyan-400">{skill.level}</span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transform transition-transform">
                  {skill.description}
                </p>
              </div>

              {/* Decorative background number */}
              <span className="absolute -bottom-4 -right-2 text-8xl font-display font-black text-white/5 pointer-events-none group-hover:text-cyan-500/10 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-cyan-500 p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:rotate-12 transition-transform">
              <Rocket className="w-20 h-20 text-white" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-950 leading-tight relative z-10">
              Always <br />Learning.
            </h3>
            <div className="flex items-center gap-2 relative z-10">
              <span className="text-[10px] font-display font-bold text-slate-950/70 tracking-widest uppercase">View More</span>
              <Zap className="w-3 h-3 text-slate-950" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
