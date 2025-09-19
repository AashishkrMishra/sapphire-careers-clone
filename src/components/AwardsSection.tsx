export const AwardsSection = () => {
  // Using placeholder images for awards and certifications
  const awards = [
    { name: "GESIA", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "ISO 27001:2013", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Chamber of Commerce", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Microsoft Partner", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Top Rated", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Clutch", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Best Reviews 1", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Best Reviews 2", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Best Reviews 3", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Best Reviews 4", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Best Reviews 5", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Best Reviews 6", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" },
    { name: "Best Reviews 7", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop" }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Awards & Recognition
          </h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8">
          {awards.map((award, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={award.image} 
                alt={award.name}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};