import React from 'react';
import type { FormEvent } from 'react';
import { Instagram, Facebook, Linkedin} from 'lucide-react';

const ContactUs: React.FC = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `linear-gradient(rgba(147,51,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.05) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }}
        >
            <div className="max-w-7xl mx-auto pt-32">
                <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl">
                    {/* Left Section - Contact Info */}
                    <div
                        className="lg:w-2/5 relative"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="p-12 relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
                            <p className="text-gray-300 mb-12 text-lg">
                                Get in touch with me on social media & screen now on website
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <p className="text-gray-400">Phone Number</p>
                                    <div className="space-y-2">
                                        <p className="text-white font-medium">Mobile: (+1) (555)123-4567</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-400">Email Address</p>
                                    <div className="space-y-2">
                                        <p className="text-white font-medium">hello@snix.ai</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-400">Location</p>
                                    <div className="space-y-2">
                                        <p className="text-white font-medium">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="bg-white p-3 rounded-full hover:bg-gray-300 transition-colors"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white p-3 rounded-full hover:bg-gray-300 transition-colors"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <Facebook size={18} />
                                    </a>
                                    <a
                                        href="https://x.com/pawankverma"
                                        className="bg-white p-3 rounded-full hover:bg-gray-300 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            width="18"
                                            height="18"
                                        >
                                            <path d="M20.39 3H17.5L12.94 8.68 8.87 3H3l7.16 10.15L3 21h2.89l4.93-5.96 4.35 5.96h5.83l-7.65-10.39L20.39 3z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="#"
                                        className="bg-white p-3 rounded-full hover:bg-gray-300 transition-colors"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="lg:w-3/5 p-12 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
                        <div className="max-w-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Message</h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="What is this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;