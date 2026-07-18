import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const linkClass =
    'bp-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-smooth px-2 py-1.5 border border-transparent hover:border-border';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-background/92 backdrop-blur-md border-b border-border'
          : 'bg-background/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="container-width flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link
          to="/"
          className="bp-mono text-sm tracking-[0.08em] text-foreground hover:text-accent transition-smooth"
          aria-label="Jakub Langr — home"
        >
          JL <span className="text-accent">//</span> jakublangr
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {isHomePage ? (
            <>
              <Link to="/about" className={linkClass}>About</Link>
              <button onClick={() => scrollToSection('experience')} className={linkClass}>Experience</button>
              <button onClick={() => scrollToSection('publications')} className={linkClass}>Writing</button>
              <Link to="/articles" className={linkClass}>Articles</Link>
              <button onClick={() => scrollToSection('contact')} className={linkClass}>Contact</button>
            </>
          ) : (
            <>
              <Link to="/" className={linkClass}>Home</Link>
              <Link to="/about" className={linkClass}>About</Link>
              <Link to="/articles" className={linkClass}>Articles</Link>
              <Link to="/#contact" className={linkClass}>Contact</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
