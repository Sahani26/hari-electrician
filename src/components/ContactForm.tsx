import { useState, FormEvent } from 'react';
import { Calendar, User, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES, SERVICE_AREAS, BUSINESS_INFO } from '../data';

interface ContactFormProps {
  initialServiceId?: string;
  initialAreaId?: string;
}

export default function ContactForm({ initialServiceId = '', initialAreaId = '' }: ContactFormProps) {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'contact'>('inquiry');
  
  // Service Inquiry State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryService, setInquiryService] = useState(initialServiceId);
  const [inquiryArea, setInquiryArea] = useState(initialAreaId);
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquiryDetails, setInquiryDetails] = useState('');

  // General Contact State
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{
    type: 'inquiry' | 'contact';
    name: string;
    id: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!inquiryName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!inquiryPhone.trim() || inquiryPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!inquiryService) {
      setErrorMsg('Please select the electrical service you require.');
      return;
    }
    if (!inquiryArea) {
      setErrorMsg('Please select your service area in Surat.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `HE-${Math.floor(100000 + Math.random() * 900000)}`;
      setSuccessData({
        type: 'inquiry',
        name: inquiryName,
        id: generatedId
      });
      // Clear Form
      setInquiryName('');
      setInquiryPhone('');
      setInquiryService('');
      setInquiryArea('');
      setInquiryDate('');
      setInquiryDetails('');
    }, 1200);
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!contactName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!contactPhone.trim() || contactPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessData({
        type: 'contact',
        name: contactName,
        id: `HE-MSG-${Math.floor(1000 + Math.random() * 9000)}`
      });
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMessage('');
    }, 1200);
  };

  if (successData) {
    return (
      <div id="form-success-card" className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-md border border-green-100 max-w-lg mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6 animate-pulse">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display font-bold text-2xl text-dark mb-3">Thank You, {successData.name}!</h3>
        
        {successData.type === 'inquiry' ? (
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your electrical service inquiry has been registered successfully. Our expert electrician Hari will call you within 15 minutes!
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6 inline-block w-full text-left">
              <div className="flex justify-between text-sm py-1 border-b border-gray-100">
                <span className="text-gray-500">Booking Reference:</span>
                <span className="font-mono font-bold text-primary">{successData.id}</span>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span className="text-gray-500">Service Status:</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">● Confirmed Dispatch</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your general inquiry message (Ref: {successData.id}) has been received. Our support representative will contact you shortly.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            id="book-another-btn"
            onClick={() => setSuccessData(null)}
            className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-dark rounded-xl font-semibold text-sm transition-all"
          >
            Submit Another Request
          </button>
          <a
            id="whatsapp-confirm-btn"
            href={`https://wa.me/917897954795?text=Hi%20Hari%20Electrician%2C%20I%20just%20submitted%20a%20request%20online.%20My%20Reference%20is%20${successData.id}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-semibold text-sm transition-all inline-flex items-center justify-center gap-1.5"
          >
            Confirm on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="contact-form-tabs-container" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden max-w-xl mx-auto">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button
          id="tab-inquiry-btn"
          onClick={() => { setActiveTab('inquiry'); setErrorMsg(''); }}
          className={`flex-1 py-4 text-center font-display font-semibold text-sm transition-all ${
            activeTab === 'inquiry'
              ? 'bg-primary/5 text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-dark hover:bg-gray-50/50'
          }`}
        >
          Book / Request Free Quote
        </button>
        <button
          id="tab-contact-btn"
          onClick={() => { setActiveTab('contact'); setErrorMsg(''); }}
          className={`flex-1 py-4 text-center font-display font-semibold text-sm transition-all ${
            activeTab === 'contact'
              ? 'bg-primary/5 text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-dark hover:bg-gray-50/50'
          }`}
        >
          General Question
        </button>
      </div>

      <div className="p-6 md:p-8">
        {errorMsg && (
          <div id="form-error-banner" className="flex items-center gap-2 p-3.5 mb-6 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{errorMsg}</p>
          </div>
        )}

        {/* Tab 1: Service Inquiry Form */}
        {activeTab === 'inquiry' && (
          <form id="service-inquiry-form" onSubmit={handleInquirySubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit number"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="inquiry-date"
                    type="date"
                    value={inquiryDate}
                    onChange={(e) => setInquiryDate(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiry-service-select"
                  required
                  value={inquiryService}
                  onChange={(e) => setInquiryService(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm appearance-none"
                >
                  <option value="">-- Choose Service --</option>
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>{srv.title}</option>
                  ))}
                  <option value="other-repair">Other Electrical Repair</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Your Area <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiry-area-select"
                  required
                  value={inquiryArea}
                  onChange={(e) => setInquiryArea(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                >
                  <option value="">-- Select Area --</option>
                  {SERVICE_AREAS.map((area) => (
                    <option key={area.id} value={area.id}>{area.name} {area.pincode ? `(${area.pincode})` : ''}</option>
                  ))}
                  <option value="other-surat">Other Area in Surat</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Describe Your Issue / Job Details
              </label>
              <textarea
                id="inquiry-details"
                rows={3}
                placeholder="Write down details like: Fan wobbling noise, short circuit in hall, inverter not charging..."
                value={inquiryDetails}
                onChange={(e) => setInquiryDetails(e.target.value)}
                className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button
              id="submit-inquiry-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-primary hover:bg-dark text-white font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-primary/10 hover:shadow-md transition-all active:scale-98 disabled:opacity-50"
            >
              {isSubmitting ? 'Registering Booking...' : 'Get Free Quote & Book Now'}
              <Send className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-gray-400 text-center">
              🔒 By clicking above, you agree to receive a call back on the number provided. We do not spam.
            </p>
          </form>
        )}

        {/* Tab 2: General Contact Form */}
        {activeTab === 'contact' && (
          <form id="general-contact-form" onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Anand Vyas"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit number"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@email.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Your Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Ask us anything! Wiring quotations, safety audits, commercial AMC estimates..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button
              id="submit-contact-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-dark hover:bg-primary text-white font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
