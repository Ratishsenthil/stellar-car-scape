
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-car/10 z-0"></div>
      
      {/* Circular gradient */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-car/20 rounded-full filter blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-car/10 text-car px-4 py-2 rounded-full">
            <Rocket size={16} />
            <span className="text-sm font-medium">The future of driving is here</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Experience the <span className="text-car">Revolution</span> of Driving
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
            Discover the perfect blend of performance, technology, and design with our latest models.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-car text-base md:text-lg px-8 py-6">
              Explore Vehicles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-base md:text-lg px-8 py-6">
              Book Test Drive
            </Button>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-car">350+</div>
              <div className="text-sm text-foreground/70">Mile Range</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-car">3.2s</div>
              <div className="text-sm text-foreground/70">0-60 mph</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-car">AWD</div>
              <div className="text-sm text-foreground/70">Drive Type</div>
            </div>
          </div>
        </div>
        
        <div className="relative perspective">
          <div className="w-full h-full preserve-3d animate-float">
            <img 
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Luxury Electric Car" 
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-black/20 filter blur-xl rounded-full"></div>
            
            <div className="absolute top-8 right-8 w-20 h-20 bg-car/40 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-car/30 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-car rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
