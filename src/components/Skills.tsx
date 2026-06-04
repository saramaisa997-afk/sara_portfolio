import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Zap } from 'lucide-react';

type SkillGroup = {
  category: string;
  color: string;
  skills: { name: string; level: number }[];
};

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    color: 'from-sky-500 to-blue-600',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 78 },
      { name: 'JavaScript', level: 80 },
      { name: 'C', level: 70 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'Web Technologies',
    color: 'from-cyan-500 to-sky-600',
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 82 },
    ],
  },
  {
    category: 'Database',
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'MongoDB', level: 72 },
      { name: 'SQL / MySQL', level: 78 },
      { name: 'Supabase', level: 80 },
    ],
  },
  {
    category: 'Tools & Concepts',
    color: 'from-sky-400 to-cyan-500',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'OOP', level: 85 },
      { name: 'DSA', level: 75 },
      { name: 'REST APIs', level: 80 },
    ],
  },
];

const techBadges = [
  'Python', 'Java', 'JavaScript', 'C', 'HTML5', 'CSS3', 'React',
  'TypeScript', 'MongoDB', 'SQL', 'Git', 'OOP', 'DSA', 'REST APIs',
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-code text-sky-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} skill-bar`}
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayGroups = selectedCategory
    ? skillGroups.filter(g => g.category === selectedCategory)
    : skillGroups;

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/8 mb-6">
              <Zap size={14} className="text-sky-300" />
              <span className="text-xs text-sky-300 font-code tracking-widest">Technical Proficiency</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              Mastered technologies and tools for modern web development
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:border-sky-400/30 hover:text-sky-400'
              }`}
            >
              All
            </button>
            {skillGroups.map(group => (
              <button
                key={group.category}
                onClick={() => setSelectedCategory(group.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === group.category
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:border-sky-400/30 hover:text-sky-400'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {techBadges.map(badge => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-full text-xs font-code bg-white/3 border border-white/8 text-slate-300 hover:border-sky-400/40 hover:text-sky-400 hover:bg-sky-400/5 transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Skill groups grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayGroups.map(group => (
              <div
                key={group.category}
                className="card-glass rounded-2xl p-6 border border-white/5 hover:border-sky-400/20 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${group.color} bg-opacity-10 mb-5`}>
                  <span className={`text-xs font-semibold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                    {group.category}
                  </span>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={group.color}
                      delay={i * 120}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
