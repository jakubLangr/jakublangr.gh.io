import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-width">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-section-title gradient-text">
                About Jakub Langr
              </h1>
              <p className="text-lead max-w-3xl mx-auto">
                AI Researcher, Entrepreneur & Author with over a decade of experience
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Summary */}
              <Card className="animate-slide-up shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-accent">Professional Summary</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Jakub has worked in data & AI for over a decade. He is currently working on productivity tools for Whatsapp. Previously, he was the CTO for Tenderd (YC S18). Before that, he founded AI startup called Hypermile (acquired by K1, backed by Y Combinator). He raised as a CEO/CTO ~$32M. He wrote a best-selling book on an area of Generative AI and he guest lectured at the University of Oxford. He worked for global tech companies & consultancies (Palantir ($PLTR), Mudano (acq. $ACN), where he grew the ML team from 1 to 15) and startups (as a Data Science Tech Lead at Filtered and a consultant at Founders Factory). Jakub has been awarded an AI climate tech patent by the US PTO and has graduated from Oxford.
                  </p>
                </CardContent>
              </Card>

              {/* In a Nutshell */}
              <Card className="animate-slide-up shadow-elegant" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-accent">In a Nutshell</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    I have over a decade of expertise as an AI researcher, entrepreneur, consultant, and executive. 
                    I can give you true insights into how AI really works and what its potential and limits are - 
                    unlike many self-proclaimed freshly baked "AI experts" who suddenly appeared with the hype of ChatGPT.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm also a former Oxford lecturer, Y Combinator entrepreneur, author of the first book on GANs, 
                    and someone who has raised $32M+ for AI startups. When not building AI systems, I enjoy traveling, 
                    learning new technologies, and mentoring the next generation of AI practitioners.
                  </p>
                </CardContent>
              </Card>

              {/* Academic Foundation */}
              <Card className="animate-slide-up shadow-elegant" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-accent">Academic Foundation</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    If you had asked me during my Oxford years where I envisaged my professional future, 
                    I would have said I wanted to become a prominent AI researcher in academia. I was conducting 
                    research in machine learning, teaching graduate students and staff, and was deeply immersed 
                    in the theoretical foundations of artificial intelligence.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    However, I realized that real-world impact required moving beyond pure academia. 
                    The gap between theoretical research and practical applications was too wide, 
                    and I wanted to build systems that would actually transform industries and help people.
                  </p>
                </CardContent>
              </Card>

              {/* Entrepreneurial Journey */}
              <Card className="animate-slide-up shadow-elegant" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-accent">Entrepreneurial Journey</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    So in 2015, I took a leap of faith and entered the corporate world, eventually founding Hypermile - 
                    an AI startup focused on sustainable transportation. We developed patent-pending trajectory prediction 
                    algorithms and raised millions in funding before being acquired by K1.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Later, as CTO of Tenderd (YC S18), I scaled the team to 25 people and built LLM-powered systems 
                    processing 4M+ daily datapoints. We secured $30M in contracts and raised significant funding.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Throughout this journey, I also authored "GANs in Action" - the first dedicated book on 
                    Generative Adversarial Networks, which became a bestseller and was translated into 5+ languages.
                  </p>
                </CardContent>
              </Card>

              {/* Current Mission */}
              <Card className="animate-slide-up shadow-elegant" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-accent">Current Mission</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Today, I'm focused on building productivity tools for WhatsApp and helping organizations 
                    navigate the AI landscape. I believe we're at a critical inflection point where AI will 
                    fundamentally transform how we work and live.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My goal is to help as many people and organizations as possible prepare for this AI-driven future - 
                    not just from a technical perspective, but considering the broader implications for society, 
                    ethics, and human potential.
                  </p>
                </CardContent>
              </Card>

              {/* Personal Touch */}
              <Card className="animate-slide-up shadow-elegant" style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-accent">Personal Note</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    By this point you probably are already aware of the fact that this is a blog of a slightly eccentric individual. And for some reason decided to stay. You're a persistent one, aren't you?
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    I went to Oxford, studied very questionable degree and did some statistics/economics. I also was kind of crazy about the whole Massive Online Open Courses thing and forgot that real world existed. Then one day, after an intervention from my friends and family, I realized I should probably get off these MOOCs, but it was too late. I already finished 18 of them. But hey, at least I can remember playing with machine learning, data science, statistics, computer science and all the things awesome.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Now I spend some time doing improv and updating this website. If you want to, feel free to get in touch at james [dot] langr [at] gmail [dot] com or via the LinkedIn profile in links!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
