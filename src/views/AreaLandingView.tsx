import { MapPin, Phone, CheckCircle, Zap, ShieldAlert, Clock, Info } from 'lucide-react';
import { PageId } from '../types';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data';
import ContactForm from '../components/ContactForm';

interface AreaLandingViewProps {
  areaId: string;
  setCurrentPage: (page: PageId) => void;
  setSelectedServiceId: (id: string) => void;
}

export default function AreaLandingView({ areaId, setCurrentPage, setSelectedServiceId }: AreaLandingViewProps) {
  const area = SERVICE_AREAS.find((a) => a.id === areaId);

  if (!area) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-dark">Local Area Not Covered</h2>
        <button
          onClick={() => setCurrentPage('home')}
          className="px-5 py-2 bg-primary text-white rounded-xl font-semibold"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const handlePopularServiceClick = (serviceTitle: string) => {
    // Basic mapping from popular title keywords to service page IDs
    const lowerTitle = serviceTitle.toLowerCase();
    let servicePageId: PageId = 'services';
    if (lowerTitle.includes('emergency') || lowerTitle.includes('spark')) servicePageId = 'emergency';
    else if (lowerTitle.includes('lighting') || lowerTitle.includes('led')) servicePageId = 'residential';
    else if (lowerTitle.includes('inverter')) servicePageId = 'inverter';
    else if (lowerTitle.includes('mcb') || lowerTitle.includes('distribution')) servicePageId = 'mcb';
    else if (lowerTitle.includes('smart') || lowerTitle.includes('ac')) servicePageId = 'residential';
    else if (lowerTitle.includes('wiring') || lowerTitle.includes('cable')) servicePageId = 'wiring';
    else if (lowerTitle.includes('fan')) servicePageId = 'fan';

    setSelectedServiceId(servicePageId);
    setCurrentPage(servicePageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="area-landing-view" className="space-y-16 py-10">
      
      {/* LOCAL HERO BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#003769] to-dark text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/25 filter blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/20 text-primary border border-primary/25 rounded-full text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 animate-pulse" />
                Local Electrician in {area.name} {area.pincode ? `(Pincode ${area.pincode})` : ''}
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                {area.tagline}
              </h1>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {area.introText}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-6 py-3 bg-primary hover:bg-white text-white hover:text-dark font-extrabold text-sm rounded-xl flex items-center gap-2 transition-all font-mono shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call local dispatch: {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm rounded-xl flex items-center gap-2 transition-all"
                >
                  Message WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-lg text-white">Local Highlights</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {area.localHighlight}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-200">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>Immediate 15-Min Callback Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR LOCAL SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Immediate Assistance
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-dark">
                Popular Electrical Repairs Requested in {area.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Surat residents in {area.name} frequently face electrical complications such as salt-air humidity corrosion of switches, high load trips from multi-ton AC setups, or battery backup bypass configuration needs. Here are our top service offerings customized for {area.name}:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {area.popularServices.map((service, index) => (
                <div
                  id={`popular-srv-${index}`}
                  key={index}
                  onClick={() => handlePopularServiceClick(service)}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-primary shadow-2xs hover:shadow-sm flex items-start gap-3 cursor-pointer group transition-all"
                >
                  <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">
                      {service}
                    </h4>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mt-1">
                      Check Rates & Book &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Local Trust elements */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-dark text-sm">Why Local Residents in {area.name} Trust Hari</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Unlike unregulated street mechanics, we ensure all works are executed in strict accordance with the national building code standards. We arrive with high-precision digital multimeters, insulated screwdriver kits, and branded spare breakers from Havells or anchor so your appliances are secure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Localized Booking card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
              <h3 className="font-display font-bold text-lg text-dark text-center mb-1">
                Schedule in {area.name} Today
              </h3>
              <p className="text-xs text-gray-500 text-center mb-6">
                Fill out the form below. We prioritize {area.name} local bookings for same day fast service.
              </p>
              
              {/* Load contact form pre-filled with the area selection */}
              <ContactForm initialAreaId={area.id} />
            </div>
          </div>

        </div>
      </section>

      {/* LOCAL SEO TEXT CARDS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 rounded-3xl p-8 border border-gray-100">
        <div className="max-w-2xl mx-auto space-y-4">
          <Info className="w-7 h-7 text-primary mx-auto" />
          <h3 className="font-display font-bold text-dark text-lg">Reliable Electrical Repair Services near me in Surat</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Searching for "best electrician in {area.name}" or "emergency electrician near me in Surat"? Hari Electrician is Surat's local individual provider, known for offering honest service pricing, 10+ years of technical capability, and zero surprise fees. We offer 24-hour support to make sure you never sleep in the hot Surat summer without functioning air cooling and lights.
          </p>
        </div>
      </section>

    </div>
  );
}
