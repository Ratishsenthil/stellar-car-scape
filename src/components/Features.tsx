
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Rocket, 
  Settings, 
  TrendingUp, 
  Car, 
  Settings2, 
  CarFront
} from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-car" />,
    title: 'Unparalleled Performance',
    description: 'Experience lightning-fast acceleration and responsive handling that redefines driving.'
  },
  {
    icon: <Settings2 className="h-8 w-8 text-car" />,
    title: 'Advanced Technology',
    description: 'Cutting-edge features with intuitive controls and seamless connectivity.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-car" />,
    title: 'Impressive Efficiency',
    description: 'Maximize your range with industry-leading efficiency and regenerative systems.'
  },
  {
    icon: <CarFront className="h-8 w-8 text-car" />,
    title: 'Bold Design',
    description: 'Head-turning aesthetics combined with aerodynamic optimization.'
  },
  {
    icon: <Car className="h-8 w-8 text-car" />,
    title: 'Superior Comfort',
    description: 'Premium materials and thoughtfully designed interiors for maximum comfort.'
  },
  {
    icon: <Settings className="h-8 w-8 text-car" />,
    title: 'Smart Safety',
    description: 'Comprehensive safety features with autonomous driving capabilities.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionary <span className="text-car">Features</span> That Elevate Your Drive
          </h2>
          <p className="text-lg text-foreground/70">
            Every detail of our vehicles is designed with purpose, combining innovation with elegance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-car transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-start">
                <div className="p-3 bg-car/10 rounded-lg mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Feature highlight */}
        <div className="mt-20 relative">
          {/* Background gradients */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-car/20 rounded-full filter blur-3xl z-0"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-car/10 rounded-full filter blur-3xl z-0"></div>
          
          <div className="glass-panel p-8 md:p-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Autonomous Driving System</h3>
                <p className="text-lg mb-6">
                  Our advanced autopilot system enables your vehicle to steer, accelerate, and brake automatically within its lane while maintaining a safe distance from other vehicles.
                </p>
                <ul className="space-y-3">
                  {['Traffic-aware cruise control', 'Lane centering', 'Self-parking', 'Summon', 'Navigate on autopilot'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-car"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Car Dashboard" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
