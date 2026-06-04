import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Project Manager, Tech Startup',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'Working with Sara was exceptional. She delivered a high-quality portfolio website that exceeded expectations. Her attention to detail and communication throughout the project were outstanding.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, Digital Agency',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    content: 'Sara\'s full-stack development skills are impressive. She built our custom web application with clean, scalable code. Highly recommend her for any serious web development project.',
    rating: 5
  },
  {
    name: 'Arjun Patel',
    role: 'Tech Lead, Product Company',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    content: 'Professional, reliable, and talented. Sara demonstrated deep knowledge of modern web technologies and best practices. A pleasure to collaborate with.',
    rating: 5
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="card-glass rounded-2xl p-8 border border-white/5 hover:border-sky-400/25 transition-all duration-500 h-full flex flex-col">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 leading-relaxed mb-6 flex-1 italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border border-white/10"
        />
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-slate-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const itemsToShow = testimonials.slice(currentIndex, currentIndex + visibleTestimonials);
  const hasNextPage = currentIndex + visibleTestimonials < testimonials.length;
  const hasPrevPage = currentIndex > 0;

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/8 mb-6">
              <Star size={14} className="text-amber-300" />
              <span className="text-xs text-amber-300 font-code tracking-widest">Social Proof</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              What People <span className="text-gradient">Say About Me</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              Testimonials from clients and collaborators I've had the pleasure of working with
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {itemsToShow.map((testimonial, i) => (
              <div key={i} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              disabled={!hasPrevPage}
              className="p-3 rounded-lg border border-white/10 hover:border-sky-400/50 text-slate-400 hover:text-sky-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-sky-400/5"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (window.innerWidth >= 1024) {
                      setCurrentIndex(Math.min(i, testimonials.length - 3));
                    } else if (window.innerWidth >= 768) {
                      setCurrentIndex(Math.min(i, testimonials.length - 2));
                    } else {
                      setCurrentIndex(i);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i >= currentIndex && i < currentIndex + visibleTestimonials
                      ? 'bg-sky-400 w-8'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={!hasNextPage}
              className="p-3 rounded-lg border border-white/10 hover:border-sky-400/50 text-slate-400 hover:text-sky-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-sky-400/5"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
