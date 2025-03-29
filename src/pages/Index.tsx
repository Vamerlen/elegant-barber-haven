
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Map from '@/components/home/Map';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <section className="py-16 bg-barber-gold text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center mb-6">
            <ShoppingBag size={36} className="mr-3" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">Visit Our Merch Store</h2>
          </div>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take home a piece of the KMD Pro Barber experience with our premium merchandise collection.
          </p>
          <Button asChild className="bg-barber-charcoal hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/merch">Shop Now</Link>
          </Button>
        </div>
      </section>
      <Map />
      <CallToAction />
    </Layout>
  );
};

export default Index;
