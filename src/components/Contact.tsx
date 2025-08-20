import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For professional inquiries and collaboration opportunities",
      action: "Send Email",
      link: "mailto:jakub@example.com"
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <method.icon className="w-6 h-6 text-accent mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {method.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(method.link, '_blank')}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Collaboration Opportunity" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or inquiry..." 
                  rows={5}
                />
              </div>
              <Button className="w-full btn-hero">
                Send Message
              </Button>
            </CardContent>
          </Card>
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