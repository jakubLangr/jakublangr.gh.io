import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-width text-center animate-fade-in">
        <h1 className="text-hero mb-6 text-white">
          Jakub Langr
        </h1>
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/30"></div>
          </div>
          <div className="relative flex justify-center">
            <p className="text-lead text-white/90 bg-background/10 backdrop-blur-sm px-8 py-4">
            AI Researcher, Author & Entrepreneur. Oxford-educated ML expert, author of GANs in Action, YC-backed founder (acquired), ex-PLTR, and conference speaker with ~15 years designing mission-critical AI systems.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/about">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow transition-smooth"
            >
              Learn More
            </Button>
          </Link>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="border-white/30 text-white bg-white/10 hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;