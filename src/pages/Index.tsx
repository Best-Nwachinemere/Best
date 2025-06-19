
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import BlogPreview from '@/components/BlogPreview';
import BooksSection from '@/components/BooksSection';
import EmpowermentSection from '@/components/EmpowermentSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedProjects />
      <BlogPreview />
      <BooksSection />
      <EmpowermentSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
