import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Calendar, CheckCircle } from "lucide-react";
import seniorKgImage from "@/assets/senior-kg.jpg";

const SeniorKG = () => {
  const highlights = [
    "Advanced reading and comprehension",
    "Mathematical concepts and operations",
    "Fluent writing and sentence formation",
    "Scientific thinking and experiments",
    "School readiness and independence",
    "Leadership and teamwork skills",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                Ages 5-6 Years
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Senior KG
              </h1>
              <p className="text-lg text-muted-foreground">
                Senior KG is the final step before primary school! Our comprehensive program ensures children are fully prepared for Grade 1, with strong academic skills, confidence, and a genuine love for learning.
              </p>
              <WhatsAppButton size="lg" className="rounded-full" message="Hi! I'm interested in Senior KG admissions at Silver Hoof." >Enroll Now</WhatsAppButton>
            </div>
            <div className="relative">
              <img
                src={seniorKgImage}
                alt="Senior KG children"
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
                <h3 className="font-semibold text-lg">Expert Guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Skilled teachers preparing children for primary school
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">School Readiness</h3>
                <p className="text-muted-foreground text-sm">
                  Complete preparation for Grade 1 success
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Comprehensive Curriculum</h3>
                <p className="text-muted-foreground text-sm">
                  All subjects covered with depth and clarity
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
            Ready for Primary School
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ensure your child transitions confidently to Grade 1 with our comprehensive Senior KG program.
          </p>
          <WhatsAppButton size="lg" className="rounded-full" message="Hello! I'd like more details about the Senior KG program at Silver Hoof." >Contact Us</WhatsAppButton>
        </div>
      </section>
    </div>
  );
};

export default SeniorKG;
