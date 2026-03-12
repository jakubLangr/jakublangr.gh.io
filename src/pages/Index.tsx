import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { articles } from '@/data/articles';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredArticle = articles[0];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container-width">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <About />

              {/* Featured Article */}
              <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container-width">
                  <h2 className="text-2xl font-bold gradient-text mb-6">Latest Article</h2>
                  <Link to={`/articles/${featuredArticle.slug}`}>
                    <Card className="shadow-elegant hover:shadow-glow transition-smooth group cursor-pointer border-l-4 border-l-accent">
                      <CardContent className="p-8">
                        <div className="flex flex-col gap-3">
                          <span className="text-sm text-muted-foreground">{featuredArticle.date}</span>
                          <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                            {featuredArticle.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {featuredArticle.summary}
                          </p>
                          <span className="inline-flex items-center gap-2 text-accent font-medium mt-2">
                            Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </section>

              <Experience />
              <Publications />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 mt-[10px] space-y-3">
                {/* Page Navigation */}
                <Card className="shadow-sm border-l-2 border-l-accent/20">
                  <CardHeader className="pb-2 pt-3">
                    <CardTitle className="text-sm font-medium gradient-text">On This Page</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3 space-y-0.5">
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="block w-full text-left py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors"
                    >
                      Quick Summary
                    </button>
                    <button 
                      onClick={() => scrollToSection('experience')}
                      className="block w-full text-left py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors"
                    >
                      Experience
                    </button>
                    <button 
                      onClick={() => scrollToSection('publications')}
                      className="block w-full text-left py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors"
                    >
                      Publications
                    </button>
                    <button 
                      onClick={() => scrollToSection('consulting')}
                      className="block w-full text-left py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors"
                    >
                      Professional Consulting
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="block w-full text-left py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors"
                    >
                      Let's Connect
                    </button>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="shadow-sm border-l-2 border-l-accent/20">
                  <CardHeader className="pb-2 pt-3">
                    <CardTitle className="text-sm font-medium gradient-text">External Links</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3 space-y-0.5">
                    <Link to="/about" className="block py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors">
                      Full Biography
                    </Link>
                    <Link to="/articles" className="block py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors">
                      All Articles
                    </Link>
                    <a href="https://linkedin.com/in/jakublangr" target="_blank" rel="noopener noreferrer" className="block py-1 px-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-muted/30 rounded transition-colors">
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
