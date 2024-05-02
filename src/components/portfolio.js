import Image from 'next/image';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      image: '/ecommerce.jpg',
      description: 'Designed and developed a modern e-commerce website for a leading retail brand.',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      image: '/mob.jpg',
      description: 'Built a highly-rated mobile app for a fitness startup, available on both iOS and Android.',
    },
    {
      id: 3,
      title: 'Dashboard & Analytics',
      image: '/webanalytic.jpg',
      description: 'Created a custom dashboard and analytics platform to help a SaaS company track key metrics.',
    },
    {
      id: 4,
      title: 'Webflow Integration',
      image: '/webflow.png',
      description: 'Integrated a Webflow-based website with a complex backend system for a professional services firm.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white transition-colors duration-300 hover:bg-blue-500">
                <h3 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 hover:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-white">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;