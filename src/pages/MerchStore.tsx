
import React from 'react';
import Layout from '@/components/layout/Layout';
import { ShoppingBag, Package, Tag, CreditCard, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Sample merchandise items data with updated images - no longer needed
// const merchItems = [ ... ] - removed

const PRINTIFY_SHOP_URL = "https://kmd-pro-barber-fc86120d5e.printify.me/";

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
              <a href={PRINTIFY_SHOP_URL} target="_blank" rel="noopener noreferrer">See Printify Store</a>
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

      {/* Products Grid - Replaced with Shop Our Collection section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Shop Our Collection</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Quality merchandise that reflects our premium barbershop experience. Each item is carefully selected and designed with our signature elegant style.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-3 rounded-sm">
                <a href={PRINTIFY_SHOP_URL} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    See Our Printify Shop <ExternalLink size={16} />
                  </span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Products grid removed */}
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
            <a href={PRINTIFY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Visit Our Printify Store <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MerchStore;
