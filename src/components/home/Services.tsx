
import React from 'react';
import { Scissors, Star, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const serviceData = [
  {
    icon: <Award className="text-barber-gold" size={32} />,
    title: "Hair Dye & Haircut",
    description: "Full color service with expert cutting and styling, available in all colors.",
    price: "R400"
  },
  {
    icon: <Star className="text-barber-gold" size={32} />,
    title: "Fade Cut",
    description: "Expert fade haircut with precision shaving for a clean, fresh look.",
    price: "R150"
  },
  {
    icon: <Scissors className="text-barber-gold" size={32} />,
    title: "Buzzcut",
    description: "Quick and clean buzzcut with consistent length all around using premium clippers.",
    price: "R100"
  },
  {
    icon: <Sparkles className="text-barber-gold" size={32} />,
    title: "Lined Designs",
    description: "Custom hair designs with precision lines and patterns by our expert barbers.",
    price: "R20"
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-barber-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Premium Services</h2>
          <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
            Discover our range of expert grooming services designed for the modern gentleman who appreciates quality and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-2 border-barber-gold"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
              <p className="text-barber-charcoal/70 mb-4">{service.description}</p>
              <p className="text-barber-gold font-playfair font-bold text-xl">From {service.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-white hover:bg-barber-gold hover:text-white text-barber-charcoal border border-barber-gold px-8 py-6 rounded-sm transition-all duration-300">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
