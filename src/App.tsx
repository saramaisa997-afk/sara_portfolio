import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-[#050d1a] text-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
