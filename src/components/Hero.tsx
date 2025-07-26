import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import TimeZones from "./TimeZones";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-crypto-purple rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-crypto-cyan rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-crypto-green rounded-full animate-float opacity-80" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-crypto-orange rounded-full animate-float opacity-50" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div 
        className="absolute inset-0 opacity-20 animate-glow-pulse"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <TimeZones />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
          BlockForge
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Blockchain Developer & Web3 Architect
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
          Building the future of decentralized applications with cutting-edge blockchain technology. 
          Specialized in Solidity, DeFi protocols, and Web3 integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Button size="lg" className="shadow-glow-primary hover:shadow-glow-cyan transition-all duration-300 hover:scale-105">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
            Contact Me
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;