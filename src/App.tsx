import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { ScrollToTop } from './components/ScrollToTop';
import { ServiceDetail } from './pages/ServiceDetail';

// Service Data Configurations
const frontendService = {
  title: "Frontend Development",
  description: "Create stunning, responsive user interfaces with modern frameworks like React and Vue for exceptional user experiences. We focus on performance, accessibility, and pixel-perfect design.",
  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop",
  features: [
    "Responsive Web Design",
    "Single Page Applications (SPA)",
    "Progressive Web Apps (PWA)",
    "UI/UX Implementation",
    "Performance Optimization",
    "Accessibility Compliance (WCAG)"
  ],
  benefits: [
    { title: "Mobile First", description: "Seamless experiences across all devices and screen sizes." },
    { title: "Fast Loading", description: "Optimized assets and code for lightning-fast page loads." },
    { title: "Interactive", description: "Engaging animations and micro-interactions that delight users." }
  ]
};

const backendService = {
  title: "Backend Solutions",
  description: "Robust and scalable server-side architectures using Node.js, Python, or Go. We build secure APIs and manage databases to power your applications reliably.",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop",
  features: [
    "API Development (REST & GraphQL)",
    "Database Design (SQL & NoSQL)",
    "Authentication & Authorization",
    "Cloud Infrastructure (AWS/GCP)",
    "Microservices Architecture",
    "Serverless Functions"
  ],
  benefits: [
    { title: "Scalable", description: "Systems designed to grow with your business traffic." },
    { title: "Secure", description: "Industry-standard security practices to protect your data." },
    { title: "Reliable", description: "High availability and fault tolerance built-in." }
  ]
};

const mobileService = {
  title: "Mobile Development",
  description: "Cross-platform mobile apps built with React Native or Flutter that deliver native-like performance on iOS and Android. Reach more users with a single codebase.",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
  features: [
    "Cross-Platform Development",
    "Native Performance",
    "App Store Deployment",
    "Push Notifications",
    "Offline Functionality",
    "Device Features Integration"
  ],
  benefits: [
    { title: "Cost Effective", description: "One code base for both iOS and Android platforms." },
    { title: "Faster to Market", description: "Rapid development cycles and quick iterations." },
    { title: "Native Feel", description: "Smooth animations and native UX patterns." }
  ]
};

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/frontend" element={<ServiceDetail {...frontendService} />} />
            <Route path="/services/backend" element={<ServiceDetail {...backendService} />} />
            <Route path="/services/mobile" element={<ServiceDetail {...mobileService} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}