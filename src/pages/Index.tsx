import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TabNavigation } from "@/components/TabNavigation";
import { CompanySection } from "@/components/CompanySection";
import { ValuesSection } from "@/components/ValuesSection";
import { StatsSection } from "@/components/StatsSection";
import { TeamSection } from "@/components/TeamSection";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { MainFooter } from "@/components/MainFooter";
import { AwardsSection } from "@/components/AwardsSection";
import { OfficeLocations } from "@/components/OfficeLocations";
import { FooterBottom } from "@/components/FooterBottom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Who we are");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Who we are":
        return (
          <>
            <CompanySection />
            <ValuesSection />
            <StatsSection />
            <TeamSection />
          </>
        );
      case "Why Sapphire":
        return (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose Sapphire</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over 20+ years of experience, cutting-edge technology solutions, and a commitment to innovation, Sapphire Solutions is your ideal partner for digital transformation.
              </p>
            </div>
          </section>
        );
      case "Benefits / What we offer":
        return (
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Benefits & What We Offer</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-4">Competitive Compensation</h3>
                  <p className="text-muted-foreground">Industry-leading salary packages and performance bonuses</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
                  <p className="text-muted-foreground">Continuous learning opportunities and career advancement</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
                  <p className="text-muted-foreground">Flexible working hours and remote work options</p>
                </div>
              </div>
            </div>
          </section>
        );
      case "Life at Sapphire":
        return (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8">Life at Sapphire</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience a vibrant workplace culture that values innovation, collaboration, and personal growth. Join a team that celebrates diversity and fosters creativity.
              </p>
            </div>
          </section>
        );
      case "Hiring Process":
        return (
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-lg font-semibold">Application Review</h3>
                      <p className="text-muted-foreground">We carefully review your application and portfolio</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-lg font-semibold">Technical Assessment</h3>
                      <p className="text-muted-foreground">Complete a technical evaluation relevant to the role</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-lg font-semibold">Interview Rounds</h3>
                      <p className="text-muted-foreground">Meet with our team leads and HR representatives</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-lg font-semibold">Final Decision</h3>
                      <p className="text-muted-foreground">Receive feedback and join our amazing team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case "Current Openings":
        return (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Senior React Developer</h3>
                  <p className="text-muted-foreground mb-4">Full-time • Remote • 3+ years experience</p>
                  <p className="text-sm text-muted-foreground">Join our frontend team to build cutting-edge web applications using React, TypeScript, and modern development practices.</p>
                </div>
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">DevOps Engineer</h3>
                  <p className="text-muted-foreground mb-4">Full-time • Hybrid • 2+ years experience</p>
                  <p className="text-sm text-muted-foreground">Help us scale our infrastructure and implement robust CI/CD pipelines using AWS, Docker, and Kubernetes.</p>
                </div>
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
                  <p className="text-muted-foreground mb-4">Full-time • On-site • 2+ years experience</p>
                  <p className="text-sm text-muted-foreground">Create beautiful and intuitive user experiences for web and mobile applications using modern design tools.</p>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return <CompanySection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderTabContent()}
      <SocialMediaSection />
      <CallToActionSection />
      <NewsletterSection />
      <MainFooter />
      <AwardsSection />
      <OfficeLocations />
      <FooterBottom />
    </div>
  );
};

export default Index;
