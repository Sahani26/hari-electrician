import { useState } from 'react';
import { Menu, X, Phone, Zap, MapPin, ChevronDown } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' as PageId },
    { label: 'About Us', id: 'about' as PageId },
    { label: 'Services', id: 'services' as PageId },
    { label: 'Pricing Rates', id: 'pricing' as PageId },
    { label: 'Blog', id: 'blog' as PageId },
    { label: 'Contact Us', id: 'contact' as PageId },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setAreasDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="sticky-header" className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top Notification bar */}
      <div className="bg-dark text-white py-2 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
              Surat's Preferred Emergency Electricians
            </span>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline">⚡ Fast 30-Min Piplod & Vesu Dispatch</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary transition-colors flex items-center gap-1 font-mono">
              <Phone className="w-3.5 h-3.5 text-primary" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">24/7 Hours</span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div
            id="header-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white shadow-sm shadow-primary/20 group-hover:bg-dark transition-colors duration-200">
              <Zap className="w-5.5 h-5.5 fill-current" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg md:text-xl text-dark tracking-tight leading-none block">
                HARI
              </span>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mt-0.5">
                Electrician
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-6">
            {navItems.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium text-sm py-1 border-b-2 transition-all cursor-pointer ${
                  currentPage === item.id || (item.id === 'services' && ['emergency', 'residential', 'commercial', 'wiring', 'fan', 'mcb', 'inverter'].includes(currentPage))
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary hover:border-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Areas Covered Dropdown */}
            <div className="relative">
              <button
                id="areas-dropdown-trigger"
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                onBlur={() => setTimeout(() => setAreasDropdownOpen(false), 200)}
                className={`flex items-center gap-1 font-medium text-sm py-1 border-b-2 transition-all cursor-pointer ${
                  currentPage.startsWith('area-')
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary hover:border-gray-200'
                }`}
              >
                Areas Served
                <ChevronDown className={`w-4 h-4 transition-transform ${areasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {areasDropdownOpen && (
                <div id="areas-dropdown-menu" className="absolute left-0 mt-2.5 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {SERVICE_AREAS.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => handleNavClick(area.id)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-50 flex items-center gap-2 ${
                        currentPage === area.id ? 'text-primary font-semibold bg-primary/5' : 'text-gray-700'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-primary/70" />
                      {area.name} {area.pincode ? `(${area.pincode})` : ''}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(3).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium text-sm py-1 border-b-2 transition-all cursor-pointer ${
                  currentPage === item.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary hover:border-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call-to-Action Call & WhatsApp buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-call-cta"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl font-semibold text-sm text-dark hover:text-primary hover:border-primary transition-all font-mono"
            >
              <Phone className="w-4 h-4 text-primary" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              id="header-book-cta"
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 bg-primary hover:bg-dark text-white rounded-xl font-bold text-sm shadow-xs shadow-primary/10 hover:shadow-md hover:scale-101 active:scale-99 transition-all cursor-pointer"
            >
              Book Electrician
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-primary hover:bg-gray-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-inner space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2 font-semibold text-sm transition-colors ${
                  currentPage === item.id ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Areas Served
            </span>
            <div className="grid grid-cols-2 gap-2">
              {SERVICE_AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => handleNavClick(area.id)}
                  className={`text-left py-1.5 text-xs font-medium flex items-center gap-1.5 ${
                    currentPage === area.id ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-primary" />
                  {area.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a
              id="mobile-call-cta"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl font-bold text-sm text-dark font-mono"
            >
              <Phone className="w-4 h-4 text-primary" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              id="mobile-book-cta"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-primary hover:bg-dark text-white rounded-xl font-bold text-sm text-center shadow-xs"
            >
              Book Service Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
