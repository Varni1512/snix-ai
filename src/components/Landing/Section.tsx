import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Target } from "lucide-react";
import sinxlogo from "/snixlogo.png";

const AIStudioSection = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const carouselSlides = [
    {
      model: "/hero/2.png",
      outfit: "/hero/7.png",
      outfitName: "Pink Blazer Set",
    },
    {
      model: "/hero/9.png",
      outfit: "/hero/13.png",
      outfitName: "Blue Dress",
    },
    {
      model: "/hero/3.png",
      outfit: "/hero/10.png",
      outfitName: "Green Outfit",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section
      ref={containerRef}
      className="relative h-full overflow-hidden flex items-center py-20 px-4 sm:px-6 md:px-8 bg-gray-50"
    >
      <div className="w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white max-w-7xl mx-auto">
        <div
          className={`w-full md:w-1/2 relative transition-all duration-1000 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="relative h-full">
            <img
              src="/hero/14.png"
              alt="Diverse models lineup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-white text-lg font-bold mb-2">+ OUR IMPACT</div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Multiple Ethnicities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Body Inclusive</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 relative flex items-center justify-center p-6 md:p-8 transition-all duration-1000 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          style={{
            background: "linear-gradient(135deg, rgb(30,14,62) 0%, rgb(0,0,0) 50%, rgb(156,32,155) 100%)",
            transform: isInView ? "translateX(0)" : "translateX(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s ease 0.8s",
          }}
        >
          <div className="w-full">
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-white text-xl font-normal tracking-[10px]">AI STUDIO</h3>
            </div>

            <div className="w-[90%] m-auto relative bg-white/70 backdrop-blur-sm rounded-3xl mt-2 shadow-xl">
              <div className="flex flex-col items-start">
                <div className="flex items-start gap-1 p-5 justify-between">
                  <div className="w-2 h-2 bg-[rgb(30,14,62)] rounded-full"></div>
                  <div className="w-2 h-2 bg-[rgb(30,14,62)] rounded-full"></div>
                  <div className="w-2 h-2 bg-[rgb(30,14,62)] rounded-full"></div>
                </div>
                <div className="w-full h-[1px] bg-[rgb(51,28,95)]"></div>
              </div>

              <div className="relative grid grid-cols-2 w-[90%] mx-auto gap-6 mb-6 bg-gray-300/50 py-5 px-5 md:px-10 mt-5 rounded-2xl">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-gray-100 transform transition-all duration-500 hover:scale-102">
                    <img
                      key={`model-${currentSlide}`}
                      src={carouselSlides[currentSlide].model}
                      alt="Model"
                      className="w-full h-full object-cover transition-opacity duration-500"
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-gray-100 transform transition-all duration-500 hover:scale-102">
                    <img
                      key={`outfit-${currentSlide}`}
                      src={carouselSlides[currentSlide].outfit}
                      alt={carouselSlides[currentSlide].outfitName}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/3 -left-[9%] cursor-pointer"
                >
                  <ChevronLeft className="w-10 md:w-30 h-10 md:h-20 text-gray-500 " />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/3 -right-[9%] cursor-pointer"
                >
                  <ChevronRight className="w-10 md:w-30 h-10 md:h-20 text-gray-500 " />
                </button>
              </div>

              <div className="flex-col gap-4 p-5 md:p-0 md:absolute bottom-0 md:top-[72%] md:-right-[5%] flex">
                <div className="flex flex-row bg-white/95 rounded-md px-4 md:py-4 py-2 md:pr-15 justify-center items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-sm">Multiple ethnicity library</h2>
                </div>
                <div className="flex flex-row bg-white/95 rounded-md px-4 md:py-4 py-2 md:pr-15 justify-center items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-sm">Create your own model</h2>
                </div>
              </div>
              <div className="hidden md:flex">
                <img src={sinxlogo} className="h-25 w-50 m-5"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudioSection;