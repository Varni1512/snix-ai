import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { Camera, Sparkles, Users, Settings, Star, ArrowRight, Check } from 'lucide-react';


interface Service {
    icon: ReactElement;
    title: string;
    subtitle: string;
    description: string;
    perfect: string;
}

interface Testimonial {
    quote: string;
    author: string;
    position: string;
}

interface VisibilityState {
    [key: string]: boolean;
}

const AIFashionLanding: React.FC = () => {
    const [isVisible, setIsVisible] = useState<VisibilityState>({});
    const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id]').forEach((el: Element) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const services: Service[] = [
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Editorial Campaigns",
            subtitle: "Storytelling that sells",
            description: "Create high fashion visual narratives worthy of magazine covers. Our AI-generated editorial shoots deliver artistic direction, emotional storytelling, and brand aligned aesthetics without location constraints or production complexities.",
            perfect: "Brand campaigns, seasonal lookbooks, fashion storytelling"
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Ecommerce Product Photography",
            subtitle: "Products that convert",
            description: "Transform your product catalog with conversion-optimized photography featuring diverse models. Perfect for product detail pages, category pages, and multi-angle product views that drive sales.\n",
            perfect: "Online stores, marketplaces, product listings"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Accessory & Jewelry Showcases",
            subtitle: "Details that dazzle",
            description: "Showcase accessories and jewelry with perfect lighting, optimal positioning, and contextual presentation that highlights craftsmanship and design details.",
            perfect: "Jewelry brands, accessory manufacturers, luxury goods"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Social Media Content",
            subtitle: "Engagement that excites",
            description: "Platform-optimized imagery designed specifically for social feeds, with attention-grabbing composition and scroll-stopping visual impact.",
            perfect: "Instagram, Facebook, TikTok, Pinterest campaigns"
        }
    ];

    const testimonials: Testimonial[] = [
        {
            quote: "SNIX transformed our seasonal campaign process. We cut production costs by 78% while increasing our visual content output threefold. Most importantly, our customers can't tell the difference—the quality is exceptional.",
            author: "Sarah Chen",
            position: "Marketing Director, Luxe Apparel"
        },
        {
            quote: "As a growing D2C brand, we couldn't compete with the big players' photoshoot budgets. SNIX leveled the playing field. Now we launch new collections every month with stunning visuals that rival luxury brands.",
            author: "Jessica Williams",
            position: "Founder, Meridian Fashion"
        }
    ];

    const segments: string[] = [
        "D2C Fashion Brands — Compete with larger brands through premium visuals on a budget",
        "Ecommerce Retailers — Boost conversions with consistent, high-quality product imagery",
        "Luxury & Designer Labels — Maintain exacting aesthetic standards with premium visuals",
        "Accessories & Jewelry — Showcase your products with perfect styling and presentation",
        "Fashion Marketplaces — Create consistent imagery across diverse product categories",
        "Agencies & Creative Teams — Deliver more value to clients with faster turnaround times"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handleTestimonialClick = (index: number): void => {
        setCurrentTestimonial(index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50"
            style={{
                backgroundImage: `linear-gradient(rgba(147,51,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.05) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }}>
            {/* Hero Section */}
            <section className="relative px-4 py-20 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>

                <div className="max-w-7xl mx-auto text-center">
                    <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} id="hero">
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
                            <Sparkles className="w-4 h-4" />
                            AI Fashion Shoots by SNIX
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Production-free,
                            </span>
                            <br />
                            <span className="animate-pulse">pixel-perfect</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
                            Transform Your Fashion Photography Without The Photoshoot
                        </p>

                        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                            Create stunning fashion imagery in hours, not weeks at <span className="font-bold text-purple-600">80% less cost</span> than traditional photography.
                        </p>

                        <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white cursor-pointer px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">

                            Book Your Free Demo Session
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-ping"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-40 right-20 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
            </section>

            {/* Services Section */}
            <section className="px-4 py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} id="services">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Solution for <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">every need</span>
                        </h2>
                        <p className="text-xl text-gray-600">Comprehensive fashion imagery for all your brand needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service: Service, index: number) => (
                            <div
                                key={index}
                                className={`group bg-white rounded-3xl cursor-pointer p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 border border-purple-100 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl text-white group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <div>
                                        
                                        <p className="text-purple-600 font-semibold">{service.subtitle}</p>
                                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    {service.description.split("\n").map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>

                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-2">Perfect for:</p>
                                    <p className="text-purple-700 font-medium">{service.perfect}</p>
                                </div>

                                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 cursor-pointer text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                    Book Your Free Demo Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Model & Settings Section */}
            <section className="px-4 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.models ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} id="models">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Endless possibilities</span>
                        </h2>
                        <p className="text-xl text-gray-600">Create the perfect visual representation of your brand</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className={`bg-white rounded-3xl p-8 shadow-xl border border-purple-100 transform transition-all duration-700 ${isVisible.models ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-purple-600" />
                                Diverse AI Models
                            </h3>
                            <p className="text-gray-600 mb-6">Access our extensive library of AI-generated models spanning:</p>
                            <ul className="space-y-3">
                                {["All ethnicities and skin tones", "Various body types and sizes", "Age ranges from young adult to senior", "Countless style personalities", "Customizable poses and expressions"].map((item: string, index: number) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`bg-white rounded-3xl p-8 shadow-xl border border-purple-100 transform transition-all duration-700 delay-300 ${isVisible.models ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Settings className="w-8 h-8 text-purple-600" />
                                Unlimited Environments
                            </h3>
                            <p className="text-gray-600 mb-6">Create your perfect backdrop with options including:</p>
                            <ul className="space-y-3">
                                {["Studio setups with various lighting styles", "Urban street scenes and cityscapes", "Natural landscapes and outdoor settings", "Luxury interiors and architectural spaces", "Seasonal and themed environments"].map((item: string, index: number) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-4 py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} id="testimonials">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Real results, real brands</h2>
                        <p className="text-xl text-purple-200">Client Success Stories</p>
                    </div>

                    <div className="relative">
                        {testimonials.map((testimonial: Testimonial, index: number) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-500 transform ${index === currentTestimonial
                                    ? 'opacity-100 translate-x-0'
                                    : index < currentTestimonial
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                    }`}
                            >
                                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
                                    <div className="flex text-yellow-400 mb-6">
                                        {[...Array(5)].map((_, i: number) => (
                                            <Star key={i} className="w-6 h-6 fill-current" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lg md:text-xl leading-relaxed mb-8 italic">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center font-bold text-lg">
                                            {testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">{testimonial.author}</p>
                                            <p className="text-purple-200">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Static height container */}
                        <div className="h-80 md:h-72"></div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index: number) => (
                            <button
                                key={index}
                                onClick={() => handleTestimonialClick(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500 rounded-full opacity-10 animate-pulse"></div>
                </div>
            </section>

            {/* Segments Section */}
            <section className="px-4 py-20 bg-white/70 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.segments ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} id="segments">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Perfect for <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">every fashion segment</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {segments.map((segment: string, index: number) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl cursor-pointer p-6 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 border border-purple-100 group ${isVisible.segments ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                                    <p className="text-gray-700 leading-relaxed">{segment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white cursor-pointer px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                            Book Your Free Demo Now
                            <ArrowRight className="w-5 h-5" />
                        </button>
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
                            <button className="group inline-flex items-center px-8 py-4 bg-white cursor-pointer text-purple-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                Book Your Strategy Session
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            <button className="group inline-flex items-center px-8 py-4 cursor-pointer bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
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

export default AIFashionLanding;