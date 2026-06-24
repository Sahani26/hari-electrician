import { Zap, Award, CheckCircle2, ShieldCheck, Heart, UserCheck, Phone } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data';

interface AboutViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  
  const handlePageClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="about-view" className="space-y-16 py-10">
      
      {/* 1. BRAND STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-dark leading-tight">
              Surat's Professional Electrical Partner — Hari Electrician
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Founded over a decade ago, **Hari Electrician** was established with a singular mission: to provide the highest-quality, safest, and most transparent electrical repair and installation services to households in Surat.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We understand that electrical disruptions are highly frustrating and can pose severe safety risks. That is why our centrally-located team near Vesu operates 24 hours a day, keeping highly-certified electrical technicians standing by to handle sudden outages, sparking switchboards, or urgent appliance backups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Fully Licensed & Certified Technicians</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Adherents to Indian Electricity Standards</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Equipped with 100% Genuine ISI Spares</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Transparent Digital Quotes with No Surprises</span>
              </div>
            </div>
          </div>

          {/* Quick Profile/Stats card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-[#003769] to-dark text-white rounded-3xl p-8 shadow-lg space-y-6 glow-effect relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-primary/20 filter blur-2xl"></div>
              
              <h3 className="font-display font-bold text-xl text-white">Hari at a Glance</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-display font-black text-secondary">10+</span>
                  <div className="text-xs text-gray-300">
                    <p className="font-bold text-white">Years in Business</p>
                    <p>Servicing Surat high-rises since 2016.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <span className="text-3xl font-display font-black text-primary">1,500+</span>
                  <div className="text-xs text-gray-300">
                    <p className="font-bold text-white">Verified Projects Completed</p>
                    <p>From minor point installations to complete wiring.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <span className="text-3xl font-display font-black text-secondary">100%</span>
                  <div className="text-xs text-gray-300">
                    <p className="font-bold text-white">Customer Satisfaction</p>
                    <p>Verified five-star reviews across Surat.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <p className="text-xs italic text-gray-400">
                  "We believe in professional integrity. If a job only requires a loose terminal screw tight, we will never advise you to replace the entire circuit board."
                </p>
                <p className="text-xs font-bold text-secondary text-right mt-2">— Hari, Founder</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE VALUES GRID */}
      <section className="bg-gray-50/50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Foundation</span>
            <h2 className="font-display font-black text-3xl text-dark">Our Professional Core Values</h2>
            <p className="text-gray-600 text-sm">
              How we conduct business defines our legacy. Every visit from Hari Electrician aligns with our core operating standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-3 shadow-2xs">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <h4 className="font-display font-bold text-dark text-lg">Safety First</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                We perform safety earth-leakage checks during every visit, protecting your family against fatal electrical hazards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-3 shadow-2xs">
              <Award className="w-10 h-10 text-secondary" />
              <h4 className="font-display font-bold text-dark text-lg">Genuine Spares Only</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                We use strictly certified ISI marked cables, Miniature Circuit Breakers (MCB) from brands like Anchor, Havells, or Polycab.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-3 shadow-2xs">
              <UserCheck className="w-10 h-10 text-primary" />
              <h4 className="font-display font-bold text-dark text-lg">Absolute Honesty</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                We believe in fair itemized digital bills, explaining diagnostic faults precisely before commencing any replacements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-3 shadow-2xs">
              <Heart className="w-10 h-10 text-secondary" />
              <h4 className="font-display font-bold text-dark text-lg">Clean Execution</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                No drywall debris, stripped plastics, or cardboard box garbage is ever left behind. Your home remains tidy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COOP ACTION CALL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display font-black text-2xl md:text-3xl text-dark">
          Experience Professional Electrical Work Today
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Whether you need minor point modifications, decorative ceiling lighting layouts, or are facing an active sparking emergency in Piplod, Vesu, Althan or Adajan, we are ready to assist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-8 h-12 rounded-xl bg-primary hover:bg-dark text-white font-extrabold text-sm flex items-center gap-2 transition-all font-mono shadow-sm"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            Call: {BUSINESS_INFO.phoneDisplay}
          </a>
          <button
            id="about-quote-cta-btn"
            onClick={() => handlePageClick('contact')}
            className="px-8 h-12 rounded-xl bg-white hover:bg-gray-100 text-dark border border-gray-200 font-bold text-sm transition-all cursor-pointer"
          >
            Get Free Quote
          </button>
        </div>
      </section>

    </div>
  );
}
