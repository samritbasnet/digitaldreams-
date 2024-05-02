const WhyChooseUs = () => {
    return (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2">
            <img
              src="/whychoose.jpg"
              alt="Why Choose Us"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Our IT Ecommerce Services?
            </h2>
            <ul className="text-gray-600 space-y-4">
              <li>
                <svg
                  className="w-6 h-6 text-blue-500 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Low Costs and Free Maintenance</span>
              </li>
              <li>
                <svg
                  className="w-6 h-6 text-blue-500 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Top Efficiency and New Technology</span>
              </li>
              <li>
                <svg
                  className="w-6 h-6 text-blue-500 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Responsive and Fully Customizable Designs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;