import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">mdmahbubulislam@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+880 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm hover:text-accent transition-smooth">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-accent transition-smooth">
                About Me
              </Link>
              <Link to="/skills" className="text-sm hover:text-accent transition-smooth">
                Skills
              </Link>
              <Link to="/portfolio" className="text-sm hover:text-accent transition-smooth">
                Portfolio
              </Link>
              <Link to="/contact" className="text-sm hover:text-accent transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Social & Current Role */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="text-sm opacity-90">
              Assistant Executive, Organization Development Department
              <br />
              OnnoRokom Group
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent" asChild>
                <a href="mailto:mdmahbubulislam@example.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} MD Mahbub ul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;