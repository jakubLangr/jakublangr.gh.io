import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/jakublangr', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/jakublangr', label: 'GitHub' },
    { icon: Mail, href: 'mailto:jklangr@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="bp-mono text-sm tracking-[0.08em] text-foreground">
              JL <span className="text-accent">//</span> jakublangr
            </div>
            <p className="bp-mono text-xs text-muted-foreground mt-2 tracking-wide">
              AI · Research · Ventures — data infrastructure for business teams
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-smooth"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 bp-mono text-[0.7rem] tracking-[0.12em] uppercase text-muted-foreground">
          <span>&copy; {currentYear} Jakub Langr</span>
          <span>Rev. {currentYear} · sheet 1 of 1 · scale 1:1</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
