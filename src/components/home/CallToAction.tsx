
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-barber-charcoal to-barber-brown opacity-90"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Experience Premium Grooming Today
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Book your appointment now and discover why KMD Pro Barber is Pretoria's premier destination for the modern gentleman.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
