
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

const BookingPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const availableTimes = [
    '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const services = [
    { id: 'haircut', name: 'Haircut', price: 'R150' },
    { id: 'beard', name: 'Beard Trim', price: 'R100' },
    { id: 'combo', name: 'Haircut & Beard Combo', price: 'R220' },
    { id: 'shave', name: 'Clean Shave', price: 'R120' },
    { id: 'fade', name: 'Fade', price: 'R180' },
    { id: 'design', name: 'Hair Design', price: 'R200+' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      date,
      selectedTime,
      selectedService,
      contactInfo
    });
    // Here you would typically send the data to your backend
    alert('Booking request submitted! We will confirm your appointment shortly.');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Book An Appointment</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Schedule your next premium grooming experience with our master barbers
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 shadow-md rounded-sm">
              <h2 className="text-2xl font-playfair font-semibold mb-6">Book Your Appointment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-playfair mb-4">Select a Service</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map(service => (
                      <div 
                        key={service.id}
                        className={`p-4 border cursor-pointer hover:bg-barber-gold/10 transition-colors ${selectedService === service.id ? 'border-barber-gold bg-barber-gold/10' : 'border-gray-200'}`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-barber-gold">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-playfair mb-4">Select a Date</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => {
                        const day = date.getDay();
                        // Disable Mondays (day 1)
                        return day === 1;
                      }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-playfair mb-4">Select a Time</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <div 
                          key={time}
                          className={`py-2 px-3 text-center border cursor-pointer hover:bg-barber-gold/10 transition-colors ${selectedTime === time ? 'border-barber-gold bg-barber-gold/10' : 'border-gray-200'}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-playfair mb-4">Your Contact Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={contactInfo.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={contactInfo.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-barber-gold hover:bg-barber-brown text-white py-6 rounded-sm">
                    Book Appointment
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="bg-barber-charcoal text-white p-8 rounded-sm">
              <h3 className="text-xl font-playfair font-semibold mb-6">Booking Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday: Closed<br />
                    Tuesday - Friday: 07:00 - 18:00<br />
                    Saturday - Sunday: 07:00 - 15:00
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                  <p className="text-gray-300">Please provide at least 24 hours notice for cancellations to avoid a cancellation fee.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Late Arrivals</h4>
                  <p className="text-gray-300">If you arrive late, your service may be shortened or rescheduled to accommodate other appointments.</p>
                </div>
                
                <div className="pt-6">
                  <div className="p-4 bg-barber-gold/20 border border-barber-gold/30 rounded-sm">
                    <p className="text-barber-gold font-semibold">Need assistance with booking?</p>
                    <p className="text-gray-300 mt-2">Call us directly at +27 78 824 6963 or email at kdmprobarber@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How early should I arrive for my appointment?</h3>
              <p className="text-gray-700">We recommend arriving 5-10 minutes before your scheduled appointment time to ensure a smooth check-in process.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Can I book multiple services in one appointment?</h3>
              <p className="text-gray-700">Yes, you can select multiple services. Simply let us know in the special requests field or choose one of our combination packages.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What forms of payment do you accept?</h3>
              <p className="text-gray-700">We accept cash, credit/debit cards, and mobile payment options like SnapScan and Zapper.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Do you offer gift cards?</h3>
              <p className="text-gray-700">Yes, we offer gift cards for all our services. They make perfect gifts for any occasion. You can purchase them in-store or contact us for more information.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
