import React, { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { Instagram, Facebook, Linkedin, Send, Mail, MapPin, Phone, Sparkles, MessageCircle, Zap, Heart, ArrowRight } from 'lucide-react';

const ContactUs: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number; color: string }>>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const formRef = useRef<HTMLDivElement>(null);

    // Enhanced particle system
    useEffect(() => {
        const colors = ['#8B5CF6', '#A855F7', '#C084FC', '#E879F9', '#F472B6'];
        const newParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 4,
            size: Math.random() * 6 + 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
        setParticles(newParticles);

        // Trigger entrance animation
        setTimeout(() => setIsVisible(true), 100);
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleFocus = (fieldName: string) => {
        setFocusedField(fieldName);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors = {
            name: form.name ? '' : 'Name is required',
            email: form.email ? (form.email.includes('@') ? '' : 'Please enter a valid email') : 'Email is required',
            subject: form.subject ? '' : 'Subject is required',
            message: form.message ? '' : 'Message is required'
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((err) => err !== '');
        if (hasErrors) {
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission with realistic delay
        await new Promise(resolve => setTimeout(resolve, 2500));
        setIsSubmitting(false);
        setSubmitted(true);
        console.log('Form submitted:', form);

        // Reset form after success animation
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: '', email: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
            {/* Animated Grid Background */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(147,51,234,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px),
                        radial-gradient(circle at 20% 80%, rgba(147,51,234,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(236,72,153,0.1) 0%, transparent 50%)
                    `,
                    backgroundSize: '60px 60px, 60px 60px, 800px 800px, 800px 800px'
                }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute animate-float opacity-60"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    >
                        <div
                            className="rounded-full blur-sm animate-pulse"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                backgroundColor: particle.color,
                                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}50`
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="relative z-10 pt-32 pb-12 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Hero Header */}
                    <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <Sparkles className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="text-purple-800 font-medium">Let's Connect</span>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                        </div>

                        <h1 className="text-7xl md:text-8xl font-black mb-8 relative">
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent animate-gradient-x">
                                Contact
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
                                Me
                            </span>

                        </h1>

                        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
                            Transform your ideas into reality. Let's create something
                            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> extraordinary </span>
                            together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                        {/* Left Section - Contact Info */}
                        <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            {/* Quick Contact Cards */}
                            <div className="space-y-6">
                                {[
                                    { icon: Mail, title: "Email", info: "hello@example.com", color: "from-blue-500 to-cyan-500", delay: "0s" },
                                    { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", color: "from-green-500 to-emerald-500", delay: "0.2s" },
                                    { icon: MapPin, title: "Location", info: "New York, NY", color: "from-orange-500 to-red-500", delay: "0.4s" }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-slide-up"
                                        style={{ animationDelay: item.delay }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative flex items-center gap-4">
                                            <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-gray-800 font-bold text-lg mb-1">{item.title}</h3>
                                                <p className="text-gray-600 font-medium">{item.info}</p>
                                            </div>
                                        </div>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                                    </div>
                                ))}
                            </div>

                            {/* Social Media Section */}
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                                        <Heart className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-gray-800 font-bold text-xl">Follow the Journey</h3>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: Instagram, color: "from-pink-500 via-purple-500 to-indigo-500", name: "Instagram", delay: "0.8s" },
                                        { icon: Facebook, color: "from-blue-600 to-blue-700", name: "Facebook", delay: "1s" },
                                        { icon: Linkedin, color: "from-blue-700 to-blue-800", name: "LinkedIn", delay: "1.2s" },
                                        {
                                            icon: () => (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-6 h-6 text-white"
                                                >
                                                    <path d="M20.39 3H17.5L12.94 8.68 8.87 3H3l7.16 10.15L3 21h2.89l4.93-5.96 4.35 5.96h5.83l-7.65-10.39L20.39 3z" />
                                                </svg>
                                            ),
                                            color: "from-gray-800 to-black",
                                            name: "Twitter",
                                            delay: "1.4s"
                                        }
                                    ].map((social, index) => (
                                        <button
                                            key={index}
                                            className={`group relative w-16 h-16 flex items-center justify-center bg-gradient-to-br ${social.color} rounded-2xl hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce-in overflow-hidden`}
                                            style={{ animationDelay: social.delay }}
                                            title={social.name}
                                        >
                                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
                                                {React.createElement(social.icon, { className: "w-6 h-6 text-white" })}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        </button>
                                    ))}
                                </div>


                            </div>
                        </div>

                        {/* Right Section - Contact Form */}
                        <div
                            ref={formRef}
                            className={`lg:col-span-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        >
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl" />

                                {submitted ? (
                                    <div className="text-center py-16 animate-success-bounce relative z-10">
                                        <div className="relative mb-8">
                                            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-success-pulse shadow-2xl">
                                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-ping" />
                                        </div>
                                        <h3 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-600 text-lg">Thank you for reaching out. I'll get back to you within 24 hours!</p>
                                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                                            <Zap className="w-4 h-4" />
                                            <span>Expect a response soon</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-8 relative z-10">
                                        <div className="text-center mb-10">
                                            <div className="inline-flex items-center gap-2 mb-4">
                                                <MessageCircle className="w-6 h-6 text-purple-500" />
                                                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                                    Send Message
                                                </h2>
                                            </div>
                                            <p className="text-gray-600 text-lg">Let's start building something amazing together</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                                                    Your Name *
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('name')}
                                                        onBlur={handleBlur}
                                                        className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 ${errors.name ? 'border-red-400' :
                                                            focusedField === 'name' ? 'border-purple-400' : 'border-gray-200'
                                                            } rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/80 font-medium`}
                                                        placeholder="John Doe"
                                                    />
                                                    {focusedField === 'name' && (
                                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 -z-10 animate-pulse" />
                                                    )}
                                                </div>
                                                {errors.name && <p className="text-red-500 text-sm mt-2 animate-shake font-medium">{errors.name}</p>}
                                            </div>

                                            <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                                                    Your Email *
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('email')}
                                                        onBlur={handleBlur}
                                                        className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 ${errors.email ? 'border-red-400' :
                                                            focusedField === 'email' ? 'border-purple-400' : 'border-gray-200'
                                                            } rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/80 font-medium`}
                                                        placeholder="john@example.com"
                                                    />
                                                    {focusedField === 'email' && (
                                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 -z-10 animate-pulse" />
                                                    )}
                                                </div>
                                                {errors.email && <p className="text-red-500 text-sm mt-2 animate-shake font-medium">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                            <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                                                Subject *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    name="subject"
                                                    value={form.subject}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('subject')}
                                                    onBlur={handleBlur}
                                                    className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 ${errors.subject ? 'border-red-400' :
                                                        focusedField === 'subject' ? 'border-purple-400' : 'border-gray-200'
                                                        } rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/80 font-medium`}
                                                    placeholder="Project Discussion"
                                                />
                                                {focusedField === 'subject' && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 -z-10 animate-pulse" />
                                                )}
                                            </div>
                                            {errors.subject && <p className="text-red-500 text-sm mt-2 animate-shake font-medium">{errors.subject}</p>}
                                        </div>

                                        <div className="group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                                            <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                                                Your Message *
                                            </label>
                                            <div className="relative">
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('message')}
                                                    onBlur={handleBlur}
                                                    rows={6}
                                                    className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 ${errors.message ? 'border-red-400' :
                                                        focusedField === 'message' ? 'border-purple-400' : 'border-gray-200'
                                                        } rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 resize-none group-hover:bg-white/80 font-medium`}
                                                    placeholder="Tell me about your vision, goals, and how we can work together to bring your ideas to life..."
                                                />
                                                {focusedField === 'message' && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 -z-10 animate-pulse" />
                                                )}
                                            </div>
                                            {errors.message && <p className="text-red-500 text-sm mt-2 animate-shake font-medium">{errors.message}</p>}
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="w-full group relative bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:shadow-purple-500/30 animate-fade-in-up overflow-hidden transform hover:scale-105"
                                            style={{ animationDelay: '0.6s' }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                            <div className="relative flex items-center justify-center gap-3">
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                                        <span>Sending Your Message...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                                                        <span>Send Message</span>
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(1deg); }
                    66% { transform: translateY(-5px) rotate(-1deg); }
                }
                
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes bounce-in {
                    0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
                    50% { transform: scale(1.05) rotate(2deg); }
                    70% { transform: scale(0.95) rotate(-1deg); }
                    100% { opacity: 1; transform: scale(1) rotate(0deg); }
                }
                
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                
                @keyframes success-bounce {
                    0% { opacity: 0; transform: scale(0.5); }
                    50% { transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }
                
                @keyframes success-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-gradient-x { 
                    background-size: 200% 200%; 
                    animation: gradient-x 3s ease infinite; 
                }
                .animate-slide-up { animation: slide-up 0.8s ease-out both; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
                .animate-bounce-in { animation: bounce-in 0.8s ease-out both; }
                .animate-shake { animation: shake 0.5s ease-in-out; }
                .animate-success-bounce { animation: success-bounce 0.6s ease-out; }
                .animate-success-pulse { animation: success-pulse 2s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default ContactUs;
