import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Github, ExternalLink, Globe, Terminal, BookOpen } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  stack: string[];
  features: string[];
  links?: { github?: string; live?: string };
};

const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive personal portfolio website showcasing projects, skills, and experience with a modern dark theme UI and smooth animations.',
    icon: Globe,
    accent: 'from-sky-500 to-blue-600',
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive design across all devices',
      'Dark theme with smooth animations',
      'Interactive navigation with scroll effects',
    ],
    links: { github: 'https://github.com/saramaisa997-afk/my_first_basic_portfolio' },
  },
  {
    title: 'Student Management System',
    description:
      'A console-based Python application for managing student records with full CRUD operations, designed for simplicity and reliability.',
    icon: Terminal,
    accent: 'from-cyan-500 to-sky-600',
    stack: ['Python', 'OOP', 'File Handling'],
    features: [
      'Console-based application with menu interface',
      'Full CRUD Operations (Create, Read, Update, Delete)',
      'Data persistence with file storage',
    ],
    links: { github: 'https://github.com/saramaisa997-afk/Student-management-system' },
  },
  {
    title: 'Library Management System',
    description:
      'A desktop Java application with a Swing GUI for managing library books — add, issue, return, and delete with an interactive interface.',
    icon: BookOpen,
    accent: 'from-blue-500 to-cyan-600',
    stack: ['Java', 'Swing', 'Database'],
    features: [
      'Java Swing GUI for intuitive interaction',
      'Add, Issue, Return, and Delete books',
      'User-friendly desktop application',
    ],
    links: { github: 'https://github.com/saramaisa997-afk/library-management-system-java-gui-' },
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = project.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group card-glass rounded-2xl border border-white/5 hover:border-sky-400/40 transition-all duration-500 overflow-hidden flex flex-col hover:shadow-lg hover:shadow-sky-500/20 cursor-pointer`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent bar with glow on hover */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent} transition-all duration-500 ${isHovered ? 'h-2 shadow-lg' : ''}`} style={{ filter: isHovered ? 'drop-shadow(0 0 8px rgba(56,189,248,0.5))' : 'none' }} />

      <div className="p-8 flex flex-col flex-1">
        {/* Icon + title */}
        <div className="flex items-start gap-4 mb-5">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.accent} bg-opacity-15 flex items-center justify-center shrink-0 group-hover:scale-125 transition-all duration-300 ${isHovered ? 'shadow-lg shadow-sky-500/30' : ''}`}>
            <Icon size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-sky-300 transition-colors">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(s => (
                <span key={s} className="text-xs font-code text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20 hover:border-sky-400/50 transition-all hover:bg-sky-400/15">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">{project.description}</p>

        {/* Features */}
        <div className="space-y-3 flex-1">
          {project.features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.accent} mt-2 shrink-0 group-hover:scale-125 transition-transform`} />
              <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{f}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        {project.links && (
          <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/60 transition-all text-sm font-medium hover:scale-105"
              >
                <Github size={16} /> GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/60 transition-all text-sm font-medium hover:scale-105"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.flatMap(p => p.stack)));

  const filteredProjects = selectedFilter
    ? projects.filter(p => p.stack.includes(selectedFilter))
    : projects;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/8 mb-6">
              <Globe size={14} className="text-sky-300" />
              <span className="text-xs text-sky-300 font-code tracking-widest">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              Showcasing my best work across different technologies and domains
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setSelectedFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === null
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:border-sky-400/30 hover:text-sky-400'
              }`}
            >
              All Projects
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === category
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:border-sky-400/30 hover:text-sky-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-400 text-lg">No projects found for this filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
