
import { Car, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Premium Fleet",
      description: "Access to our luxury vehicle fleet, maintained to the highest standards of comfort and safety."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "24/7 Availability",
      description: "Round-the-clock service with flexible booking options to accommodate your schedule."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Professional Drivers",
      description: "Experienced, licensed, and professionally trained chauffeurs ensuring your safety and comfort."
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Experience luxury transportation tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;