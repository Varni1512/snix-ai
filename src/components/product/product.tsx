import React, { useState, useEffect } from 'react';
import { Camera, Video, Sparkles, Zap, CheckCircle, ArrowRight, Play } from 'lucide-react';

interface VisibilityState {
  [key: string]: boolean;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

interface ComparisonRow {
  aspect: string;
  traditional: string;
  snix: string;
}

const SolutionsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features: Feature[] = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "AI Fashion Catalog Images",
      subtitle: "High fashion, high efficiency",
      description: "Unlocking the full potential of product photography without traditional shoots. AI-generated catalog imagery transforms how you showcase products, driving conversions with diverse models and consistent quality all without the production hassle.",
      cta: "Get Your AI Generated Catalog Now!"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Editorial Campaigns",
      subtitle: "High fashion, high efficiency",
      description: "Create stunning campaign narratives in days, not months. Editorial quality fashion storytelling that brings your brand vision to life with magazine worthy aesthetic at a fraction of traditional timeline and cost.",
      cta: "Launch Your Editorial Campaign"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "AI Short Videos",
      subtitle: "Motion that moves metrics",
      description: "Transform static content into dynamic experiences that capture attention. Platform optimized video content that drives engagement across social media, ads and websites. No videographers, models or complex production required.",
      cta: "Get Your Video Now"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Advanced Capabilities",
      subtitle: "Versatile solutions, valuable outcomes",
      description: "From transforming flat product images to enhancing existing photography, our specialized capabilities help you maximize your visual content potential while maintaining brand consistency.\n",
      cta: "Get Your Free Demo Now"
    }

  ];

  const comparisonData: ComparisonRow[] = [
    { aspect: "Cost", traditional: "$5,000-$50,000+ per shoot", snix: "80% less expensive" },
    { aspect: "Production Time", traditional: "3-8 weeks", snix: "72 hours or less" },
    { aspect: "Revisions", traditional: "Limited, expensive", snix: "Unlimited, included" },
    { aspect: "Model Diversity", traditional: "Limited by budget & casting", snix: "Unlimited options" },
    { aspect: "Location Options", traditional: "Limited by budget & logistics", snix: "Unlimited settings" },
    { aspect: "Content Volume", traditional: "Limited by time & budget", snix: "Scalable to any size" },
    { aspect: "Weather Dependencies", traditional: "Yes", snix: "None" },
    { aspect: "Seasonal Flexibility", traditional: "Requires planning months ahead", snix: "Create seasonal content anytime" },
    { aspect: "Consistency", traditional: "Varies between shoots", snix: "Perfect consistency" },
    { aspect: "Technical Challenges", traditional: "Many moving parts", snix: "All handled by our team" }
  ];

  const useCases: string[] = [
    "Launch Campaigns for New Collections",
    "Replace Traditional Model Photoshoots",
    "Create Influencer-Style Content",
    "Expand into New Markets with Diverse Models",
    "Generate Seasonal Content",
    "Develop Social Media Campaigns"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50"
      style={{
        backgroundImage: `linear-gradient(rgba(147,51,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.05) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div
            id="hero-title"
            data-animate
            className={`transform transition-all duration-1000 ${isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
              AI-Powered Fashion Imagery
            </h1>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              That Delivers <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Results</span>
            </div>
          </div>

          <div
            id="hero-subtitle"
            data-animate
            className={`transform transition-all duration-1000 delay-300 ${isVisible['hero-subtitle'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed">
              Your creative vision is our mission, bringing it to life is our expertise
            </p>
            <p className="text-lg sm:text-xl text-purple-600 font-semibold mb-12">
              Your vision, our expertise
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature: Feature, index: number) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`transform transition-all duration-1000 ${isVisible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">{feature.subtitle}</p>
                        <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {feature.description.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>


                    <button className="group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white cursor-pointer font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      {feature.cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="comparison-title"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['comparison-title'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The old way drains resources, <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                the SNIX way conserves them
              </span>
            </h2>
          </div>

          <div
            id="comparison-table"
            data-animate
            className={`transform transition-all duration-1000 delay-300 ${isVisible['comparison-table'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            {/* Shield-Style Pricing Cards - 2 Cards Only */}
            <div className="flex flex-col lg:flex-row gap-12 justify-center items-center max-w-4xl mx-auto">

              {/* Traditional Photoshoots Card */}
              <div className="relative w-full lg:w-80">
                {/* Card Body */}
                <div className="bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scale-105 border-2 border-red-200 overflow-hidden">

                  {/* V-Shaped Banner at Top */}
                  <div className="w-full bg-gradient-to-b from-red-500 to-red-600 text-white text-center py-6 clip-v-shape">
                    <h3 className="text-lg font-bold mb-1">Traditional</h3>
                    <div className="text-2xl font-bold">$500+</div>
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-6">
                    <div className="space-y-4 mb-8">
                      {comparisonData.map((row: ComparisonRow, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-red-500 text-xs font-bold">✗</span>
                          </div>
                          <div>
                            <p className="text-gray-700 text-sm">{row.traditional}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>


              {/* SNIX AI Shot Card - Featured */}
              <div className="relative w-full lg:w-80">
                {/* Card Body */}
                <div className="bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 pt-0 scale-105 border-2 border-blue-200 overflow-hidden">

                  {/* Top V-Shaped Banner */}
                  <div className="w-full bg-gradient-to-b from-blue-500 to-blue-600 text-white text-center py-6 clip-v-shape">
                    <h3 className="text-lg font-bold mb-1">SNIX AI</h3>
                    <div className="text-2xl font-bold">$9.99</div>
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-6">
                    <div className="space-y-4 mb-8">
                      {comparisonData.map((row: ComparisonRow, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </div>
                          <div>
                            <p className="text-gray-800 text-sm font-medium">{row.snix}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Choose SNIX AI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            id="use-cases"
            data-animate
            className={`transform transition-all duration-1000 ${isVisible['use-cases'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase: string, index: number) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-4 h-4" />
                    </div>
                    <p className="ml-4 font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {useCase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="cta-section"
            data-animate
            className={`transform transition-all duration-1000 ${isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Fashion Content?
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Our team of AI fashion experts will show you how SNIX can revolutionize your visual strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 cursor-pointer font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Book Your Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white cursor-pointer text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                Browse Our Portfolio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;