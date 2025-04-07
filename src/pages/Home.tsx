import { motion } from 'framer-motion';
import { ChevronRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroImage from "../assets/Hero4.jpg"

const Home = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Premium Service',
      description: 'Experience luxury and comfort with our professional chauffeurs',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safety First',
      description: 'Fully licensed and insured for your peace of mind',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service for all your transportation needs',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Luxury Chauffeur Service for Your Journey
            </h1>
            <p className="text-xl mb-8">
              Experience the epitome of luxury transportation with our professional
              chauffeur services. Available 24/7 for your comfort and convenience.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-gold text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Book Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Farooq Chauffeurs?
            </h2>
            <p className="text-xl text-gray-600">
              We provide exceptional service that sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gold rounded-full text-black">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Experience Luxury Transportation?
          </h2>
          <Link
            to="/fleet"
            className="inline-flex items-center bg-gold text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            View Our Fleet
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;