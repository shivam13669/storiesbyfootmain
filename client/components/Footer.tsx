import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SF</span>
              </div>
              <span className="font-display text-lg font-bold">
                StoriesBy<span className="text-primary font-bold">Foot</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Discover extraordinary destinations and create unforgettable
              memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">New Delhi, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+916205129118"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  +91 62051 29118
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@storiesbyfoot.com"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  contact@storiesbyfoot.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 StoriesByFoot. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
