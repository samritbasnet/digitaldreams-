const ServicesSection = () => {
    return (
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3"
                  />
                </svg>
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
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
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
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
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
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
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