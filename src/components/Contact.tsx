import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Get In Touch</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to build the future of Web3? Let's discuss your blockchain project
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-accent">Let's Collaborate</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you need smart contract development, DeFi protocol design, or Web3 integration, 
            I'm here to help bring your blockchain vision to life.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">📧</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground">hello@blockforge.dev</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">💼</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">LinkedIn</h4>
                <p className="text-muted-foreground">linkedin.com/in/blockforge</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">🐙</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">GitHub</h4>
                <p className="text-muted-foreground">github.com/blockforge</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="border-primary/20 shadow-glow-primary">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Send a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project Discussion" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell me about your project..."
                rows={5}
              />
            </div>
            
            <Button className="w-full shadow-glow-accent">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;