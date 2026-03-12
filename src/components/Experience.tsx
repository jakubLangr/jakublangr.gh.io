import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const experiences = [
    {
      period: "2025 - Present",
      title: "CTO",
      company: "Rig | Data Context & Automation Platform",
      description: "Building a context-aware AI platform to chat to data and build automations on internal data. Re-wiring business primitives for the AI era.",
      tags: ["AI", "LLMs", "Data Platform", "Startup"]
    },
    {
      period: "2023 - Present",
      title: "Advisor",
      company: "AlphaSchedule",
      description: "Advising on AI/ML strategy and product development.",
      tags: ["Advisory", "AI/ML"]
    },
    {
      period: "2023 - 2024",
      title: "CTO",
      company: "Tenderd (YC S18)",
      description: "Led technical strategy at this YC-backed fleet management and optimization company in Dubai.",
      tags: ["CTO", "Y Combinator", "Fleet Tech", "Dubai"]
    },
    {
      period: "2022 - 2023",
      title: "AI/ML & FDE (ML)",
      company: "Palantir Technologies",
      description: "Business development and forward-deployed engineering for AI/ML across London and Munich.",
      tags: ["AI/ML", "Enterprise", "BD"]
    },
    {
      period: "2019 - 2023",
      title: "Co-Founder & Advisor",
      company: "Hypermile (Acq. by K1, backed by Y Combinator)",
      description: "Founded AI-powered telematics and driver assist system for commercial vehicles. YC Summer 20 batch. CEO/CTO at companies that raised ~$32M. Got ~$1M in grant funding, hired 15 FTEs, secured pilots with major automotive orgs. Awarded US PTO AI climate tech patent.",
      tags: ["Founder", "YC S20", "Climate Tech", "Patent", "Acquisition"]
    },
    {
      period: "2019 - 2022",
      title: "AI/ML Consultant",
      company: "Brainpool AI",
      description: "Built high-throughput ML pipelines processing ~500K LLM calls/day. Computer vision, OCR, image segmentation, and deep learning projects across production and consulting engagements.",
      tags: ["ML Pipelines", "Computer Vision", "Consulting"]
    },
    {
      period: "2018 - 2023",
      title: "Guest Lecturer",
      company: "University of Oxford",
      description: "Delivered termly lectures on Generative Adversarial Networks for the AI for IoT & Edge Computing course at Oxford Continuing Education.",
      tags: ["Education", "Oxford", "GANs"]
    },
    {
      period: "2017 - Present",
      title: "Author",
      company: "Manning Publications",
      description: "Wrote the best-selling book GANs in Action. First book on GANs, translated into 5+ languages, 5K+ units sold. GANs have ~2.5x the cited impact of TensorFlow.",
      tags: ["Author", "GANs", "Deep Learning"]
    },
    {
      period: "2017 - 2019",
      title: "R&D Data Scientist",
      company: "Mudano (acq. by Accenture)",
      description: "Grew ML team from 1 to ~20 as the org grew from 50 to ~200. Secured tens of millions for a top UK financial institution through population-scale ML models. Architected ML microservices on AWS.",
      tags: ["Team Growth", "Enterprise AI", "AWS", "FinTech"]
    },
    {
      period: "2016 - 2017",
      title: "Entrepreneur In Residence",
      company: "Entrepreneur First",
      description: "Selected into the 7th cohort of Europe's top pre-seed accelerator. 3% acceptance rate. Applied way after the deadline. Got in anyway.",
      tags: ["Accelerator", "Entrepreneurship"]
    },
    {
      period: "2015 - 2016",
      title: "Data Science Tech Lead",
      company: "Filtered.com",
      description: "Led tech development of a team of four. Brought the team to a modern Python/Docker stack, rewrote core ML algorithm, built Flask APIs and test suites.",
      tags: ["Tech Lead", "Python", "ML"]
    },
    {
      period: "2014 - 2015",
      title: "IT Demonstrator",
      company: "University of Oxford",
      description: "Taught R, Linux, Excel, and LaTeX courses to Oxford staff and students.",
      tags: ["Teaching", "Oxford", "R"]
    },
  ];

  const visibleExperiences = isExpanded ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title gradient-text">
            Professional Journey
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Over a decade building AI companies, shipping ML systems at scale,
            and writing about it along the way — from Oxford to Y Combinator to building Rig.
          </p>
        </div>

        <div className="space-y-8">
          {visibleExperiences.map((exp, index) => (
            <Card
              key={index}
              className="animate-slide-up shadow-elegant hover:shadow-glow transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="self-start sm:self-center">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-accent/10 transition-smooth text-muted-foreground hover:text-foreground"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All {experiences.length} Roles <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;