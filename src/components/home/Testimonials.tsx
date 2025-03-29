
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "David Mokgadi",
    role: "Regular Client",
    quote: "Best haircut experience in Pretoria! The attention to detail and professional service keeps me coming back every month.",
    rating: 5
  },
  {
    name: "Thabo Johnson",
    role: "Business Executive",
    quote: "KMD Pro Barber understands what professionals need. Their VIP service is worth every cent for the confidence it gives me.",
    rating: 5
  },
  {
    name: "Mike van Wyk",
    role: "First-time Client",
    quote: "I was blown away by how they transformed my look. Their barbers truly listen and deliver exactly what you want.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-barber-charcoal text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the gentlemen who experience our premium services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border-t-2 border-barber-gold">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <p className="text-white/90 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-semibold text-barber-gold">{testimonial.name}</h4>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
