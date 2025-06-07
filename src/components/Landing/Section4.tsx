import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Zap,
  Users,
  BarChart3,
  Camera,
  Lightbulb,
  Play,
  Pause,
} from "lucide-react";

const HeroBenefitsSection = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isPlaying, setIsPlaying] = useState(true);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const benefits = [
    {
      id: 1,
      Icon: Target,
      title: "Precise Virtual Try-On",
      description:
        "AI-powered fitting technology that shows how garments look on different body types with 99% accuracy.",
      color: "text-purple-600",
      bgColor: "from-purple-100/60 to-pink-100/60",
      borderColor: "border-purple-200/30",
    },
    {
      id: 2,
      Icon: Zap,
      title: "Instant Visualization",
      description:
        "Generate photorealistic try-on images in seconds, not hours. Perfect for quick decision making.",
      color: "text-pink-600",
      bgColor: "from-pink-100/60 to-blue-100/60",
      borderColor: "border-pink-200/30",
    },
    {
      id: 3,
      Icon: Users,
      title: "Multiple Ethnicities",
      description:
        "Showcase your products on diverse models representing different ethnicities and body types.",
      color: "text-blue-600",
      bgColor: "from-blue-100/60 to-purple-100/60",
      borderColor: "border-blue-200/30",
    },
    {
      id: 4,
      Icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track engagement metrics and conversion rates to optimize your virtual try-on experience.",
      color: "text-indigo-600",
      bgColor: "from-indigo-100/60 to-purple-100/60",
      borderColor: "border-indigo-200/30",
    },
    {
      id: 5,
      Icon: Camera,
      title: "Studio Quality Results",
      description:
        "Professional-grade images with perfect lighting and composition for your marketing campaigns.",
      color: "text-violet-600",
      bgColor: "from-violet-100/60 to-pink-100/60",
      borderColor: "border-violet-200/30",
    },
    {
      id: 6,
      Icon: Lightbulb,
      title: "Smart Recommendations",
      description:
        "AI suggests the best poses and angles to showcase each garment's unique features.",
      color: "text-purple-600",
      bgColor: "from-purple-100/60 to-blue-100/60",
      borderColor: "border-purple-200/30",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center py-16"
      onMouseMove={handleMouseMove}
    >
      {/* Hero-style Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(182,126,220,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(215,181,138,0.08)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(218,181,238,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_25%_25%,#b67edc_1px,transparent_1px),radial-gradient(circle_at_75%_75%,#d7b98a_1px,transparent_1px)] bg-[length:60px_60px,80px_80px] bg-[position:0_0,30px_30px]" />

        {/* Interactive mouse glow */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(182, 126, 220, 0.1) 0%, 
              rgba(168, 85, 247, 0.05) 40%, 
              transparent 70%
            )`,
          }}
        />
      </div>

      {/* Floating Elements like Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full filter blur-[1px]"
            style={{
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              background:
                i % 2 === 0
                  ? "linear-gradient(135deg, rgba(182, 126, 220, 0.1), rgba(218, 181, 238, 0.15))"
                  : "linear-gradient(135deg, rgba(215, 181, 138, 0.1), rgba(211, 178, 235, 0.1))",
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200/40 rounded-full backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span className="text-gray-700 text-sm font-medium tracking-wide uppercase">
              Virtual Try-On Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            Experience Fashion in a
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Whole New Way
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Video Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.8, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden bg-white/15 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-[600px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={() => setIsPlaying(true)}
                >
                  <source
                    src="/videos/videoside.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play/Pause Button */}
                <motion.button
                  onClick={toggleVideo}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </motion.button>

                {/* Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full shadow-lg"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white text-sm font-medium bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    Live Demo
                  </span>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Virtual Try-On in Action
                    </h3>
                    <p className="text-white/80 text-sm">
                      Watch how our AI transforms fashion visualization
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-60" />
              </motion.div>


            </div>
          </motion.div>

          {/* Right Side - Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="relative group p-5 bg-white/40 backdrop-blur-sm border border-gray-200/30 rounded-xl hover:bg-white/60 hover:border-gray-300/40 transition-all duration-300"
                >
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-pink-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${benefit.bgColor} rounded-xl flex items-center justify-center border ${benefit.borderColor} flex-shrink-0 shadow-sm`}
                      >
                        <benefit.Icon
                          className={`w-6 h-6 ${benefit.color}`}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-8 p-6 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl text-center shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 rounded-2xl" />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ready to Transform Your Fashion Business?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join hundreds of brands already using our virtual try-on
                  technology
                </p>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                  <span className="relative z-10">Get Started Today</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBenefitsSection;
