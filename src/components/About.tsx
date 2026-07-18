import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="section-padding border-b border-border">
      <div className="container-width">
        <span className="bp-fig">// fig. 02 — profile</span>
        <h2 className="text-section-title gradient-text">Quick Summary</h2>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 lg:gap-12">
          {/* Bio — verbatim */}
          <div className="space-y-4 text-foreground/90 leading-relaxed text-lg max-w-[60ch]">
            <p>
              Jakub has worked in data &amp; AI for over 10 years. He is currently working on{' '}
              <a
                href="https://rig.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition-smooth"
              >
                Rig
              </a>
              : data infrastructure for business teams. Previously, he was the CTO for Tenderd (YC S18). Before that, he
              founded AI startup called Hypermile (acquired by Konboi, backed by Y Combinator).
              He raised as a CEO/CTO ~$32M.
            </p>
            <p>
              He wrote a best-selling book on an area of Generative AI and he guest lectured at
              the University of Oxford. He worked for global tech companies &amp; consultancies
              (Palantir ($PLTR), Mudano (acq. $ACN)). Jakub has been awarded an AI climate tech
              patent by the US PTO and has graduated from Oxford.
            </p>
            <div className="pt-2">
              <Link to="/about" className="bp-cta">Read full story</Link>
            </div>
          </div>

          {/* Spec note */}
          <aside className="bp-mono text-sm leading-[1.9] text-muted-foreground border-l-2 border-accent pl-5 self-start bg-white/[0.03] py-4 pr-4">
            <div><span className="text-accent">ROLE&nbsp;&nbsp;&nbsp;&nbsp;</span> AI researcher / author / founder</div>
            <div><span className="text-accent">NOW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Rig — data infrastructure for teams</div>
            <div><span className="text-accent">PREV&nbsp;&nbsp;&nbsp;&nbsp;</span> Tenderd · Palantir · Hypermile</div>
            <div><span className="text-accent">RAISED&nbsp;&nbsp;</span> ~$32M as CEO / CTO</div>
            <div><span className="text-accent">EDU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> University of Oxford</div>
            <div><span className="text-accent">PATENT&nbsp;&nbsp;</span> US PTO — AI climate tech</div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
