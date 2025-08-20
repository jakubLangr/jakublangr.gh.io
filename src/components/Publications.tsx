import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, BookOpen, FileText, Presentation } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      type: "Patent",
      icon: BookOpen,
      title: "Autonomous Vehicle Trajectory Prediction",
      subtitle: "Patent-grade innovation in commercial vehicle AI",
      description: "Developed and patented a novel driving assistance system using advanced sensor fusion and predictive modeling. The system combines real-time trajectory prediction with energy consumption optimization.",
      year: "2023",
      tags: ["Patent", "AI", "Autonomous Vehicles"],
      featured: true,
      link: "https://patents.google.com/patent/GB2617593A/fr"
    },
    {
      type: "Product",
      icon: Presentation,
      title: "LLM-Powered Construction Intelligence",
      subtitle: "Large-scale RAG implementation for construction operations",
      description: "Architected and led development of an industry-first construction assistant using retrieval-augmented generation (RAG) on 4M+ daily datapoints with Text2SQL capabilities.",
      year: "2023",
      tags: ["LLM", "RAG", "Construction", "ML"],
      link: "https://linkedin.com/in/jakublangr"
    },
    {
      type: "Book",
      icon: BookOpen,
      title: "GANs in Action",
      subtitle: "Deep Learning with Generative Adversarial Networks",
      description: "Authored the definitive practical guide on GANs, recognized as the best-selling book in its category with 5,000+ units sold and translations in 5+ languages. Published in 2019 before widespread generative AI adoption.",
      year: "2019",
      tags: ["GANs", "Deep Learning", "Book", "Manning"],
      featured: true,
      link: "https://www.manning.com/books/gans-in-action"
    },
    {
      type: "System",
      icon: FileText,
      title: "Enterprise-Scale Financial ML Pipeline",
      subtitle: "High-throughput project task automation",
      description: "Designed and implemented an ML-powered recommendation system for project task automation at major UK financial institutions, processing population-scale data through Teradata SQL.",
      year: "2020",
      tags: ["ML Pipeline", "Finance", "Automation"],
      link: "https://linkedin.com/in/jakublangr"
    },
    {
      type: "Speaking",
      icon: Presentation,
      title: "AI Conference Speaking",
      subtitle: "Industry thought leadership and education",
      description: "Regular speaker at major conferences including AI EXPO, Big Data Europe, Codiax, PyCon CZ, and guest lecturer at University of Oxford on AI Cloud & Edge Implementations.",
      year: "2024",
      tags: ["Speaking", "Education", "Conferences"],
      link: "https://linkedin.com/in/jakublangr"
    }
  ];

  return (
    <section id="publications" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title gradient-text">
            Publications & Writings
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Technical writings, research contributions, and thought leadership in AI, machine learning, 
            and data science spanning books, conference reviews, and analytical articles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className={`animate-slide-up shadow-elegant hover:shadow-glow transition-smooth ${
                pub.featured ? 'ring-2 ring-accent/20 bg-gradient-to-br from-card to-accent/5' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <pub.icon className="w-8 h-8 text-accent mb-2" />
                  <Badge variant={pub.featured ? "default" : "secondary"}>
                    {pub.year}
                  </Badge>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    {pub.type}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    {pub.title}
                  </CardTitle>
                  <p className="text-sm text-accent font-medium">
                    {pub.subtitle}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {pub.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(pub.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in exploring more of my technical writings and research contributions?
          </p>
          <Button className="btn-hero">
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;