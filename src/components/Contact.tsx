import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For professional inquiries and collaboration opportunities",
      action: "Send Email",
      link: "mailto:jklangr@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me for professional networking and updates",
      action: "Connect on LinkedIn",
      link: "https://linkedin.com/in/jakublangr"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Explore my open-source contributions and projects",
      action: "View GitHub",
      link: "https://github.com/jakublangr"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title gradient-text">
            Let's Connect
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Interested in collaboration, consulting, or just want to discuss AI and data science? 
            I'd love to hear from you. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="text-center">
                    <method.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{method.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {method.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(method.link, '_blank')}
                      className="w-full"
                    >
                      {method.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/20 rounded-xl shadow-elegant">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 gradient-text">Professional Consulting</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Available for AI strategy consulting, technical advisory roles, and speaking engagements. 
              Let's discuss how I can help accelerate your AI initiatives with proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-hero shadow-glow">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-accent/30 text-accent hover:bg-accent/10">
                View Services & Rates
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">AI Strategy</h4>
              <p className="text-sm text-muted-foreground">Strategic planning and roadmap development for AI adoption</p>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Technical Advisory</h4>
              <p className="text-sm text-muted-foreground">Hands-on guidance for ML/AI implementation and architecture</p>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0V4" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Speaking & Training</h4>
              <p className="text-sm text-muted-foreground">Conference talks, workshops, and team training sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;