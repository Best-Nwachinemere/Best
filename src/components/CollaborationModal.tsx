
import { useToast } from "@/components/ui/use-toast"; // <-- Add toast
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const collaborationOptions = [
  {
    title: "Content & Writing Services",
    icon: "✍️",
    description: "Let me craft compelling stories, articles, or ghostwrite your next bestseller",
    color: "from-purple-500 to-pink-500",
    defaultMessage: "I'd love to discuss content & writing services with you!",
  },
  {
    title: "Smart Contract Development",
    icon: "⛓️",
    description: "Build secure, efficient blockchain solutions that revolutionize your industry",
    color: "from-blue-500 to-cyan-500",
    defaultMessage: "I'm interested in smart contract development for your project!",
  },
  {
    title: "Fullstack Web Development",
    icon: "💻",
    description: "Create stunning web applications from frontend to backend",
    color: "from-green-500 to-emerald-500",
    defaultMessage: "I'd love to help build your next web or blockchain project!",
  },
  {
    title: "Speaking Engagements",
    icon: "🎤",
    description: "Inspire your audience with talks on tech, empowerment, and innovation",
    color: "from-orange-500 to-red-500",
    defaultMessage: "I'd love to speak at your event!",
  },
  {
    title: "Brand Partnerships",
    icon: "🤝",
    description: "Let's create authentic content that resonates with your target audience",
    color: "from-violet-500 to-purple-500",
    defaultMessage: "Let's discuss a possible brand partnership!",
  },
  {
    title: "Organizational Growth",
    icon: "🚀",
    description: "Be an addition to your team with my multi-dimensional expertise",
    color: "from-yellow-500 to-orange-500",
    defaultMessage: "I'd like to help your organization grow with my expertise!",
  }
];

const CollaborationModal = ({ isOpen, onClose }: CollaborationModalProps) => {
  const { toast } = useToast();

  // Helper: handle card click
  const onCardClick = (option: typeof collaborationOptions[0]) => {
    // Scroll to #contact
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    // Show a toast to surface intent!
    toast({
      title: `Let's Collaborate: ${option.title}`,
      description: option.defaultMessage,
      duration: 3500,
    });
    // Close the modal
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair">Let's Build Something Amazing Together</DialogTitle>
          <DialogDescription className="text-lg">
            "What's the point of doing it if you are not willing to give it your Best" - Choose how we can collaborate!
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {collaborationOptions.map((option, index) => (
            <Card
              key={option.title}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onCardClick(option)}
              tabIndex={0}
              role="button"
              aria-label={`Collaborate: ${option.title}`}
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onCardClick(option);
                }
              }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{option.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 font-playfair">{option.title}</h3>
                <p className="text-muted-foreground text-sm">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Ready to get started? Let's discuss your vision!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              className="bg-brand-violet-600 hover:bg-brand-violet-700 text-white"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
              }}
            >
              Send Custom Message
            </Button>
            <Button 
              variant="outline" 
              className="border-brand-violet-600 text-brand-violet-600 hover:bg-brand-violet-600 hover:text-white"
              onClick={() => window.open('mailto:best@example.com?subject=Let\'s Collaborate!', '_blank')}
            >
              Quick Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollaborationModal;
