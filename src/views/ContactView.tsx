import { MapPin, Phone, Mail, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import ContactForm from '../components/ContactForm';

export default function ContactView() {
  return (
    <div id="contact-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Intro section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h1 className="font-display font-black text-3xl md:text-5xl text-dark">
          Contact Hari Electrician
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Need a reliable electrician for immediate dispatch or custom quote estimates in Surat? Get in touch with us today via phone, WhatsApp, email, or fill out our instant contact form.
        </p>
      </div>

      {/* Main Grid: Details + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact details card */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#003769] text-white rounded-3xl p-8 shadow-lg space-y-6 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-primary/20 filter blur-2xl"></div>
            
            <h3 className="font-display font-bold text-xl text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 rounded-xl text-primary">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">Call 24/7 Support</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-bold hover:text-primary transition-all font-mono block mt-0.5">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Click-to-Call direct dispatch</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 rounded-xl text-primary">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">Email Address</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm font-semibold hover:text-primary transition-all block mt-0.5">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 rounded-xl text-primary">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">Business Address</p>
                  <p className="text-sm leading-relaxed text-gray-200 mt-1">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-white/5 pt-5">
                <div className="p-2.5 bg-white/10 rounded-xl text-primary">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">Working Hours</p>
                  <p className="text-sm leading-relaxed text-gray-200 mt-1">
                    {BUSINESS_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ info panel */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-gray-900">How long does a response take?</p>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                Emergency calls post midnight receive instant dispatch within 30-45 minutes. Standard online bookings receive callback confirmations within 15 minutes of registration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Reusable Form with active tabs */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

      {/* GOOGLE MAPS IFRAME INTEGRATION SECTION */}
      <section id="contact-map" className="space-y-4">
        <div className="text-center md:text-left space-y-1">
          <h3 className="font-display font-bold text-dark text-xl flex items-center gap-2 justify-center md:justify-start">
            <MapPin className="w-5 h-5 text-primary animate-bounce" />
            Our Vesu Service Headquarters Location
          </h3>
          <p className="text-xs text-gray-500">
            Conveniently located on Udhana - Magdalla Rd right opposite JH05 Ambani School, Vesu to service South-West Surat instantly.
          </p>
        </div>

        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative">
          <iframe
            id="google-maps-embed-frame"
            src={BUSINESS_INFO.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hari Electrician Surat Location Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
