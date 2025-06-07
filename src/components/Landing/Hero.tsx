import { useEffect, useState } from "react";

export default function ExactHeroCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Professional diverse images
  const images = [
    "/slideshow/16.png",
    "/slideshow/20.png",
    "/slideshow/25.png",
    "/slideshow/16.png",
    "/slideshow/20.png",
    "/slideshow/25.png",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      {/* Content container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl w-full px-8 items-center mt-15 md:mt-0">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-purple-600 font-semibold mb-4">CREATIVE STUDIO</div>
            <h1 className="font-extrabold text-5xl lg:text-6xl leading-tight text-gray-900 mb-8">
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 mb-12 max-w-lg">
              We blend innovative design with cutting-edge technology to create
              memorable digital experiences that captivate and inspire.
            </p>
            <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1">
                Book Demo
              </button>
              <button className="bg-transparent text-purple-600 font-semibold px-10 py-4 rounded-full border-2 border-purple-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:-translate-y-1">
                View Work
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Image Carousel */}
        <div className="flex items-center justify-center relative h-96 lg:h-[600px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background images */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-12 -left-5 w-35 h-96 rounded-2xl overflow-hidden opacity-70 transition-all duration-700">
                <img
                  src={images[(currentImageIndex + 2) % images.length]}
                  alt="Background person"
                  className="w-full h-full object-cover object-center transition-transform duration-700"
                />
              </div>
              <div className="absolute top-20 -right-7 w-35 h-96 rounded-2xl overflow-hidden opacity-70 transition-all duration-700">
                <img
                  src={images[(currentImageIndex + 4) % images.length]}
                  alt="Background person"
                  className="w-full h-full object-cover object-center transition-transform duration-700"
                />
              </div>
            </div>

            {/* Main center image */}
            <div className="relative z-10 w-50 h-[500px] rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-3 hover:scale-105">
              <img 
                src={images[currentImageIndex]} 
                alt="Featured person"
                className="w-full h-full object-cover object-center transition-transform duration-700"
              />
            </div>

            {/* Carousel indicators */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125 shadow-lg shadow-purple-500/50"
                      : "bg-purple-600/30 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:scale-110"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}