
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Craftsmanship & Excellence Since 2010</h2>
            <p className="text-barber-charcoal/80 mb-4">
              At KMD Pro Barber, we blend traditional barbering techniques with modern style to deliver an exceptional grooming experience. Our master barbers bring decades of combined expertise to every service.
            </p>
            <p className="text-barber-charcoal/80 mb-6">
              We pride ourselves on creating a sophisticated yet welcoming environment where clients can relax and enjoy premium care. From classic cuts to contemporary styles, we're dedicated to helping you look and feel your best.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Award-winning master barbers</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Premium grooming products</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Comfortable, elegant atmosphere</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Complimentary consultation with every service</span>
              </li>
            </ul>
            <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
              <Link to="/about">Meet Our Team</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-barber-charcoal to-black rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xl">Barber Image</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-barber-gold rounded-sm z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
