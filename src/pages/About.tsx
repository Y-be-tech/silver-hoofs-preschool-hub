import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Target, BookOpen, Shield, Sparkles, CheckCircle, GraduationCap, Building2, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About Silver Hoofs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building foundations for a lifetime of learning through nurturing care, expert guidance, and joyful discovery.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Silver Hoofs Pre-School was founded with a simple yet profound belief: that every child deserves the best possible start in life. Established by educators passionate about early childhood development, we have been nurturing young minds and creating a warm, engaging learning environment where children thrive.
            </p>
            <p className="text-lg text-muted-foreground">
              Over the years, we have proudly watched hundreds of children take their first steps in learning, develop confidence, and grow into curious, capable individuals ready for the next stage of their educational journey. Our commitment to excellence in early childhood education remains as strong today as it was on day one.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide a nurturing and stimulating environment where every child can explore, learn, and grow at their own pace. We are committed to fostering curiosity, creativity, and confidence in each child through a holistic, play-based curriculum that balances academics with social-emotional development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the leading preschool that parents trust for exceptional early childhood education. We envision a community where children develop a lifelong love for learning, strong character, and the skills to thrive in an ever-changing world. We aspire to set the gold standard in preschool education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Educational Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Silver Hoofs, we embrace a child-centric approach that recognizes each child as a unique individual with their own interests, strengths, and pace of development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Play-Based Learning</h3>
                <p className="text-muted-foreground text-sm">
                  We believe that play is the most natural and effective way for young children to learn. Through carefully designed activities, children develop cognitive, physical, social, and emotional skills while having fun.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Holistic Development</h3>
                <p className="text-muted-foreground text-sm">
                  Our curriculum addresses all areas of development - cognitive, language, motor skills, social-emotional, and creative expression. We nurture the whole child, not just academic abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Experiential Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Children learn best through hands-on experiences. We provide rich, multi-sensory activities that allow children to explore, experiment, and discover the world around them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Individual Attention</h3>
                <p className="text-muted-foreground text-sm">
                  With small class sizes and optimal teacher-to-child ratios, we ensure every child receives personalized attention and support tailored to their unique learning style and developmental needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Safe Environment</h3>
                <p className="text-muted-foreground text-sm">
                  We maintain the highest standards of safety and hygiene. Our child-proofed facilities, secure premises, and vigilant supervision ensure parents have complete peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Parent Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  We believe parents are a child's first teachers. We maintain open communication and involve parents in their child's learning journey through regular updates, meetings, and events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Comprehensive Curriculum
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Our curriculum is thoughtfully designed to provide a balanced, age-appropriate learning experience that prepares children for future academic success while nurturing their natural curiosity and creativity.
            </p>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Language & Literacy Development</h3>
                      <p className="text-muted-foreground text-sm">
                        Through storytelling, phonics, rhymes, and interactive reading sessions, we build strong language foundations. Children develop listening, speaking, pre-reading, and early writing skills that prepare them for formal literacy instruction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Mathematical Concepts</h3>
                      <p className="text-muted-foreground text-sm">
                        Using hands-on materials and playful activities, we introduce numbers, counting, patterns, shapes, measurements, and basic operations. Children learn mathematical thinking through games, puzzles, and real-world applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Science & Exploration</h3>
                      <p className="text-muted-foreground text-sm">
                        Children explore the natural world through observations, simple experiments, and discovery activities. We foster scientific thinking, curiosity, and a sense of wonder about nature, animals, plants, weather, and the world around us.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Creative Arts & Expression</h3>
                      <p className="text-muted-foreground text-sm">
                        Art, music, dance, and drama activities allow children to express themselves creatively, develop fine motor skills, and build confidence in self-expression. We celebrate each child's unique creativity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Physical Development</h3>
                      <p className="text-muted-foreground text-sm">
                        Through outdoor play, yoga, sports, and movement activities, we promote gross and fine motor development, coordination, balance, and healthy habits. Physical activity is integrated into daily routines.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Social-Emotional Learning</h3>
                      <p className="text-muted-foreground text-sm">
                        We emphasize character development, emotional regulation, empathy, cooperation, and problem-solving. Children learn to work in groups, share, take turns, express feelings appropriately, and build positive relationships.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our teachers are our greatest asset. Each member of our team is carefully selected for their qualifications, experience, passion for early childhood education, and genuine love for children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Qualified Educators</h3>
                <p className="text-muted-foreground text-sm">
                  All our teachers hold relevant degrees and certifications in early childhood education
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg">Passionate & Caring</h3>
                <p className="text-muted-foreground text-sm">
                  Our teachers genuinely care about each child's wellbeing and development
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg">Ongoing Training</h3>
                <p className="text-muted-foreground text-sm">
                  Regular professional development keeps our staff updated with best practices
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Experienced Team</h3>
                <p className="text-muted-foreground text-sm">
                  Combined decades of experience in nurturing and educating young children
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our thoughtfully designed campus provides a safe, stimulating, and joyful environment where children can learn, play, and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Bright Classrooms</h3>
                <p className="text-muted-foreground text-sm">
                  Spacious, well-ventilated, and colorfully decorated classrooms designed specifically for young learners
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Outdoor Play Area</h3>
                <p className="text-muted-foreground text-sm">
                  Safe outdoor playground with age-appropriate equipment for physical development and active play
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Activity Rooms</h3>
                <p className="text-muted-foreground text-sm">
                  Dedicated spaces for art, music, dance, and other creative activities
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Safety First</h3>
                <p className="text-muted-foreground text-sm">
                  CCTV surveillance, secure entry systems, and child-proofed infrastructure throughout
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Hygienic Environment</h3>
                <p className="text-muted-foreground text-sm">
                  Regular cleaning and sanitization to maintain the highest hygiene standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Learning Resources</h3>
                <p className="text-muted-foreground text-sm">
                  Rich library of books, educational toys, manipulatives, and learning materials
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What Makes Silver Hoofs Different?
            </h2>
            
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Low Teacher-Student Ratio</h3>
                      <p className="text-muted-foreground">
                        We maintain small class sizes to ensure every child receives individual attention and personalized learning experiences. Your child is never just a number here - they are known, valued, and nurtured.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Family-Like Atmosphere</h3>
                      <p className="text-muted-foreground">
                        Silver Hoofs feels like a second home. We create a warm, nurturing environment where children feel loved, safe, and valued. Strong relationships between teachers, children, and families are at our core.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Sparkles className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Balanced Curriculum</h3>
                      <p className="text-muted-foreground">
                        We strike the perfect balance between structured learning and free play, academics and creativity, indoor and outdoor activities. Children learn through joy, not pressure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Strong Parent Communication</h3>
                      <p className="text-muted-foreground">
                        We keep parents informed and involved through daily updates, regular parent-teacher meetings, progress reports, and special events. You'll always know what your child is learning and how they're progressing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Focus on Character Development</h3>
                      <p className="text-muted-foreground">
                        Beyond academics, we emphasize values like kindness, respect, empathy, honesty, and responsibility. We're shaping not just smart students, but good human beings who will contribute positively to society.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
