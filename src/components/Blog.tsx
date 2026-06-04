import { useReveal } from '../hooks/useReveal';
import { BookOpen, Calendar, ArrowRight, Tag } from 'lucide-react';

const articles = [
  {
    title: 'Building Modern Web Applications with React & TypeScript',
    excerpt: 'Learn best practices for building scalable web applications using React and TypeScript. Explore component architecture, state management, and performance optimization.',
    date: 'March 15, 2024',
    category: 'Web Development',
    readTime: '8 min read',
    featured: true
  },
  {
    title: 'The Ultimate Guide to Full-Stack Development',
    excerpt: 'A comprehensive guide covering frontend, backend, and database design. Understand the complete flow of modern web application development.',
    date: 'March 8, 2024',
    category: 'Tutorial',
    readTime: '12 min read',
    featured: false
  },
  {
    title: 'Optimizing Web Performance: Tips & Tricks',
    excerpt: 'Discover practical techniques to improve your website\'s performance. From code splitting to lazy loading, master the art of optimization.',
    date: 'March 1, 2024',
    category: 'Performance',
    readTime: '6 min read',
    featured: false
  },
];

export default function Blog() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-400/8 mb-6">
              <BookOpen size={14} className="text-green-300" />
              <span className="text-xs text-green-300 font-code tracking-widest">Knowledge Base</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              Insights, tutorials, and best practices from my experience
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className={`reveal ${visible ? 'visible' : ''} lg:col-span-2 card-glass rounded-2xl border border-white/5 hover:border-sky-400/40 overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-sky-500/20`}>
              <div className="relative h-80 bg-gradient-to-br from-sky-500/20 to-blue-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen size={64} className="text-sky-400/20 group-hover:text-sky-400/40 transition-colors" />
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Tag size={14} className="text-sky-400" />
                  <span className="text-xs font-code text-sky-400 uppercase tracking-widest">Featured</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {articles[0].title}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {articles[0].date}
                    </span>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <a href="#" className="text-sky-400 hover:text-sky-300 transition-colors group/link">
                    <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Recent Articles */}
            <div className="space-y-6">
              {articles.slice(1).map((article, i) => (
                <div
                  key={i}
                  className={`reveal ${visible ? 'visible' : ''} card-glass rounded-xl p-6 border border-white/5 hover:border-sky-400/25 transition-all duration-300 group hover:shadow-lg hover:shadow-sky-500/10`}
                  style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-code text-slate-400 uppercase tracking-widest">{article.category}</span>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>

                  <h4 className="font-bold text-white mb-2 group-hover:text-sky-300 transition-colors line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.date}</span>
                    <ArrowRight size={16} className="text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}

              {/* View All CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-sky-400/50 text-sky-400 font-semibold hover:border-sky-400 hover:bg-sky-400/10 transition-all hover:scale-105 group w-full justify-center mt-2"
              >
                View All Articles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
