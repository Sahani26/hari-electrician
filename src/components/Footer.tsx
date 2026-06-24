import { Zap, Phone, Mail, MapPin, Facebook, MessageSquare, ShieldAlert, Award } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../data';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  
  const handlePageClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-dark text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div onClick={() => handlePageClick('home')} className="flex items-center gap-2 cursor-pointer group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-display font-black text-lg text-white tracking-tight leading-none block">
                  HARI
                </span>
                <span className="text-[9px] font-bold text-primary tracking-widest uppercase block mt-0.5">
                  Electrician
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Professional, certified electrician services in Surat. Specializing in rapid electrical fault diagnostics, 24/7 emergencies, household wiring, and high-quality installations.
            </p>

            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Award className="w-4 h-4 text-secondary" />
                <span>100% Verified Work</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <ShieldAlert className="w-4 h-4 text-secondary" />
                <span>Genuine Materials Only</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base uppercase tracking-wider text-secondary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button onClick={() => handlePageClick('home')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('about')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('blog')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Blog & Safety Guides
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('contact')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display font-semibold text-base uppercase tracking-wider text-secondary mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button onClick={() => handlePageClick(srv.id)} className="hover:text-primary transition-colors text-left truncate max-w-full">
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-base uppercase tracking-wider text-secondary mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary font-mono transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-primary transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </li>
            </ul>

            {/* Social Media Link Icons */}
            <div className="flex gap-3.5 mt-5">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#25D366] text-white transition-all"
                title="WhatsApp Support"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#3b5998] text-white transition-all"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 text-white transition-all"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Areas Cover List Section */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 text-center md:text-left">
            Service Areas We Cover in Surat
          </h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2.5 text-xs text-gray-400">
            {SERVICE_AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => handlePageClick(area.id)}
                className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                {area.name} {area.pincode ? `(${area.pincode})` : ''}
              </button>
            ))}
            <span className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
              VIP Road
            </span>
            <span className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
              Bhimrad
            </span>
            <span className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
              Udhna
            </span>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3 sm:gap-0">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Hari Electrician Services, Surat. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-gray-300">ISO 9001:2015 Certified</span>
            <span>•</span>
            <span className="hover:text-gray-300">Made for Surat Homeowners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
