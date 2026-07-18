import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    period: '2025 — Present',
    title: 'Founder & CTO',
    company: 'Rig',
    description:
      'Building a context-aware AI platform to chat to data and build automations on internal data. Re-wiring business primitives for the AI era.',
  },
  {
    period: '2023 — Present',
    title: 'Advisor',
    company: 'AlphaSchedule',
    description: 'Advising on AI/ML strategy and product development.',
  },
  {
    period: '2023 — 2024',
    title: 'CTO',
    company: 'Tenderd (YC S18)',
    description:
      'Led technical strategy at this YC-backed fleet management and optimization company in Dubai.',
  },
  {
    period: '2022 — 2023',
    title: 'AI/ML & FDE (ML)',
    company: 'Palantir Technologies',
    description:
      'Business development and forward-deployed engineering for AI/ML across London and Munich.',
  },
  {
    period: '2019 — 2023',
    title: 'Co-Founder',
    company: 'Hypermile (acq. Konboi, YC S20)',
    description:
      'Founded AI-powered telematics and driver-assist for commercial vehicles. CEO/CTO at companies that raised ~$32M; ~$1M in grants, 15 FTEs, pilots with major automotive orgs. Awarded a US PTO AI climate-tech patent.',
  },
  {
    period: '2019 — 2022',
    title: 'AI/ML Consultant',
    company: 'Brainpool AI',
    description:
      'Built high-throughput ML pipelines processing ~500K LLM calls/day. Computer vision, OCR, segmentation, and deep learning across production and consulting.',
  },
  {
    period: '2018 — 2023',
    title: 'Guest Lecturer',
    company: 'University of Oxford',
    description:
      'Delivered termly lectures on Generative Adversarial Networks for the AI for IoT & Edge Computing course at Oxford Continuing Education.',
  },
  {
    period: '2017 — Present',
    title: 'Author',
    company: 'Manning Publications',
    description:
      'Wrote the best-selling GANs in Action — the first book on GANs, translated into 5+ languages, 5K+ units sold.',
  },
  {
    period: '2017 — 2019',
    title: 'R&D Data Scientist',
    company: 'Mudano (acq. Accenture)',
    description:
      'Grew the ML team from 1 to 15 as the org grew from 50 to ~200. Secured tens of millions for a top UK financial institution through population-scale ML models.',
  },
  {
    period: '2016 — 2017',
    title: 'Entrepreneur in Residence',
    company: 'Entrepreneur First',
    description: "Selected into the 7th cohort of Europe's top pre-seed accelerator. 3% acceptance rate.",
  },
];

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visible = isExpanded ? experiences : experiences.slice(0, 5);

  return (
    <section id="experience" className="section-padding border-b border-border">
      <div className="container-width">
        <span className="bp-fig">// fig. 04 — timeline</span>
        <h2 className="text-section-title gradient-text">Professional Journey</h2>

        <div className="bp-ladder max-w-3xl">
          {visible.map((exp, i) => (
            <div key={i} className="bp-node">
              <div className="bp-mono text-xs tracking-[0.12em] uppercase text-accent">
                {exp.period}
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-1.5">{exp.title}</h3>
              <div className="bp-mono text-xs text-muted-foreground tracking-wide">
                {exp.company}
              </div>
              <p className="mt-2 text-[0.95rem] text-foreground/80 max-w-[60ch]">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 ml-[2.15rem]">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bp-mono inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-accent border border-border hover:border-accent px-4 py-2.5 transition-smooth"
          >
            {isExpanded ? (
              <>Show fewer <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show all {experiences.length} roles <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
