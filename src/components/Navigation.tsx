import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        const hash = target.href.split('#')[1] ? '#' + target.href.split('#')[1] : '#home';
        setActiveLink(hash);
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050d1a]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white hover:text-sky-400 transition-colors">
          SM<span className="text-sky-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                activeLink === link.href ? 'text-sky-400 active' : 'text-slate-400 hover:text-sky-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg border border-white/10 hover:border-sky-400/30 hover:bg-sky-400/5 transition-all"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050d1a]/95 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeLink === link.href
                    ? 'text-sky-400 bg-sky-400/10 border border-sky-400/30'
                    : 'text-slate-400 hover:text-sky-400 hover:bg-sky-400/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
