import { GraduationCap, Briefcase, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      level: "Master's Degree",
      field: "Administration",
      institution: "Pabna University of Science and Technology",
      description: "Advanced studies in organizational management and administrative excellence"
    },
    {
      level: "Bachelor's Degree", 
      field: "Administration",
      institution: "Pabna University of Science and Technology",
      description: "Foundation in administrative principles and business operations"
    },
    {
      level: "HSC",
      field: "Science Group",
      institution: "Bhurungamari Govt Degree College",
      description: "Higher secondary education with focus on scientific methodology"
    },
    {
      level: "SSC",
      field: "Science Group", 
      institution: "Andharijhar High School",
      description: "Secondary education building analytical and logical thinking skills"
    }
  ];

  const experiences = [
    {
      title: "Product Analyst",
      description: "Analyzing product performance and user feedback to drive improvements and strategic decisions"
    },
    {
      title: "Business Analyst",
      description: "Bridging business needs with technical solutions through comprehensive analysis and documentation"
    },
    {
      title: "Digital Marketer",
      description: "Crafting campaigns for online growth and brand visibility across digital platforms"
    },
    {
      title: "AI Tools Expert",
      description: "Implementing AI solutions for operational efficiency and predictive analytics"
    },
    {
      title: "Research Specialist",
      description: "Conducting in-depth studies on market trends and organizational development"
    },
    {
      title: "Organizational Development Expert",
      description: "Enhancing company structures, culture, and processes for optimal performance"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Introduction */}
      <section className="section-padding bg-gradient-to-br from-accent/20 to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-32 h-32 gradient-primary rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-foreground">MI</span>
            </div>
            <h1 className="text-hero mb-6">About MD Mahbub ul Islam</h1>
            <p className="text-subtitle max-w-3xl mx-auto leading-relaxed">
              Hello, I'm MD Mahbub ul Islam, a dedicated professional with a passion for analysis, 
              marketing, and organizational excellence. Based in Bangladesh, I leverage my science-rooted 
              education to tackle complex business challenges with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-section-title">Educational Background</h2>
              <p className="text-muted-foreground text-lg">
                A strong foundation in science and administration
              </p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-elegant animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{edu.level} in {edu.field}</h3>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                          <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-section-title">Professional Experience</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Diverse expertise across multiple domains
              </p>
              
              {/* Current Role Highlight */}
              <Card className="card-elegant mb-8 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Current Position</h3>
                  <p className="text-xl font-semibold mb-2">Assistant Executive</p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Organization Development Department, OnnoRokom Group
                  </p>
                  <p className="text-sm font-medium text-primary">
                    Joined: October 8, 2023
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Focusing on process improvements, research initiatives, and team development. 
                    Driving organizational transformation through data-driven insights and strategic planning.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-feature animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">{exp.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests and Goals */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interests */}
              <Card className="card-elegant animate-fade-in">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Personal Interests</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate about technology integration in business, continuous learning in AI, 
                    and contributing to sustainable organizational practices. I believe in the power 
                    of data-driven decision making and innovative problem-solving approaches.
                  </p>
                </CardContent>
              </Card>
              
              {/* Goals */}
              <Card className="card-elegant animate-fade-in delay-200">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Future Goals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aiming to lead transformative projects in digital and organizational domains 
                    while mentoring upcoming professionals. My goal is to bridge the gap between 
                    traditional business practices and modern technological solutions.
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

export default About;