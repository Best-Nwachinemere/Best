
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: "Code with Purpose",
      description: "Every smart contract, every app, every line of code serves humanity",
      icon: "⛓️"
    },
    {
      title: "Stories that Matter",
      description: "From novels to ghostwriting, words are my superpower for change",
      icon: "✍️"
    },
    {
      title: "Community First",
      description: "Building platforms, hosting shows, and creating opportunities for others",
      icon: "🤝"
    },
    {
      title: "Always Learning",
      description: "From blockchain to content creation, I evolve with the times",
      icon: "🚀"
    }
  ];

  const achievements = [
    { title: "Smart Contract Developer", desc: "Building secure, innovative blockchain solutions" },
    { title: "Published Author", desc: "Multiple books across genres + ghostwriting" },
    { title: "TV Host", desc: "EmpowHer - Women's empowerment television show" },
    { title: "Content Creator", desc: "Booming social media presence" },
    { title: "Philanthropist", desc: "Ongoing community empowerment initiatives" }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">
              The Many Faces of <span className="text-gradient">Best</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                I'm not just one thing—I'm a universe of possibilities. Born in Nigeria with an 
                insatiable curiosity for technology and storytelling, I've built my career at the 
                intersection of innovation and impact.
              </p>
              
              <p>
                As a <strong>smart contract developer</strong> and <strong>blockchain engineer</strong>, 
                I craft the financial infrastructure of tomorrow. As a <strong>fullstack developer</strong>, 
                I bring ideas to life with beautiful, functional applications. As an <strong>author</strong> 
                and <strong>ghostwriter</strong>, I weave narratives that captivate and inspire.
              </p>
              
              <p>
                But perhaps what I'm most proud of is my work as a <strong>philanthropist</strong> and 
                <strong>content creator</strong>. From hosting my women's empowerment TV show 
                <strong> EmpowHer</strong> to building tools that democratize access to technology, 
                everything I do is about lifting others as I climb.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-brand-violet-50 to-brand-mint-50 dark:from-brand-violet-950/20 dark:to-brand-mint-950/20 rounded-2xl">
              <blockquote className="text-lg italic text-brand-violet-700 dark:text-brand-violet-300 font-medium">
                "I don't just build technology—I build futures. Every project, every story, 
                every initiative is a step toward a more inclusive, empowered world."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                — My mission statement
              </cite>
            </div>
          </div>

          {/* Achievements & Values */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-8 font-playfair text-center lg:text-left">
              What I Bring to the Table
            </h3>
            
            {/* Achievements List */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="flex items-start space-x-3 p-4 glass-card rounded-xl hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-2 h-2 bg-brand-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-brand-violet-700 dark:text-brand-violet-300 font-playfair">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${0.1 * index + 0.5}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <h4 className="font-bold mb-1 font-playfair text-brand-violet-700 dark:text-brand-violet-300 text-sm">
                      {value.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
