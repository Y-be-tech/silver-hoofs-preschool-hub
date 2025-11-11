import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/silver-hoofs-logo.png";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Playgroup", path: "/services/playgroup" },
    { name: "Nursery", path: "/services/nursery" },
    { name: "Junior KG", path: "/services/junior-kg" },
    { name: "Senior KG", path: "/services/senior-kg" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Silver Hoofs Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-base font-medium text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      to={service.path}
                      className={`w-full ${
                        isActive(service.path) ? "text-primary font-medium" : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About Us
            </Link>

            <WhatsAppButton className="rounded-full" message="Hello! I would like to know more about admissions at Silver Hoofs.">Chat on WhatsApp</WhatsAppButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/") ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              Home
            </Link>

            <div className="px-4 py-2 font-medium text-muted-foreground text-sm">Services</div>
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={() => setIsOpen(false)}
                className={`block px-8 py-2 rounded-lg transition-colors ${
                  isActive(service.path) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
                }`}
              >
                {service.name}
              </Link>
            ))}

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/about") ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              About Us
            </Link>

            <div className="px-4 py-2">
              <WhatsAppButton className="w-full rounded-full" message="Hi! I'd like information about Silver Hoofs programs.">Chat on WhatsApp</WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
