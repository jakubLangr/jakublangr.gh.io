import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Award, BookOpen } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$32M",
      label: "Raised as CEO/CTO",
      description: "Successfully raised funding across multiple ventures"
    },
    {
      icon: Users,
      value: "15x",
      label: "Team Growth",
      description: "Grew ML team from 1 to 15 at Mudano"
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      description: "Over a decade in AI and machine learning"
    },
    {
      icon: BookOpen,
      value: "1st",
      label: "GANs Book",
      description: "First dedicated book on Generative Adversarial Networks"
    }
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title text-white mb-4">
            Impact by Numbers
          </h2>
          <p className="text-lead text-primary-foreground/80 max-w-2xl mx-auto">
            Key achievements and milestones throughout my journey in AI, entrepreneurship, and academia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 animate-slide-up hover:bg-primary-foreground/15 transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <div className="text-3xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="font-semibold mb-2 text-primary-foreground">
                  {stat.label}
                </div>
                <p className="text-sm text-primary-foreground/80">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;