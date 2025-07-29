import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a passionate blockchain developer with five years of experience creating innovative and approachable decentralized solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm a blockchain developer with a deep passion for building the future of finance and technology. 
            With extensive experience in smart contract development, DeFi protocols, and Web3 applications, 
            I help businesses transition into the decentralized world.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            My journey in blockchain started with a fascination for trustless systems and has evolved into 
            comprehensive expertise across multiple blockchain networks and protocols.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Smart Contracts", "DeFi", "NFTs", "DAOs"].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-card border border-primary/20 rounded-full text-primary text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <Card className="border-primary/20 shadow-glow-primary">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Experience</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground">Senior Blockchain Developer</h4>
                  <span className="text-sm text-muted-foreground">2022-Present</span>
                </div>
                <p className="text-muted-foreground text-sm">DeFi Protocol Development</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground">Smart Contract Engineer</h4>
                  <span className="text-sm text-muted-foreground">2020-2022</span>
                </div>
                <p className="text-muted-foreground text-sm">NFT Marketplace & Gaming</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground">Web3 Developer</h4>
                  <span className="text-sm text-muted-foreground">2019-2020</span>
                </div>
                <p className="text-muted-foreground text-sm">dApp Frontend Integration</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;