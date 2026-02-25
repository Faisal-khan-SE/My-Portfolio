import { motion } from 'motion/react';
import { Globe, Layout, Gamepad2, Shield, Plane, Library, ArrowUpRight, Users } from 'lucide-react';

const projects = [
  {
    title: 'University Management (Discrete Structures)',
    icon: Library,
    description: 'A logic-heavy framework for FAST University. Implements induction for prerequisite verification, set theory for enrollment rules, and equivalence relations for schedule validation.',
    tags: ['FAST NUCES', 'Discrete Math', 'Logic'],
    color: 'from-blue-600 to-indigo-600',
    iconColor: 'text-blue-400',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7399121502928916480/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK63jQB3VTSByikadBLQEPFT0h6NnOCRAU'
  },
  {
    title: 'SkyNet ATC Simulator',
    icon: Plane,
    description: 'A console-based Air Traffic Control simulator built in C++ without STL. Features custom implementations of Dijkstra\'s, Min-Heaps, and AVL Trees.',
    tags: ['C++', 'Data Structures', 'Algorithms'],
    color: 'from-indigo-500 to-purple-500',
    iconColor: 'text-indigo-400',
    link: 'https://github.com/Faisal-khan-SE/Data-Structure-Semester-Final-Project/tree/313bf67857bcf8f0aeb73accee281b2d098fa53d/Data%20Structure%20Semester%20Final%20Projects/3089-3098-3096_SkyNetProject'
  },
  {
    title: 'Stronghold Strategy',
    icon: Shield,
    description: 'A turn-based strategy game built on OOP principles. Features player management, resource allocation, and complex state management.',
    tags: ['C++', 'OOP', 'Game Logic'],
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-400',
    link: 'https://www.linkedin.com/posts/muhammad-faisal-2189b8328_m-ehtasham-title-stronghold-based-strategy-ugcPost-7328797442026389504-gFgc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK63jQB3VTSByikadBLQEPFT0h6NnOCRAU'
  },
  {
    title: 'Edu-Platform',
    icon: Globe,
    description: 'Responsive online education website with clean, interactive UI and smooth navigation.',
    tags: ['Web', 'React', 'Tailwind'],
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-400',
    link: 'https://www.linkedin.com/posts/muhammad-faisal-2189b8328_online-education-frontend-web-project-activity-7415556980448071680-uQyv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK63jQB3VTSByikadBLQEPFT0h6NnOCRAU'
  },
  {
    title: 'Tic Tac Toe Pro',
    icon: Gamepad2,
    description: 'Python implementation of the classic game with robust logic and minimax possibility.',
    tags: ['Python', 'Game Logic'],
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-400',
    link: 'https://www.linkedin.com/posts/muhammad-faisal-2189b8328_project-title-tic-tac-toe-game-python-activity-7385667580663070720-zcOp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK63jQB3VTSByikadBLQEPFT0h6NnOCRAU'
  },
  {
    title: 'Web Utilities',
    icon: Layout,
    description: 'Collection of modern web apps demonstrating logic and interactivity.',
    tags: ['JS', 'DOM', 'CSS'],
    color: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-400',
    link: 'https://www.linkedin.com/posts/muhammad-faisal-2189b8328_small-frontend-projects-html-css-javascript-ugcPost-7416300621290541056-sTVG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK63jQB3VTSByikadBLQEPFT0h6NnOCRAU'
  },
  {
    title: 'Brick Breaker (x86 Assembly)',
    icon: Gamepad2,
    description: 'A low-level implementation of the classic game. Built entirely in x86 Assembly, featuring direct video memory manipulation, hardware interrupt handling, and custom mechanics.',
    tags: ['Assembly', 'Low Level', 'Retro Gaming'],
    color: 'from-red-600 to-orange-600',
    iconColor: 'text-red-400',
    link: 'https://www.linkedin.com/posts/m-ehtasham-974494344_assemblyprogramming-gamedevelopment-lowlevelprogramming-activity-7401354144781164544-gy29?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK63jQB3VTSByikadBLQEPFT0h6NnOCRAU'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 sm:px-12 lg:px-24 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-400 font-display font-bold tracking-widest text-[10px] uppercase">SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
              Featured <span className="text-slate-500">Works.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 font-sans text-sm leading-relaxed">
            A collection of technical challenges and creative solutions across system design, game development, and web architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target={project.link === '#' ? undefined : "_blank"}
              rel={project.link === '#' ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-[2.5rem] p-8 border border-white/5 overflow-hidden flex flex-col h-full cursor-pointer z-10"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-900 border border-white/10 ${project.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                  <project.icon className="w-7 h-7" />
                </div>
                <div className="p-3 rounded-full bg-white/5 text-slate-500 group-hover:text-white group-hover:bg-white/10 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors relative z-10">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 text-[10px] font-display font-bold text-slate-500 tracking-wider uppercase rounded-full group-hover:text-slate-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
