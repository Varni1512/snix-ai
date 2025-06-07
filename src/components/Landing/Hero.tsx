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
    <div className="hero-section">
      {/* Background */}
      <div className="hero-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
      {/* Content container */}
      <div className="hero-content mt-15 md:mt-0">
        {/* Left side - Text content */}
        <div className="hero-text">
          <div className={`text-content ${isVisible ? "animate-in" : ""}`}>
            <div className="eyebrow">CREATIVE STUDIO</div>
            <h1 className="main-heading">
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experiences</span>
            </h1>
            <p className="description">
              We blend innovative design with cutting-edge technology to create
              memorable digital experiences that captivate and inspire.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Book Demo</button>
              <button className="btn-secondary">View Work</button>
            </div>
          </div>
        </div>

        {/* Right side - Exact Image Carousel Match */}
        <div className="hero-visual">
          <div className="image-carousel-container">
            {/* Two smaller background images */}
            <div className="background-images">
              <div className="bg-image bg-left">
                <img
                  src={images[(currentImageIndex + 2) % images.length]}
                  alt="Background person"
                />
              </div>
              <div className="bg-image bg-right">
                <img
                  src={images[(currentImageIndex + 4) % images.length]}
                  alt="Background person"
                />
              </div>
            </div>

            {/* Main center image */}
            <div className="main-image">
              <img src={images[currentImageIndex]} alt="Featured person" />
            </div>

            {/* Carousel indicators */}
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentImageIndex === index ? "active" : ""
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f4ff 0%, #fff 50%, #f5f0ff 100%);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 20% 30%,
              rgba(182, 126, 220, 0.08) 0%,
              transparent 60%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(215, 181, 238, 0.06) 0%,
              transparent 60%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          max-width: 1300px;
          width: 100%;
          padding: 0 2rem;
          align-items: center;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text-content {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .text-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .eyebrow {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #b67edc;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .main-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 6vw, 4rem);
          line-height: 1.1;
          color: #1a1a1a;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .highlight {
          background: linear-gradient(135deg, #b67edc 0%, #d7b98a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 3rem;
          max-width: 500px;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .cta-buttons {
          display: flex;
          gap: 1.25rem;
          animation: fadeInUp 0.8s ease-out 0.8s both;
        }

        .btn-primary,
        .btn-secondary {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(135deg, #b67edc 0%, #c496e8 100%);
          color: white;
          box-shadow: 0 6px 25px rgba(182, 126, 220, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 35px rgba(182, 126, 220, 0.45);
        }

        .btn-secondary {
          background: transparent;
          color: #b67edc;
          border: 2px solid rgba(182, 126, 220, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(182, 126, 220, 0.1);
          border-color: rgba(182, 126, 220, 0.6);
          transform: translateY(-2px);
        }

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 600px;
        }

        .image-carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .background-images {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .bg-image {
          position: absolute;
          width: 140px;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0.7;
        }

        .bg-left {
          top: 50px;
          left: -20px;
        }

        .bg-right {
          top: 80px;
          right: -30px;
        }

        .bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s ease;
        }

        .main-image {
          position: relative;
          z-index: 3;
          width: 200px;
          height: 500px;
          border-radius: 25px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .main-image:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-indicators {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(182, 126, 220, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #b67edc;
          transform: scale(1.3);
          box-shadow: 0 0 15px rgba(182, 126, 220, 0.5);
        }

        .indicator:hover {
          background: rgba(182, 126, 220, 0.7);
          transform: scale(1.1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-visual {
            height: 400px;
          }

          .main-image {
            width: 150px;
            height: 350px;
          }

          .bg-image {
            width: 100px;
            height: 250px;
          }

          .bg-left {
            left: -10px;
            top: 30px;
          }

          .bg-right {
            right: -10px;
            top: 50px;
          }

          .main-heading {
            font-size: 2.5rem;
          }

          .description {
            font-size: 1rem;
            max-width: 100%;
          }

          .cta-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
