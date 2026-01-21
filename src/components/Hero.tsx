import React from 'react';
import { ArrowRight, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40" />
        {/* We can use the generated abstract image here if available, or keep abstract CSS shapes for reliability */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="text-purple-400" />
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-display">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Intelligent</span> Digital Solutions
            </h1>

            <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              We transform complex business challenges into seamless digital experiences.
              Specializing in scalable web applications, mobile solutions, and high-performance coding.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-white/10 hover:-translate-y-1"
              >
                Get a Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/#projects"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <Code size={18} className="mr-2 text-purple-400" />
                View Our Work
              </Link>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500">
              {[
                "Modern Tech Stack",
                "Scalable Architecture",
                "SEO Optimized"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-400">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none">
              {/* Abstract decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                {/* Use the abstract image generated or a solid placeholder if file not strictly confirmed */}
                {/* Assuming user put image in public, otherwise use a reliable unsplash fallback or the abstract generation */}
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                  alt="Future Technology"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 opacity-80"
                />

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Project Stats</p>
                      <p className="text-xs text-gray-400">Last 30 days</p>
                    </div>
                    <div className="bg-green-500/10 text-green-400 text-xs font-semibold px-2 py-1 rounded-full border border-green-500/20">
                      +12.5% Growth
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}