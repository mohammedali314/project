import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      content: "The service provided by Anaya's Car was exceptional. The driver was professional, punctual, and the vehicle was immaculate. Perfect for business travel.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      role: "Event Planner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content: "I regularly use Anaya's Car for my high-profile clients. Their attention to detail and reliability is unmatched. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Corporate Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "Outstanding service! The online booking system is seamless, and the chauffeurs are always professional. A premium service worth every penny.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Wedding Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      content: "We use Anaya's Car for all our wedding transportation needs. Their luxury fleet and professional service never disappoints our clients.",
      rating: 5
    },
    {
      name: "David Parker",
      role: "Hotel Concierge",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      content: "As a hotel concierge, I only recommend the best to our guests. Anaya's Car consistently delivers exceptional service.",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Frequent Traveler",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      content: "I travel frequently for work, and Anaya's Car is my go-to service. Always on time, professional, and comfortable.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <Star key={index} className="w-5 h-5 text-gold fill-current" />
    ));
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 relative transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;