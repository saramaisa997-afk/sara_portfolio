import { useReveal } from '../hooks/useReveal';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const bullets = [
  'Designed and developed a responsive personal portfolio website using HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS , React, Node.js.',
  'Built backend functionality using PHP for dynamic web features.',
  'Developed full-stack web applications with modular architecture and performance optimization.',
  'Improved UI responsiveness and cross-browser compatibility across multiple devices.',
];

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="font-code text-sky-400 text-sm tracking-widest uppercase">Work history</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/60 via-blue-600/30 to-transparent hidden sm:block" />

            <div className="sm:pl-20 relative">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 border-4 border-[#050d1a] hidden sm:flex items-center justify-center glow">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div className="card-glass rounded-2xl p-8 border border-white/5 hover:border-sky-400/30 transition-all duration-400 hover:shadow-lg hover:shadow-sky-500/15 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                        <Briefcase size={12} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">Full Stack Web Developer Intern</h3>
                    </div>
                    <p className="text-sky-400/90 font-semibold text-[15px] ml-7 group-hover:text-sky-300 transition-colors">Zephyr Technologies Pvt Ltd</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/15 border border-sky-400/30 self-start hover:bg-sky-400/20 transition-all">
                    <Calendar size={13} className="text-sky-400" />
                    <span className="text-sky-300 text-xs font-code whitespace-nowrap font-medium">May 2026 – June 2026</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-6" />

                {/* Bullets */}
                <ul className="space-y-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-[15px] leading-relaxed group-hover:text-slate-300 transition-colors">
                      <CheckCircle size={18} className="text-sky-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
                  {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'TypeScript', 'Tailwind CSS' , 'React', 'Node.js','Full Stack', 'Responsive Design'].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 font-code hover:bg-sky-500/20 hover:border-sky-500/60 transition-all hover:scale-105 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
