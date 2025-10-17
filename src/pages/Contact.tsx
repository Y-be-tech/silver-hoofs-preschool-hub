import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  classLevel: z.string().min(1, "Please select a class"),
  phoneNumber: z.string().trim().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      classLevel: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log("Form submitted:", data);
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you shortly to discuss enrollment.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Visit us or reach out to learn more about Silver Hoofs.
          </p>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Enquire Now</h2>
                  <p className="text-muted-foreground">
                    Fill in your details and we'll get back to you soon
                  </p>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="classLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Class *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="playgroup">Playgroup</SelectItem>
                              <SelectItem value="nursery">Nursery</SelectItem>
                              <SelectItem value="junior-kg">Junior KG</SelectItem>
                              <SelectItem value="senior-kg">Senior KG</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Enter 10-digit phone number" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" size="lg">
                      Submit Enquiry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    Contact number will be provided
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    Email address will be provided
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    See map below for directions
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat-Sun: 10:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-muted/30 p-6 border-b">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Visit Us</h2>
                  <p className="text-muted-foreground">
                    Find us on the map and plan your visit to Silver Hoofs Pre-School
                  </p>
                </div>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5977885384914!2d72.99394807495855!3d19.168848982056084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f5c7e26a6d%3A0x8a5e8f5c8f5c8f5c!2sSilver%20Hoofs%20Pre%20School!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Silver Hoofs Pre-School Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Schedule a Visit
            </h2>
            <p className="text-lg text-muted-foreground">
              We welcome you to visit our campus, meet our teachers, and see our facilities firsthand. Contact us today to schedule a tour and learn more about how Silver Hoofs can be the perfect start to your child's educational journey.
            </p>
            <div className="pt-4">
              <Card className="border-2 bg-primary/5">
                <CardContent className="p-6">
                  <p className="text-foreground font-medium">
                    Please contact us to get the phone number and email address for scheduling your visit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
