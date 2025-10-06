import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Star, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Every child receives individual attention in a loving, safe environment.",
    },
    {
      icon: BookOpen,
      title: "Holistic Learning",
      description: "We develop the whole child - intellectually, emotionally, socially, and physically.",
    },
    {
      icon: Users,
      title: "Expert Educators",
      description: "Our teachers are trained professionals passionate about early childhood education.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We maintain the highest standards in curriculum, facilities, and care.",
    },
  ];

  const differentiators = [
    {
      title: "Play-Based Learning",
      description: "Learning through play is at the heart of our approach, making education natural and joyful.",
    },
    {
      title: "Small Class Sizes",
      description: "We maintain low student-teacher ratios to ensure personalized attention for every child.",
    },
    {
      title: "Modern Curriculum",
      description: "Our curriculum blends traditional values with modern educational practices.",
    },
    {
      title: "Safe Environment",
      description: "Child safety is our top priority with secure premises and trained staff.",
    },
    {
      title: "Parent Partnership",
      description: "We believe in working closely with parents as partners in their child's development.",
    },
    {
      title: "Beyond Academics",
      description: "We focus on character building, creativity, and life skills alongside academics.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About Silver Hoofs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond the Books - Where Every Child's Potential is Nurtured
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Silver Hoofs Pre-School, we believe that education extends beyond textbooks. Our mission is to nurture young minds through a holistic approach that combines academic excellence with character development, creativity, and life skills. We create a warm, stimulating environment where every child feels valued, safe, and inspired to learn.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Silver Hoofs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Syllabus Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 mb-4">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Syllabus
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Our carefully designed curriculum follows a progressive learning approach, appropriate for each age group. We integrate multiple learning domains including:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Language Development:</strong> Phonics, reading readiness, vocabulary building, and communication skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Mathematics:</strong> Number concepts, shapes, patterns, and basic operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Science & Discovery:</strong> Exploration, observation, and hands-on experiments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Creative Arts:</strong> Music, art, drama, and creative expression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Physical Development:</strong> Fine and gross motor skills, coordination, and healthy habits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Social-Emotional Learning:</strong> Self-awareness, empathy, cooperation, and emotional regulation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Dedicated Staff
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p className="leading-relaxed">
                Our teachers are the heart of Silver Hoofs. Each educator is carefully selected for their qualifications, experience, and genuine passion for working with young children. They undergo continuous professional development to stay updated with the latest in early childhood education.
              </p>
              <p className="leading-relaxed">
                Our staff creates a warm, nurturing atmosphere where children feel secure, valued, and encouraged to explore their potential. We maintain appropriate teacher-to-child ratios to ensure every child receives the attention they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover why parents choose Silver Hoofs for their children
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
