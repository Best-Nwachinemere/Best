import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://xuvhkewyttlndfatuwqv.supabase.co/functions/v1/send-contact-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Message could not be sent",
          description: data?.error || "Something went wrong. Please try again later or contact me directly.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description: error?.message || "Something went wrong. Please try again later or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/best-nwachinemere', color: 'from-blue-400 to-blue-600' },
    { name: 'GitHub', icon: '💻', href: 'https://github.com/best-nwachinemere', color: 'from-gray-700 to-gray-900' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/best_codes', color: 'from-blue-400 to-blue-500' },
    { name: 'Substack', icon: '✍️', href: 'https://bestnwachinemere.substack.com', color: 'from-orange-400 to-orange-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-violet-50 to-white dark:from-brand-violet-950/20 dark:to-background" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to collaborate on a project, discuss an opportunity, 
            or just say hello, I'd love to hear from you!
          </p>
          <p className="text-lg text-brand-violet-600 font-medium mt-4 italic">
            "What's the point of doing it if you are not willing to give it your Best"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Send me a message</CardTitle>
              <CardDescription>
                I typically respond within 24 hours. For urgent matters, feel free to reach out on LinkedIn.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell me more about your project, idea, or just say hi!"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-violet-600 hover:bg-brand-violet-700 text-white py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Quick Contact */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 font-playfair">Let's build something meaningful together</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    💼 <strong>Available for:</strong> Full-time opportunities, consulting, speaking engagements
                  </p>
                  <p className="text-muted-foreground">
                    🌍 <strong>Based in:</strong> Currently in Nigeria, open to remote work globally
                  </p>
                  <p className="text-muted-foreground">
                    ⚡ <strong>Response time:</strong> Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 font-playfair">Find me online</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      style={{ 
                        background: `linear-gradient(135deg, ${social.color.split(' ')[1]} 0%, ${social.color.split(' ')[3]} 100%)`,
                        opacity: 0.1 
                      }}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-medium group-hover:text-brand-violet-600 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Speaking & Media Kit */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-gold-50 to-brand-violet-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 font-playfair">Speaking & Media</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in having me speak at your event or need media assets? 
                  I love talking about inclusive tech, building for impact, and the future of African tech.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-brand-violet-600 text-brand-violet-600 hover:bg-brand-violet-600 hover:text-white"
                >
                  Download Media Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
