import { useReveal } from '../hooks/useReveal';
import { Award, ExternalLink } from 'lucide-react';

type Cert = {
  title: string;
  issuer: string;
  color: string;
  badge: string;
};

const certs: Cert[] = [
  {
    title: 'Fundamental Algorithms: Design and Analysis',
    issuer: 'MSDE Skill India (NPTEL)',
    color: 'from-sky-500 to-blue-600',
    badge: 'NPTEL',
  },
  {
    title: 'Information Technology Specialist (Java)',
    issuer: 'Certiport',
    color: 'from-cyan-500 to-sky-600',
    badge: 'Certiport',
  },
  {
    title: 'NoSQL MongoDB',
    issuer: 'IBM',
    color: 'from-blue-500 to-cyan-600',
    badge: 'IBM',
  },
  {
    title: 'Front End Technologies',
    issuer: 'IBM',
    color: 'from-sky-400 to-blue-500',
    badge: 'IBM',
  },
];

function CertCard({ cert, index }: { cert: Cert; index: number }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group card-glass rounded-2xl border border-white/5 hover:border-sky-400/40 transition-all duration-400 overflow-hidden hover:shadow-lg hover:shadow-sky-500/20 cursor-pointer`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`h-1.5 bg-gradient-to-r ${cert.color} group-hover:h-2 transition-all duration-300`} />
      <div className="p-7">
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-15 flex items-center justify-center shrink-0 group-hover:scale-125 group-hover:bg-opacity-25 transition-all duration-300`}>
            <Award size={24} className="text-white group-hover:brightness-125 transition-all" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-sky-300 transition-colors">
              {cert.title}
            </h3>
            <div className="flex flex-col gap-2">
              <span className={`text-xs font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent group-hover:brightness-125 transition-all`}>
                {cert.issuer}
              </span>
              <span className="text-xs font-code text-slate-400 bg-white/6 px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-sky-400/50 group-hover:bg-sky-400/8 transition-all w-fit">
                {cert.badge}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-sky-400 transition-colors">
          <ExternalLink size={13} />
          <span className="group-hover:underline">View certificate</span>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="font-code text-sky-400 text-sm tracking-widest uppercase">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              <span className="text-gradient">Certifications</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
