import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LifeLikeAIModels = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Sample images - replace with your actual image paths
  const modelImages = [
    {
      id: 1,
      src: "/aimodal/1.png",
      alt: "AI Model 1",
      className: "tall-left",
      fallback:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=500&fit=crop&crop=face",
    },
    {
      id: 2,
      src: "/aimodal/2.png",
      alt: "AI Model 2",
      className: "medium-top",
      fallback:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=350&fit=crop&crop=face",
    },
    {
      id: 3,
      src: "/aimodal/3.png",
      alt: "AI Model 3",
      className: "short-middle",
      fallback:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=280&h=250&fit=crop&crop=face",
    },
    {
      id: 4,
      src: "/aimodal/4.png",
      alt: "AI Model 4",
      className: "tall-right",
      fallback:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=480&fit=crop&crop=face",
    },
    {
      id: 5,
      src: "/aimodal/5.png",
      alt: "AI Model 5",
      className: "medium-bottom",
      fallback:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=280&h=370&fit=crop&crop=face",
    },
    {
      id: 6,
      src: "/aimodal/6.png",
      alt: "AI Model 6",
      className: "wide-bottom",
      fallback:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=320&h=200&fit=crop&crop=face",
    },
  ];

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
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 overflow-hidden flex items-center py-20"
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/40 backdrop-blur-sm mb-8 w-fit"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-purple-600"
              >
                🤖
              </motion.span>
              <span className="text-purple-700 text-sm font-medium tracking-wide uppercase">
                AI Technology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              <span className="block font-serif">Life-Like AI</span>
              <span className="block font-serif bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Models
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 leading-relaxed max-w-md"
            >
              Experience the future of virtual modeling with our incredibly
              realistic AI-generated personas that represent diverse beauty and
              authenticity.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 w-fit group"
            >
              <span>Explore Models</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-8"
          >
            <div
              className="grid grid-cols-12 gap-3 h-[950px]"
              style={{
                background:
                  "linear-gradient(135deg, #a171da 0%, #ff66c4 50%, #a171da 100%)",
              }}
            >
              {/* First tall image - left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="col-span-3 h-full group cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden shadow-xl">
                  <img
                    src={modelImages[0].src}
                    alt={modelImages[0].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Middle column with 3 stacked images */}
              <div className="col-span-3 h-full flex flex-col gap-3">
                {/* Medium height image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.9, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="h-[45%] group cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden shadow-xl">
                    <img
                      src={modelImages[1].src}
                      alt={modelImages[1].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Short height image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 1.1, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="h-[25%] group cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden shadow-xl">
                    <img
                      src={modelImages[2].src}
                      alt={modelImages[2].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Wide bottom image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 1.5, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="h-[30%] group cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden shadow-xl">
                    <img
                      src={modelImages[5].src}
                      alt={modelImages[5].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>

              {/* Right column with 2 images */}
              <div className="col-span-3 h-full flex flex-col gap-3">
                {/* Medium bottom image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 1.3, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="h-[55%] group cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden shadow-xl">
                    <img
                      src={modelImages[4].src}
                      alt={modelImages[4].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Tall right image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 1.7, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="h-[45%] group cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden shadow-xl">
                    <img
                      src={modelImages[3].src}
                      alt={modelImages[3].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>

              {/* Final tall image - far right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 1.9, duration: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="col-span-3 h-full group cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden shadow-xl">
                  <img
                    src={`/aimodal/7.png`}
                    alt="AI Model 7"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifeLikeAIModels;
