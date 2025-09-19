import teamMeeting from "@/assets/team-meeting.png";

export const CompanySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src={teamMeeting} 
              alt="Team collaboration" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              Sapphire Solutions, an ISO 27001:2013 certified Web and Mobile App Development Company, has been delivering cutting-edge IT solutions since 2002. We provide a comprehensive suite of IT services and domain-specific solutions tailored for enterprises, ISVs, digital agencies, and startups.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Driven by innovation and excellence, our highly skilled team combines industry best practices, deep technological expertise, and extensive business domain knowledge to accelerate digital transformation. With over 20+ years of experience, our diverse team engages closely with clients, offering high-end technology solutions and pioneering innovations that drive business success.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We are an award-winning, end-to-end software solutions provider and IT consulting firm with a proven track record of excellence. We have built strong, long-term partnerships with a diverse clientele, serving 2,500+ satisfied customers, from start-ups to large enterprises.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our team comprises highly skilled professionals, including web designers, developers, mobile app specialists, network engineers, and QA testers, all dedicated to delivering cutting-edge solutions. With an average experience of 4+ years, our experts bring deep technical expertise and industry best practices to every project, ensuring innovation, efficiency, and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};