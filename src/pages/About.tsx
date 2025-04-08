function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            With years of experience in luxury transportation, we've built our reputation on reliability,
            professionalism, and exceptional service. Our commitment to excellence has made us a trusted
            name in the industry.
          </p>
          <p className="text-gray-600">
            We take pride in our meticulously maintained fleet and our team of professional chauffeurs
            who are dedicated to providing you with a safe and comfortable journey.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://samexecutive.co.uk/images/mercedes-v-class/mercedes-v-class-2.jpg"
            alt="Luxury vehicle fleet"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;