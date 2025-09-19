const footerLinks = {
  Company: [
    "About Sapphire",
    "Our Team", 
    "Events & Activities",
    "Careers (Jobs)",
    "Contact-Us",
    "Portfolio",
    "Awards & Recognition",
    "Why Choose Us"
  ],
  Services: [
    "Product Development",
    "Cloud Development", 
    "UI/UX Design",
    "Microsoft Development",
    "IT Outsourcing",
    "Testing & QA",
    "Hire Dedicated Developers"
  ],
  Technology: [
    ".NET",
    "PHP",
    "Android",
    "iOS", 
    "Flutter",
    "Xamarin"
  ],
  Solutions: [
    "Taxi Booking App",
    "Covid Tracker App",
    "E-Commerce App",
    "Product Finder App",
    "Eyelash Booking App",
    "Language Learning App",
    "Barber shop Booking App",
    "On Demand App Development",
    "Fitness App",
    "Dating App",
    "Salon App",
    "Car Wash App",
    "E-Learning App",
    "Car Rental App",
    "Bike Rental App",
    "Food Delivery App",
    "E-Commerce Solution",
    "Car Rental App",
    "Medicine Delivery App",
    "Chat App Development",
    "Pet Management App",
    "Emergency Alert App",
    "Payment Service App",
    "Sports App Development"
  ]
};

export const MainFooter = () => {
  return (
    <footer className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-primary mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};