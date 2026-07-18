import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const publications = [
  {
    type: 'Book',
    year: '2019',
    title: 'GANs in Action',
    description:
      'Authored the best-selling practical guide to Generative Adversarial Networks (Manning) — the first book on GANs, translated into 5+ languages.',
    link: 'https://www.manning.com/books/gans-in-action',
  },
  {
    type: 'Patent',
    year: '2023',
    title: 'Autonomous Vehicle Trajectory Prediction',
    description:
      'US PTO patent: a driver-assistance system combining sensor fusion with real-time trajectory prediction and energy-consumption optimization.',
    link: 'https://patents.google.com/patent/GB2617593A/fr',
  },
  {
    type: 'System',
    year: '2023',
    title: 'LLM Construction Intelligence',
    description:
      'Architected an industry-first construction assistant using retrieval-augmented generation (RAG) over 4M+ daily datapoints with Text2SQL.',
    link: 'https://linkedin.com/in/jakublangr',
  },
  {
    type: 'Speaking',
    year: '2024',
    title: 'Conference Talks & Lectures',
    description:
      'Speaker at AI EXPO, Big Data Europe, Codiax, and PyCon CZ; guest lecturer at the University of Oxford on AI cloud & edge implementations.',
    link: 'https://linkedin.com/in/jakublangr',
  },
];

const Publications = () => {
  return (
    <section id="publications" className="section-padding border-b border-border">
      <div className="container-width">
        <span className="bp-fig">// fig. 05 — writing &amp; work</span>
        <h2 className="text-section-title gradient-text">Publications &amp; Writing</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-spec block group hover:border-accent transition-smooth"
            >
              <span className="bp-tick bp-tick-tl" />
              <span className="bp-tick bp-tick-br" />
              <div className="flex items-center justify-between bp-mono text-xs uppercase tracking-[0.12em] text-accent border-b border-border pb-2.5 mb-3">
                <span>{pub.type}</span>
                <span className="text-muted-foreground">{pub.year}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5 flex items-start justify-between gap-2">
                {pub.title}
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-0.5" />
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed">{pub.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/articles" className="bp-cta">View all articles &amp; posts</Link>
        </div>
      </div>
    </section>
  );
};

export default Publications;
