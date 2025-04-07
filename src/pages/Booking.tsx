import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Car } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    vehicle: '',
    date: '',
    time: '',
    passengers: '',
    pickupLocation: '',
    dropoffLocation: '',
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Journey</h1>
          <p className="text-xl text-gray-600">
            Complete the form below to reserve your luxury transportation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <Car className="w-5 h-5 mr-2" />
                  Service Type
                </div>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                required
              >
                <option value="">Select a service</option>
                <option value="airport">Airport Transfer</option>
                <option value="hourly">Hourly Charter</option>
                <option value="event">Event Transportation</option>
                <option value="corporate">Corporate Service</option>
              </select>
            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <Car className="w-5 h-5 mr-2" />
                  Select Vehicle
                </div>
              </label>
              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                required
              >
                <option value="">Choose a vehicle</option>
                <option value="s-class">Mercedes-Benz S-Class</option>
                <option value="7-series">BMW 7 Series</option>
                <option value="phantom">Rolls-Royce Phantom</option>
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Date
                  </div>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Time
                  </div>
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                  required
                />
              </div>
            </div>

            {/* Number of Passengers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Number of Passengers
                </div>
              </label>
              <input
                type="number"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                min="1"
                max="4"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                required
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Pickup Location
                </div>
              </label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Enter pickup address"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                required
              />
            </div>

            {/* Dropoff Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Dropoff Location
                </div>
              </label>
              <input
                type="text"
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
                placeholder="Enter dropoff address"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                required
              />
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
                placeholder="Any special requirements or preferences?"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gold text-black py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;