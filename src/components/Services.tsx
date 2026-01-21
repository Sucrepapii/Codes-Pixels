import React from 'react';
import { Layout, Server, Smartphone, ShoppingBag, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Create stunning, responsive user interfaces with modern frameworks like React and Vue for exceptional user experiences.",
      color: "bg-blue-500",
      delay: "0",
      link: "/services/frontend"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Solutions",
      description: "Robust and scalable server-side architectures using Node.js, Python, or Go to power your applications securely.",
      color: "bg-purple-500",
      delay: "100",
      link: "/services/backend"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps built with React Native or Flutter that deliver native-like performance on iOS and Android.",
      color: "bg-pink-500",
      delay: "200",
      link: "/services/mobile"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce",
      description: "Full-service e-commerce solutions with secure payment gateways, inventory management, and seamless checkout flows.",
      color: "bg-orange-500",
      delay: "300"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO & Performance",
      description: "Optimize your digital presence with technical SEO, fast load times, and accessibility compliance to reach more users.",
      color: "bg-green-500",
      delay: "400"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Maintenance & Support",
      description: "Ongoing security updates, feature enhancements, and 24/7 technical support to keep your business running smoothly.",
      color: "bg-indigo-500",
      delay: "500"
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
              className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${service.color.split('-')[1]}-600`}>
                  {React.cloneElement(service.icon, { className: `w-7 h-7 text-${service.color.split('-')[1]}-600` })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {service.link ? (
                <Link to={service.link} className="mt-6 flex items-center text-sm font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  Learn more <span className="ml-1">→</span>
                </Link>
              ) : (
                <div className="mt-6 flex items-center text-sm font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  Learn more <span className="ml-1">→</span>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}