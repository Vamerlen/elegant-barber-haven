
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Map = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Find Us</h2>
          <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
            Visit our elegant barber shop in the heart of Pretoria for the ultimate grooming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] bg-gray-200 rounded-sm flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Will Be Here</p>
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-md rounded-sm border-t-2 border-barber-gold">
            <h3 className="text-2xl font-playfair font-bold mb-6">Visit Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-barber-gold mt-1 mr-3" size={22} />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-barber-charcoal/70">
                    599 Catherina Street<br />
                    By Braai Mekka<br />
                    Pretoria, South Africa
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-barber-gold mt-1 mr-3" size={22} />
                <div>
                  <h4 className="font-semibold mb-1">Hours</h4>
                  <p className="text-barber-charcoal/70">
                    Monday - Friday: 9am - 7pm<br />
                    Saturday: 9am - 6pm<br />
                    Sunday: 10am - 3pm
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-barber-gold mt-1 mr-3" size={22} />
                <div>
                  <h4 className="font-semibold mb-1">Contact</h4>
                  <p className="text-barber-charcoal/70">
                    Phone: +27 12 345 6789<br />
                    Email: info@kmdprobarber.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
