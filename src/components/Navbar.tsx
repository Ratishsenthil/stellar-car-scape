
import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Car className="h-8 w-8 text-car" />
          <span className="font-bold text-xl">StellarDrive</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#vehicles" className="text-foreground/80 hover:text-car transition-colors">Vehicles</a>
          <a href="#features" className="text-foreground/80 hover:text-car transition-colors">Features</a>
          <a href="#showcase" className="text-foreground/80 hover:text-car transition-colors">Showcase</a>
          <Button className="btn-car">Test Drive</Button>
        </div>
        
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border p-4">
          <div className="flex flex-col gap-4">
            <a 
              href="#vehicles" 
              className="text-foreground/80 hover:text-car transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vehicles
            </a>
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-car transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#showcase" 
              className="text-foreground/80 hover:text-car transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </a>
            <Button className="btn-car mx-4">Test Drive</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
