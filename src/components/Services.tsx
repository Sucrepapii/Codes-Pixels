import React, { useState } from 'react';
import { Layout, Server, Smartphone, ShoppingBag, Globe, ShieldCheck, X, Check, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: string;
  link: string;
  longDescription: string;
  features: string[];
  codeExample: string;
  language: string;
}

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const services: ServiceData[] = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Create stunning, responsive user interfaces with modern frameworks like React and Vue.",
      longDescription: "We build pixel-perfect, accessible, and performant web interfaces. Using modern libraries and best practices, we ensure your application works flawlessly across all devices.",
      color: "bg-blue-500",
      delay: "0",
      link: "/services/frontend",
      language: "typescript",
      features: ["React & Next.js", "Tailwind CSS", "Animation (Framer Motion)", "Accessible Components"],
      codeExample: `// Responsive Card Component
interface CardProps {
  title: string;
  imageUrl: string;
}

export const Card = ({ title, imageUrl }: CardProps) => (
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <button className="text-blue-600 font-medium">Read More →</button>
    </div>
  </div>
);`
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Solutions",
      description: "Robust and scalable server-side architectures using Node.js to power your applications.",
      longDescription: "Our backend solutions focus on security, scalability, and speed. We design robust APIs and microservices that can handle high traffic and complex logic.",
      color: "bg-purple-500",
      delay: "100",
      link: "/services/backend",
      language: "typescript",
      features: ["Node.js & Express", "PostgreSQL / MongoDB", "REST & GraphQL APIs", "Authentication (JWT/OAuth)"],
      codeExample: `// Secure API Endpoint
import express, { Request, Response } from 'express';
import { authenticate } from './middleware';

const router = express.Router();

router.get('/api/data', authenticate, async (req: Request, res: Response) => {
  try {
    const data = await db.fetchProtectedData(req.user.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});`
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps built with React Native that deliver native-like performance.",
      longDescription: "Reach users on both iOS and Android with a single codebase. We utilize React Native to deliver smooth, native-feeling experiences efficiently.",
      color: "bg-pink-500",
      delay: "200",
      link: "/services/mobile",
      language: "typescript",
      features: ["React Native", "Expo", "Native Modules", "Offline Support"],
      codeExample: `// React Native Screen
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to App</Text>
      <Pressable 
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
    </View>
  );
}`
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce",
      description: "Full-service e-commerce solutions with secure payment gateways and seamless checkout flows.",
      longDescription: "Turn visitors into customers with a simplified, secure shopping experience. We integrate major payment gateways and inventory management systems.",
      color: "bg-orange-500",
      delay: "300",
      link: "/#contact",
      language: "typescript",
      features: ["Stripe Integration", "Cart Management", "Real-time Inventory", "Admin Dashboard"],
      codeExample: `// Shopping Cart Logic
interface CartItem {
  id: string;
  price: number;
  quantity: number;
}

const calculateTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};`
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO & Performance",
      description: "Optimize your digital presence with technical SEO and fast load times.",
      longDescription: "Speed matters. We optimize your code, assets, and metadata to ensure you rank higher in search engines and keep users engaged.",
      color: "bg-green-500",
      delay: "400",
      link: "/#contact",
      language: "html",
      features: ["Core Web Vitals", "Meta Tags", "Sitemap Generation", "Image Optimization"],
      codeExample: `<!-- SEO Optimized Head -->
<head>
  <title>Your Product - Best in Class</title>
  <meta name="description" content="Boost your productivity with our amazing tool." />
  <meta property="og:title" content="Your Product" />
  <meta property="og:image" content="https://example.com/social.jpg" />
  <link rel="canonical" href="https://example.com/product" />
</head>`
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Maintenance & Support",
      description: "Ongoing security updates, feature enhancements, and 24/7 technical support.",
      longDescription: "Software needs care. We monitor your application, apply critical security patches, and ensure everything stays online and updated.",
      color: "bg-indigo-500",
      delay: "500",
      link: "/#contact",
      language: "bash",
      features: ["Security Patches", "Uptime Monitoring", "Database Backups", "Performance Audits"],
      codeExample: `# Automated Deployment Script
#!/bin/bash
echo "Starting deployment..."

# Pull latest changes
git pull origin main

# Install dependencies
npm install --production

# Restart service
pm2 restart app-process

echo "Deployment successful! 🚀"`
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Everything You Need</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 font-display">
            Comprehensive Web Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital solutions tailored to help your business grow and succeed in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${service.color.split('-')[1]}-600`}>
                  {React.cloneElement(service.icon as React.ReactElement, { className: `w-7 h-7 text-${service.color.split('-')[1]}-600` })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Visual cue for interaction */}
              <div className="flex items-center text-sm font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                View Details & Code <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />
          <div className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            {/* Left/Top Side - Content */}
            <div className="p-8 md:p-10 flex-1">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors md:hidden"
              >
                <X size={20} />
              </button>

              <div className={`inline-flex p-3 rounded-xl ${selectedService.color} bg-opacity-10 mb-6`}>
                <div className={`text-${selectedService.color.split('-')[1]}-600`}>
                  {React.cloneElement(selectedService.icon as React.ReactElement, { className: `w-6 h-6` })}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {selectedService.longDescription}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={selectedService.link}
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center text-white bg-slate-900 hover:bg-slate-800 px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Explore {selectedService.title} <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Right/Bottom Side - Code Preview */}
            <div className="bg-slate-900 p-8 md:p-10 md:w-[45%] flex flex-col text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Code size={18} className="text-blue-400" />
                  <span className="text-sm font-mono text-gray-400">{selectedService.language === 'typescript' ? 'example.ts' : 'example.code'}</span>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 -mr-2 -mt-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors hidden md:block"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 bg-slate-950 rounded-xl p-4 font-mono text-sm overflow-x-auto border border-slate-800 shadow-inner custom-scrollbar">
                <pre>
                  <code className="language-typescript text-gray-300">
                    {selectedService.codeExample}
                  </code>
                </pre>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                * Simplified example for demonstration
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}