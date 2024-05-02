const HeroSection = () => {
  return (
    <div className="relative h-[80vh] w-full">
      <img
        src="/heroimage.jpg"
        alt="Hero Image"
        className="h-full w-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 z-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Page</h1>
        <p className="text-lg md:text-xl mb-8">Discover our wide range of IT services and solutions</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;