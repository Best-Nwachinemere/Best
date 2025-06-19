
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "DeFi Smart Contracts",
      description: "Custom smart contract solutions for decentralized finance protocols, including yield farming and liquidity pools",
      tech: ["Solidity", "Web3.js", "Hardhat", "OpenZeppelin"],
      category: "Blockchain",
      color: "from-brand-violet-400 to-brand-violet-600",
      icon: "⛓️"
    },
    {
      title: "JijiFresh Marketplace",
      description: "A community-driven marketplace connecting local farmers with consumers, built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Community",
      color: "from-brand-mint-400 to-brand-mint-600",
      icon: "🌱"
    },
    {
      title: "Timely Scheduler",
      description: "An intelligent scheduling app that helps teams coordinate across time zones with AI-powered suggestions",
      tech: ["TypeScript", "Next.js", "Prisma", "OpenAI"],
      category: "Productivity",
      color: "from-brand-gold-400 to-brand-gold-600",
      icon: "⏰"
    },
    {
      title: "NFT Collection Platform",
      description: "Full-stack NFT marketplace with minting, trading, and royalty distribution features",
      tech: ["React", "Solidity", "IPFS", "Ethereum"],
      category: "Web3",
      color: "from-brand-violet-400 to-brand-mint-400",
      icon: "🎨"
    },
    {
      title: "Content Management System",
      description: "Custom CMS for content creators with AI-powered writing assistance and social media integration",
      tech: ["Vue.js", "Python", "Django", "GPT-4"],
      category: "Content Creation",
      color: "from-brand-mint-400 to-brand-gold-400",
      icon: "📝"
    },
    {
      title: "Digital Library Tools",
      description: "Open-source educational resources and book management system for underserved communities",
      tech: ["React", "Firebase", "Tailwind", "PWA"],
      category: "Education",
      color: "from-brand-gold-400 to-brand-violet-400",
      icon: "📖"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From blockchain innovation to community empowerment, from content creation tools 
            to educational platforms—here's how I'm building the future, one project at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-playfair">{project.title}</CardTitle>
                  <span className="text-xs px-2 py-1 bg-brand-violet-100 dark:bg-brand-violet-900/50 text-brand-violet-700 dark:text-brand-violet-300 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-brand-violet-600 hover:bg-brand-violet-700">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-brand-violet-600 text-brand-violet-600 hover:bg-brand-violet-600 hover:text-white px-8"
          >
            View All Projects →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
