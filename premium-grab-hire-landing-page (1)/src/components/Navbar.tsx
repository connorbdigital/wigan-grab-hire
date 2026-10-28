import React, { useEffect, useState } from 'react';
import {
  Phone,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Home,
  Layers,
} from 'lucide-react';
import { AudienceMode, BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  audienceMode: AudienceMode;
  setAudienceMode: (mode: AudienceMode) => void;
  onOpenQuoteModal: (prefill?: { service?: string; details?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  audienceMode,
  setAudienceMode,
  onOpenQuoteModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Grab vs Skip', href: '#grab-vs-skip' },
    { label: 'Aggregates', href: '#aggregates' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Industrial Telemetry Bar */}
      <div
        className={`bg-[#090D16] text-slate-300 border-b border-white/10 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 border-none' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4 lg:gap-6">
            <span className="inline-flex items-center gap-2 font-mono-tech text-[11px] text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              FLEET DISPATCH ACTIVE · 7 DAYS (7AM–6PM)
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              Water Works Business Park, Wigan, WN3 6GW
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              0.5T–20T Aggregates · <strong className="text-white font-medium">FREE Delivery</strong>
            </span>
          </div>

          {/* Global Audience Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-0.5 rounded-lg border border-white/10">
            <span className="hidden sm:inline text-[11px] text-slate-400 px-2 font-mono-tech uppercase">
              Tailor View:
            </span>
            <button
              type="button"
              onClick={() => setAudienceMode('all')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer ${
                audienceMode === 'all'
                  ? 'bg-[#EA580C] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              All
            </button>
            <button
              type="button"
              onClick={() => setAudienceMode('domestic')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer ${
                audienceMode === 'domestic'
                  ? 'bg-[#EA580C] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-3 h-3" />
              Domestic
            </button>
            <button
              type="button"
              onClick={() => setAudienceMode('commercial')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer ${
                audienceMode === 'commercial'
                  ? 'bg-[#EA580C] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3 h-3" />
              Commercial
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'py-2.5 px-3 sm:px-6'
            : 'py-3.5 px-4 sm:px-6 lg:px-8 bg-[#0F172A]/85 backdrop-blur-xl border-b border-white/10'
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className={`max-w-[1280px] mx-auto transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? 'bg-[#0F172A]/92 backdrop-blur-2xl border border-white/12 rounded-2xl px-4 sm:px-6 py-2.5 shadow-2xl shadow-slate-950/50'
              : ''
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Wigan Grab Hire & Aggregates Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#F59E0B] p-0.5 shadow-lg shadow-orange-600/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                {/* Custom Engineered Grab Crane Vector Emblem */}
                <svg
                  className="w-6 h-6 text-[#EA580C]"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 21H24M6 17L10 8H18L22 17"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 8V5M11 14H17"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="9" cy="21" r="2.2" fill="#F59E0B" />
                  <circle cx="19" cy="21" r="2.2" fill="#F59E0B" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-white tracking-tight text-base sm:text-lg leading-none">
                  WIGAN GRAB HIRE
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono-tech font-semibold uppercase px-1.5 py-0.5 rounded bg-[#EA580C]/20 text-[#F59E0B] border border-[#EA580C]/30">
                  17T FLEET
                </span>
              </div>
              <span className="block font-mono-tech text-[11px] text-slate-400 tracking-wider uppercase mt-0.5">
                &amp; Primary Aggregates · North West
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/12 text-white text-sm font-medium transition-all group"
            >
              <span className="w-7 h-7 rounded-lg bg-[#EA580C]/20 border border-[#EA580C]/40 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <div className="text-left leading-tight">
                <span className="block text-[10px] font-mono-tech uppercase text-slate-400">
                  Direct Dispatch
                </span>
                <span className="font-mono-tech font-semibold text-xs sm:text-sm tracking-tight">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#d94e07] hover:to-[#EA580C] text-white font-display font-bold text-sm shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Instant Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS_INFO.phoneHref}
              aria-label="Call Wigan Grab Hire"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#EA580C] text-white font-mono-tech text-xs font-semibold shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-[#0F172A]/98 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl text-white animate-fadeIn">
            <div className="mb-4 pb-3 border-b border-white/10">
              <span className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-2">
                Select Project Type:
              </span>
              <div className="grid grid-cols-3 gap-1.5 bg-slate-900 p-1 rounded-xl border border-white/10">
                {(['all', 'domestic', 'commercial'] as AudienceMode[]).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setAudienceMode(mode)}
                    className={`py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                      audienceMode === mode
                        ? 'bg-[#EA580C] text-white font-semibold'
                        : 'text-slate-400'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium text-slate-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Mon–Sun: 7:00am – 6:00pm
                </span>
                <span className="font-mono-tech text-amber-400">WN3 6GW Depot</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Get Instant Grab / Aggregate Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
