import heroImage from "@/assets/hero-illustration.png";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Build your Future with us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential and thrive both personally and professionally.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src={heroImage} 
              alt="Build your Future with us" 
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};