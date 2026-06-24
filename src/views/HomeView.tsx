import { Zap, ShieldCheck, Clock, Award, Phone, CheckCircle2, MapPin, Calculator, ShieldAlert, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { PageId } from '../types';
import { SERVICES, SERVICE_AREAS, BUSINESS_INFO } from '../data';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  setSelectedServiceId: (id: string) => void;
  setSelectedAreaId: (id: string) => void;
}

export default function HomeView({ setCurrentPage, setSelectedServiceId, setSelectedAreaId }: HomeViewProps) {
  // Calculator States
  const [calcService, setCalcService] = useState('fan');
  const [calcQty, setCalcQty] = useState(1);
  const [includeMaterials, setIncludeMaterials] = useState(false);

  const calculateEstimate = () => {
    let rate = 0;
    let materialRate = 0;
    if (calcService === 'fan') {
      rate = 149;
      materialRate = 120; // basic regulator/hook accessories
    } else if (calcService === 'switch') {
      rate = 99;
      materialRate = 80;  // modular switch
    } else if (calcService === 'mcb') {
      rate = 199;
      materialRate = 250; // standard 16A MCB
    } else if (calcService === 'inverter') {
      rate = 399;
      materialRate = 150; // terminals, grease, wires
    } else if (calcService === 'board') {
      rate = 499;
      materialRate = 400; // distribution board shell
    }
    const laborCost = rate * calcQty;
    const materialCost = includeMaterials ? materialRate * calcQty : 0;
    return laborCost + materialCost;
  };

  const handleServiceClick = (id: PageId) => {
    setSelectedServiceId(id);
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAreaClick = (id: PageId) => {
    setSelectedAreaId(id);
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-view" className="space-y-16">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative hero-gradient text-white py-16 md:py-24 overflow-hidden">
        {/* Background Decorative patterns */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 bg-primary text-xs font-bold uppercase rounded">Surat's Most Trusted Electrical Team</span>
              
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
                Professional Electrician in <span className="text-secondary">Piplod, Vesu & Surat</span>
              </h1>
              
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
                Expert repairs, complete house wiring, MCB setup, and 24/7 emergency support. We serve 395009 and surrounding areas with 100% satisfaction.
              </p>

              {/* USP Badges - Styled as stat boxes */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
                <div className="stat-box">
                  <div className="text-2xl font-bold">Same Day</div>
                  <div className="text-xs text-blue-200 uppercase tracking-widest">Service Guarantee</div>
                </div>
                <div className="stat-box">
                  <div className="text-2xl font-bold">Affordable</div>
                  <div className="text-xs text-blue-200 uppercase tracking-widest">Pricing Plan</div>
                </div>
                <div className="stat-box">
                  <div className="text-2xl font-bold">15+ Yrs</div>
                  <div className="text-xs text-blue-200 uppercase tracking-widest">Industry Experience</div>
                </div>
              </div>

              {/* Conversion Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  id="hero-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-6 h-14 btn-primary rounded-lg font-bold shadow-lg shadow-blue-900/50 text-sm font-mono"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  Call Now: {BUSINESS_INFO.phoneDisplay}
                </a>

                <button
                  id="hero-quote-btn"
                  onClick={() => {
                    const el = document.getElementById('home-booking-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center px-6 h-14 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-bold text-sm cursor-pointer"
                >
                  Get Free Quote
                </button>

                <a
                  id="hero-whatsapp-btn"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-bold text-sm"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* Hero Right Content: Visual Banner card */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl space-y-6 max-w-md mx-auto glow-effect">
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-secondary text-white text-xs font-black uppercase rounded-lg shadow-sm">
                  Available 24/7
                </div>
                
                <h3 className="font-display font-bold text-xl text-white">Emergency Services</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Short-Circuit Tracking</p>
                      <p className="text-xs text-gray-400">Immediate insulation testing to isolate faulty loads.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">DB Box & Switch Spark Repairs</p>
                      <p className="text-xs text-gray-400">Replacement of sparking breakers or burnt socket lines.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Inverter Bypass Setup</p>
                      <p className="text-xs text-gray-400">Urgent wiring routing to ensure lights function immediately.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark/50 rounded-2xl p-4 border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Need fast help?</p>
                    <p className="text-sm font-bold text-secondary">Dispatcher On Call Now</p>
                  </div>
                  <a
                    id="hero-emergency-dispatch"
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="h-10 px-4 btn-primary hover:bg-white text-white hover:text-dark rounded-xl font-bold text-xs transition-colors flex items-center justify-center"
                  >
                    Dispatch Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST SECTION */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-dark">
            Professional Electrical Services We Provide
          </h2>
          <p className="text-gray-600">
            From minor socket fixes to complete commercial grade cabling, we deliver flawless craftsmanship with 100% genuine ISI materials. Click on any service to learn full pricing and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              id={`service-card-${srv.id}`}
              key={srv.id}
              onClick={() => handleServiceClick(srv.id)}
              className="service-card group rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-dark group-hover:text-primary transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="border-t border-gray-50 mt-6 pt-4 flex items-center justify-between text-xs font-bold">
                <span className="text-primary group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
                  View Rates & Book <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-400 font-normal">
                  {srv.timeframe}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section id="why-choose-us" className="bg-gray-50/50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Uncompromising Quality
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl text-dark leading-tight">
                Surat's Most Reliable Electrician Team
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At **Hari Electrician**, we treat every home with the utmost care. Our technicians are highly trained, respect local household customs, use safety gear, and ensure complete cleanup after executing works.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">100% Genuine, branded fire-resistant copper wiring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Strict safety testing and digital meter validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Clean service: No wall debris or trash left behind</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Same Day */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs space-y-3">
                <Clock className="w-10 h-10 text-primary" />
                <h4 className="font-display font-bold text-dark text-lg">Same Day Service</h4>
                <p className="text-sm text-gray-600">Get your electrical failures corrected within hours of scheduling a standard slot.</p>
              </div>

              {/* Card 2: Experience */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs space-y-3">
                <Award className="w-10 h-10 text-secondary" />
                <h4 className="font-display font-bold text-dark text-lg">Experienced Electricians</h4>
                <p className="text-sm text-gray-600">Technicians possess 10+ years of active high-rise and industrial troubleshooting skills.</p>
              </div>

              {/* Card 3: Pricing */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs space-y-3">
                <Calculator className="w-10 h-10 text-secondary" />
                <h4 className="font-display font-bold text-dark text-lg">Affordable Pricing</h4>
                <p className="text-sm text-gray-600">Visitation rate of only ₹149. Transparent itemized digital bill with zero shockers.</p>
              </div>

              {/* Card 4: Emergency */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs space-y-3">
                <ShieldAlert className="w-10 h-10 text-primary" />
                <h4 className="font-display font-bold text-dark text-lg">24/7 Emergency Support</h4>
                <p className="text-sm text-gray-600">Our emergency crews stand by post midnight for sparking panels and major power blackouts.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PREMIUM SERVICE RATE ESTIMATOR */}
      <section id="pricing-calculator" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#003769] to-dark text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-primary/20 filter blur-2xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                Instant Price Calculator
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                Estimate Your Service Charges
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Check basic labor cost estimates immediately before booking. Select standard services, pick quantities, and adjust materials toggles to discover approximate rates transparently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Select Electrical Task
                  </label>
                  <select
                    id="calc-service-select"
                    value={calcService}
                    onChange={(e) => setCalcService(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2.5 outline-none focus:border-primary text-sm"
                  >
                    <option className="text-dark" value="fan">Fan Hook & Assembly</option>
                    <option className="text-dark" value="switch">Switch / Socket Replace</option>
                    <option className="text-dark" value="mcb">MCB Circuit Breaker Setup</option>
                    <option className="text-dark" value="inverter">Inverter Commissioning</option>
                    <option className="text-dark" value="board">Distribution Board Overhaul</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Quantity (Points / Units)
                  </label>
                  <input
                    id="calc-qty-input"
                    type="number"
                    min={1}
                    max={20}
                    value={calcQty}
                    onChange={(e) => setCalcQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2.5 outline-none focus:border-primary text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  id="calc-materials-checkbox"
                  type="checkbox"
                  checked={includeMaterials}
                  onChange={(e) => setIncludeMaterials(e.target.checked)}
                  className="w-4.5 h-4.5 accent-primary rounded bg-white/10 border-white/20 cursor-pointer"
                />
                <label htmlFor="calc-materials-checkbox" className="text-sm text-gray-300 cursor-pointer">
                  Include standard materials (Switches, standard MCBs, wire chunks, connectors)
                </label>
              </div>
            </div>

            {/* Total display column */}
            <div className="md:col-span-5 bg-white text-dark rounded-2xl p-6 text-center space-y-4">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Estimated Total Charge</p>
              <div className="font-display font-black text-4xl text-primary font-mono">
                ₹{calculateEstimate()}
              </div>
              <p className="text-[11px] text-gray-400">
                *Final cost depends on physical inspection of wiring condition. Visitation inspection is just ₹149 (waived on booking completion).
              </p>
              <button
                id="calc-book-btn"
                onClick={() => {
                  const el = document.getElementById('home-booking-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-primary hover:bg-dark text-white rounded-xl font-bold text-sm transition-all shadow-xs shadow-primary/25 cursor-pointer"
              >
                Book This Job Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AREAS COVERED */}
      <section id="covered-areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Surat Service Coverage
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-dark">
            Electrician Services in Your Neighborhood
          </h2>
          <p className="text-gray-600">
            We are centrally placed near Vesu to service all premium localities in South-West Surat within 30-40 minutes. Pick your location below to see custom landing information.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICE_AREAS.map((area) => (
            <div
              id={`area-card-${area.id}`}
              key={area.id}
              onClick={() => handleAreaClick(area.id)}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary shadow-2xs hover:shadow-sm text-center cursor-pointer transition-all hover:scale-103 group"
            >
              <div className="flex justify-center mb-3">
                <MapPin className="w-8 h-8 text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
              </div>
              <h4 className="font-display font-bold text-dark text-base group-hover:text-primary transition-colors">
                {area.name}
              </h4>
              {area.pincode && (
                <span className="text-xs font-mono text-gray-400 block mt-1">{area.pincode}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section id="testimonials" className="bg-gray-50/50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Customer Love
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-dark">
              What Surat Homeowners Say About Hari
            </h2>
            <p className="text-gray-600">
              Honest prices, tidy execution, and fast response times make us Surat's top rated individual electricians. Read reviews from verified local jobs.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 7. FAQ LISTING */}
      <section id="home-faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Answers to our most common queries regarding rates, response times, emergency protocols, and coverage.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* 8. CORE BOOKING FORM ANCHOR */}
      <section id="home-booking-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Instant Scheduling
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-dark leading-tight">
              Get Your Electrical Fault Fixed Today!
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fill out the service inquiry form. Specify your preferred date and electrical concerns. Our master technician Hari will review your details and call you back in less than 15 minutes with a transparent estimate.
            </p>

            <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 space-y-3.5">
              <h4 className="font-display font-bold text-dark text-base">Direct Booking Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Free visitation diagnostic (with booking completion)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Branded replacement breakers & wires on spot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>30-Day execution service warranty</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
