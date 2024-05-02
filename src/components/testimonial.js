'use client';

import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      company: 'Acme Inc.',
      image: '/testimonials/profile1.jpg',
      quote:
        'The IT ecommerce services provided by this company have been a game-changer for our business. Highly recommended!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'Tech Solutions',
      image: '/testimonials/profile2.jpg',
      quote: 'Exceptional service and attention to detail. I couldn\'t be happier with the results of their work.',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      company: 'Digital Innovations',
      image: '/testimonials/profile3.jpg',
      quote:
        'The team at this IT ecommerce company is truly top-notch. They delivered exactly what we needed, on time and on budget.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;