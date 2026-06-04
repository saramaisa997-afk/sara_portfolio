import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  const { ref, visible } = useReveal();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="card-glass rounded-3xl border border-white/5 p-12 hover:border-sky-400/25 transition-all duration-500 hover:shadow-lg hover:shadow-sky-500/20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/8 mb-6">
                <Mail size={16} className="text-sky-300" />
                <span className="text-xs text-sky-300 font-code tracking-widest">Stay Updated</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-3">
                Get Insights & <span className="text-gradient">Updates</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed">
                Subscribe to my newsletter for the latest articles, tutorials, and insights on web development, tech trends, and best practices.
              </p>
            </div>

            {subscribed ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center mb-4 animate-bounce">
                  <Send size={32} className="text-green-400" />
                </div>
                <p className="text-green-400 font-bold text-lg">Subscription Successful!</p>
                <p className="text-slate-500 text-sm mt-2">Check your inbox for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-white/4 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400/60 focus:bg-sky-400/5 focus:ring-1 focus:ring-sky-400/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm hover:from-sky-400 hover:to-blue-500 transition-all duration-300 glow glow-hover hover:shadow-lg hover:shadow-sky-500/40 hover:scale-105 flex items-center gap-2 justify-center sm:justify-start whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <Send size={16} />
                  </button>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  No spam. Unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            )}
          </div>

          {/* Trust indicators */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            {[
              { number: '2K+', label: 'Newsletter Subscribers' },
              { number: '50+', label: 'Articles Published' },
              { number: '100%', label: 'Privacy Guaranteed' }
            ].map((stat, i) => (
              <div key={i} className={`reveal ${visible ? 'visible' : ''} text-center`} style={{ transitionDelay: `${(i + 2) * 80}ms` }}>
                <div className="text-2xl font-bold text-sky-400 mb-1">{stat.number}</div>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
