
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const barbers = [
  {
    name: "Doudou Madoucha",
    title: "Founder Master Barber",
    experience: "33+ years",
    bio: "Doudou founded KMD Pro Barber with a vision to blend traditional techniques with contemporary style. His precision cuts have earned him recognition throughout Pretoria.",
  },
  {
    name: "Michael Dlamini",
    title: "Senior Barber",
    experience: "10+ years",
    bio: "Michael specializes in classic pompadours and modern fades. His attention to detail and friendly demeanor make him a client favorite.",
  },
  {
    name: "David Nkosi",
    title: "Style Specialist",
    experience: "8+ years",
    bio: "David brings innovative techniques from his international training. He's particularly known for his beard styling and textured cuts.",
  },
  {
    name: "Thabo Molefe",
    title: "Junior Barber",
    experience: "5+ years",
    bio: "Thabo is our rising star with exceptional skills in contemporary styles. He brings fresh energy and modern expertise to our team.",
  }
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About KMD Pro Barber</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A legacy of excellence in the art of barbering since 1992
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-barber-charcoal to-black rounded-sm"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-barber-gold rounded-sm z-[-1]"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="text-barber-charcoal/80 mb-4">
                Founded in 1992 by master barber Doudou Madoucha, KMD Pro Barber began as a small, dedicated space focused on premium grooming services. From those humble beginnings, we've grown into Pretoria's premier destination for sophisticated men's grooming.
              </p>
              <p className="text-barber-charcoal/80 mb-4">
                Our philosophy centers on the perfect blend of traditional barbering techniques and modern style. We believe that a great haircut is about more than appearance—it's about confidence, self-expression, and the experience of being pampered with expert care.
              </p>
              <p className="text-barber-charcoal/80 mb-4">
                Over the years, we've refined our craft and expanded our services while maintaining our commitment to personalized attention and exceptional results. Our barbers are continuously trained in the latest techniques while honoring the classic traditions that form the foundation of our craft.
              </p>
              <p className="text-barber-charcoal/80">
                Today, KMD Pro Barber stands as a testament to our dedication to excellence, creating a space where gentlemen can relax, rejuvenate, and leave looking and feeling their absolute best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-barber-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Meet Our Master Barbers</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Our team of skilled professionals combines decades of experience with passion for their craft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {barbers.map((barber, index) => (
              <div key={index} className="bg-white p-8 shadow-md hover:shadow-lg transition-shadow border-t-2 border-barber-gold">
                <div className="aspect-square bg-gray-200 mb-6 rounded-sm"></div>
                <h3 className="text-xl font-playfair font-semibold mb-1">{barber.name}</h3>
                <p className="text-barber-gold mb-2">{barber.title}</p>
                <p className="text-sm mb-3">Experience: {barber.experience}</p>
                <p className="text-barber-charcoal/70">{barber.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Values</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              These principles guide everything we do at KMD Pro Barber.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-2 border-barber-gold bg-white shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">Excellence</h3>
              <p className="text-barber-charcoal/80">
                We are committed to delivering the highest quality of service in every aspect of our work, from the moment you walk in until you leave our shop.
              </p>
            </div>
            
            <div className="p-8 border-l-2 border-barber-gold bg-white shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">Craftsmanship</h3>
              <p className="text-barber-charcoal/80">
                We honor the traditions of barbering while embracing innovation, continuously honing our skills to perfect our craft.
              </p>
            </div>
            
            <div className="p-8 border-l-2 border-barber-gold bg-white shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">Respect</h3>
              <p className="text-barber-charcoal/80">
                We value each client as an individual, listening carefully to your needs and preferences to provide a truly personalized experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Experience the KMD Pro Barber Difference
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community of satisfied clients and discover premium grooming services tailored to your unique style.
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
