import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/silver-hoofs-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const whatsappNumber = "919980444424";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to enquire about Silver Hoofs Pre-School.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Silver Hoofs" className="h-20 w-auto" />
            <p className="text-muted-foreground text-sm">
              Nurturing young minds through play-based learning and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  Contact on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/playgroup" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Playgroup
                </Link>
              </li>
              <li>
                <Link to="/services/nursery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nursery
                </Link>
              </li>
              <li>
                <Link to="/services/junior-kg" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Junior KG
                </Link>
              </li>
              <li>
                <Link to="/services/senior-kg" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Senior KG
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Contact number will be provided</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Email will be provided</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat-Sun: 10:00 AM - 1:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Silver Hoofs Pre-School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
