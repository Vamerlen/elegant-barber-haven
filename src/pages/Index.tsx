
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Map from '@/components/home/Map';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Map />
      <CallToAction />
    </Layout>
  );
};

export default Index;
