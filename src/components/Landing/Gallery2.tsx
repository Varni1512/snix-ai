import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const InfiniteScrollGallery = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  // Generate image URLs from 14 to 27
  const images = Array.from(
    { length: 14 },
    (_, i) => `/slideshow/${i + 14}.png`
  );

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Mouse movement tracking
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen  overflow-hidden flex flex-col justify-center py-12 md:py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(168, 85, 247, 0.05) 40%, 
            transparent 70%
          )`,
        }}
      />

      {/* Floating Particles - Responsive count */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${10 + i * (isMobile ? 20 : 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          {/* Badge - Responsive sizing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/40 rounded-full backdrop-blur-sm mb-4 md:mb-6"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-purple-600 text-sm md:text-base"
            >
              ✨
            </motion.span>
            <span className="text-purple-700 text-xs md:text-sm font-medium tracking-wide uppercase">
              Infinite Gallery
            </span>
          </motion.div>

          {/* Main Heading - Responsive text sizes */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6"
          >
            <span className="block">Where everyone can see</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              themselves
            </span>
          </motion.h2>

          {/* Subtitle - Responsive text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl md:max-w-2xl mx-auto px-4"
          >
            Let customers visualize fit on diverse models.
          </motion.p>
        </motion.div>

        {/* Responsive Gallery Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative overflow-hidden"
        >
          <div className="flex gap-3 md:gap-6">
            <motion.div
              className="flex gap-3 md:gap-6 shrink-0"
              animate={{
                x: [0, isMobile ? -150 * images.length : -100 * images.length],
              }}
              transition={{
                duration: isMobile ? 35 : 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* First set of images - Responsive sizing */}
              {images.map((image, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="relative group shrink-0"
                  whileHover={{
                    scale: isMobile ? 1.02 : 1.05,
                    y: isMobile ? -5 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <img
                      src={image}
                      alt={`Fashion model ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Glow Effect - Responsive */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl" />
                  </div>
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {images.map((image, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="relative group shrink-0"
                  whileHover={{
                    scale: isMobile ? 1.02 : 1.05,
                    y: isMobile ? -5 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <img
                      src={image}
                      alt={`Fashion model ${index + 1} duplicate`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Hover overlay - Only on larger screens */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isMobile ? "hidden" : "block"
                      }`}
                    >
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-semibold text-sm md:text-base">
                          Model {index + 1}
                        </p>
                        <p className="text-xs md:text-sm opacity-80">
                          Diverse representation
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl" />
                  </div>
                </motion.div>
              ))}

              {/* Third set for extra smoothness */}
              {images.map((image, index) => (
                <motion.div
                  key={`third-${index}`}
                  className="relative group shrink-0"
                  whileHover={{
                    scale: isMobile ? 1.02 : 1.05,
                    y: isMobile ? -5 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <img
                      src={image}
                      alt={`Fashion model ${index + 1} third`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Hover overlay - Only on larger screens */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isMobile ? "hidden" : "block"
                      }`}
                    >
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-semibold text-sm md:text-base">
                          Model {index + 1}
                        </p>
                        <p className="text-xs md:text-sm opacity-80">
                          Diverse representation
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Responsive Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 via-purple-50/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 via-purple-50/30 to-transparent z-10 pointer-events-none" />
        </motion.div>

        {/* Mobile-specific bottom spacing */}
        <div className="h-8 md:h-0" />
      </div>
    </section>
  );
};

export default InfiniteScrollGallery;
