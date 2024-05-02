import Image from 'next/image';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      image: '/portfolio-1.jpg',
      description: 'Designed and developed a modern e-commerce website for a leading retail brand.',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      image: '/portfolio-2.jpg',
      description: 'Built a highly-rated mobile app for a fitness startup, available on both iOS and Android.',
    },
    {
      id: 3,
      title: 'Dashboard & Analytics',
      image: '/portfolio-3.jpg',
      description: 'Created a custom dashboard and analytics platform to help a SaaS company track key metrics.',
    },
    {
      id: 4,
      title: 'Webflow Integration',
      image: '/portfolio-4.jpg',
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
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;