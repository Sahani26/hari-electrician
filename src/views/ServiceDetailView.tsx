import { ArrowLeft, CheckCircle, Clock, ShieldCheck, DollarSign, HelpCircle, Zap, Home, Briefcase, Cable, Wind, ShieldAlert, BatteryCharging } from 'lucide-react';
import { PageId, Service } from '../types';
import { SERVICES } from '../data';
import ContactForm from '../components/ContactForm';

interface ServiceDetailViewProps {
  serviceId: string;
  setCurrentPage: (page: PageId) => void;
}

export default function ServiceDetailView({ serviceId, setCurrentPage }: ServiceDetailViewProps) {
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-dark">Service Not Found</h2>
        <button
          onClick={() => setCurrentPage('services')}
          className="px-5 py-2 bg-primary text-white rounded-xl font-semibold"
        >
          Go Back to Services
        </button>
      </div>
    );
  }

  // Map icon name to Lucide components safely
  const renderServiceIcon = (iconName: string) => {
    const props = { className: "w-10 h-10 text-primary" };
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

  return (
    <div id="service-detail-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back Button */}
      <button
        id="back-to-services-btn"
        onClick={() => setCurrentPage('services')}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-all group cursor-pointer focus:outline-none"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to All Services
      </button>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Extensive Details */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center p-3.5 bg-primary/10 rounded-2xl">
              {renderServiceIcon(service.iconName)}
            </div>
            <h1 className="font-display font-black text-3xl md:text-4xl text-dark">
              {service.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Feature Grid */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs space-y-4">
            <h3 className="font-display font-bold text-lg text-dark">What's Included in This Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-white text-primary rounded-xl shadow-2xs">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Estimated Pricing</p>
                <p className="text-sm font-bold text-dark mt-0.5">{service.pricing}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-white text-primary rounded-xl shadow-2xs">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Average Duration</p>
                <p className="text-sm font-bold text-dark mt-0.5">{service.timeframe}</p>
              </div>
            </div>
          </div>

          {/* Security & Guarantees info block */}
          <div className="bg-gradient-to-br from-[#003769] to-dark text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-12 h-12 text-secondary shrink-0" />
              <div>
                <p className="font-semibold text-base">30-Day Guaranteed Workmanship Warranty</p>
                <p className="text-xs text-gray-300 mt-0.5">If the issue recurs within a month, we fix it entirely free of charge.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pre-filled booking form */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
            <h3 className="font-display font-bold text-lg text-dark mb-2">Book This Service Now</h3>
            <p className="text-xs text-gray-500 mb-6">
              Complete the quick booking inquiry below. Our dispatcher Hari will contact you within 15 minutes to confirm details.
            </p>
            {/* Render ContactForm with default service selected */}
            <ContactForm initialServiceId={service.id} />
          </div>

          {/* Need help banner */}
          <div className="bg-yellow-50/50 rounded-2xl p-5 border border-yellow-100 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-gray-900">Have custom requirements?</p>
              <p className="text-xs text-gray-600 mt-1">
                For custom home renovations, large office switch boards, or multi-flat maintenance quotes, contact us directly on phone or WhatsApp.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
