import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-elegant">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
              MI
            </div>
            <span className="hidden sm:block font-bold text-lg text-foreground">
              MD Mahbub ul Islam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:mdmahbubulislam@example.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-smooth hover:text-primary px-4 py-2 ${
                    isActive(item.href) ? "text-primary bg-accent" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:mdmahbubulislam@example.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;