import { Button } from '@/components/ui/button';
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
        <p className="text-lead mb-8 text-white/90 max-w-3xl mx-auto">
          AI Researcher, Data Scientist & Entrepreneur. Oxford-educated expert in machine learning, 
          co-author of "GANs in Action", and former CTO with over a decade of experience in artificial intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('about')}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow transition-smooth"
          >
            Learn More
          </Button>
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