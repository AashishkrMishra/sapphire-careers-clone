import { Card, CardContent } from "@/components/ui/card";
import learnGrowIcon from "@/assets/learn-grow-icon.png";
import communityIcon from "@/assets/community-icon.png";
import healthIcon from "@/assets/health-icon.png";
import workspaceIcon from "@/assets/workspace-icon.png";
import diversityIcon from "@/assets/diversity-icon.png";

const values = [
  {
    icon: learnGrowIcon,
    title: "Learn to Grow",
    description: "We believe in fostering a culture of continuous learning and development, empowering our employees to stay ahead in a rapidly evolving landscape. By offering diverse opportunities to upskill and access a wealth of knowledge and expertise within Sapphire, we ensure our teams are equipped to deliver innovative solutions."
  },
  {
    icon: communityIcon,
    title: "Community",
    description: "We are deeply committed to creating a positive and lasting impact in the communities we serve. From many years we allocated dedicated budget as part of our CSR initiatives, positively impacting lots of lives. Over 200+ of our dedicated team members contributed volunteer hours, driving meaningful change and fostering growth and well-being across diverse communities."
  },
  {
    icon: healthIcon,
    title: "Health & Wellbeing",
    description: "We place the health and mental well-being of our associates at the core of our values. Through initiatives that promote a culture of fitness and wellness, such as yoga sessions and marathons, we encourage holistic growth and a balanced lifestyle."
  },
  {
    icon: workspaceIcon,
    title: "Inspiring Workspaces",
    description: "Collaborate with your peers in state-of-the-art facilities designed to inspire innovation and foster collaboration. Our offices are thoughtfully created with sustainability at their core, reflecting our commitment to a greener future."
  },
  {
    icon: diversityIcon,
    title: "Diversity",
    description: "We are an equal opportunity employer dedicated to fostering an inclusive and equitable workplace where everyone feels valued and respected. Our diverse workforce brings together individuals from various backgrounds, generations, and perspectives, creating a vibrant environment where innovation and collaboration thrive."
  }
];

export const ValuesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Crafting a Vision, Shaping the Future
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <img 
                    src={value.icon} 
                    alt={value.title} 
                    className="w-16 h-16 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};