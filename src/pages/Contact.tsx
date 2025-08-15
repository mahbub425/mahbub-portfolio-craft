import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mdmahbubulislam@example.com",
      action: "mailto:mdmahbubulislam@example.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+880 123 456 789",
      action: "tel:+8801234567890"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bangladesh",
      action: null
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Current Role",
      value: "Assistant Executive, OnnoRokom Group",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "#",
      color: "text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub", 
      url: "#",
      color: "text-gray-800"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      url: "mailto:mdmahbubulislam@example.com",
      color: "text-red-600"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-hero mb-6">Get In Touch</h1>
            <p className="text-subtitle max-w-3xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, collaborations, 
              or sharing insights about organizational development, AI tools, and business analysis.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                      {info.action && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={info.action}>
                            <Send className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Connect on Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-smooth group"
                      >
                        <div className={`${social.color} group-hover:scale-110 transition-smooth mb-2`}>
                          {social.icon}
                        </div>
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Note */}
              <Card className="card-elegant border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Professional Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently serving as Assistant Executive at OnnoRokom Group's Organization Development Department. 
                    Open to discussing consulting opportunities, research collaborations, and knowledge sharing 
                    in the areas of business analysis, digital marketing, and organizational development.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="h-6 w-6 text-primary mr-3" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, collaboration idea, or question..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-hero">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location Map */}
          <div className="mt-16 animate-fade-in">
            <Card className="card-elegant overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Bangladesh</h3>
                    <p className="text-muted-foreground">
                      Available for remote consultations and local meetings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;