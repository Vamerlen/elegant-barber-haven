
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-barber-brown via-barber-charcoal to-black overflow-hidden">
      {/* Add animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-barber-gold/10 to-barber-brown/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      {/* Add subtle pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="container-custom relative z-10 flex flex-col justify-center h-full text-white">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-barber-gold font-medium mb-2">Welcome to</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4">
            KMD <span className="text-barber-gold">Pro</span> Barber
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Where traditional barbering meets modern elegance. Experience premier grooming services in Pretoria's finest barber shop.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-sm">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
