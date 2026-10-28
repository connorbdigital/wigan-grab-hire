import React, { useState } from 'react';
import { MapPin, CheckCircle2, Truck, Shield, ArrowUpRight, Search } from 'lucide-react';
import { COVERAGE_HUBS, BUSINESS_INFO } from '../data/businessData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SocialProofBarProps {
  onOpenQuoteModal: (prefill?: { postcode?: string; details?: string }) => void;
}

export const SocialProofBar: React.FC<SocialProofBarProps> = ({ onOpenQuoteModal }) => {
  const { ref, isVisible } = useScrollReveal();
  const [searchQuery, setSearchQuery] = useState('');

  const keyStats = [
    {
      metric: '17 TONNES',
      label: '8-Wheel Grab Payload',
      sub: 'Full or half loads available',
      accent: 'text-[#EA580C]',
    },
    {
      metric: '2x – 3x',
      label: 'Standard Skip Volume',
      sub: 'Done in 1 single grab visit',
      accent: 'text-[#0F172A]',
    },
    {
      metric: '0.5T – 20T',
      label: 'Free Aggregate Delivery',
      sub: 'Stone, Topsoil, Sand & MOT Type 1',
      accent: 'text-[#16A34A]',
    },
    {
      metric: '7 DAYS',
      label: 'Mon – Sun (7am – 6pm)',
      sub: 'Same or next-day dispatch',
      accent: 'text-[#0F172A]',
    },
  ];

  const filteredHubs = COVERAGE_HUBS.filter(
    (hub) =>
      hub.town.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.postcodePrefix.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      ref={ref}
      className="relative bg-[#F8F7F4] border-b border-slate-900/10 py-10 sm:py-14 overflow-hidden"
    >
      {/* Animated Corridor Ticker Strip */}
      <div className="bg-[#0F172A] text-slate-300 py-2.5 border-y border-white/10 mb-10 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono-tech uppercase tracking-wider">
          {[...Array(2)].map((_, groupIdx) => (
            <React.Fragment key={groupIdx}>
              <span className="inline-flex items-center gap-2 text-white font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                WHY PAY FOR 2 SKIPS WHEN WE CAN GET IT DONE IN 1 GRAB?
              </span>
              <span>•</span>
              <span>WIGAN (WN1–WN8)</span>
              <span>•</span>
              <span>CHORLEY (PR6–PR7)</span>
              <span>•</span>
              <span>BOLTON (BL1–BL7)</span>
              <span>•</span>
              <span>PRESTON (PR1–PR5)</span>
              <span>•</span>
              <span>WARRINGTON (WA1–WA5)</span>
              <span>•</span>
              <span>ST HELENS (WA9–WA11)</span>
              <span>•</span>
              <span>LIVERPOOL &amp; SOUTHPORT</span>
              <span>•</span>
              <span>MANCHESTER</span>
              <span>•</span>
              <span className="text-amber-400">FREE AGGREGATE DELIVERY (0.5T TO 20T LOADS)</span>
              <span>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Core Telemetry Metrics */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-900/8 shadow-sm hover:shadow-md transition-all"
            >
              <div
                className={`font-mono-tech font-extrabold text-3xl sm:text-4xl tracking-tight ${stat.accent}`}
              >
                {stat.metric}
              </div>
              <div className="font-display font-bold text-slate-900 text-base mt-1.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Interactive North West Coverage Hub Bar */}
        <div
          id="coverage"
          className="mt-10 bg-white rounded-3xl p-6 sm:p-8 border border-slate-900/10 shadow-sm scroll-mt-28"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-900/8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase text-[#EA580C] font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                DEPOT HQ: UNIT 8, WATER WORKS BUSINESS PARK, STEP-WAY, WIGAN (WN3 6GW)
              </div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                Active North West Grab &amp; Aggregate Dispatch Corridors
              </h2>
            </div>

            {/* Postcode / Town Filter */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter town or postcode (e.g. Chorley, WN)..."
                  aria-label="Filter coverage town or postcode"
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#F8F7F4] border border-slate-900/12 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EA580C]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
            {filteredHubs.map((hub) => (
              <button
                key={hub.town}
                type="button"
                onClick={() =>
                  onOpenQuoteModal({
                    postcode: hub.postcodePrefix.split(' ')[0],
                    details: `Enquiry for ${hub.town} (${hub.postcodePrefix})`,
                  })
                }
                className="group text-left p-3.5 rounded-2xl bg-[#F8F7F4] hover:bg-[#0F172A] border border-slate-900/8 hover:border-[#EA580C] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono-tech text-[11px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                    {hub.postcodePrefix}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F59E0B] transition-colors" />
                </div>
                <div className="font-display font-bold text-sm text-slate-900 group-hover:text-white mt-1.5">
                  {hub.town}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 group-hover:text-emerald-400 font-mono-tech mt-1">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{hub.typicalEta}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-900/8 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#EA580C]" />
              <span>
                Covering <strong>Wigan, Chorley, Preston, Liverpool, Warrington, St Helens, Bolton, Southport, Manchester</strong> &amp; commercial contracts across <strong>Leeds, Bradford &amp; Birmingham</strong>.
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono-tech text-slate-800 font-semibold">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Direct Dispatch: {BUSINESS_INFO.phoneDisplay}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
