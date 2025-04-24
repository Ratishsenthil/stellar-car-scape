
import React from 'react';
import { Car, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Car className="h-8 w-8 text-car" />
              <span className="font-bold text-xl">StellarDrive</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Revolutionizing the automotive industry with cutting-edge electric vehicles designed for the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary text-foreground hover:bg-car hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-foreground hover:bg-car hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-foreground hover:bg-car hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-foreground hover:bg-car hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#vehicles" className="text-foreground/70 hover:text-car">Vehicles</a></li>
              <li><a href="#features" className="text-foreground/70 hover:text-car">Features</a></li>
              <li><a href="#showcase" className="text-foreground/70 hover:text-car">Gallery</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-car">Test Drive</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-car">Locate Dealer</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-car">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-car">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-car">Press</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-car">Sustainability</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-car">Partners</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none focus-visible:ring-car"
                />
                <Button type="submit" className="bg-car hover:bg-car-dark text-white rounded-l-none">
                  <Mail size={16} />
                </Button>
              </div>
              <label className="flex items-center gap-2 text-xs text-foreground/70">
                <input type="checkbox" className="rounded border-border" />
                <span>I agree to receive marketing emails</span>
              </label>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} StellarDrive. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-car">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-car">Terms of Use</a>
            <a href="#" className="text-foreground/60 hover:text-car">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
