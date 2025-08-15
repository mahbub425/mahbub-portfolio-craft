import { BarChart, Brain, TrendingUp, Search, Users, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const coreSkills = [
    {
      name: "Product Analysis",
      icon: <BarChart className="h-6 w-6" />,
      level: 90,
      description: "Data interpretation, user metrics analysis, and product performance optimization"
    },
    {
      name: "Business Analysis", 
      icon: <TrendingUp className="h-6 w-6" />,
      level: 88,
      description: "Requirements gathering, process mapping, and business solution design"
    },
    {
      name: "Digital Marketing",
      icon: <Brain className="h-6 w-6" />,
      level: 85,
      description: "SEO optimization, content strategy, social media management, and campaign analytics"
    },
    {
      name: "AI Tools Expertise",
      icon: <Brain className="h-6 w-6" />,
      level: 82,
      description: "Machine learning applications, AI tool integration, and automation solutions"
    }
  ];

  const supportingSkills = [
    {
      category: "Research",
      icon: <Search className="h-6 w-6" />,
      skills: ["Qualitative Research", "Quantitative Methods", "Market Analysis", "Data Collection"]
    },
    {
      category: "Organizational Development",
      icon: <Users className="h-6 w-6" />,
      skills: ["Change Management", "Team Building", "Process Improvement", "Culture Development"]
    },
    {
      category: "Administration",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Policy Formulation", "Leadership", "Strategic Planning", "Project Management"]
    }
  ];

  const tools = [
    { name: "Microsoft Excel", category: "Analytics", proficiency: "Expert" },
    { name: "Google Analytics", category: "Digital Marketing", proficiency: "Advanced" },
    { name: "ChatGPT & AI Platforms", category: "AI Tools", proficiency: "Expert" },
    { name: "Project Management Software", category: "Organization", proficiency: "Advanced" },
    { name: "SQL", category: "Data", proficiency: "Intermediate" },
    { name: "Power BI", category: "Visualization", proficiency: "Advanced" },
    { name: "Tableau", category: "Visualization", proficiency: "Intermediate" },
    { name: "Adobe Creative Suite", category: "Design", proficiency: "Intermediate" }
  ];

  const softSkills = [
    "Communication", "Problem-solving", "Adaptability", "Critical Thinking",
    "Leadership", "Team Collaboration", "Time Management", "Innovation"
  ];

  return (
    <div className="space-y-0">
      {/* Overview */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-hero mb-6">Skills & Expertise</h1>
            <p className="text-subtitle max-w-3xl mx-auto leading-relaxed">
              My skills span analytical, technical, and creative domains, honed through education 
              and professional experience. I combine scientific thinking with business acumen to 
              deliver innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Professional Skills */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-section-title text-center mb-12 animate-fade-in">
              Core Professional Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreSkills.map((skill, index) => (
                <Card key={index} className="card-elegant animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 text-primary">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <div className="flex items-center mt-2">
                          <Progress value={skill.level} className="flex-1 mr-3" />
                          <span className="text-sm font-medium text-primary">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Skills */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-section-title text-center mb-12 animate-fade-in">
              Supporting Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportingSkills.map((category, index) => (
                <Card key={index} className="card-elegant animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-section-title text-center mb-12 animate-fade-in">
              Tools & Technologies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {tools.map((tool, index) => (
                <Card key={index} className="card-feature animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{tool.name}</h4>
                        <p className="text-sm text-muted-foreground">{tool.category}</p>
                      </div>
                      <Badge variant={tool.proficiency === "Expert" ? "default" : tool.proficiency === "Advanced" ? "secondary" : "outline"}>
                        {tool.proficiency}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Interested in working together or learning more about my expertise?
              </p>
              <div className="space-x-4">
                <Button asChild className="btn-hero">
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="btn-secondary">
                  <a href="/contact">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;