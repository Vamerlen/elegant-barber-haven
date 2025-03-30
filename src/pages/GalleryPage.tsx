
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const galleryCategories = [
  {
    title: "Haircuts",
    description: "Classic and modern haircut styles for all hair types.",
    count: 12
  },
  {
    title: "Beard Grooming",
    description: "Professional beard shaping, trimming and styling.",
    count: 8
  },
  {
    title: "Fades",
    description: "Various fade techniques from skin to high fades.",
    count: 10
  },
  {
    title: "Hair Designs",
    description: "Custom hair designs and detailed line work.",
    count: 6
  }
];

const GalleryPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Browse our portfolio of haircuts, styles, and grooming services
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((category, index) => (
              <div key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-2 border-barber-gold p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">{category.title}</h3>
                <p className="text-barber-charcoal/70 mb-4">{category.description}</p>
                <p className="text-sm text-barber-gold">{category.count} photos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Recent Work</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Take a look at some of our recent haircuts and styles to get inspired for your next visit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Placeholder images - in a real app, these would be actual gallery images */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className="relative aspect-square bg-gradient-to-br from-barber-charcoal/20 to-barber-charcoal/40 rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-barber-charcoal/30 text-xl font-bold">Image {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Client Transformations */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Client Transformations</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              See the amazing before and after transformations of our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white shadow-md p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="aspect-square bg-gradient-to-br from-barber-charcoal/20 to-barber-charcoal/40 flex items-center justify-center">
                    <span className="text-barber-charcoal/30 text-lg font-bold">Before</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-barber-gold/20 to-barber-gold/40 flex items-center justify-center">
                    <span className="text-barber-charcoal/30 text-lg font-bold">After</span>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold">Classic Fade Transformation</h3>
                <p className="text-barber-charcoal/70">Complete style update with precise fade and beard shaping.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Book an appointment today and let our master barbers create your perfect look.
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
