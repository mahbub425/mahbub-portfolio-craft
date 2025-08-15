import { ExternalLink, Calendar, Award, TrendingUp, Users, Search, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      category: "Product Analysis",
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Product Launch Optimization",
      company: "OnnoRokom Group", 
      description: "Optimized product launch strategy through comprehensive data analysis, resulting in 20% efficiency improvement and enhanced market positioning.",
      technologies: ["Excel", "Google Analytics", "Data Visualization"],
      impact: "20% efficiency increase",
      year: "2023"
    },
    {
      category: "Business Analysis",
      icon: <Users className="h-6 w-6" />,
      title: "Digital Transformation Initiative",
      company: "OnnoRokom Group",
      description: "Developed comprehensive business requirements for digital transformation initiatives, streamlining processes and enhancing operational efficiency.",
      technologies: ["Process Mapping", "Requirements Analysis", "Stakeholder Management"],
      impact: "Streamlined 5 core processes",
      year: "2023-2024"
    },
    {
      category: "Digital Marketing",
      icon: <Brain className="h-6 w-6" />,
      title: "Online Engagement Campaign",
      company: "Previous Experience",
      description: "Designed and executed successful digital marketing campaigns that significantly boosted online engagement and brand visibility.",
      technologies: ["SEO", "Social Media", "Content Strategy", "Analytics"],
      impact: "150% engagement increase",
      year: "2023"
    },
    {
      category: "AI Tools Implementation", 
      icon: <Brain className="h-6 w-6" />,
      title: "Predictive Analytics Integration",
      company: "Research Project",
      description: "Integrated AI tools for predictive analytics in research methodologies, improving accuracy and efficiency of data analysis.",
      technologies: ["ChatGPT", "Machine Learning", "Data Analysis", "Automation"],
      impact: "40% faster analysis",
      year: "2023"
    }
  ];

  const researchWorks = [
    {
      title: "Organizational Trends Analysis",
      description: "Comprehensive market analysis report focusing on emerging trends in organizational development and their impact on business growth.",
      type: "Market Research",
      status: "Published",
      year: "2023"
    },
    {
      title: "AI in Business Operations",
      description: "Research study on the integration of artificial intelligence tools in modern business operations and their effectiveness.",
      type: "Technology Research", 
      status: "In Progress",
      year: "2024"
    }
  ];

  const achievements = [
    {
      title: "Joined OnnoRokom Group",
      description: "Started as Assistant Executive in Organization Development Department",
      date: "October 8, 2023",
      type: "career"
    },
    {
      title: "Master's in Administration",
      description: "Completed advanced degree in Administration from Pabna University of Science and Technology",
      date: "2023",
      type: "education"
    },
    {
      title: "Bachelor's in Administration", 
      description: "Graduated with degree in Administration from Pabna University of Science and Technology",
      date: "2022",
      type: "education"
    },
    {
      title: "AI Tools Certification",
      description: "Completed certification in AI tools and their business applications",
      date: "2023",
      type: "certification"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Introduction */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-hero mb-6">Portfolio</h1>
            <p className="text-subtitle max-w-3xl mx-auto leading-relaxed">
              Explore my work across various sectors, demonstrating real-world applications 
              of my skills in analysis, marketing, and organizational development.
            </p>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-section-title text-center mb-12 animate-fade-in">
              Key Projects by Sector
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="card-elegant animate-fade-in hover:scale-105 transform transition-smooth" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">
                        {project.icon}
                      </div>
                      {project.title}
                    </CardTitle>
                    <p className="text-primary font-medium">{project.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div>
                          <span className="text-sm font-semibold text-primary">Impact: </span>
                          <span className="text-sm text-muted-foreground">{project.impact}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research and Development */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-section-title text-center mb-12 animate-fade-in">
              Research & Development Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchWorks.map((research, index) => (
                <Card key={index} className="card-elegant animate-slide-in-right" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={research.status === "Published" ? "default" : "secondary"}>
                        {research.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{research.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{research.title}</h3>
                    <p className="text-primary font-medium mb-3">{research.type}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {research.description}
                    </p>
                    
                    <Button variant="ghost" className="mt-4 p-0">
                      Read More <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Current Organization Work */}
            <Card className="card-elegant mt-8 border-primary/20 animate-fade-in">
              <CardContent className="p-8 text-center">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Current Organization Development</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Since joining OnnoRokom Group in October 2023, I have been implementing comprehensive 
                  development programs focusing on organizational efficiency, team building, and process 
                  optimization. My work includes research-driven initiatives to enhance company culture 
                  and operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12 animate-fade-in">
              Achievements & Milestones
            </h2>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-elegant animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          {achievement.type === "career" ? (
                            <Users className="h-6 w-6 text-primary" />
                          ) : achievement.type === "education" ? (
                            <Award className="h-6 w-6 text-primary" />
                          ) : (
                            <Calendar className="h-6 w-6 text-primary" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{achievement.title}</h3>
                          <span className="text-sm text-primary font-medium">{achievement.date}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;