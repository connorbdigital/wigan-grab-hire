import React from 'react';
import {
  CheckCircle2,
  ArrowUpRight,
  Phone,
  Truck,
  Clock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO, PRICING_TIERS } from '../data/businessData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PricingSectionProps {
  onOpenQuoteModal: (prefill?: {
    service?: string;
    loadSize?: string;
    details?: string;
  }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuoteModal }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-20 lg:py-28 bg-white border-t border-slate-900/8 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#EA580C] font-mono-tech text-xs font-semibold uppercase mb-3">
            <span>FULL OR HALF LOADS · TRANSPARENT RATES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.12]">
            Flexible Load Capacities Built Around{' '}
            <span className="text-[#EA580C]">Your Exact Tonnage.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Whether you need a half-load grab for a weekend patio dig-out, a full 17-tonne 8-wheel clearance, or 0.5T–20T of aggregates with <strong className="text-slate-900">FREE delivery</strong>, we price fairly by load type and material.
          </p>
        </div>

        {/* 3 Pricing / Load Configuration Cards */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`card-precision rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative ${
                tier.highlight
                  ? 'bg-[#0F172A] text-white border-2 border-[#EA580C] shadow-2xl shadow-slate-950/20 lg:-translate-y-2'
                  : 'bg-[#F8F7F4] text-slate-900 border border-slate-900/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-mono-tech font-bold text-xs uppercase shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{tier.audienceTag}</span>
                </div>
              )}

              <div>
                {!tier.highlight && (
                  <span className="inline-block font-mono-tech text-xs font-semibold uppercase text-[#EA580C] mb-2">
                    {tier.audienceTag}
                  </span>
                )}

                <h3
                  className={`font-display font-extrabold text-2xl ${
                    tier.highlight ? 'text-white mt-2' : 'text-slate-900'
                  }`}
                >
                  {tier.name}
                </h3>

                {/* Capacity & Skip Eqv Box */}
                <div
                  className={`mt-4 p-4 rounded-2xl border ${
                    tier.highlight
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white border-slate-900/8'
                  }`}
                >
                  <div className="font-mono-tech text-xs uppercase text-slate-400">
                    Load Specification
                  </div>
                  <div
                    className={`font-mono-tech font-extrabold text-lg mt-0.5 ${
                      tier.highlight ? 'text-[#F59E0B]' : 'text-slate-900'
                    }`}
                  >
                    {tier.capacity}
                  </div>
                  <div
                    className={`text-xs font-mono-tech mt-1 ${
                      tier.highlight ? 'text-emerald-400' : 'text-emerald-700 font-semibold'
                    }`}
                  >
                    ✓ {tier.skipEquivalent}
                  </div>
                </div>

                <p
                  className={`text-sm leading-relaxed mt-5 mb-6 ${
                    tier.highlight ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.highlight ? 'text-[#F59E0B]' : 'text-[#16A34A]'
                        }`}
                      />
                      <span className={tier.highlight ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t border-current/10">
                <button
                  type="button"
                  onClick={() =>
                    onOpenQuoteModal({
                      service: tier.name,
                      loadSize: tier.capacity,
                      details: `Pricing Tier Selection: ${tier.name} (${tier.capacity})`,
                    })
                  }
                  className={`w-full py-3.5 px-5 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#d94e07] hover:to-[#EA580C] text-white shadow-lg shadow-orange-600/30'
                      : 'bg-[#0F172A] hover:bg-[#EA580C] text-white'
                  }`}
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className={`w-full py-2.5 rounded-xl font-mono-tech text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    tier.highlight
                      ? 'text-slate-300 hover:text-white bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-900/8'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Or Call {BUSINESS_INFO.phoneDisplay} for Instant Price</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3-Step Rapid Site Execution Strip */}
        <div className="mt-14 rounded-3xl bg-[#F8F7F4] p-6 sm:p-8 border border-slate-900/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: 'STEP 01',
                icon: Phone,
                title: 'Instant Fixed Quote',
                desc: 'Request a quote online or call/WhatsApp 07927 200523 with your postcode and material type for an immediate price.',
              },
              {
                step: 'STEP 02',
                icon: Clock,
                title: 'Same or Next-Day Slot',
                desc: 'We dispatch an 8-wheel grab lorry from our Wigan depot (Mon–Sun, 7am–6pm) at a time that suits your project.',
              },
              {
                step: 'STEP 03',
                icon: Truck,
                title: '20-Min Clean Turnaround',
                desc: 'Our operator cranes your waste over fences/walls or tips your aggregate load cleanly—leaving your site spotless.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center shrink-0 font-mono-tech font-bold">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono-tech text-[11px] font-bold text-[#EA580C]">
                    {item.step}
                  </span>
                  <h4 className="font-display font-bold text-base text-slate-900 mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-900/8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <span className="inline-flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              All waste is processed through licensed recycling facilities with full Duty of Care compliance.
            </span>
            <span className="font-mono-tech font-bold text-slate-900">
              7 DAYS A WEEK · 07:00 – 18:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
