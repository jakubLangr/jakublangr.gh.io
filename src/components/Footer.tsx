import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/jakublangr", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/jakublangr", label: "GitHub" },
    { icon: Mail, href: "mailto:jakub@example.com", label: "Email" },
    { icon: BookOpen, href: "#", label: "Publications" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jakub Langr</h3>
            <p className="text-primary-foreground/80 mb-4">
              AI Researcher, Data Scientist & Entrepreneur passionate about 
              advancing artificial intelligence and machine learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary-foreground transition-smooth">
                  Experience
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-primary-foreground transition-smooth">
                  Publications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-primary-foreground/80 mb-2">
              Available for consulting, speaking engagements, and collaboration opportunities.
            </p>
            <p className="text-primary-foreground/80">
              Based in the UK • Working globally
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} Jakub Langr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;