
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Get in touch with KMD Pro Barber for inquiries or appointments
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <MapPin className="text-barber-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-barber-charcoal/70">
                      599 Catherina Street<br />
                      By Braai Mekka<br />
                      Pretoria, South Africa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-barber-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-barber-charcoal/70">
                      <a href="tel:+27123456789" className="hover:text-barber-gold transition-colors">+27 12 345 6789</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-barber-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-barber-charcoal/70">
                      <a href="mailto:info@kmdprobarber.com" className="hover:text-barber-gold transition-colors">info@kmdprobarber.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-barber-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p className="text-barber-charcoal/70">
                      Monday - Friday: 9am - 7pm<br />
                      Saturday: 9am - 6pm<br />
                      Sunday: 10am - 3pm
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="https://instagram.com" className="text-barber-charcoal hover:text-barber-gold transition-colors" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="https://facebook.com" className="text-barber-charcoal hover:text-barber-gold transition-colors" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="https://twitter.com" className="text-barber-charcoal hover:text-barber-gold transition-colors" aria-label="Twitter">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="services">Services Inquiry</option>
                    <option value="products">Products Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">Find Us</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Located in the heart of Pretoria, our elegant shop is easily accessible.
            </p>
          </div>
          
          <div className="aspect-[16/9] bg-gray-200 rounded-sm flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Will Be Here</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Find quick answers to our most commonly asked questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-t-2 border-barber-gold p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Do I need an appointment?</h3>
              <p className="text-barber-charcoal/70">
                While we welcome walk-ins, appointments are highly recommended to ensure you get your preferred barber and time slot without waiting.
              </p>
            </div>
            
            <div className="border-t-2 border-barber-gold p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How long does an appointment take?</h3>
              <p className="text-barber-charcoal/70">
                Service times vary based on the type of service. A standard haircut takes about 45 minutes, while our VIP experience can be up to 90 minutes.
              </p>
            </div>
            
            <div className="border-t-2 border-barber-gold p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Do you sell gift cards?</h3>
              <p className="text-barber-charcoal/70">
                Yes, we offer gift cards in various denominations, perfect for any occasion. These can be purchased in-store or by contacting us directly.
              </p>
            </div>
            
            <div className="border-t-2 border-barber-gold p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-barber-charcoal/70">
                We accept cash, all major credit cards, debit cards, mobile payments, and EFT transfers for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
