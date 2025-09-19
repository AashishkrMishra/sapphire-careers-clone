import { Button } from "@/components/ui/button";

export const CallToActionSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-lg rotate-12"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/20 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready To Take Challenge?
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto opacity-90">
          If you have a passion for planning & want to work for a rapidly growing entrepreneurial company, please send your resume to{" "}
          <a href="mailto:careers@sapphiresolutions.net" className="underline hover:no-underline">
            careers@sapphiresolutions.net
          </a>
        </p>
        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
          Contact Us Here
        </Button>
      </div>
    </section>
  );
};