
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Check, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const barbers = [
  { id: 1, name: "Kgothatso Malemela", specialties: "Classic cuts, Fades" },
  { id: 2, name: "Michael Dlamini", specialties: "Pompadours, Beard styling" },
  { id: 3, name: "David Nkosi", specialties: "Modern styles, Textured cuts" },
  { id: 4, name: "Thabo Molefe", specialties: "Contemporary cuts, Color treatments" }
];

const services = [
  { id: 1, name: "Classic Haircut", duration: "45 min", price: "R180" },
  { id: 2, name: "Premium Haircut", duration: "60 min", price: "R250" },
  { id: 3, name: "Hot Towel Shave", duration: "30 min", price: "R180" },
  { id: 4, name: "Beard Trim & Style", duration: "30 min", price: "R150" },
  { id: 5, name: "VIP Experience", duration: "90 min", price: "R450" }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
  "5:00 PM", "6:00 PM"
];

const BookingPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    barber: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    
    toast({
      title: "Booking Successful!",
      description: "Your appointment has been scheduled. We look forward to seeing you!",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      barber: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Book An Appointment</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Schedule your premium grooming experience at KMD Pro Barber
          </p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-playfair font-bold mb-8">Schedule Your Visit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
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
                  
                  <div className="mt-6">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                    />
                  </div>
                </div>
                
                {/* Service Selection */}
                <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Choose Your Service</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Select Service</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration} - {service.price})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="barber" className="block text-sm font-medium mb-2">Select Barber (Optional)</label>
                    <select
                      id="barber"
                      name="barber"
                      value={formData.barber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                    >
                      <option value="">No preference</option>
                      {barbers.map(barber => (
                        <option key={barber.id} value={barber.id}>
                          {barber.name} - {barber.specialties}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Date and Time */}
                <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date</label>
                      <div className="relative">
                        <input
                          id="date"
                          name="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-barber-charcoal/60" size={18} />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-2">Preferred Time</label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Additional Notes */}
                <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">Special Requests or Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any special requests or additional information?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <Button type="submit" className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-barber-cream p-6 border-t-2 border-barber-gold sticky top-24">
                <h3 className="text-xl font-playfair font-semibold mb-6">Booking Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Check className="text-barber-gold mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-barber-charcoal/80">
                      <span className="font-semibold">Online Booking:</span> Secure your preferred time slot without the wait.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-barber-gold mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-barber-charcoal/80">
                      <span className="font-semibold">Arrival Time:</span> Please arrive 10 minutes before your scheduled appointment.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="text-barber-gold mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-barber-charcoal/80">
                      <span className="font-semibold">Cancellation Policy:</span> Please provide at least 24 hours notice for cancellations.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-barber-gold/30">
                  <h4 className="font-semibold mb-4">Need Assistance?</h4>
                  <p className="text-barber-charcoal/80 mb-4">
                    If you need help with your booking or have any questions, feel free to contact us.
                  </p>
                  <p className="font-medium">
                    <a href="tel:+27123456789" className="text-barber-gold hover:underline">+27 12 345 6789</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
