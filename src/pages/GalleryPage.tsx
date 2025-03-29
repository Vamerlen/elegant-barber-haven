
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'haircuts', name: 'Haircuts' },
  { id: 'beards', name: 'Beards' },
  { id: 'shop', name: 'Our Shop' }
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Explore our portfolio of premium cuts, styles, and our elegant shop
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-barber-cream">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-sm transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-barber-gold text-white' 
                    : 'bg-white text-barber-charcoal hover:bg-barber-charcoal hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Gallery Grid with placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="relative group overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm"></div>
                <div className="absolute inset-0 bg-barber-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white font-playfair text-xl mb-2">Classic Fade</h3>
                    <p className="text-white/80">Premium haircut service</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Transformations */}
      <section className="py-16 md:py-24 bg-barber-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Client Transformations</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              See the remarkable before-and-after results from our skilled barbers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white p-6 shadow-md">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-center text-barber-charcoal/60 mb-2">Before</p>
                    <div className="aspect-square bg-gray-200"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-center text-barber-charcoal/60 mb-2">After</p>
                    <div className="aspect-square bg-gray-300"></div>
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-center">Complete Style Transformation</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Interior */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Elegant Space</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Step inside our sophisticated barbershop designed for comfort and luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Experience Our Expertise Firsthand
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to be our next success story? Book an appointment today and discover the KMD Pro Barber experience.
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/booking">Book Your Transformation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
