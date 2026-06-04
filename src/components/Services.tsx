import { useReveal } from '../hooks/useReveal';
import { Zap, Code2, Layout, Globe, Smartphone, Shield } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end development solutions using modern technologies. From frontend to backend, I build scalable applications.',
    color: 'from-sky-500 to-blue-600',
    skills: ['React', 'Node.js', 'Databases', 'APIs']
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that users love. Focused on accessibility and user experience.',
    color: 'from-cyan-500 to-sky-600',
    skills: ['Responsive Design', 'Accessibility', 'Figma', 'Prototyping']
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Apps',
    description: 'Building applications that work seamlessly across all devices. Mobile-first approach for modern users.',
    color: 'from-blue-500 to-cyan-600',
    skills: ['Mobile-First', 'Cross-browser', 'Performance', 'PWA']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed and efficiency. Ensuring fast load times and smooth interactions.',
    color: 'from-yellow-500 to-orange-600',
    skills: ['Speed', 'SEO', 'Caching', 'Optimization']
  },
  {
    icon: Globe,
    title: 'Web Solutions',
    description: 'Custom web solutions tailored to your unique needs. Scalable, maintainable, and future-proof.',
    color: 'from-green-500 to-teal-600',
    skills: ['Architecture', 'Scalability', 'Integration', 'Support']
  },
  {
    icon: Shield,
    title: 'Best Practices',
    description: 'Following industry standards and best practices. Writing secure, clean, and maintainable code.',
    color: 'from-purple-500 to-pink-600',
    skills: ['Security', 'Testing', 'Documentation', 'Code Review']
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} card-glass rounded-2xl p-8 border border-white/5 hover:border-sky-400/40 transition-all duration-500 group hover:shadow-lg hover:shadow-sky-500/20`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 -mx-8 mb-6`} />

      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-15 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:bg-opacity-25 transition-all duration-300`}>
        <Icon size={32} className="text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">{service.title}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
        {service.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
        {service.skills.map(skill => (
          <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-400 group-hover:text-sky-400 group-hover:bg-sky-400/10 transition-all">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/8 mb-6">
              <Zap size={14} className="text-sky-300" />
              <span className="text-xs text-sky-300 font-code tracking-widest">What I Offer</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Services & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              Comprehensive web development solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
