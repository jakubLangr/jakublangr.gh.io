import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredArticle = articles.find(a => !a.href) ?? articles[0];
  const moreArticles = [...articles]
    .filter(a => a !== featuredArticle)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />

        {/* Writing: featured article + most recent, links to the full list */}
        <section id="writing" className="section-padding border-b border-border">
          <div className="container-width">
            <div className="flex items-baseline justify-between gap-4 mb-5">
              <span className="bp-fig !mb-0">// fig. 03 — latest writing</span>
              <Link to="/articles" className="bp-mono text-xs uppercase tracking-[0.12em] text-accent inline-flex items-center gap-2 hover:text-white transition-smooth">
                All articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
              <Link to={featuredArticle.href ?? `/articles/${featuredArticle.slug}`} className="block">
                <article className="bp-spec group hover:border-accent transition-smooth h-full">
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
              <ul className="bp-panel divide-y divide-dotted divide-border">
                <span className="bp-tick bp-tick-tl" />
                <span className="bp-tick bp-tick-br" />
                {moreArticles.map(a => (
                  <li key={a.slug}>
                    <Link to={a.href ?? `/articles/${a.slug}`} className="group block px-5 py-4 hover:bg-white/[0.03] transition-smooth">
                      <div className="bp-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground mb-1">
                        {a.date}{a.href ? ' · password' : ''}
                      </div>
                      <div className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">{a.title}</div>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/articles" className="group flex items-center justify-between px-5 py-4 bp-mono text-xs uppercase tracking-[0.12em] text-accent hover:bg-white/[0.03] transition-smooth">
                    Browse all {articles.length} articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>
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
