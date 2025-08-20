import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      period: "2023 - Present",
      title: "Productivity Tools for WhatsApp",
      company: "Current Project",
      description: "Developing innovative productivity solutions for WhatsApp users, leveraging AI and machine learning to enhance communication efficiency.",
      tags: ["AI", "Product Development", "Mobile"]
    },
    {
      period: "2018 - 2023",
      title: "CTO",
      company: "Tenderd (YC S18)",
      description: "Led technical strategy and development at Y Combinator-backed startup. Built and scaled engineering teams while developing core AI-driven solutions.",
      tags: ["CTO", "Y Combinator", "Team Leadership"]
    },
    {
      period: "2016 - 2018",
      title: "Founder & CEO",
      company: "Hypermile (Acquired by K1)",
      description: "Founded AI startup focused on climate tech solutions. Successfully raised funding and achieved acquisition by K1. Awarded AI climate tech patent by US PTO.",
      tags: ["Founder", "Climate Tech", "Patent", "Acquisition"]
    },
    {
      period: "2015 - 2016",
      title: "Senior ML Engineer",
      company: "Palantir Technologies ($PLTR)",
      description: "Developed mission-critical machine learning algorithms for large-scale data analysis and intelligence applications at this global tech giant.",
      tags: ["Machine Learning", "Big Data", "Enterprise"]
    },
    {
      period: "2014 - 2015",
      title: "ML Team Lead",
      company: "Mudano (acquired by Accenture)",
      description: "Grew the machine learning team from 1 to 15 people. Led development of AI solutions for enterprise clients across various industries.",
      tags: ["Team Growth", "Enterprise AI", "Leadership"]
    },
    {
      period: "2012 - 2014",
      title: "Data Science Lecturer",
      company: "University of Oxford",
      description: "Taught data science to graduate students and staff. Developed curriculum and guest-lectured on advanced machine learning topics.",
      tags: ["Education", "Oxford", "Data Science"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title gradient-text">
            Professional Journey
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Over a decade of experience in AI, data science, and entrepreneurship, 
            from academic research to scaling startups and leading teams at global companies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
      </div>
    </section>
  );
};

export default Experience;