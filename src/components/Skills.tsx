import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain Platforms",
      skills: ["Ethereum", "Polygon", "Binance Smart Chain", "Avalanche", "Solana", "Arbitrum"],
      icon: "⛓️"
    },
    {
      title: "Smart Contract Development", 
      skills: ["Solidity", "Vyper", "Rust", "Move", "Hardhat", "Truffle"],
      icon: "📜"
    },
    {
      title: "Web3 Technologies",
      skills: ["Web3.js", "Ethers.js", "IPFS", "The Graph", "MetaMask", "WalletConnect"],
      icon: "🌐"
    },
    {
      title: "DeFi & Protocols",
      skills: ["Uniswap", "Aave", "Compound", "OpenZeppelin", "Chainlink", "AMM"],
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary animate-slide-up">Technical Skills</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
          Comprehensive expertise across the blockchain technology stack
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={index} 
            className="border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary group bg-gradient-card hover:bg-gradient-to-br hover:from-secondary/20 hover:to-primary/5 animate-scale-in hover:scale-105"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:animate-float">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-4 py-3 bg-secondary/60 rounded-xl text-sm text-center border border-primary/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-glow-accent cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;