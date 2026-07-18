import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center border-b border-border pt-24 pb-16">
      <div className="container-width px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
          {/* Left: identity */}
          <div>
            <p className="bp-kicker mb-5">// dwg. no. JL-001 — personal profile</p>

            <h1 className="text-hero text-white">
              Jakub<br />Langr
            </h1>

            <span className="bp-dim mt-3">
              ⟷ AI researcher · author · founder&nbsp;&nbsp;·&nbsp;&nbsp;↕ 10+ yrs
            </span>

            <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-xl leading-relaxed">
              AI researcher, author &amp; founder. Building{' '}
              <span className="text-accent font-semibold">Rig</span> — data infrastructure
              for business teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="bp-cta">Read the full profile</Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="bp-mono inline-block text-sm uppercase tracking-[0.12em] text-foreground px-5 py-[0.85rem] border border-border hover:border-accent hover:text-accent transition-smooth"
              >
                Get in touch
              </button>
            </div>

            {/* Schematic detail */}
            <div className="mt-9 border border-border/70 p-3 max-w-md">
              <svg viewBox="0 0 320 78" className="w-full h-auto block" role="img" aria-label="data to context to automation pipeline diagram">
                <g fill="none" stroke="#7fb0ff" strokeWidth="1.4">
                  <line x1="10" y1="40" x2="70" y2="40" />
                  <line x1="86" y1="40" x2="150" y2="18" />
                  <line x1="86" y1="40" x2="150" y2="62" />
                  <line x1="166" y1="18" x2="232" y2="40" />
                  <line x1="166" y1="62" x2="232" y2="40" />
                  <line x1="248" y1="40" x2="310" y2="40" />
                </g>
                <g fill="#0c2f63" stroke="#7fb0ff" strokeWidth="1.6">
                  <circle cx="78" cy="40" r="8" />
                  <circle cx="158" cy="18" r="8" />
                  <circle cx="158" cy="62" r="8" />
                  <circle cx="240" cy="40" r="8" />
                </g>
                <g fill="#7fb0ff">
                  <circle cx="10" cy="40" r="3" />
                  <circle cx="310" cy="40" r="3" />
                </g>
              </svg>
              <div className="bp-mono text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground mt-2">
                fig. A — data → context → automation pipeline
              </div>
            </div>
          </div>

          {/* Right: spec callout */}
          <aside className="bp-panel p-5 lg:mt-2">
            <span className="bp-tick bp-tick-tl" />
            <span className="bp-tick bp-tick-tr" />
            <span className="bp-tick bp-tick-bl" />
            <span className="bp-tick bp-tick-br" />
            <div className="bp-row"><span className="bp-k">Raised</span><span className="bp-v">$32M</span></div>
            <div className="bp-row"><span className="bp-k">Book</span><span className="bp-v">Best-seller (GenAI)</span></div>
            <div className="bp-row"><span className="bp-k">Backing</span><span className="bp-v">Y Combinator</span></div>
            <div className="bp-row"><span className="bp-k">Patent</span><span className="bp-v">US PTO — AI climate</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
