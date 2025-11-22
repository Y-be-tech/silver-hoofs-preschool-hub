import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Sparkles, ArrowRight, Shield, Award, CheckCircle, Star, Target, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import ImageMarquee from "@/components/ImageMarquee";
import WhatsAppButton from "@/components/WhatsAppButton";
import FacebookPagePlugin from "@/components/FacebookPagePlugin";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Whole-Child Growth",
      description: "Where learning, play, and life skills grow together.",
    },
    {
      icon: Users,
      title: "Caring Educators",
      description: "Teachers who nurture every spark of curiosity.",
    },
    {
      icon: Shield,
      title: "Safe, Happy Spaces",
      description: "Because your child's comfort is our first lesson.",
    },
    {
      icon: Sparkles,
      title: "Modern Learning Magic",
      description: "Smart, creative methods that make education feel like playtime.",
    },
  ];

  const programs = [
    {
      name: "Playgroup",
      age: "2-3 Years",
      path: "/services/playgroup",
      color: "bg-primary/10",
      description: "Tiny explorers begin their journey through colors, textures, and laughter."
    },
    {
      name: "Nursery",
      age: "3-4 Years",
      path: "/services/nursery",
      color: "bg-secondary/10",
      description: "Early learning comes alive through songs, stories, and sensory fun."
    },
    {
      name: "Junior KG",
      age: "4-5 Years",
      path: "/services/junior-kg",
      color: "bg-accent/10",
      description: "Building confidence through creativity, numbers, and early literacy."
    },
    {
      name: "Senior KG",
      age: "5-6 Years",
      path: "/services/senior-kg",
      color: "bg-primary/10",
      description: "Our little graduates get ready for school life — confident, curious, and kind."
    },
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "Child-Centric Approach",
      description: "Every program is designed around the child's natural curiosity and developmental needs"
    },
    {
      icon: GraduationCap,
      title: "Proven Methodology",
      description: "Research-backed teaching methods that have helped hundreds of children thrive"
    },
    {
      icon: Users,
      title: "Individual Attention",
      description: "Small class sizes ensure personalized care and customized learning experiences"
    },
    {
      icon: Target,
      title: "Balanced Curriculum",
      description: "Perfect blend of academics, creativity, physical development, and character building"
    },
  ];

  const testimonials = [
    {
      name: "Priya & Rahul Sharma",
      child: "Aarav (Nursery)",
  quote: "Silver Hoof has been amazing for our daughter. The teachers are so caring and the curriculum is perfect for her age. She looks forward to school every single day!"
    },
    {
      name: "Anjali & Vikram Patel",
      child: "Diya (Junior KG)",
  quote: "We are so grateful to have found Silver Hoof. The individual attention and safe environment give us complete peace of mind. Our son has grown so much!"
    },
    {
      name: "Neha & Arjun Reddy",
      child: "Ishaan (Senior KG)",
  quote: "The holistic approach at Silver Hoof is exactly what we were looking for. They focus on academics while nurturing creativity and social skills too."
    },
  ];

  const classroomImages = [
    {
      src: "/images/Classroom 1 Portrait.jpg",
      title: "Bright Learning Spaces",
      description: "Colorful, well-lit classrooms designed to inspire curiosity and engagement"
    },
    {
      src: "/images/classroom 2 portrait.jpg",
      title: "Interactive Learning Zones",
      description: "Activity corners equipped with educational materials for hands-on learning"
    },
    {
      src: "/images/classroom 3 potrait.jpg",
      title: "Age-Appropriate Setup",
      description: "Furniture and resources sized perfectly for young learners"
    },
    {
      src: "/images/classroom 4 portrait.jpg",
      title: "Creative Art Stations",
      description: "Dedicated spaces for artistic expression and creative development"
    },
    {
      src: "/images/classroom 5 potrait.jpg",
      title: "Reading Corners",
      description: "Cozy spaces filled with age-appropriate books to foster love for reading"
    },
    {
      src: "/images/classroom 6 potrait.jpg",
      title: "STEM Learning Areas",
      description: "Science and math exploration zones with interactive materials"
    },
    {
      src: "/images/classroom 7 potrait.jpg",
      title: "Music & Movement Spaces",
      description: "Areas dedicated to rhythmic activities and musical exploration"
    },
    {
      src: "/images/classroom 8 potrait.jpg",
      title: "Technology Integration",
      description: "Modern learning tools blended with traditional teaching methods"
    },
    {
      src: "/images/classroom 9 potrait.jpg",
      title: "Sensory Play Zones",
      description: "Specialized areas for tactile and sensory development activities"
    },
    {
      src: "/images/classroom 10 potrait.jpg",
      title: "Language Development Centers",
      description: "Literacy-rich environments promoting communication skills"
    },
    {
      src: "/images/classroom 11 potrait.jpg",
      title: "Math Discovery Areas",
      description: "Hands-on materials for early numeracy and problem-solving"
    },
    {
      src: "/images/classroom 12 potrait.jpg",
      title: "Science Exploration Stations",
      description: "Safe experiments and discovery activities for young scientists"
    },
    {
      src: "/images/classroom 14 potrait.jpg",
      title: "Collaborative Learning Spaces",
      description: "Group work areas fostering teamwork and social skills"
    },
    {
      src: "/images/classroom 15 potrait.jpg",
      title: "Innovation Hub",
      description: "Modern classrooms equipped with the latest educational resources"
    },
  ];

  const playAreaImages = [
    {
      src: "/images/play area 1 portrait.jpg",
      title: "Outdoor Adventure Zone",
      description: "Safe, secure outdoor play areas for physical development and fun"
    },
    {
      src: "/images/play area 2 portrait.jpg",
      title: "Indoor Play Facilities",
      description: "Climate-controlled play spaces for year-round active learning"
    },
    {
      src: "/images/Play area 3 portrait.jpg",
      title: "Motor Skills Development",
      description: "Equipment designed to build strength, balance, and coordination"
    },
    {
      src: "/images/inside Play area portrait.jpg",
      title: "Imaginative Play Corners",
      description: "Themed play areas that encourage creativity and role-playing"
    },
    {
      src: "/images/playing 1 landscape.jpg",
      title: "Group Activity Spaces",
      description: "Open areas for collaborative games and social interaction"
    },
    {
      src: "/images/playing 2 portrait.jpg",
      title: "Active Learning Zones",
      description: "Play-based learning areas that make education fun and engaging"
    },
  ];

  const facilitiesImages = [
    {
      src: "/images/reception landscape.jpg",
      title: "Welcoming Reception",
      description: "Friendly front desk with caring staff to greet families every day"
    },
    {
      src: "/images/office 1 Portrait.jpg",
      title: "Administrative Office",
      description: "Professional staff dedicated to supporting your child's journey"
    },
    {
      src: "/images/office 1 landscape.jpg",
      title: "Well-Organized Administration",
      description: "Efficient office spaces ensuring smooth daily operations"
    },
    {
      src: "/images/Out doors portait.jpg",
      title: "Green Outdoor Spaces",
      description: "Natural environment for outdoor learning and exploration"
    },
    {
      src: "/images/outdoors 2 portrait.jpg",
      title: "Safe Play Grounds",
      description: "Secure outdoor areas monitored for safety and enjoyment"
    },
    {
      src: "/images/notice board 1 landscape.jpg",
      title: "Parent Communication",
      description: "Updated notice boards keeping families informed and connected"
    },
    {
      src: "/images/notice board 2 landscape.jpg",
      title: "Weekly Updates",
      description: "Regular information sharing about activities and events"
    },
    {
      src: "/images/notice board 3 landscape.jpg",
      title: "Learning Showcases",
      description: "Displaying children's achievements and creative work"
    },
    {
      src: "/images/notice board 4 landscape.jpg",
      title: "Community Connection",
      description: "Building a strong school-family partnership through communication"
    },
    {
      src: "/images/classroom 2 landscape.jpg",
      title: "Spacious Learning Environment",
      description: "Wide-angle view of our bright and welcoming classrooms"
    },
    {
      src: "/images/I care.jpg",
      title: "Caring Environment",
      description: "A nurturing atmosphere where every child feels valued and loved"
    },
    {
      src: "/images/IMG-20251007-WA0033.jpg",
      title: "Daily Activities",
      description: "Engaging programs that make every day exciting and educational"
    },
    {
      src: "/images/IMG-20251007-WA0034.jpg",
      title: "Learning in Action",
      description: "Children actively participating in structured educational activities"
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
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                Building Foundations for Lifetime Learning
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Learning Meets{" "}
                <span className="text-primary">Joy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Beyond the Books, Into Bright Futures. At Silver Hoof Pre-School, every child learns through joy, curiosity, and connection — discovering their potential one playful step at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp direct chat */}
                <WhatsAppButton size="lg" className="rounded-full w-full sm:w-auto" message="Hi! I'd like to book a school tour at Silver Hoof." />
                <Link to="/about">
                  <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
                    Meet Our Teachers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Happy children learning at Silver Hoof Pre-School"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Page Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow our journey and stay updated with daily activities, events, and learning moments
            </p>
          </div>
          <div className="flex justify-center">
            <FacebookPagePlugin pageUrl="https://www.facebook.com/KidzeeKasavanahalli/" width={500} />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Silver Hoof Pre-School
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Silver Hoof, we believe childhood should be filled with wonder. Our approach blends play, discovery, and empathy — helping children grow strong minds, kind hearts, and lifelong curiosity. Every moment here is designed to make your child feel seen, safe, and celebrated.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="rounded-full">
                Discover Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Silver Hoof?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Silver Hoof stands out as the preferred choice for parents seeking exceptional early education for their little ones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
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
              Age-appropriate learning programs designed to help your child thrive at every stage of development
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
                      <p className="text-primary font-medium mb-2">{program.age}</p>
                      <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
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

      {/* Our Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Teaching Philosophy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learning at Silver Hoof is guided by play, powered by curiosity, and grounded in care. We celebrate every "why?", every giggle, every small win — because that's how big learning begins.
            </p>
            <div className="space-y-4 mb-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 justify-center">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left max-w-xs">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button size="lg" variant="outline" className="rounded-full">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Classrooms Gallery */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Learning Spaces
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every corner at Silver Hoof is designed to spark curiosity and joy — bright classrooms, interactive zones, STEM corners & reading nooks, music and art studios, and safe play areas
            </p>
          </div>
          <ImageMarquee images={classroomImages} direction="left" speed="normal" />
        </div>
      </section>

      {/* Play Areas Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Play & Activity Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Safe, engaging spaces where children develop motor skills, social abilities, and confidence through play
            </p>
          </div>
          <ImageMarquee images={playAreaImages} direction="right" speed="slow" />
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern infrastructure and caring environment ensuring your child's safety, comfort, and growth
            </p>
          </div>
          <ImageMarquee images={facilitiesImages} direction="left" speed="fast" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Parents Say About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our happy parents about their experience with Silver Hoof
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Parents of {testimonial.child}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Begin Your Child's Learning Journey Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the Silver Hoof family and give your child the foundation for a lifetime of success. Schedule a visit to see our facilities and meet our teachers.
          </p>
            <WhatsAppButton size="lg" className="rounded-full text-lg px-8" message="Hello! I'd like to schedule a visit to Silver Hoof." >Schedule a Visit</WhatsAppButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
