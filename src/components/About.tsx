import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: "Community First",
      description: "'Of what good is life if you live it alone?' I am a community builder—hosting international writing contests, founding a hiking group, mentoring young adults and single mothers, building platforms, hosting shows, and creating opportunities for others.",
      icon: "🤝"
    },
    {
      title: "Stories that Matter",
      description: "I've been writing since my school days. I use words to breathe life into the world I want to see—from tackling social issues to weaving unforgettable romance and children's fiction. As a ghostwriter, I help others tell stories that matter, too.",
      icon: "✍️"
    },
    {
      title: "Code with Purpose",
      description: "Every smart contract, every dApp I ship, every line of code is built with people in mind. I create tools that empower, educate, and elevate—bridging financial, educational, and cultural gaps with technology.",
      icon: "⛓️"
    },
    {
      title: "Always Learning",
      description: "With a background in Political Science, certifications across tech and media, and a Master’s degree on the horizon, I’m living proof that growth has no finish line. I evolve, adapt, and stay endlessly curious.",
      icon: "🚀"
    }
  ];

  const achievements = [
    { title: "Published Author", desc: "Books across genres + professional ghostwriting" },
    { title: "Smart Contract Developer", desc: "Building secure, innovative blockchain solutions" },
    { title: "TV Host", desc: "EmpowHer – Women’s empowerment television show" },
    { title: "Content Creator", desc: "Growing social media presence with purpose-driven content" },
    { title: "Philanthropist", desc: "Grassroots empowerment and tech inclusion efforts" }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">
              The Many Faces of <span className="text-gradient">Best</span>
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
  <p>
    I’m <strong>Best Nwachinemere</strong>—a blockchain builder, full-stack alchemist, and storyteller born and raised in Nigeria. My work lives where <em>code</em>, <em>community</em>, and <em>culture</em> collide.
  </p>

  <ul className="list-disc pl-6">
    <li>
      As a <strong>smart contract developer</strong> and <strong>blockchain engineer</strong>, I architect trustless rails for finance, commerce, and social change.
    </li>
    <li>
      As a <strong>full-stack developer</strong>, I transform vision into intuitive, accessible software.
    </li>
    <li>
      As an <strong>author</strong> and <strong>ghostwriter</strong>, I write stories that move people—emotionally and intellectually.
    </li>
  </ul>

  <p>
    I create spaces where people connect, learn, and grow. Through <strong>content creation</strong> and education, I’ve become a voice in the tech space, sharing tools, strategies, and insights with a new generation of dreamers and doers.
  </p>

  <p>
    Off the screen, I host <strong>EmpowHer</strong>, a women-in-tech show amplifying African voices, and lead community-first projects that make blockchain and digital literacy more accessible to everyday people. My mission? <em>Lift others as I climb.</em>
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
