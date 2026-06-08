import { useEffect, useState } from 'react';
import { Download, Mail, Linkedin, Github, ArrowDown, Sparkles } from 'lucide-react';

const roles = [
  'Software Engineer',
  'Web Developer',
  'Python Enthusiast',
  'Full Stack Developer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(i => i + 1);
      }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(i => i - 1);
      }, 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg grid-bg pt-20">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-600/8 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-sky-400/6 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-cyan-500/4 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '7s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge with enhanced animation */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/8 mb-8 float-animation transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Sparkles size={14} className="text-sky-300 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-xs text-sky-300 font-code tracking-widest">Building amazing products</span>
        </div>

        {/* Name with enhanced styling */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-white">Sara </span>
          <span className="text-gradient bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Maisa</span>
        </h1>

        {/* Typing role with glow effect */}
        <div className="h-12 mb-8 flex items-center justify-center">
          <span className={`text-xl sm:text-2xl font-code text-sky-400 tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {displayed}
            <span className="cursor-blink text-sky-300 ml-0.5">|</span>
          </span>
        </div>

        {/* Enhanced intro text */}
        <p className={`text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          B.Tech Computer Science student passionate about full-stack development, software
          engineering, and creative problem-solving. I build responsive web applications and
          continuously expand my technical expertise.
        </p>

        {/* Enhanced CTA buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm hover:from-sky-400 hover:to-blue-500 transition-all duration-300 glow glow-hover shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
          >
            <Mail size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            Get In Touch
          </a>
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = "/sara maisa.pdf";
              link.download = 'sara maisa.pdf';
              link.click();
            }}
            className="group flex items-center gap-2.5 px-8 py-3.5 rounded-xl border-2 border-sky-400/50 text-sky-400 font-semibold text-sm hover:border-sky-400 hover:bg-sky-400/10 transition-all duration-300 hover:scale-105"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </button>
        </div>

        {/* Enhanced social icons */}
        <div className={`flex items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="https://linkedin.com/in/sara-maisa"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-500 hover:text-sky-400 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/4 flex items-center justify-center group-hover:border-sky-400/50 group-hover:bg-sky-400/10 transition-all duration-300 group-hover:scale-110">
              <Linkedin size={19} />
            </div>
            <span className="text-xs font-medium hidden sm:block text-slate-400 group-hover:text-sky-400">LinkedIn</span>
          </a>
          <a
            href="https://github.com/saramaisa997-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-500 hover:text-sky-400 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/4 flex items-center justify-center group-hover:border-sky-400/50 group-hover:bg-sky-400/10 transition-all duration-300 group-hover:scale-110">
              <Github size={19} />
            </div>
            <span className="text-xs font-medium hidden sm:block text-slate-400 group-hover:text-sky-400">GitHub</span>
          </a>
        </div>

        {/* Enhanced scroll hint */}
        <div className="flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase font-code">Scroll to explore</span>
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
}
