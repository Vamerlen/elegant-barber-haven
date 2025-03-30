
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Filter, Image, ArrowRight } from 'lucide-react';

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

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    alt: "Modern haircut style"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    alt: "Fade haircut"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beard Grooming",
    alt: "Beard trimming"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    alt: "Stylish haircut"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1593702288056-f5834dbea6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hair Designs",
    alt: "Hair design pattern"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    alt: "Fade haircut with beard"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beard Grooming",
    alt: "Beard styling"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    alt: "Professional haircut"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hair Designs",
    alt: "Creative hair design"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    alt: "Modern hairstyle"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    alt: "Sharp fade"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    alt: "Clean fade haircut"
  }
];

// Sample client transformations
const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Classic Fade Transformation",
    description: "Complete style update with precise fade and beard shaping."
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern Texture Cut",
    description: "Transformed long hair into a textured modern style with natural movement."
  }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [visibleCount, setVisibleCount] = useState(8);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Filter images based on selected category
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredImages.length));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 animate-fade-in">Our Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Browse our portfolio of haircuts, styles, and grooming services
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-2 border-barber-gold p-6 cursor-pointer"
                onClick={() => setSelectedCategory(category.title)}
              >
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
            
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
              <span className="flex items-center mr-2">
                <Filter size={18} className="mr-1" /> Filter:
              </span>
              <Button 
                variant={selectedCategory === "All" ? "default" : "outline"} 
                className={selectedCategory === "All" ? "bg-barber-gold hover:bg-barber-brown" : "border-barber-gold text-barber-charcoal"}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>
              {galleryCategories.map((cat) => (
                <Button 
                  key={cat.title}
                  variant={selectedCategory === cat.title ? "default" : "outline"} 
                  className={selectedCategory === cat.title ? "bg-barber-gold hover:bg-barber-brown" : "border-barber-gold text-barber-charcoal"}
                  onClick={() => setSelectedCategory(cat.title)}
                >
                  {cat.title}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.slice(0, visibleCount).map((image) => (
              <div 
                key={image.id} 
                className="relative aspect-square rounded-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-xs text-barber-gold font-medium">{image.category}</span>
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleCount < filteredImages.length && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMore}
                className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm"
              >
                Load More
              </Button>
            </div>
          )}
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
            {transformations.map((item) => (
              <div key={item.id} className="bg-white shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.before} 
                      alt="Before" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="bg-barber-charcoal/80 text-white text-center py-1">Before</div>
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.after} 
                      alt="After" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="bg-barber-gold text-white text-center py-1">After</div>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold">{item.title}</h3>
                <p className="text-barber-charcoal/70">{item.description}</p>
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
