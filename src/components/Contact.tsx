import { Mail, Linkedin, Github, Zap, Compass, Presentation } from 'lucide-react';

const Contact = () => {
  const links = [
    { key: 'Email', value: 'jklangr@gmail.com', href: 'mailto:jklangr@gmail.com', icon: Mail },
    { key: 'LinkedIn', value: '/in/jakublangr', href: 'https://linkedin.com/in/jakublangr', icon: Linkedin },
    { key: 'GitHub', value: '/jakublangr', href: 'https://github.com/jakublangr', icon: Github },
  ];

  const services = [
    { icon: Compass, title: 'AI Strategy', desc: 'Strategic planning and roadmaps for AI adoption.' },
    { icon: Zap, title: 'Technical Advisory', desc: 'Hands-on guidance for ML/AI architecture and delivery.' },
    { icon: Presentation, title: 'Speaking & Training', desc: 'Conference talks, workshops, and team training.' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <span className="bp-fig">// fig. 06 — contact</span>
        <h2 className="text-section-title gradient-text">Let's Connect</h2>
        <p className="text-lead max-w-2xl">
          Available for AI strategy consulting, technical advisory, and speaking engagements.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="https://calendar.app.google/sNTe7tPULpja3hM8A" target="_blank" rel="noopener noreferrer" className="bp-cta">
            Schedule a consultation
          </a>
        </div>

        {/* Channels */}
        <div className="bp-panel grid sm:grid-cols-3 mt-9">
          <span className="bp-tick bp-tick-tl" />
          <span className="bp-tick bp-tick-br" />
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-b sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0 border-[hsl(214_45%_46%)] group"
            >
              <div className="bp-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground mb-2 flex items-center gap-2">
                <l.icon className="w-3.5 h-3.5 text-accent" /> {l.key}
              </div>
              <div className="bp-mono text-sm text-foreground group-hover:text-accent transition-colors break-all">
                {l.value}
              </div>
            </a>
          ))}
        </div>

        {/* Consulting */}
        <div id="consulting" className="mt-9 bp-panel p-7">
          <span className="bp-tick bp-tick-tl" />
          <span className="bp-tick bp-tick-tr" />
          <span className="bp-tick bp-tick-bl" />
          <span className="bp-tick bp-tick-br" />
          <span className="bp-fig">// fig. 06.1 — engagements</span>
          <h3 className="text-2xl font-bold text-white mb-2">Professional Consulting</h3>
          <p className="text-foreground/80 max-w-2xl mb-7">
            Available for AI strategy consulting, technical advisory roles, and speaking
            engagements — helping teams accelerate AI initiatives with proven expertise.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="border border-border p-4 bg-white/[0.02]">
                <s.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-1.5">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
