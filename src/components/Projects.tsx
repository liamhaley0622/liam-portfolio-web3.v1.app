import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "DeFi Yield Aggregator",
      description: "Automated yield farming protocol that optimizes returns across multiple DeFi platforms. Smart contracts handle strategy execution and fee distribution.",
      tags: ["Solidity", "Hardhat", "React", "Web3.js", "Compound", "Aave"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "NFT Marketplace",
      description: "Full-featured NFT marketplace with minting, trading, and royalty distribution. Supports ERC-721 and ERC-1155 standards with gas-optimized contracts.",
      tags: ["Solidity", "OpenZeppelin", "IPFS", "Next.js", "TheGraph"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Cross-Chain Bridge",
      description: "Secure asset bridge enabling transfers between Ethereum and Polygon networks. Implements multi-signature validation and emergency pause mechanisms.",
      tags: ["Solidity", "Chainlink", "Polygon", "TypeScript", "Ethers.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "DAO Governance Platform",
      description: "Decentralized governance system with proposal creation, voting mechanisms, and treasury management. Features time-locked execution and quadratic voting.",
      tags: ["Solidity", "Governance", "React", "Snapshot", "Multisig"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Featured Projects</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Innovative blockchain solutions that push the boundaries of decentralized technology
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className={`border-primary/20 hover:border-primary/60 transition-all duration-500 group bg-gradient-card hover:bg-gradient-to-br hover:from-secondary/20 hover:to-primary/5 hover:scale-[1.02] hover:shadow-2xl animate-scale-in ${
              project.featured ? 'lg:col-span-1 shadow-glow-primary hover:shadow-glow-cyan' : 'hover:shadow-glow-accent'
            }`}
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors duration-300 group-hover:animate-glow-pulse">
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <Badge variant="outline" className="border-accent text-accent bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    Featured
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary" 
                    className="bg-secondary/60 text-foreground border border-primary/20 hover:border-accent/50 hover:bg-accent/10 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" className="shadow-glow-accent hover:shadow-glow-orange hover:scale-105 transition-all duration-300">
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-glow-primary transition-all duration-300">
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;