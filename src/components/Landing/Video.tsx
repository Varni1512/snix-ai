import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

const CinematicVideoShowcase = () => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Auto-play video when component mounts and ensure it loops
    if (videoRef.current) {
      const video = videoRef.current;

      // Set loop property explicitly
      video.loop = true;
      video.muted = true; // Ensure it's muted for autoplay

      // Add event listener to handle loop manually if needed
      const handleVideoEnd = () => {
        video.currentTime = 0;
        video.play().catch(console.error);
      };

      video.addEventListener("ended", handleVideoEnd);

      // Start playing
      video.play().catch(console.error);

      // Cleanup
      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

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
      className="relative min-h-screen overflow-hidden flex items-center pb-16"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_25%_25%,#b67edc_1px,transparent_1px),radial-gradient(circle_at_75%_75%,#d7b98a_1px,transparent_1px)] bg-[length:60px_60px,80px_80px] bg-[position:0_0,30px_30px]" />
        <div
          className="absolute inset-0 bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(182,126,220,0.06),transparent_40%)] opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={
            {
              "--mouse-x": `${mousePosition.x}%`,
              "--mouse-y": `${mousePosition.y}%`,
            } as React.CSSProperties
          }
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 rounded-full opacity-10"
            style={{
              background:
                i % 2 === 0
                  ? "linear-gradient(135deg, rgba(182, 126, 220, 0.3), rgba(218, 181, 238, 0.4))"
                  : "linear-gradient(135deg, rgba(215, 181, 138, 0.3), rgba(211, 178, 235, 0.3))",
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-200/40 rounded-full backdrop-blur-sm mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
            </motion.div>
            <span className="text-purple-700 text-sm font-medium tracking-wide uppercase">
              Cinematic Experience
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 text-pink-500" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="block text-gray-900">Where</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Ideas Come Alive
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the intersection of creativity and technology through our
            immersive visual storytelling
          </motion.p>
        </motion.div>

        {/* Main Video Container - 16:9 Aspect Ratio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.8, duration: 1 }}
          className="relative"
        >
          <div className="relative w-full aspect-video bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Card gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-purple-50/5 to-pink-50/10 opacity-80 rounded-2xl" />

            {/* Main Cinematic Video */}
            <video
              ref={videoRef}
              className="relative z-10 w-full h-128 object-cover transition-all duration-300 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/videos/videocn.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support the video */}
              Your browser does not support the video tag.
            </video>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 z-20" />

            {/* Card border gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-pink-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20"
              whileHover={{ opacity: 1 }}
            />

            {/* Video Info Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-6 left-6 z-30"
            >
              <div className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl">
                <h3 className="text-white font-semibold text-lg mb-1">
                  Cinematic Showcase
                </h3>
                <p className="text-white/80 text-sm">
                  Infinite Loop • 16:9 Format
                </p>
              </div>
            </motion.div>

            {/* Play/Pause Indicator */}
            <motion.div
              className="absolute top-6 right-6 z-30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg" />
              <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping" />
            </motion.div>

            {/* Floating particles on video */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${20 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-6">
            <span className="text-purple-600 font-semibold text-lg tracking-wider">
              CINEMATIC QUALITY
            </span>
            <div className="w-px h-6 bg-gray-300/50"></div>
            <span className="text-gray-600 text-lg">
              Professional video production
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicVideoShowcase;
