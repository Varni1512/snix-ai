import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Star } from "lucide-react";

// Your existing imports
import Navbar from "./components/core/Navbar";
import SNIXHero from "./components/Landing/Hero";
import SNIXSection3 from "./components/Landing/Stats";
import SNIXSection4 from "./components/Landing/Section4";
import SNIXSection6 from "./components/Landing/Section6";
import SNIXSection7 from "./components/Landing/Section7";
import TestimonialsSection from "./components/Landing/Testimonials";
import FooterSection from "./components/core/Footer";
import InfiniteScrollGallery from "./components/Landing/Gallery2";
import CreativeVideoShowcase from "./components/Landing/Video";
import LifeLikeAIModels from "./components/Landing/BottomGallery";

// Import your Product page
import ProductPage from "./components/product/product.tsx"; 
import AIShootPage from "./components/AIShoot/AiShoot.tsx"; 
import AIStudioSection from "./components/Landing/Section.tsx";
import ContactUs from "./components/contact/contact.tsx";


// Loading Page Component
const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingTexts = [
    "Initializing AI Engine...",
    "Loading Creative Assets...",
    "Preparing Your Experience...",
    "Almost Ready...",
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 750);

    // Complete loading after 3 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50/40 to-pink-50/30"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {i % 3 === 0 ? (
                  <Sparkles className="w-4 h-4 text-purple-400/40" />
                ) : i % 3 === 1 ? (
                  <Star className="w-3 h-3 text-pink-400/40" />
                ) : (
                  <Zap className="w-4 h-4 text-blue-400/40" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              {/* Logo Container with Light Background */}
              <motion.div
                className="w-28 h-28 mx-auto mb-6 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/logo.png" // Replace with your actual logo path
                  alt="SNIX Logo"
                  className="w-20 h-20 object-contain"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Brand Name */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              >
                SNIX
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-600 text-lg mt-2"
              >
                AI-Powered Creative Solutions
              </motion.p>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Spinning Orbs */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="w-4 h-4 bg-purple-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4"
                >
                  <div className="w-2 h-2 bg-pink-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-2 h-2 bg-purple-300 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2"></div>
                  <div className="w-2 h-2 bg-pink-300 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <div className="w-64 mx-auto">
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />

                  {/* Glowing effect */}
                  <motion.div
                    className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ left: ["-20px", "250px"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ left: `${(progress / 100) * 240 - 20}px` }}
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{progress}%</span>
                  <span>Loading...</span>
                </div>
              </div>

              {/* Dynamic Loading Text */}
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 text-sm font-medium"
              >
                {loadingTexts[currentText]}
              </motion.div>

              {/* Dots Animation */}
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-16 h-16 border-2 border-purple-200 rounded-full"
          />

          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-12 h-12 border-2 border-pink-200 rounded-full"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-32 right-32 w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-60"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-32 left-32 w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-60"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main App Component with Loading and Routing
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home'); // State to manage current page

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Function to handle page navigation
  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  // Home page content
  const HomePage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="min-h-screen w-full"
        style={{
          background: `
        radial-gradient(
          circle at 20% 20%, 
          rgba(182, 126, 220, 0.05) 0%, 
          transparent 50%
        ), 
        radial-gradient(
          circle at 80% 80%, 
          rgba(215, 181, 138, 0.08) 0%, 
          transparent 50%
        ), 
        radial-gradient(
          circle at 50% 50%, 
          rgba(218, 181, 238, 0.03) 0%, 
          transparent 50%
        )`,
        }}
      >
            <SNIXHero />
            <AIStudioSection/>
            <SNIXSection3 />
            <CreativeVideoShowcase />
            <SNIXSection4 />
            <InfiniteScrollGallery />
            <SNIXSection6 />
            <TestimonialsSection />
            <LifeLikeAIModels />
            <SNIXSection7 />
      </div>
    </motion.div>
  );

  return (
    <div>
      {/* Loading Page - Shows for 3 seconds when page loads/refreshes */}
      {isLoading && <LoadingPage onComplete={handleLoadingComplete} />}

      {/* Main Application Content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Pass navigation function to Navbar */}
          <Navbar currentPage={currentPage} onNavigate={navigateToPage} />
          
          {/* Conditional rendering based on current page */}
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'product' && <ProductPage />}
          {currentPage === 'ai-shoot' && <AIShootPage />}
          {currentPage === 'contact' && <ContactUs />}
          <FooterSection />
        </motion.div>
      )}
    </div>
  );
};

export default App;