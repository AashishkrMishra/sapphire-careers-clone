import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription Successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setFormData({ name: "", email: "", mobile: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Subscribe us and Get the latest updates and news
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <Input
                placeholder="Your name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-12"
              />
            </div>
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your Email ID *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="h-12"
              />
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
                  <span className="text-sm text-muted-foreground">+91</span>
                </div>
                <Input
                  type="tel"
                  placeholder="Mobile Number *"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  required
                  className="h-12 rounded-l-none"
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="h-12 px-8">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};