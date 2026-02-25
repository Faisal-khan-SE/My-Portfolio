import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';

export default function Education() {
  const experiences = [
    {
      title: 'FAST NUCES CFD',
      degree: 'Bachelor of Science in Software Engineering',
      period: '2024 - Present (4th Semester)',
      stats: 'CGPA: Academic Excellence',
      year: '2024-2028',
      icon: GraduationCap,
      link: 'https://cfd.nu.edu.pk/',
      current: true
    },
    {
      title: 'Aspire Group of Colleges',
      degree: 'Intermediate in Computer Science (ICS)',
      period: 'Graduated 2024',
      stats: '88.83%',
      year: '2022-2024',
      icon: Award,
      link: 'https://aspirecolleges.edu.pk/',
      current: false
    }
  ];

  return (
    <section id="education" className="py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-indigo-500" />
            <span className="text-indigo-400 font-display font-bold tracking-widest text-[10px] uppercase">QUALIFICATIONS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            Academic <span className="text-slate-500">Journey.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent opacity-20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-5 md:top-auto w-10 h-10 rounded-full glass-card border-white/20 flex items-center justify-center z-10">
                  <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-cyan-400 animate-ping' : 'bg-slate-500'}`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0`}>
                  <div className={`group glass-card p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden ${exp.current ? 'shadow-cyan-500/5' : ''
                    }`}>
                    {exp.current && (
                      <div className="absolute top-0 right-0 p-4">
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-slate-950/50 rounded-xl border border-white/5 text-cyan-400">
                        <exp.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-display font-bold text-slate-500 tracking-widest uppercase">
                          {exp.period}
                        </span>
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors cursor-pointer block"
                          >
                            <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {exp.title}
                            </h3>
                          </a>
                        ) : (
                          <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm mb-6 leading-relaxed font-sans">
                      {exp.degree}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-indigo-400" />
                        <span className="text-[10px] font-display font-bold text-white/70 uppercase tracking-widest">
                          {exp.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date for Desktop (Ghost label) */}
                <div className={`hidden md:block w-[45%] text-slate-700 font-display font-black text-6xl opacity-10 select-none ${index % 2 === 0 ? 'text-left' : 'text-right'
                  }`}>
                  {exp.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
