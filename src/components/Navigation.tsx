
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import CollaborationModal from './CollaborationModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollaborationModalOpen, setIsCollaborationModalOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Work' },
    { href: '#blog', label: 'Writing' },
    { href: '#books', label: 'Books' },
    { href: '#empowerment', label: 'Impact' },
    { href: '#contact', label: 'Connect' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-playfair text-2xl font-bold">
              Best<span className="text-brand-gold-400">★</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-brand-violet-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
              <Button 
                size="sm" 
                className="bg-brand-violet-600 hover:bg-brand-violet-700 text-white"
                onClick={() => setIsCollaborationModalOpen(true)}
              >
                Let's Collaborate
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-brand-violet-600 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  size="sm" 
                  className="bg-brand-violet-600 hover:bg-brand-violet-700 text-white w-fit"
                  onClick={() => {
                    setIsCollaborationModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Let's Collaborate
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CollaborationModal 
        isOpen={isCollaborationModalOpen}
        onClose={() => setIsCollaborationModalOpen(false)}
      />
    </>
  );
};

export default Navigation;
