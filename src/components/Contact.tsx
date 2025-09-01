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

        <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Professional Consulting</h3>
          <p className="text-muted-foreground mb-4">
            Available for AI strategy consulting, technical advisory roles, and speaking engagements. 
            Let's discuss how I can help with your AI initiatives.
          </p>
          <Button variant="outline">
            Learn About Consulting Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;