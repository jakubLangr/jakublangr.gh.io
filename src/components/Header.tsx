import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
    }`}>
      <nav className="container-width flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
          Jakub Langr
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-accent transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-foreground hover:text-accent transition-smooth"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('publications')}
                className="text-foreground hover:text-accent transition-smooth"
              >
                Publications
              </button>
              <Link 
                to="/articles"
                className="text-foreground hover:text-accent transition-smooth"
              >
                Articles
              </Link>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-hero"
              >
                Contact
              </Button>
            </>
          ) : (
            <>
              <Link 
                to="/"
                className="text-foreground hover:text-accent transition-smooth"
              >
                Home
              </Link>
              <Link 
                to="/articles"
                className="text-foreground hover:text-accent transition-smooth"
              >
                Articles
              </Link>
              <Link 
                to="/#contact"
                className="text-foreground hover:text-accent transition-smooth"
              >
                Contact
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;