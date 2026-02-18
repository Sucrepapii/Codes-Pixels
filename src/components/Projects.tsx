import React, { useRef } from 'react';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { RateCard } from './Ratecard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Projects() {
  const swiperRef = useRef<any>(null);

  const featuredProjects = [
    {
      id: 1,
      title: 'LSSB Portal',
      description: 'A comprehensive portal system for students and staff with dashboard, course management, and administrative tools.',
      image: 'https://portal.lagosscholarship.org/asset/homeImage.png',
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
      category: 'Web Portal',
      liveUrl: 'https://portal.lagosscholarship.org/login',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'LASUCOM HRM',
      description: 'Human Resource Management system for managing employee data, leave requests, performance reviews, and payroll.',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'JavaScript', 'Context API', 'Material UI'],
      category: 'Enterprise System',
      liveUrl: 'https://hrm.lasucom.edu.ng/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'PAYLODE Payment Gateway',
      description: 'Paylode Payment Gateway is a secure and seamless payment gateway that enables businesses to accept cards, bank transfers, USSD, and mobile money with ease, offering fast transactions and real-time reporting.',
      image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'JavaScript', 'Context API', 'Material UI'],
      category: 'Fintech',
      liveUrl: 'https://paylodeservices.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Noas Delight Limited',
      description: 'Noas Delight is a proudly local food brand offering mouthwatering dishes and snacks that celebrate authentic taste and homemade goodness.',
      image: 'https://www.noasdelightsltd.com/images/1.png',
      technologies: ['React', 'TypeScript', 'GraphQL', 'Styled Components'],
      category: 'E-commerce',
      liveUrl: 'https://www.noasdelightsltd.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Self Service - Internal Revenue Service',
      description: 'It is a seamless tax management with our modern self-service platform that is Fast, secure, and always available.',
      image: 'https://selfservicepro.icmaservices.com/src/assets/images/state-logo.png',
      technologies: ['React', 'TypeScript', 'Styled Components', 'API Integration'],
      category: 'Tax,Revenue & Fintech',
      liveUrl: 'https://selfservicepro.icmaservices.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Vadtrans Trasnportation',
      description: 'Vadtrans Trasnportation is Nigeria\'s leading transportation booking platform, connecting travelers with reliable transport companies across the country and beyond.',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'TypeScript', 'Styled Components', 'API Integration', 'Node.js', 'Railway', 'PostgreSQL', 'JWT', 'Bcrypt'],
      category: 'Transportation',
      liveUrl: 'https://vadtrans-git-main-samuel-akinboros-projects.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 7,
      title: 'Hikari',
      description: 'Hikari is a comprehensive platform for managing and tracking your tasks and budgets, providing a platform for users to stay organized and achieve their goals.',
      image: 'https://images.unsplash.com/photo-1588406320565-9fa6d9901d1d?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'TypeScript', 'Styled Components', 'API Integration', 'Node.js', 'Railway', 'PostgreSQL', 'JWT', 'Bcrypt'],
      category: 'Finance-Tracking',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];



  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses transform
            their ideas into successful digital products
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative mb-20 px-4 md:px-0">
          {/* Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet !w-2.5 !h-2.5 !bg-gray-300 !opacity-100',
              bulletActiveClass: '!bg-purple-600 !w-8 !rounded-full transition-all duration-300',
            }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="projects-slider !pb-16"
          >
            {featuredProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-full">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full border border-gray-100 flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                            title="View Live Demo"
                          >
                            <ExternalLinkIcon size={20} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                            title="View Code"
                          >
                            <GithubIcon size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1 rounded-md text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Absolute Positioned */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 p-3 rounded-full bg-white text-gray-800 shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 focus:outline-none hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 p-3 rounded-full bg-white text-gray-800 shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 focus:outline-none hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="swiper-pagination flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. We'll help you create
              a digital solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center font-medium"
              >
                Start a Project
                <ArrowRightIcon size={20} className="ml-2" />
              </a>
              <a
                href="#services"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors inline-flex items-center justify-center font-medium"
              >
                View Services
              </a>
              <RateCard />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}