import React, { useState } from 'react';
import { Calendar, Code, ShoppingCart, Cloud, Mail, Users, Zap, X, Check, ArrowRight } from 'lucide-react';

export function RateCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "2349024129891";
  const whatsappMessage = "Hello! I'm interested in getting a quote for your web development services. Can we discuss my project requirements?";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Landing Page / Portfolio",
      price: "₦500,000 – ₦1,200,000",
      features: ["Responsive design", "SEO optimized", "Contact forms", "Basic animations"]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Corporate Website",
      price: "₦1,200,000 – ₦2,500,000",
      features: ["5-10 pages", "Content management", "Team sections", "Blog integration"]
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "E-Commerce",
      price: "₦1,500,000 – ₦3,500,000",
      features: ["Product catalog", "Shopping cart", "Payment integration", "Inventory management"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "SaaS Web App",
      price: "₦4,000,000 – ₦6,000,000+",
      features: ["Custom dashboards", "User authentication", "API integration", "Admin panel"]
    }
  ];

  const addOns = [
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Hosting & Deployment",
      price: "₦100,000 – ₦200,000",
      description: "Complete setup on your preferred platform"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Maintenance & Support",
      price: "₦150,000 – ₦500,000/month",
      description: "Regular updates, security patches, and support"
    }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 group"
      >
        View Rate Card
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 md:p-8 z-10 flex justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Service Rates & Packages</h2>
                <p className="text-slate-500 mt-2">Transparent pricing for premium web development services</p>

                {/* Skills Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    React.js
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto p-6 md:p-8 bg-slate-50/50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Daily Rates Column */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-slate-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <h3 className="text-xl font-bold mb-6 relative z-10">Daily Engagement</h3>

                    <div className="space-y-6 relative z-10">
                      <div className="pb-6 border-b border-white/10">
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Standard Day</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold">₦200,000 – ₦350,000</span>
                          <span className="text-slate-400">/day</span>
                        </div>
                        <p className="text-slate-400 text-sm mt-2">8 hours of focused development</p>
                      </div>

                      <div>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Weekly Sprint</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold">₦1,000,000+</span>
                          <span className="text-slate-400">/week</span>
                        </div>
                        <p className="text-slate-400 text-sm mt-2">Full-time dedication (40h)</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                      <h4 className="font-semibold mb-3 text-sm">Includes:</h4>
                      <ul className="text-sm text-slate-300 space-y-2">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Agile methodology</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Daily updates</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Code reviews</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4">Add-Ons</h3>
                    <div className="space-y-4">
                      {addOns.map((addOn, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                            {addOn.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{addOn.title}</h4>
                            <p className="text-purple-600 font-bold text-sm">{addOn.price}</p>
                            <p className="text-xs text-slate-500 mt-1">{addOn.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Based Column */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Project Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {services.map((service, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                            {service.icon}
                          </div>
                          <span className="bg-slate-100 text-slate-900 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">
                            {service.price}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h4>

                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-slate-500">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
                        >
                          Request Quote
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 bg-purple-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500 to-transparent opacity-50"></div>
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold mb-3">Ready to Start?</h2>
                      <p className="text-purple-100 mb-6 max-w-xl mx-auto">
                        Whether you need a full-scale platform or a simple landing page, I'm here to help you build it.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-bold shadow-lg"
                        >
                          Chat on WhatsApp
                        </a>
                        <a
                          href="mailto:akinboroo@gmail.com"
                          className="inline-flex items-center px-6 py-3 border border-purple-400 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium backdrop-blur-sm"
                        >
                          <Mail className="w-5 h-5 mr-2" />
                          Send Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}