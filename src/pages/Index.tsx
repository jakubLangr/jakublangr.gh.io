import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />

        {/* Latest article */}
        <section className="section-padding border-b border-border">
          <div className="container-width">
            <span className="bp-fig">// fig. 04.5 — latest dispatch</span>
            <Link to={`/articles/${featuredArticle.slug}`} className="block">
              <article className="bp-spec group hover:border-accent transition-smooth">
                <span className="bp-tick bp-tick-tl" />
                <span className="bp-tick bp-tick-tr" />
                <span className="bp-tick bp-tick-bl" />
                <span className="bp-tick bp-tick-br" />
                <div className="bp-mono text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">
                  {featuredArticle.date}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="mt-3 text-foreground/75 leading-relaxed max-w-[68ch]">
                  {featuredArticle.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 bp-mono text-xs uppercase tracking-[0.12em] text-accent">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            </Link>
          </div>
        </section>

        <Experience />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
