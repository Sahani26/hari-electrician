import { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import BlogView from './views/BlogView';
import ServiceDetailView from './views/ServiceDetailView';
import AreaLandingView from './views/AreaLandingView';

// Data
import { SERVICES, SERVICE_AREAS } from './data';
import { Zap, Home, Briefcase, Cable, Wind, ShieldAlert, BatteryCharging, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('');

  // Handle URL hash routing if any
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Simple mapping
        if (['home', 'about', 'services', 'contact', 'blog'].includes(hash)) {
          setCurrentPage(hash as PageId);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Map icon name to Lucide components safely
  const renderServiceIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-primary" };
    switch (iconName) {
      case 'Zap': return <Zap {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Cable': return <Cable {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'BatteryCharging': return <BatteryCharging {...props} />;
      default: return <Zap {...props} />;
    }
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            setSelectedServiceId={setSelectedServiceId}
            setSelectedAreaId={setSelectedAreaId}
          />
        );
      case 'about':
        return <AboutView setCurrentPage={setCurrentPage} />;
      
      case 'services':
        // standalone Services Listing Directory Page
        return (
          <div id="services-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                Full Service Directory
              </span>
              <h1 className="font-display font-black text-3xl md:text-5xl text-dark">
                Expert Electrical Services in Surat
              </h1>
              <p className="text-gray-600">
                Browse our complete list of premium, safe, and certified electrical services. Click on any specific solution to see detailed descriptions, deliverables, and transparent pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((srv) => (
                <div
                  id={`services-directory-card-${srv.id}`}
                  key={srv.id}
                  onClick={() => {
                    setSelectedServiceId(srv.id);
                    setCurrentPage(srv.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="service-card group rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {renderServiceIcon(srv.iconName)}
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-dark group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="border-t border-gray-50 mt-6 pt-4 flex items-center justify-between text-xs font-bold">
                    <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Check Pricing & Deliverables <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-gray-400 font-normal">
                      {srv.timeframe}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'contact':
        return <ContactView />;
      case 'blog':
        return <BlogView setCurrentPage={setCurrentPage} />;
      
      default:
        // Check for specific Service Details page
        if (SERVICES.some(s => s.id === currentPage)) {
          return (
            <ServiceDetailView
              serviceId={currentPage}
              setCurrentPage={setCurrentPage}
            />
          );
        }
        
        // Check for specific Area Landing page
        if (SERVICE_AREAS.some(a => a.id === currentPage)) {
          return (
            <AreaLandingView
              areaId={currentPage}
              setCurrentPage={setCurrentPage}
              setSelectedServiceId={setSelectedServiceId}
            />
          );
        }

        // Fallback to Home
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            setSelectedServiceId={setSelectedServiceId}
            setSelectedAreaId={setSelectedAreaId}
          />
        );
    }
  };

  return (
    <div id="hari-electrician-app" className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Stage */}
      <main id="app-main-content" className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Floating Buttons */}
      <WhatsAppButton />

      {/* Information Rich Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
