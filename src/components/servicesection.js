import Image from 'next/image';

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <Image
                src="/website-design-icon.svg"
                alt="Website Design"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-500 transition-colors duration-300 hover:text-blue-600">
              Website Design
            </h3>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
              Our team of experts will create a stunning and responsive website
              tailored to your business needs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <Image
                src="/mobile-app-icon.svg"
                alt="Mobile App Development"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-500 transition-colors duration-300 hover:text-blue-600">
              Mobile App Development
            </h3>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
              We develop high-performance mobile apps for both iOS and Android
              platforms.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <Image
                src="/dashboard-icon.svg"
                alt="Dashboard & Dev"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-500 transition-colors duration-300 hover:text-blue-600">
              Dashboard & Dev
            </h3>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
              We build custom dashboards and development tools to streamline your
              business operations.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <Image
                src="/webflow-icon.svg"
                alt="Webflow Development"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-500 transition-colors duration-300 hover:text-blue-600">
              Webflow Development
            </h3>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
              Our Webflow experts will help you build and maintain your website
              with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;