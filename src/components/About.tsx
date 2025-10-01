import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title gradient-text">
            Quick Summary
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-slide-up shadow-elegant">
            <CardContent className="p-8 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I have over a decade of expertise as an AI researcher, entrepreneur, consultant, and executive. 
                I can give you true insights into how AI really works and what its potential and limits are - 
                unlike many self-proclaimed freshly baked "AI experts" who suddenly appeared with the hype of ChatGPT.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                I'm also a former Oxford lecturer, Y Combinator entrepreneur, author of the first book on GANs, 
                and someone who has raised $32M+ for AI startups.
              </p>
              <Link to="/about">
                <Button className="btn-hero">
                  Read Full Story
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;