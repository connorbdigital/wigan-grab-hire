import React, { useState } from 'react';
import {
  Truck,
  Layers,
  Recycle,
  ShieldAlert,
  CheckCircle2,
  ArrowUpRight,
  Home,
  Building2,
  Check,
  AlertTriangle,
} from 'lucide-react';
import { AudienceMode, CORE_SERVICES } from '../data/businessData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServicesGridProps {
  audienceMode: AudienceMode;
  setAudienceMode: (mode: AudienceMode) => void;
  onOpenQuoteModal: (prefill?: { service?: string; details?: string }) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  audienceMode,
  setAudienceMode,
  onOpenQuoteModal,
}) => {
  const { ref, isVisible } = useScrollReveal();
  const [activeStreamTab, setActiveStreamTab] = useState<'accepted' | 'site-prep'>('accepted');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'grab-hire':
        return Truck;
      case 'aggregates-supply':
        return Layers;
      case 'muck-away':
        return Recycle;
      default:
        return ShieldAlert;
    }
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F8F7F4] bg-quarry-grid scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#EA580C] font-mono-tech text-xs font-semibold uppercase mb-3">
              <span>ENGINEERED FLEET &amp; SITE SOLUTIONS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.12]">
              Heavy-Duty Grab Logistics.{' '}
              <span className="text-[#EA580C]">Precision Site Execution.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Whether you are clearing a residential driveway in Wigan or managing a multi-load commercial groundworks site across the North West, our 8-wheel grab wagons deliver unmatched speed and payload value.
            </p>
          </div>

          {/* Domestic / Commercial Perspective Switcher */}
          <div className="self-start lg:self-auto bg-white p-1.5 rounded-2xl border border-slate-900/10 shadow-sm flex items-center gap-1">
            <button
              type="button"
              onClick={() => setAudienceMode('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold transition-all cursor-pointer ${
                audienceMode === 'all'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Clients
            </button>
            <button
              type="button"
              onClick={() => setAudienceMode('domestic')}
              className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                audienceMode === 'domestic'
                  ? 'bg-[#EA580C] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Domestic Homeowners
            </button>
            <button
              type="button"
              onClick={() => setAudienceMode('commercial')}
              className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                audienceMode === 'commercial'
                  ? 'bg-[#EA580C] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Commercial &amp; Trade
            </button>
          </div>
        </div>

        {/* 2x2 Architectural Bento Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {CORE_SERVICES.map((service) => {
            const IconComponent = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="card-precision bg-white rounded-3xl p-6 sm:p-8 border border-slate-900/10 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA580C] via-[#F59E0B] to-transparent opacity-80" />

                <div>
                  {/* Card Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span className="font-mono-tech text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {service.code}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900 text-white font-mono-tech text-xs font-semibold">
                        {service.capacityBadge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-mono-tech text-xs font-semibold">
                        {service.turnaroundBadge}
                      </span>
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:bg-[#EA580C] group-hover:text-white transition-colors shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono-tech text-[#EA580C] font-semibold mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Contextual Domestic / Commercial Highlight Box */}
                  <div className="rounded-2xl bg-[#F8F7F4] p-4 border border-slate-900/8 mb-5 space-y-2.5">
                    {(audienceMode === 'all' || audienceMode === 'domestic') && (
                      <div className="flex items-start gap-2.5">
                        <span className="px-2 py-0.5 rounded bg-orange-500/15 text-[#EA580C] font-mono-tech text-[10px] font-bold uppercase shrink-0 mt-0.5">
                          Domestic
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700">
                          {service.domesticHighlight}
                        </p>
                      </div>
                    )}
                    {(audienceMode === 'all' || audienceMode === 'commercial') && (
                      <div className="flex items-start gap-2.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-400 font-mono-tech text-[10px] font-bold uppercase shrink-0 mt-0.5">
                          Commercial
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700">
                          {service.commercialHighlight}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 4-Column Spec Telemetry Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {service.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-xl p-2.5 border border-slate-900/6"
                      >
                        <div className="text-[10px] font-mono-tech uppercase text-slate-400">
                          {spec.label}
                        </div>
                        <div className="font-mono-tech font-bold text-xs text-slate-900 mt-0.5">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-slate-900/8 flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-slate-500">
                    Available 7 Days · Wigan &amp; North West
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenQuoteModal({
                        service: service.title,
                        details: `Enquiry for ${service.title} (${service.capacityBadge})`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#EA580C] text-white font-display font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <span>Book {service.title.split(' ')[0]} Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Material Stream & Site Access Guide Banner */}
        <div className="mt-10 bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono-tech text-xs text-[#F59E0B] uppercase font-semibold">
                WASTE ACCEPTANCE &amp; SITE READINESS PROTOCOL
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl mt-1">
                What Can Our 8-Wheel Grab Lorries Clear?
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-white/10 self-start">
              <button
                type="button"
                onClick={() => setActiveStreamTab('accepted')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech font-semibold transition-all cursor-pointer ${
                  activeStreamTab === 'accepted'
                    ? 'bg-[#EA580C] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Accepted Waste Streams
              </button>
              <button
                type="button"
                onClick={() => setActiveStreamTab('site-prep')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech font-semibold transition-all cursor-pointer ${
                  activeStreamTab === 'site-prep'
                    ? 'bg-[#EA580C] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                8m Reach &amp; Access Guide
              </button>
            </div>
          </div>

          {activeStreamTab === 'accepted' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {[
                {
                  title: 'Inert Soil, Clay & Turf',
                  desc: 'Excavated garden soil, heavy clay, subsoil, and lawn turf dig-outs.',
                  tag: 'Most Popular Muck Away',
                },
                {
                  title: 'Brick, Concrete & Hardcore',
                  desc: 'Broken patio flags, concrete driveways, brick walls, blocks & stone.',
                  tag: '100% Crushed & Recycled',
                },
                {
                  title: 'Green & Landscaping Waste',
                  desc: 'Hedge clippings, tree roots, bushes, timber sleepers & landscaping spoil.',
                  tag: 'Domestic & Commercial',
                },
                {
                  title: 'General Site & Fly-Tip Waste',
                  desc: 'Mixed builders waste, fly-tipped mounds, and bulky site clearance.',
                  tag: 'Licensed EA Carrier',
                },
              ].map((stream, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#EA580C]/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-mono-tech text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      {stream.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white">
                    {stream.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{stream.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="font-mono-tech text-xs text-amber-400 font-bold mb-1">
                  01 // PILE LOCATION (UP TO 8M REACH)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pile your soil or rubble within 6–8 metres of where our 8-wheel wagon can safely park. We easily reach over standard 6ft garden fences and walls.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="font-mono-tech text-xs text-amber-400 font-bold mb-1">
                  02 // OVERHEAD CLEARANCE CHECK
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ensure there are no low overhead telephone wires, power cables, or overhanging tree branches directly above the waste pile where the crane boom operates.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-tech text-xs text-white font-bold mb-1">
                    UNSURE ABOUT ACCESS?
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    WhatsApp a quick photo of your pile and access road to{' '}
                    <strong className="text-amber-400">07927 200523</strong> and our operator will confirm within minutes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
