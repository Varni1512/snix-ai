import { useEffect, useRef, useState } from "react";
import { Rocket, Users, Target, Headphones } from "lucide-react";

const SNIXSection3 = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    clients: 0,
    successRate: 0,
    support: 0
  });

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Number counting animation
  useEffect(() => {
    if (isVisible) {
      const duration = 5000; // 2 seconds
      const steps = 60; // 60 fps
      const interval = duration / steps;

      const targets = {
        projects: 200,
        clients: 50,
        successRate: 98,
        support: 24
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setAnimatedNumbers({
          projects: Math.floor(targets.projects * easeOutQuart),
          clients: Math.floor(targets.clients * easeOutQuart),
          successRate: Math.floor(targets.successRate * easeOutQuart),
          support: Math.floor(targets.support * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedNumbers(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const stats = [
    {
      number: `${animatedNumbers.projects}+`,
      label: "Projects Completed",
      icon: Rocket,
      description: "Successful launches"
    },
    {
      number: `${animatedNumbers.clients}+`,
      label: "Happy Clients",
      icon: Users,
      description: "Satisfied customers"
    },
    {
      number: `${animatedNumbers.successRate}%`,
      label: "Success Rate",
      icon: Target,
      description: "Project completion"
    },
    {
      number: `${animatedNumbers.support}/7`,
      label: "Support Available",
      icon: Headphones,
      description: "Round-the-clock help"
    },
  ];

  return (
    <section
      ref={containerRef}
      className="hero-stats-section"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background */}
      <div className="stats-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
        <div
          className="interactive-glow"
          style={{
            "--mouse-x": `${mousePosition.x}%`,
            "--mouse-y": `${mousePosition.y}%`,
          } as React.CSSProperties}
        />
      </div>

      {/* Content Container */}
      <div className="stats-container">
        {/* Header Section */}
        <div className={`stats-header ${isVisible ? "animate-in" : ""}`}>
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            Our Impact
            <span className="eyebrow-line"></span>
          </div>

          <h2 className="stats-title">
            Delivering Excellence
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Consistently</span>
          </h2>

          <p className="stats-description">
            Numbers that reflect our commitment to creating exceptional digital
            experiences and building lasting partnerships with forward-thinking
            brands.
          </p>
        </div>

        {/* Single Glassmorphic Stats Card */}
        <div className={`stats-card ${isVisible ? "animate-in" : ""}`}>
          <div className="card-glass">
            <div className="card-border"></div>

            {/* Stats Grid Inside Card */}
            <div className="stats-grid">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="stat-item"
                    style={{ "--index": index } as React.CSSProperties}
                  >

                    <div className="stat-icon">
                      <IconComponent size={32} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                      <div className="stat-description">{stat.description}</div>
                    </div>
                    <div className="stat-glow"></div>
                  </div>
                );
              })}
            </div>

            {/* Card Decorations */}
            <div className="card-decoration-1"></div>
            <div className="card-decoration-2"></div>
            <div className="card-decoration-3"></div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`stats-quote ${isVisible ? "animate-in" : ""}`}>
          <p>
            "Innovation through collaboration, excellence through dedication"
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="float-1"></div>
        <div className="float-2"></div>
        <div className="float-3"></div>
        <div className="float-4"></div>
      </div>

      <style>{`
        .hero-stats-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 4rem 2rem;
        }

        .stats-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 25% 25%,
              rgba(182, 126, 220, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(215, 181, 138, 0.06) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(218, 181, 238, 0.04) 0%,
              transparent 50%
            );
        }

        .pattern-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.02;
          background-image: radial-gradient(
              circle at 20% 30%,
              #b67edc 1px,
              transparent 1px
            ),
            radial-gradient(circle at 80% 70%, #d7b98a 1px, transparent 1px);
          background-size: 80px 80px, 120px 120px;
          background-position: 0 0, 40px 40px;
        }

        .interactive-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(182, 126, 220, 0.04),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-stats-section:hover .interactive-glow {
          opacity: 1;
        }

        .stats-container {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .stats-header {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .stats-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b67edc;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #b67edc, #d7b98a);
          box-shadow: 0 0 10px rgba(182, 126, 220, 0.4);
        }

        .eyebrow-line {
          width: 30px;
          height: 1px;
          background: linear-gradient(90deg, #b67edc, transparent);
        }

        .stats-title {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          line-height: 1.1;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.6s ease-out 0.4s both;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #b67edc 0%, #d7b98a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .stats-description {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 1.6;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          animation: fadeInUp 0.6s ease-out 0.6s both;
        }

        .stats-card {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-bottom: 3rem;
        }

        .stats-card.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition-delay: 0.8s;
        }

        .card-glass {
          position: relative;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 2rem;
          padding: 3rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .card-glass:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(182, 126, 220, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          border-color: rgba(182, 126, 220, 0.3);
        }

        .card-border {
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          padding: 2px;
          background: linear-gradient(
            135deg,
            rgba(182, 126, 220, 0.4),
            rgba(215, 181, 138, 0.2),
            rgba(182, 126, 220, 0.4)
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-glass:hover .card-border {
          opacity: 1;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          animation: statItemIn 0.6s ease-out forwards;
          animation-delay: calc(1s + var(--index) * 0.1s);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(182, 126, 220, 0.1), rgba(215, 181, 138, 0.1));
          border: 1px solid rgba(182, 126, 220, 0.2);
          color: #b67edc;
          filter: drop-shadow(0 4px 12px rgba(182, 126, 220, 0.2));
          animation: iconFloat 3s ease-in-out infinite;
          animation-delay: calc(var(--index) * 0.5s);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .stat-item:hover .stat-icon {
          transform: scale(1.1) translateY(-2px);
          background: linear-gradient(135deg, rgba(182, 126, 220, 0.2), rgba(215, 181, 138, 0.2));
          border-color: rgba(182, 126, 220, 0.4);
          box-shadow: 0 8px 24px rgba(182, 126, 220, 0.3);
        }

        .stat-content {
          text-align: center;
        }

        .stat-number {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 2.8rem);
          line-height: 1;
          background: linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
        }

        .stat-item:hover .stat-number {
          background: linear-gradient(135deg, #b67edc 0%, #d7b98a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform: scale(1.05);
        }

        .stat-label {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          color: #666;
          letter-spacing: -0.01em;
          margin-bottom: 0.25rem;
        }

        .stat-description {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          font-size: 0.8rem;
          color: #999;
          letter-spacing: -0.01em;
          opacity: 0.8;
        }

        .stat-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(182, 126, 220, 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-item:hover .stat-glow {
          opacity: 1;
        }

        .card-decoration-1,
        .card-decoration-2,
        .card-decoration-3 {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(182, 126, 220, 0.1),
            rgba(215, 181, 138, 0.1)
          );
          filter: blur(1px);
        }

        .card-decoration-1 {
          width: 60px;
          height: 60px;
          top: 10%;
          right: 10%;
          animation: decorFloat1 8s ease-in-out infinite;
        }

        .card-decoration-2 {
          width: 40px;
          height: 40px;
          bottom: 15%;
          left: 15%;
          animation: decorFloat2 10s ease-in-out infinite reverse;
        }

        .card-decoration-3 {
          width: 30px;
          height: 30px;
          top: 60%;
          right: 20%;
          animation: decorFloat3 12s ease-in-out infinite;
        }

        .stats-quote {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
          transition-delay: 1.5s;
        }

        .stats-quote.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-quote p {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          font-size: 1rem;
          color: #9ca3af;
          font-style: italic;
          margin: 0;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .float-1,
        .float-2,
        .float-3,
        .float-4 {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
        }

        .float-1 {
          width: 100px;
          height: 100px;
          background: linear-gradient(
            135deg,
            rgba(182, 126, 220, 0.08),
            rgba(218, 181, 238, 0.12)
          );
          top: 15%;
          left: 8%;
          animation: float1 10s ease-in-out infinite;
        }

        .float-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(
            135deg,
            rgba(215, 181, 138, 0.08),
            rgba(211, 178, 235, 0.08)
          );
          top: 70%;
          right: 12%;
          animation: float2 12s ease-in-out infinite reverse;
        }

        .float-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(
            135deg,
            rgba(218, 181, 238, 0.12),
            rgba(182, 126, 220, 0.08)
          );
          bottom: 20%;
          left: 15%;
          animation: float3 14s ease-in-out infinite;
        }

        .float-4 {
          width: 40px;
          height: 40px;
          background: linear-gradient(
            135deg,
            rgba(182, 126, 220, 0.1),
            rgba(215, 181, 138, 0.08)
          );
          top: 40%;
          right: 8%;
          animation: float4 16s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes statItemIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(2deg);
          }
        }

        @keyframes decorFloat1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-10px, 15px) scale(0.9);
          }
        }

        @keyframes decorFloat2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, -15px) scale(1.15);
          }
        }

        @keyframes decorFloat3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -15px) scale(0.95);
          }
          75% {
            transform: translate(-8px, 12px) scale(1.05);
          }
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(25px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 25px) scale(0.9);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, -25px) scale(1.15);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -25px) scale(0.95);
          }
          75% {
            transform: translate(-15px, 20px) scale(1.05);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, -20px) scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .hero-stats-section {
            padding: 3rem 1rem;
            min-height: auto;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .card-glass {
            padding: 2rem 1.5rem;
            border-radius: 1.5rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stats-title {
            font-size: 2.5rem;
          }

          .stats-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .card-glass {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SNIXSection3;