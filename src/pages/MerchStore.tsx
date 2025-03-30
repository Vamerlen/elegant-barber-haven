
import React from 'react';
import Layout from '@/components/layout/Layout';
import { ShoppingBag, Package, Tag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Sample merchandise items data
const merchItems = [
  {
    id: 1,
    name: "KMD Pro Barber T-Shirt",
    description: "Premium cotton t-shirt with embroidered logo",
    price: "R250",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Grooming Kit",
    description: "Complete set with beard oil, comb and scissors",
    price: "R450",
    imageUrl: "https://images.unsplash.com/photo-1589439108834-c52047d64315?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Barber Cap",
    description: "Stylish cap with KMD Pro Barber embroidery",
    price: "R180",
    imageUrl: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Premium Beard Oil",
    description: "Nourishing beard oil with natural ingredients",
    price: "R200",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "KMD Hoodie",
    description: "Comfortable hoodie with embroidered logo",
    price: "R350",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Barber Accessories Set",
    description: "Collection of premium barber accessories",
    price: "R650",
    imageUrl: "https://images.unsplash.com/photo-1599351431613-275b0699ee7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const MerchStore = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Merchandise Store</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Premium quality products for the modern gentleman
          </p>
          <div className="mt-6">
            <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
              <a href="https://kmd-pro-barber-fc86120d5e.printify.me/" target="_blank" rel="noopener noreferrer">See Printify Store</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-barber-gold py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white text-center md:text-left">
            <div className="flex items-center gap-3">
              <Package size={24} />
              <span>Free shipping on orders over R100</span>
            </div>
            <div className="flex items-center gap-3">
              <Tag size={24} />
              <span>Exclusive KMD Pro Barber designs</span>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard size={24} />
              <span>Secure online payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Shop Our Collection</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Quality merchandise that reflects our premium barbershop experience. Each item is carefully selected and designed with our signature elegant style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2">{item.name}</h3>
                  <p className="text-barber-charcoal/70 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-barber-gold font-playfair font-bold text-xl">{item.price}</span>
                    <Button className="bg-barber-charcoal hover:bg-barber-brown">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Printify */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Quality You Can Trust</h2>
              <p className="text-barber-charcoal/80 mb-4">
                We've partnered with Printify to ensure that all our merchandise meets the highest standards of quality. Each item is printed on-demand and shipped directly to you.
              </p>
              <p className="text-barber-charcoal/80 mb-4">
                Our designs reflect the elegant style and attention to detail that KMD Pro Barber is known for, allowing you to bring a piece of our premium experience into your everyday life.
              </p>
              <div className="mb-8 space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Premium quality materials</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Eco-friendly production processes</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Comfortable, durable designs</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>Satisfaction guaranteed</span>
                </div>
              </div>
              <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
                <Link to="/contact">Contact for Bulk Orders</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <ShoppingBag size={280} className="text-barber-gold opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Take the KMD Pro Barber Experience Home
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Browse our collection of premium merchandise and find the perfect addition to your style. From grooming products to apparel, we've got you covered.
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/contact">Contact for Custom Orders</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MerchStore;
