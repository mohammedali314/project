import { Link } from 'react-router-dom';
import { Users, Briefcase, Wine } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      name: "Mercedes E-Class",
      image: "https://samexecutive.co.uk/images/fleet/e-class.jpg",
      description: "Ultimate luxury sedan with premium leather interior and advanced comfort features.",
      features: ["Up to 3 passengers", "2 large suitcases", "Premium leather interior"],
      icon: <Users className="w-5 h-5" />,
      ideal: "Perfect for business travel and airport transfers"
    },
    {
      name: "Mercedes S-Class",
      image: "https://samexecutive.co.uk/images/fleet/s-class.jpg",
      description: "Executive sedan combining luxury with cutting-edge technology.",
      features: ["Up to 3 passengers", "2 large suitcases", "Advanced entertainment system"],
      icon: <Briefcase className="w-5 h-5" />,
      ideal: "Ideal for corporate clients and executives"
    },
    {
      name: "RANGE ROVER HYBIRID ELECTRIC",
      image: "https://samexecutive.co.uk/images/fleet/rangerover.jpg",
      description: "The pinnacle of luxury, offering unparalleled comfort and prestige.",
      features: ["Up to 4 passengers", "3 large suitcases", "Champagne cooler"],
      icon: <Wine className="w-5 h-5" />,
      ideal: "Perfect for special occasions and VIP transport"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Luxury Fleet</h1>
          <p className="text-xl text-gray-600">
            Experience unparalleled comfort with our premium vehicle selection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-contain"
                  style={{ backgroundColor: "#f3f4f6" }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {vehicle.description}
                </p>
                <div className="space-y-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      {vehicle.icon}
                      <span className="ml-2">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 italic mb-4">
                  {vehicle.ideal}
                </p>
                <Link
                  to="/booking"
                  className="inline-block bg-gold text-black px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;