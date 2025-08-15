import { Link } from "react-router-dom";
import { ChevronRight, BarChart, Brain, Users, Search, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const highlights = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Current Role",
      description: "Assistant Executive, Organization Development, OnnoRokom Group (Joined: October 8, 2023)"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Education Milestone",
      description: "Master's in Administration, Pabna University of Science and Technology"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Diverse Expertise",
      description: "From Digital Marketing to AI Tools and Research"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Science Foundation",
      description: "HSC and SSC in Science Group"
    }
  ];

  const testimonials = [
    {
      quote: "Innovation in organizational development starts with data and ends with impact.",
      author: "MD Mahbub ul Islam"
    },
    {
      quote: "Blending science education with business acumen for real-world solutions.",
      author: "MD Mahbub ul Islam"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section className="relative gradient-hero text-primary-foreground section-padding min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-hero mb-6">
              Welcome to the Portfolio of{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                MD Mahbub ul Islam
              </span>
            </h1>
            <p className="text-subtitle mb-8 max-w-3xl mx-auto">
              Experienced Product Analyst, Business Analyst, Digital Marketer, AI Tools Expert, 
              Researcher, and Organizational Development Specialist
            </p>
            <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Currently serving as Assistant Executive in the Organization Development Department 
              at OnnoRokom Group since October 8, 2023.
            </p>
            <Button asChild className="btn-hero animate-scale-in">
              <Link to="/portfolio">
                Explore My Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-section-title mb-8">Professional Summary</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
              <p className="text-lg">
                With a strong background in administration from Pabna University of Science and Technology 
                (Graduation and Master's), I bring expertise across multiple sectors. My journey began with 
                SSC in Science from Andharijhar High School and HSC in Science from Bhurungamari Govt Degree College. 
                Now at OnnoRokom Group, I focus on driving organizational growth through data-driven insights 
                and innovative strategies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center animate-slide-in-right">
                <BarChart className="h-10 w-10 text-primary mx-auto mb-3" />
                <span className="text-sm font-medium">Product Analysis</span>
              </div>
              <div className="text-center animate-slide-in-right delay-100">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
                <span className="text-sm font-medium">Business Analysis</span>
              </div>
              <div className="text-center animate-slide-in-right delay-200">
                <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
                <span className="text-sm font-medium">AI Tools Expert</span>
              </div>
              <div className="text-center animate-slide-in-right delay-300">
                <Search className="h-10 w-10 text-primary mx-auto mb-3" />
                <span className="text-sm font-medium">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <h2 className="text-section-title text-center mb-12 animate-fade-in">Featured Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-feature animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-smooth">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/about">
                Learn More About Me
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-section-title text-center mb-12 animate-fade-in">Professional Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8 text-center">
                  <blockquote className="text-lg italic mb-4 text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-primary">
                    — {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-hero">
              <Link to="/contact">
                Get In Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;