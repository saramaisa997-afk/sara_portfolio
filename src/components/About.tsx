import { useReveal } from '../hooks/useReveal';
import { useEffect, useState } from 'react';
import { Code2, Zap, Target, Users, Sparkles, GitBranch } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 15, icon: Code2, suffix: '+' },
  { label: 'Happy Clients', value: 50, icon: Users, suffix: '+' },
  { label: 'Technologies', value: 20, icon: Zap, suffix: '+' },
  { label: 'Years Experience', value: 2, icon: Target, suffix: '' },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return <span onMouseEnter={() => setIsVisible(true)}>{count}{suffix}</span>;
}

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
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
              <Sparkles size={14} className="text-sky-300" />
              <span className="text-xs text-sky-300 font-code tracking-widest">Professional Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              Who I <span className="text-gradient">Am</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A dedicated full-stack developer passionate about creating elegant solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left side - Text */}
            <div className="space-y-7">
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed text-lg font-light">
                  I'm a B.Tech Computer Science student with a proven track record in full-stack development. My passion lies in transforming complex problems into intuitive, elegant digital solutions that users love.
                </p>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  Specializing in modern web technologies—React, TypeScript, Python, and more—I build scalable applications with clean, maintainable code. I'm committed to continuous learning and staying at the forefront of web development.
                </p>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  Beyond coding, I'm passionate about open-source contributions, mentoring developers, and exploring emerging technologies that shape the future of digital innovation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-6">
                {['Full-Stack Development', 'Problem Solving', 'Clean Code', 'UI/UX Design', 'Performance Optimization', 'Team Collaboration'].map(trait => (
                  <span
                    key={trait}
                    className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-500/15 to-blue-500/15 text-sky-300 border border-sky-500/30 text-sm font-medium hover:border-sky-400/50 hover:bg-sky-500/25 transition-all cursor-default"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:from-sky-400 hover:to-blue-500 transition-all duration-300 glow glow-hover group"
                >
                  <span>Explore My Work</span>
                  <GitBranch size={18} className="group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right side - Animated Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`reveal ${visible ? 'visible' : ''} card-glass rounded-2xl p-7 border border-white/5 hover:border-sky-400/40 transition-all duration-500 text-center group hover:shadow-lg hover:shadow-sky-500/20 hover:scale-105`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 bg-opacity-15 flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:bg-opacity-25 transition-all">
                      <Icon size={28} className="text-sky-400" />
                    </div>
                    <div className="text-4xl font-bold text-sky-400 mb-2">
                      {visible && <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
                    </div>
                    <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Preview Grid */}
          <div className="grid sm:grid-cols-3 gap-6 pt-12">
            {[
              { title: 'Frontend', skills: 'React, TypeScript, Tailwind CSS, Vite' },
              { title: 'Backend', skills: 'Python, Node.js, REST APIs, Databases' },
              { title: 'Tools', skills: 'Git, GitHub, VS Code, Figma' }
            ].map((category, i) => (
              <div
                key={i}
                className={`reveal ${visible ? 'visible' : ''} card-glass rounded-xl p-6 border border-white/5 hover:border-sky-400/25 transition-all group`}
                style={{ transitionDelay: `${(i + 4) * 80}ms` }}
              >
                <h3 className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-3">{category.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{category.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
