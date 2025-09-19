import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const locations = [
  {
    country: "India(HQ)",
    flag: "🇮🇳",
    address: "C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA"
  },
  {
    country: "USA", 
    flag: "🇺🇸",
    address: "5004 NW 116th Ave Coral Springs, Florida, FL 33076"
  },
  {
    country: "Canada",
    flag: "🇨🇦", 
    address: "111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8"
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    address: "U 2B 305 Harborne Street, Glendalough 6016 WA"
  },
  {
    country: "UK",
    flag: "🇬🇧",
    address: "42 Audley Avenue, Gillingham,ME73AY United Kingdom"
  },
  {
    country: "UAE", 
    flag: "🇦🇪",
    address: "A-21, Building 21, Ghoroob,Mirdif Dubai, United Arab Emirates"
  }
];

const contactInfo = [
  {
    title: "Contact For Sales",
    email: "contact@sapphiresolutions.net",
    phones: ["IN:+91-942-970-9662", "US:+1-754-258-7670"]
  },
  {
    title: "Contact for Career (Jobs)",
    email: "careers@sapphiresolutions.net", 
    phones: ["+91-909-997-6034"]
  }
];

const reviews = [
  { platform: "Google", rating: "4.9", reviews: "198 REVIEWS" },
  { platform: "Clutch", rating: "4.9", reviews: "304 REVIEWS" },
  { platform: "GoodFirms", rating: "4.8", reviews: "201 REVIEWS" }
];

export const OfficeLocations = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-12">
          <div className="w-12 h-12 bg-primary rounded text-primary-foreground flex items-center justify-center font-bold text-2xl">
            S
          </div>
          <div>
            <span className="text-2xl font-bold text-primary">Sapphire</span>
            <div className="text-sm text-muted-foreground">Software Solutions</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {contact.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground hover:text-primary">
                        {contact.email}
                      </a>
                    </div>
                    {contact.phones.map((phone, phoneIndex) => (
                      <div key={phoneIndex} className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-sm text-muted-foreground hover:text-primary">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Reviews */}
            <div className="grid grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-primary mb-1">
                      {review.platform}
                    </div>
                    <div className="text-yellow-500 mb-1">★★★★★</div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {review.rating}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.reviews}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl">{location.flag}</span>
                      <h3 className="text-lg font-semibold text-primary">
                        {location.country}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {location.address}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};