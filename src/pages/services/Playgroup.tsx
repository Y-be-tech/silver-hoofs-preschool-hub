import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Calendar, CheckCircle, MessageCircle } from "lucide-react";
import playgroupImage from "@/assets/playgroup.jpg";

const Playgroup = () => {
  const whatsappNumber = "+919980444424";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to enquire about the Playgroup program (Ages 2-3).");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const highlights = [
    "Sensory play and exploration",
    "Social interaction and group activities",
    "Basic motor skills development",
    "Introduction to colors, shapes, and textures",
    "Music and movement",
    "Safe and nurturing environment",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                Ages 2-3 Years
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Playgroup
              </h1>
              <p className="text-lg text-muted-foreground">
                Our Playgroup program is designed for toddlers taking their first steps into structured learning. Through play-based activities, we help children develop social skills, confidence, and a love for exploration.
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
                src={playgroupImage}
                alt="Playgroup children"
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
                <h3 className="font-semibold text-lg">Small Class Size</h3>
                <p className="text-muted-foreground text-sm">
                  Individual attention with optimal teacher-to-child ratio
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Flexible Timings</h3>
                <p className="text-muted-foreground text-sm">
                  Morning and afternoon sessions available
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Daily Activities</h3>
                <p className="text-muted-foreground text-sm">
                  Structured routine with plenty of play time
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
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
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
            Join Our Playgroup Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Give your toddler a head start with our nurturing and engaging Playgroup program.
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

export default Playgroup;
