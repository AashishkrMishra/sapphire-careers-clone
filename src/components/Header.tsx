import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded text-primary-foreground flex items-center justify-center font-bold text-lg">
            S
          </div>
          <span className="text-xl font-bold text-primary">Sapphire</span>
          <span className="text-sm text-muted-foreground">Software Solutions</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Company</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Product</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Technology</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Hire Developers</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Our Work</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">Let's Talk AI</Button>
          <Button size="sm">Contact Us</Button>
        </div>
      </div>
    </header>
  );
};