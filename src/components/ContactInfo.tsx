
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => (
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
);

export default ContactInfo;
