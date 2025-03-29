
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-barber-charcoal text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and brief info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">KMD <span className="text-barber-gold">Pro</span> Barber</h3>
            <p className="text-gray-300 mb-4">Premium grooming services for the modern gentleman in Pretoria.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-barber-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-barber-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-barber-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h4 className="text-xl font-playfair mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-barber-gold" size={16} />
                <span>599 Catherina Street, <br />By Braai Mekka, <br />Pretoria</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-barber-gold" size={16} />
                <a href="tel:+27123456789" className="hover:text-barber-gold transition-colors">+27 12 345 6789</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 text-barber-gold" size={16} />
                <div>
                  <p>Monday: Closed</p>
                  <p>Tuesday-Friday: 07:00 - 18:00</p>
                  <p>Saturday-Sunday: 07:00 - 15:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-xl font-playfair mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-barber-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-barber-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-barber-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-barber-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/merch" className="hover:text-barber-gold transition-colors">Merchandise</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-barber-gold transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-barber-gold transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-xl font-playfair mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe for updates and special offers</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-barber-gold"
              />
              <button 
                type="submit" 
                className="bg-barber-gold text-white px-4 py-2 rounded hover:bg-barber-brown transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KMD Pro Barber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
