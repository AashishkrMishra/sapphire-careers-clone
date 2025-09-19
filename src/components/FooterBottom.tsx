import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FooterBottom = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left side - Copyright and compliance badges */}
          <div className="flex items-center space-x-6">
            <div className="text-sm">
              © 2025 Sapphire Software Solutions. All rights reserved.
            </div>
            
            {/* Compliance badges */}
            <div className="flex items-center space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=60&h=40&fit=crop" 
                alt="W3C HTML" 
                className="h-6 w-auto opacity-80"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=60&h=40&fit=crop" 
                alt="DMCA Protected" 
                className="h-6 w-auto opacity-80"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=60&h=40&fit=crop" 
                alt="Copyright" 
                className="h-6 w-auto opacity-80"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=60&h=40&fit=crop" 
                alt="W3C CSS" 
                className="h-6 w-auto opacity-80"
              />
            </div>
          </div>

          {/* Center - Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              Terms of Use
            </a>
          </div>

          {/* Right side - Social media and Sapphire logo */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 w-8 h-8">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 w-8 h-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 w-8 h-8">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 w-8 h-8">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 w-8 h-8">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Sapphire Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground text-primary rounded font-bold text-lg flex items-center justify-center">
                S
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};