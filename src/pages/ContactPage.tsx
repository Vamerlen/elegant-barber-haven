
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Get in touch with KMD Pro Barber for appointments, inquiries, or feedback
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-barber-gold bg-opacity-20 rounded-full">
                    <MapPin className="text-barber-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-barber-charcoal/80">
                      599 Catherina Street<br />
                      By Braai Mekka<br />
                      Pretoria, South Africa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-barber-gold bg-opacity-20 rounded-full">
                    <Phone className="text-barber-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-barber-charcoal/80">+27 78 824 6963</p>
                    <p className="text-barber-charcoal/60 text-sm mt-1">Tuesday - Sunday: 07:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-barber-gold bg-opacity-20 rounded-full">
                    <Mail className="text-barber-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-barber-charcoal/80">kdmprobarber@outlook.com</p>
                    <p className="text-barber-charcoal/60 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday</span>
                    <span className="text-barber-charcoal/80">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tuesday - Friday</span>
                    <span className="text-barber-charcoal/80">07:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday - Sunday</span>
                    <span className="text-barber-charcoal/80">07:00 - 15:00</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-playfair font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-barber-charcoal mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-barber-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-barber-charcoal mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-barber-gold"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-barber-charcoal mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-barber-gold"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-barber-charcoal mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-barber-gold"
                    placeholder="Message subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-barber-charcoal mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-barber-gold"
                    placeholder="Your message"
                    style={{ resize: "none" }}
                  />
                </div>
                
                <Button type="submit" className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="h-[400px] rounded-sm overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224.66973031683696!2d28.193437063312647!3d-25.713835919462525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1743269134192!5m2!1sen!2sza" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KMD Pro Barber Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
