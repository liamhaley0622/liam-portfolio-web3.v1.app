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
            className={`border-primary/20 hover:border-primary/40 transition-all duration-300 group ${
              project.featured ? 'lg:col-span-1 shadow-glow-primary' : ''
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <Badge variant="outline" className="border-accent text-accent">
                    Featured
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary" 
                    className="bg-secondary/50 text-foreground border border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" className="shadow-glow-accent">
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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