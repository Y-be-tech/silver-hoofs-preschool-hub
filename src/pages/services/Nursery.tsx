import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Calendar, CheckCircle, MessageCircle } from "lucide-react";
import nurseryImage from "@/assets/nursery.jpg";

const Nursery = () => {
  const whatsappNumber = "919980444424";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to enquire about the Nursery program (Ages 3-4).");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const highlights = [
    "Pre-reading and pre-writing activities",
    "Number recognition and basic counting",
    "Creative arts and crafts",
    "Language development through stories",
    "Group activities and social skills",
    "Physical development through play",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm">
                Ages 3-4 Years
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Nursery
              </h1>
              <p className="text-lg text-muted-foreground">
                Our Nursery program builds on early learning foundations, introducing children to pre-academic concepts through creative and engaging activities. We focus on developing independence, curiosity, and a love for learning.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enquire on WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src={nurseryImage}
                alt="Nursery children"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Caring Teachers</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced educators who understand early childhood development
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Structured Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Balance of academics and play-based activities
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Theme-Based Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Engaging themes that make learning fun and memorable
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              What Your Child Will Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Enroll in Our Nursery Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help your child develop essential skills in a nurturing and stimulating environment.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with us on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Nursery;
