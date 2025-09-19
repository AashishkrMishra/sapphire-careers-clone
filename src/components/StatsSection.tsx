const stats = [
  { number: "32+", label: "IT Professionals" },
  { number: "3+", label: "Fortune 500 Companies" },
  { number: "15%", label: "Client Retention" },
  { number: "443+", label: "Satisfied Clients" },
  { number: "3+", label: "Years of Experience" }
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};