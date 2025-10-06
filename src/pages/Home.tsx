import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Beyond the Books",
      description: "Holistic development through play-based learning and creative exploration.",
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Experienced and caring educators dedicated to your child's growth.",
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "A safe, loving space where every child feels valued and supported.",
    },
    {
      icon: Sparkles,
      title: "Creative Learning",
      description: "Engaging activities that spark curiosity and imagination.",
    },
  ];

  const programs = [
    {
      name: "Playgroup",
      age: "2-3 Years",
      path: "/services/playgroup",
      color: "bg-primary/10",
    },
    {
      name: "Nursery",
      age: "3-4 Years",
      path: "/services/nursery",
      color: "bg-secondary/10",
    },
    {
      name: "Junior KG",
      age: "4-5 Years",
      path: "/services/junior-kg",
      color: "bg-accent/10",
    },
    {
      name: "Senior KG",
      age: "5-6 Years",
      path: "/services/senior-kg",
      color: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Learning Meets{" "}
                <span className="text-primary">Joy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Welcome to Silver Hoofs Pre-School - nurturing young minds through play, creativity, and love. Beyond the books, we help children discover their potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full w-full sm:w-auto">
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Happy children learning"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Silver Hoofs?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We believe in nurturing the whole child - mind, body, and heart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Age-appropriate learning programs designed to help your child thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Link key={program.path} to={program.path}>
                <Card className="h-full border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8 space-y-4">
                    <div className={`h-16 w-16 rounded-full ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">
                        {program.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{program.age}</p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join the Silver Hoofs family and give your child the foundation for a bright future.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Schedule a Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
