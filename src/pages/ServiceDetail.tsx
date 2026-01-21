import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
    title: string;
    description: string;
    features: string[];
    image: string;
    benefits: { title: string; description: string }[];
}

export function ServiceDetail({ title, description, features, image, benefits }: ServiceDetailProps) {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Link to="/#services" className="text-purple-400 hover:text-purple-300 font-medium text-sm mb-4 inline-block">
                                ← Back to Services
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                                {title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                {description}
                            </p>
                            <Link
                                to="/#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300"
                            >
                                Get Started
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
                            <img
                                src={image}
                                alt={title}
                                className="relative rounded-2xl shadow-2xl border border-gray-800 w-full object-cover aspect-video"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            What sets our {title.toLowerCase()} apart and drives success for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                                <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
                                <span className="text-lg text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to elevate your {title.toLowerCase()}?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's discuss how we can tailor our services to meet your specific business requirements.
                    </p>
                    <Link
                        to="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
                    >
                        Start Your Project
                        <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
