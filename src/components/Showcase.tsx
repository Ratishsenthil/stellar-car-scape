
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const showcaseData = {
  exterior: [
    {
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Aerodynamic Design",
      description: "Sleek contours engineered for optimal air flow and reduced drag."
    },
    {
      image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "LED Matrix Lighting",
      description: "Adaptive lighting system that adjusts to conditions and other road users."
    },
    {
      image: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Panoramic Glass Roof",
      description: "Expansive glass roof creates an open, airy cabin experience."
    }
  ],
  interior: [
    {
      image: "https://images.unsplash.com/photo-1558939608-7bc74bd8a94d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Premium Craftsmanship",
      description: "Luxurious materials and precision engineering throughout the cabin."
    },
    {
      image: "https://images.unsplash.com/photo-1552322824-f2d469248baa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Touch Control System",
      description: "Intuitive 15-inch touchscreen controls all vehicle functions."
    },
    {
      image: "https://images.unsplash.com/photo-1570274040010-b5a141ba21a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Spatial Audio",
      description: "18-speaker sound system delivers immersive audio experience."
    }
  ],
  performance: [
    {
      image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Dual Motor AWD",
      description: "Independent motors deliver optimal traction and performance."
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Track Mode",
      description: "Performance-oriented driving mode for track conditions."
    },
    {
      image: "https://images.unsplash.com/photo-1530906622963-8a60586a49c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Adaptive Suspension",
      description: "Automatically adjusts damping for optimal ride quality."
    }
  ]
};

const Showcase = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="showcase" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-car/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-gradient-to-r from-car/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience the <span className="text-car">Details</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Discover what makes our vehicles extraordinary, from breathtaking design to performance excellence.
          </p>
        </div>
        
        <Tabs defaultValue="exterior" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
              <TabsTrigger value="interior">Interior</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(showcaseData).map(([key, items]) => (
            <TabsContent key={key} value={key} className="focus:outline-none">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Main image */}
                <div className="lg:col-span-3 perspective">
                  <div className="preserve-3d animate-float">
                    <img 
                      src={items[activeImage].image} 
                      alt={items[activeImage].title}
                      className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                    />
                  </div>
                </div>
                
                {/* Info and thumbnails */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{items[activeImage].title}</h3>
                    <p className="text-lg text-foreground/70 mb-6">{items[activeImage].description}</p>
                    <Button className="btn-car">Learn More</Button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Explore Features</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {items.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          className={`rounded-md overflow-hidden border-2 transition-all ${activeImage === index ? 'border-car' : 'border-transparent'}`}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="aspect-video object-cover w-full h-full"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* 3D Car Rotation */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Interactive 3D View</h3>
          
          <div className="perspective mx-auto max-w-4xl relative">
            <div className="preserve-3d animate-rotate-car">
              <img 
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Car 3D View"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Reflection effect */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-32 bg-black/10 filter blur-xl rounded-full"></div>
          </div>
          
          <p className="mt-8 text-foreground/70">
            Drag to rotate and explore the vehicle from all angles
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
