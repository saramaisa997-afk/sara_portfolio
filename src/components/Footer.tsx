import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050d1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-3">
              SM<span className="text-sky-400">.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Crafting elegant digital solutions with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-500 text-sm hover:text-sky-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Resume', 'Blog', 'GitHub', 'LinkedIn'].map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-500 text-sm hover:text-sky-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/saramaisa997-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 hover:border-sky-400/30 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:bg-sky-400/5 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/sara-maisa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 hover:border-sky-400/30 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:bg-sky-400/5 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:saramaisa997@gmail.com"
                className="w-10 h-10 rounded-lg border border-white/10 hover:border-sky-400/30 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:bg-sky-400/5 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            Made with <Heart size={14} className="inline text-red-400" /> by Sara Maisa © {currentYear}
          </p>
          <p className="text-slate-600 text-xs mt-3 sm:mt-0">
            Designed & Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
