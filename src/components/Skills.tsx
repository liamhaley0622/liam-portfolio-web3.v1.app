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
    <section className="py-20 px-4 max-w-6xl mx-auto bg-gradient-to-b from-background to-secondary/10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Technical Skills</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive expertise across the blockchain technology stack
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card 
            key={index} 
            className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group"
          >
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary/50 rounded-lg text-sm text-center border border-primary/10 hover:border-primary/30 transition-colors"
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