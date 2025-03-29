
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const location = {
    lat: -25.748586,  // Approximate coordinates for Pretoria
    lng: 28.235019,
    address: '599 Catherina Street, By Braai Mekka, Pretoria, South Africa'
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [location.lng, location.lat],
      zoom: 15
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker
    const marker = new mapboxgl.Marker({ color: '#D4AF37' })
      .setLngLat([location.lng, location.lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<h3 style="margin: 0; padding: 5px 0;">KMD Pro Barber</h3><p style="margin: 0; padding: 0;">${location.address}</p>`))
      .addTo(map.current);
      
    // Open popup by default
    marker.togglePopup();
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
      setShowTokenInput(false);
    }
  }, [mapboxToken]);

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
            {showTokenInput ? (
              <div className="bg-white p-8 shadow-md rounded-sm flex flex-col items-center justify-center min-h-[400px] text-center">
                <h3 className="text-lg font-medium mb-4">Enter your Mapbox public token to see the map</h3>
                <p className="text-barber-charcoal/70 mb-4 max-w-md">
                  Get your free public token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-barber-gold">mapbox.com</a> and paste it below.
                </p>
                <div className="w-full max-w-md">
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm mb-4"
                    placeholder="Enter your Mapbox public token"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                  />
                  <button 
                    className="bg-barber-gold hover:bg-barber-brown text-white px-6 py-2 rounded-sm transition-colors"
                    onClick={() => initializeMap()}
                  >
                    Load Map
                  </button>
                </div>
              </div>
            ) : (
              <div ref={mapContainer} className="h-[400px] rounded-sm overflow-hidden shadow-md"></div>
            )}
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
                    Monday: Closed<br />
                    Tuesday - Friday: 07:00 - 18:00<br />
                    Saturday - Sunday: 07:00 - 15:00
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
