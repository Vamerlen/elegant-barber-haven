import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scissors, Star, Award, Sparkles, Coffee, Wind, Palette, Droplet } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="text-barber-gold" size={32} />,
    title: "Buzzcut",
    description: "Quick and clean buzzcut with consistent length all around using premium clippers for a low-maintenance style.",
    price: "R150",
    duration: "30 min"
  },
  {
    icon: <Star className="text-barber-gold" size={32} />,
    title: "Fade Cut & Beard Shave",
    description: "Expert fade haircut with precision beard shaving for a clean, fresh look that transitions smoothly between lengths.",
    price: "R220",
    duration: "60 min"
  },
  {
    icon: <Award className="text-barber-gold" size={32} />,
    title: "Hair Dye & Haircut",
    description: "Full color service with expert cutting and styling, available in all colors. Includes consultation and aftercare advice.",
    price: "R350 - R500",
    duration: "90 min"
  },
  {
    icon: <Coffee className="text-barber-gold" size={32} />,
    title: "Crewcut",
    description: "Classic short cut that's slightly longer on top with tapered sides for a timeless, versatile look.",
    price: "R180",
    duration: "45 min"
  },
  {
    icon: <Wind className="text-barber-gold" size={32} />,
    title: "Lined Designs",
    description: "Custom hair designs with precision lines and patterns by our expert barbers, add personality to any haircut.",
    price: "R250",
    duration: "60 min"
  },
  {
    icon: <Palette className="text-barber-gold" size={32} />,
    title: "Bald Shave & Beard Shave",
    description: "Complete head and beard shave with hot towel treatment for the ultimate smooth, clean finish.",
    price: "R200",
    duration: "45 min"
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Premium grooming experiences tailored to the modern gentleman
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Expert Grooming Services</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              We offer a comprehensive range of premium services to keep you looking and feeling your best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 shadow-md hover:shadow-lg transition-shadow border-t-2 border-barber-gold">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
                <p className="text-barber-charcoal/70 mb-4">{service.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <p className="text-barber-gold font-playfair font-bold">{service.price}</p>
                  <p className="text-sm text-barber-charcoal/60">{service.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-barber-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Premium Products</h2>
              <p className="text-barber-charcoal/80 mb-4">
                At KMD Pro Barber, we use and sell only the highest quality grooming products to ensure you look your best long after you leave our shop.
              </p>
              <p className="text-barber-charcoal/80 mb-6">
                Our curated selection includes premium hair styling products, beard care essentials, and skincare items from renowned brands trusted by professionals worldwide.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Styling pomades, clays, and waxes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Beard oils, balms, and washes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Shaving creams and aftershaves</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Hair and scalp treatments</span>
                </li>
              </ul>
              <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
                <Link to="/contact">Inquire About Products</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-barber-charcoal to-black rounded-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-barber-gold rounded-sm z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Gift Cards Available
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Give the gift of premium grooming. Our gift cards are perfect for birthdays, anniversaries, or any special occasion.
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/contact">Purchase a Gift Card</Link>
          </Button>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-barber-charcoal/80 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why KMD Pro Barber is Pretoria's premier destination for sophisticated grooming.
          </p>
          <Button asChild className="bg-barber-charcoal hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
            <Link to="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
