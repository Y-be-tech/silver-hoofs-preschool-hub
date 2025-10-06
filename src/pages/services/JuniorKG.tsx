import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Calendar, CheckCircle } from "lucide-react";
import juniorKgImage from "@/assets/junior-kg.jpg";

const JuniorKG = () => {
  const highlights = [
    "Phonics and early reading skills",
    "Number concepts and basic math",
    "Writing practice and hand coordination",
    "Science exploration and discovery",
    "Problem-solving activities",
    "Social and emotional development",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm">
                Ages 4-5 Years
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Junior KG
              </h1>
              <p className="text-lg text-muted-foreground">
                Junior KG is where academic learning truly begins! Our program prepares children for formal schooling by developing literacy, numeracy, and critical thinking skills through interactive and hands-on learning experiences.
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Enroll Now
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={juniorKgImage}
                alt="Junior KG children"
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
                <h3 className="font-semibold text-lg">Qualified Educators</h3>
                <p className="text-muted-foreground text-sm">
                  Trained teachers specializing in early childhood education
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Academic Focus</h3>
                <p className="text-muted-foreground text-sm">
                  Building strong foundations in literacy and numeracy
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Interactive Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Hands-on activities that make learning engaging
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
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
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
            Prepare for Academic Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Give your child the academic foundation they need to excel in their educational journey.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JuniorKG;
