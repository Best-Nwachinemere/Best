
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CollaborationModal from './CollaborationModal';

const Hero = () => {
  const [isCollaborationModalOpen, setIsCollaborationModalOpen] = useState(false);

  const expertiseAreas = [
    "Author & Ghostwriter",
    "Content Creator", 
    "Smart Contract Dev",
    "Blockchain Engineer",
    "Fullstack Developer",
    "Philanthropist"
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-violet-50 via-background to-brand-mint-50 dark:from-brand-violet-950/20 dark:via-background dark:to-brand-mint-950/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-violet-200 dark:bg-brand-violet-800/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-mint-200 dark:bg-brand-mint-800/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-brand-gold-200 dark:bg-brand-gold-800/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }} />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 font-playfair">
                  Hi, I'm{' '}
                  <span className="text-gradient">Best</span>
                </h1>
                <div className="text-xl lg:text-2xl text-muted-foreground font-medium mb-4">
                  Nigerian-born storyteller, coder & world-changer
                </div>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {expertiseAreas.map((area, index) => (
                    <span 
                      key={area}
                      className="px-3 py-1 bg-brand-violet-100 dark:bg-brand-violet-900/50 text-brand-violet-700 dark:text-brand-violet-300 rounded-full text-sm font-medium animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                I craft compelling stories that touch hearts, build revolutionary blockchain solutions, 
                and create fullstack applications that change the world. From bestselling books to smart contracts, 
                from viral content to community empowerment—I give everything my Best.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-brand-violet-600 hover:bg-brand-violet-700 text-white px-8 py-4 text-lg"
                >
                  Explore My Universe
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-brand-violet-600 text-brand-violet-600 hover:bg-brand-violet-600 hover:text-white px-8 py-4 text-lg"
                  onClick={() => setIsCollaborationModalOpen(true)}
                >
                  Let's Build Together
                </Button>
              </div>

              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-brand-violet-600 font-playfair">25+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-mint-600 font-playfair">3</div>
                  <div className="text-sm text-muted-foreground">Books Written</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-gold-600 font-playfair">1K+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-brand-violet-400 via-brand-mint-400 to-brand-gold-400 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-6xl">👩🏾‍💻</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-violet-100 dark:bg-brand-violet-900/50 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-mint-100 dark:bg-brand-mint-900/50 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">⛓️</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-brand-gold-100 dark:bg-brand-gold-900/50 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-xl">📺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CollaborationModal 
        isOpen={isCollaborationModalOpen}
        onClose={() => setIsCollaborationModalOpen(false)}
      />
    </>
  );
};

export default Hero;
