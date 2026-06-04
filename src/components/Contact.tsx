import { useReveal } from '../hooks/useReveal';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saramaisa997@gmail.com',
    href: 'mailto:saramaisa997@gmail.com',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7349083040',
    href: 'tel:+917349083040',
    color: 'from-cyan-500 to-sky-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Udupi, Karnataka, India',
    href: null,
    color: 'from-blue-500 to-cyan-500',
  },
];

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Sara Maisa',
    href: 'https://linkedin.com/in/sara-maisa',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    handle: '@saramaisa997',
    href: 'https://github.com/saramaisa997-afk',
    color: 'from-slate-500 to-slate-600',
  },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSent(false), 4000);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="font-code text-sky-400 text-sm tracking-widest uppercase">Let's connect</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-md mx-auto">
              Have an opportunity or just want to say hi? My inbox is always open.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left — info */}
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="card-glass rounded-2xl p-6 border border-white/5 hover:border-sky-400/30 transition-all duration-400 flex items-center gap-4 group hover:shadow-lg hover:shadow-sky-500/10 hover:scale-105"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center shrink-0 group-hover:scale-125 group-hover:bg-opacity-20 transition-all`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-white font-semibold hover:text-sky-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-2">
                {socials.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glass rounded-2xl p-6 border border-white/5 hover:border-sky-400/30 transition-all duration-400 flex flex-col items-center gap-3 group hover:shadow-lg hover:shadow-sky-500/10 hover:scale-105"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} bg-opacity-15 flex items-center justify-center group-hover:scale-125 group-hover:bg-opacity-25 transition-all`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-white text-sm font-semibold group-hover:text-sky-300 transition-colors">{label}</p>
                      <p className="text-slate-500 text-xs group-hover:text-slate-400 transition-colors">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="card-glass rounded-2xl p-8 border border-white/5 hover:border-sky-400/25 transition-all duration-400 hover:shadow-lg hover:shadow-sky-500/10">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <Send size={18} className="text-sky-400" />
                Send a Message
              </h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center h-56 text-center animate-pulse">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center mb-5 animate-bounce">
                    <Send size={28} className="text-green-400" />
                  </div>
                  <p className="text-green-400 font-bold text-lg">Message sent!</p>
                  <p className="text-slate-500 text-sm mt-2">Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      disabled={isSubmitting}
                      placeholder="Your name"
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400/60 focus:bg-sky-400/5 focus:ring-1 focus:ring-sky-400/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      disabled={isSubmitting}
                      placeholder="your@email.com"
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400/60 focus:bg-sky-400/5 focus:ring-1 focus:ring-sky-400/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      disabled={isSubmitting}
                      placeholder="What's on your mind?"
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400/60 focus:bg-sky-400/5 focus:ring-1 focus:ring-sky-400/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm hover:from-sky-400 hover:to-blue-500 transition-all duration-300 glow glow-hover hover:shadow-lg hover:shadow-sky-500/40 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    <Send size={17} className={isSubmitting ? 'animate-spin' : ''} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
