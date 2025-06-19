
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EmpowermentSection = () => {
  const initiatives = [
    {
      title: "EmpowHer TV Show",
      description: "Hosted a groundbreaking women's empowerment television show, featuring inspiring stories and actionable advice for personal and professional growth.",
      impact: "Reached 10K+ viewers, featured 50+ empowering stories",
      category: "Media & Advocacy",
      icon: "📺",
      color: "from-brand-gold-400 to-brand-gold-600"
    },
    {
      title: "JijiFresh Marketplace",
      description: "Connecting local farmers directly with urban consumers, creating sustainable income streams for rural communities.",
      impact: "100+ farmers onboarded, $25K+ in direct sales",
      category: "Economic Empowerment",
      icon: "🌱",
      color: "from-brand-mint-400 to-brand-mint-600"
    },
    {
      title: "Free Digital Library",
      description: "Open-source educational platform providing free access to books, courses, and learning materials for underserved communities.",
      impact: "1000+ students reached, 25 schools partnered",
      category: "Education",
      icon: "📚",
      color: "from-brand-violet-400 to-brand-violet-600"
    },
    {
      title: "Women in Tech Mentorship",
      description: "One-on-one mentoring program helping women transition into tech careers with practical guidance and support.",
      impact: "50+ women mentored, 85% career progression",
      category: "Career Development",
      icon: "👩🏾‍💻",
      color: "from-brand-violet-400 to-brand-mint-400"
    },
    {
      title: "Blockchain Education Initiative",
      description: "Teaching smart contract development and Web3 concepts to underrepresented communities through workshops and online content.",
      impact: "200+ developers trained, 15 startups launched",
      category: "Tech Education",
      icon: "⛓️",
      color: "from-brand-mint-400 to-brand-gold-400"
    },
    {
      title: "Content Creator Bootcamp",
      description: "Helping aspiring creators build booming social media presence through strategy sessions and practical workshops.",
      impact: "300+ creators trained, 2M+ collective followers gained",
      category: "Creator Economy",
      icon: "📱",
      color: "from-brand-gold-400 to-brand-violet-400"
    }
  ];

  const achievements = [
    { metric: "$50K+", label: "In scholarships & grants secured" },
    { metric: "1K+", label: "Lives directly impacted" },
    { metric: "25+", label: "Communities served" },
    { metric: "50+", label: "Women mentored in tech" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-mint-50 to-background dark:from-brand-mint-950/10 dark:to-background" id="empowerment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">
            Impact & <span className="text-gradient">Empowerment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond code and content, I'm committed to creating opportunities, breaking barriers, 
            and building a more inclusive future. Here's how I'm turning passion into purpose.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.label}
              className="text-center p-6 glass-card rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-brand-violet-600 font-playfair mb-2">
                {achievement.metric}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Initiatives */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <Card 
              key={initiative.title}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${initiative.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {initiative.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-playfair">{initiative.title}</CardTitle>
                </div>
                <span className="text-xs px-2 py-1 bg-brand-mint-100 dark:bg-brand-mint-900/50 text-brand-mint-700 dark:text-brand-mint-300 rounded-full font-medium mb-3 inline-block">
                  {initiative.category}
                </span>
                <CardDescription className="text-base">
                  {initiative.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-gradient-to-r from-brand-violet-50 to-brand-mint-50 dark:from-brand-violet-950/20 dark:to-brand-mint-950/20 rounded-xl">
                  <div className="text-sm font-medium text-brand-violet-700 dark:text-brand-violet-300 mb-1">Impact:</div>
                  <div className="text-sm text-muted-foreground">{initiative.impact}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-brand-violet-600 to-brand-mint-600 rounded-3xl p-12 text-white animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold mb-4 font-playfair">
            Let's Create Impact Together
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you want to collaborate on empowerment initiatives, support existing programs, 
            or create something entirely new, I believe in the power of collective action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-violet-600 hover:bg-gray-100 px-8"
            >
              Partner With Me
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-violet-600 px-8"
            >
              Support Our Initiatives
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSection;
