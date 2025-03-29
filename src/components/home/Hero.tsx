
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-barber-charcoal to-black">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
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
    </section>
  );
};

export default Hero;
