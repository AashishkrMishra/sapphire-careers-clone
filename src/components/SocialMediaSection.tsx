import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Social Media
        </h2>
        <p className="text-muted-foreground mb-8">
          We follow a very simple, straight forward, and transparent process
        </p>
        
        <div className="flex items-center justify-center space-x-6">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
            <Facebook className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
            <Twitter className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};