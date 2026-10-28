import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Truck,
  Layers,
  MapPin,
  Clock,
  ShieldCheck,
  Maximize2,
  Eye,
} from 'lucide-react';
import { AudienceMode, BUSINESS_INFO } from '../data/businessData';

interface HeroSectionProps {
  audienceMode: AudienceMode;
  onOpenQuoteModal: (prefill?: {
    service?: string;
    loadSize?: string;
    postcode?: string;
    clientType?: string;
    details?: string;
  }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  audienceMode,
  onOpenQuoteModal,
}) => {
  const [selectedService, setSelectedService] = useState<
    'grab-waste' | 'aggregate-delivery' | 'combo-drop-grab'
  >('grab-waste');
  const [selectedLoad, setSelectedLoad] = useState<'half' | 'full' | 'multi'>('full');
  const [postcode, setPostcode] = useState('WN3');
  const [showBlueprintOverlay, setShowBlueprintOverlay] = useState(false);

  const quickPostcodes = [
    { code: 'WN', label: 'Wigan' },
    { code: 'PR', label: 'Chorley / Preston' },
    { code: 'BL', label: 'Bolton' },
    { code: 'WA', label: 'Warrington / St Helens' },
    { code: 'M', label: 'Manchester' },
    { code: 'L', label: 'Liverpool' },
  ];

  const getDynamicSummary = () => {
    const cleanCode = postcode.trim().toUpperCase() || 'WN3';
    const isCoreHub = /^(WN|PR|BL|WA|M|L)/.test(cleanCode);

    const loadText =
      selectedLoad === 'half'
        ? 'Half Load (Up to 8.5T · 1 Large Skip Eqv.)'
        : selectedLoad === 'full'
        ? 'Full 8-Wheel Load (17T · 2–3 Skips Eqv.)'
        : 'Bulk / Multi-Load (Up to 20T Aggregates / Fleet)';

    const serviceText =
      selectedService === 'grab-waste'
        ? '8-Wheel Hydraulic Grab Waste Removal'
        : selectedService === 'aggregate-delivery'
        ? 'Direct Aggregate Supply (FREE Delivery)'
        : 'Split Load: Aggregate Drop + Muck Away Grab';

    return {
      cleanCode,
      isCoreHub,
      loadText,
      serviceText,
      etaLabel: isCoreHub ? 'Same-Day / Next-Day Dispatch' : 'Scheduled Regional Fleet Slot',
    };
  };

  const summary = getDynamicSummary();

  const handleInstantEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuoteModal({
      service: summary.serviceText,
      loadSize: summary.loadText,
      postcode: summary.cleanCode,
      clientType: audienceMode === 'commercial' ? 'Commercial' : 'Domestic',
      details: `Quick Hero Estimate: ${summary.serviceText} | ${summary.loadText} | Postcode area: ${summary.cleanCode}`,
    });
  };

  return (
    <section className="relative bg-[#0F172A] text-[#F8FAFC] pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Ambient Radial Illumination & Blueprint Grid */}
      <div className="absolute inset-0 bg-dark-blueprint pointer-events-none" />
      <div
        className="absolute -top-24 -left-24 w-[550px] h-[550px] rounded-full pointer-events-none blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.45) 0%, rgba(15,23,42,0) 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[620px] h-[620px] rounded-full pointer-events-none blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(15,23,42,0) 70%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: 7 cols (60% Asymmetric Split) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Fleet Availability Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/12 shadow-inner">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                8-WHEEL 17T FLEET ACTIVE
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono-tech text-slate-300">
                {audienceMode === 'commercial'
                  ? 'COMMERCIAL GROUNDWORKS & SITE CLEARANCE'
                  : audienceMode === 'domestic'
                  ? 'DOMESTIC DRIVEWAYS, GARDENS & EXTENSIONS'
                  : 'DOMESTIC & COMMERCIAL · NORTH WEST UK'}
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.55rem] leading-[1.06] tracking-tight text-white">
                Why Pay For 2 Skips{' '}
                <span className="block sm:inline bg-gradient-to-r from-[#EA580C] via-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                  When We Do It In 1 Grab?
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                {audienceMode === 'commercial' ? (
                  <>
                    High-capacity <strong className="text-white font-semibold">17-tonne 8-wheel grab wagons</strong>{' '}
                    and direct quarried/recycled aggregates (<strong className="text-amber-400 font-semibold">0.5T to 20T with FREE delivery</strong>). Rapid 20-minute site turnaround, 8m hydraulic reach, and full EA waste compliance across Wigan &amp; the North West.
                  </>
                ) : audienceMode === 'domestic' ? (
                  <>
                    Skip the council permits, blocked driveways, and days of back-breaking wheelbarrowing. Our{' '}
                    <strong className="text-white font-semibold">8-wheel hydraulic grab lorries</strong> reach straight over your wall to clear up to 17 tonnes in 20 minutes—plus deliver <strong className="text-amber-400 font-semibold">0.5T–20T of topsoil, sand &amp; stone FREE</strong>.
                  </>
                ) : (
                  <>
                    Specialist <strong className="text-white font-semibold">17-ton 8-wheel hydraulic grab hire</strong>{' '}
                    (full or half loads) and direct quarry aggregate supply from{' '}
                    <strong className="text-amber-400 font-semibold">0.5 ton loose to 20-ton loads with FREE delivery</strong>. Serving residential homeowners and commercial contractors 7 days a week.
                  </>
                )}
              </p>
            </div>

            {/* Interactive Instant Load & Postcode Estimator Widget */}
            <div className="glass-dark rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/15 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-display font-bold text-sm sm:text-base text-white">
                    Instant Load Configurator &amp; Dispatch Checker
                  </span>
                </div>
                <span className="font-mono-tech text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                  No Permit Needed · Wait &amp; Load
                </span>
              </div>

              <form onSubmit={handleInstantEstimateSubmit} className="space-y-4">
                {/* Step 1: Service Type Selector */}
                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-2">
                    1. Select Service Requirement
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {
                        id: 'grab-waste',
                        title: 'Grab Waste Removal',
                        sub: 'Muck, Soil, Rubble, Fly-Tip',
                      },
                      {
                        id: 'aggregate-delivery',
                        title: 'Aggregate Supply',
                        sub: '0.5T–20T · FREE Delivery',
                      },
                      {
                        id: 'combo-drop-grab',
                        title: 'Drop + Grab Combo',
                        sub: 'Deliver Stone & Remove Spoil',
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedService(item.id as typeof selectedService)}
                        className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          selectedService === item.id
                            ? 'bg-[#EA580C]/20 border-[#EA580C] text-white shadow-md shadow-orange-600/10'
                            : 'bg-slate-900/70 border-white/10 text-slate-300 hover:border-white/25'
                        }`}
                      >
                        <div className="font-display font-bold text-xs sm:text-sm flex items-center justify-between">
                          <span>{item.title}</span>
                          <span
                            className={`w-2 h-2 rounded-full ${
                              selectedService === item.id ? 'bg-[#F59E0B]' : 'bg-slate-600'
                            }`}
                          />
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Load Size & Postcode */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-7">
                    <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1.5">
                      2. Choose Load Capacity
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-white/10">
                      {[
                        { id: 'half', label: 'Half Load', spec: 'Up to 8.5T' },
                        { id: 'full', label: 'Full 17T Load', spec: '2–3 Skips Eqv' },
                        { id: 'multi', label: '0.5T–20T / Bulk', spec: 'Custom Tonnage' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedLoad(opt.id as typeof selectedLoad)}
                          className={`py-2 px-2 rounded-lg text-center transition-all cursor-pointer ${
                            selectedLoad === opt.id
                              ? 'bg-[#EA580C] text-white shadow-sm'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="text-xs font-bold leading-tight">{opt.label}</div>
                          <div
                            className={`text-[10px] font-mono-tech mt-0.5 ${
                              selectedLoad === opt.id ? 'text-orange-100' : 'text-slate-400'
                            }`}
                          >
                            {opt.spec}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-5">
                    <label
                      htmlFor="hero-postcode"
                      className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1.5"
                    >
                      3. Site Postcode / Area
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#EA580C] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="hero-postcode"
                        type="text"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        placeholder="e.g. WN3, PR7, BL5..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 text-white font-mono-tech text-sm uppercase placeholder:text-slate-500 focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Area Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[11px] font-mono-tech text-slate-400 mr-1">Hubs:</span>
                  {quickPostcodes.map((hub) => (
                    <button
                      key={hub.code}
                      type="button"
                      onClick={() => setPostcode(hub.code)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono-tech transition-colors cursor-pointer ${
                        postcode.toUpperCase().startsWith(hub.code)
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {hub.code} · {hub.label}
                    </button>
                  ))}
                </div>

                {/* Live Telemetry Readout + Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-white/10">
                  <div className="text-xs space-y-0.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono-tech font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {summary.cleanCode} Area: {summary.etaLabel}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Config: <strong className="text-slate-200">{summary.loadText}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="submit"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#d94e07] hover:to-[#EA580C] text-white font-display font-bold text-sm shadow-lg shadow-orange-600/30 transition-all cursor-pointer active:scale-[0.98]"
                    >
                      <span>Lock In Instant Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      title="Call Dispatch Directly"
                      className="inline-flex items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
                    >
                      <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* Trust Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {[
                { icon: Truck, label: '17-Ton 8-Wheelers', sub: 'Full or Half Loads' },
                { icon: Layers, label: '0.5T–20T Aggregates', sub: 'FREE Local Delivery' },
                { icon: Clock, label: 'Open 7 Days', sub: 'Mon–Sun 7am–6pm' },
                { icon: ShieldCheck, label: 'Licensed Carrier', sub: 'Full EA Compliance' },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/8"
                >
                  <badge.icon className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">{badge.label}</div>
                    <div className="text-[11px] text-slate-400">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: 5 cols (40% Asymmetric Framed Visual & Interactive Reach Blueprint) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/4.6] sm:aspect-[4/4.2] lg:aspect-[4/4.7]">
                {!showBlueprintOverlay ? (
                  <>
                    <img
                      src="/images/hero-grab-lorry.jpg"
                      alt="Wigan Grab Hire 8-Wheel 17-Ton Hydraulic Grab Lorry operating on site"
                      className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/25 to-transparent" />
                  </>
                ) : (
                  /* Interactive Technical Hydraulic Reach Blueprint View */
                  <div className="w-full h-full bg-[#0B1120] p-6 flex flex-col justify-between relative">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <span className="font-mono-tech text-[11px] text-[#F59E0B] uppercase block">
                          CAD TELEMETRY // 8-WHEEL CHASSIS
                        </span>
                        <h3 className="font-display font-bold text-white text-base">
                          Hydraulic Clamshell Reach &amp; Clearance Spec
                        </h3>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono-tech text-xs border border-emerald-500/30">
                        8.0m RADIUS
                      </span>
                    </div>

                    {/* Custom Engineered SVG Diagram of Grab Lorry Reaching Over Wall */}
                    <div className="my-auto py-4">
                      <svg
                        viewBox="0 0 400 220"
                        className="w-full h-auto"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Ground Line */}
                        <line
                          x1="10"
                          y1="185"
                          x2="390"
                          y2="185"
                          stroke="#334155"
                          strokeWidth="2"
                        />
                        {/* Measurement Arc (8m Reach) */}
                        <path
                          d="M135 110 C 195 25, 295 25, 345 135"
                          stroke="#F59E0B"
                          strokeWidth="1.75"
                          strokeDasharray="5 5"
                        />
                        <text
                          x="210"
                          y="42"
                          fill="#F59E0B"
                          fontSize="11"
                          fontFamily="JetBrains Mono, monospace"
                          fontWeight="600"
                        >
                          MAX HYDRAULIC REACH: 8.0 METRES
                        </text>

                        {/* 8-Wheel Lorry Silhouette */}
                        <rect
                          x="25"
                          y="115"
                          width="38"
                          height="50"
                          rx="5"
                          fill="#1E293B"
                          stroke="#94A3B8"
                          strokeWidth="1.5"
                        />
                        <rect
                          x="68"
                          y="122"
                          width="125"
                          height="43"
                          rx="4"
                          fill="#EA580C"
                          fillOpacity="0.22"
                          stroke="#EA580C"
                          strokeWidth="2"
                        />
                        <text
                          x="92"
                          y="147"
                          fill="#F8FAFC"
                          fontSize="11"
                          fontFamily="JetBrains Mono, monospace"
                          fontWeight="700"
                        >
                          17.0 TONNE BED
                        </text>

                        {/* 4 Axles / Wheels */}
                        {[40, 62, 152, 176].map((cx, i) => (
                          <g key={i}>
                            <circle
                              cx={cx}
                              cy="173"
                              r="11"
                              fill="#0F172A"
                              stroke="#F59E0B"
                              strokeWidth="2.5"
                            />
                            <circle cx={cx} cy="173" r="4" fill="#94A3B8" />
                          </g>
                        ))}

                        {/* Hydraulic Crane Boom */}
                        <path
                          d="M72 122 L135 62 L275 68 L330 128"
                          stroke="#EA580C"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="135" cy="62" r="5" fill="#F59E0B" />
                        <circle cx="275" cy="68" r="5" fill="#F59E0B" />

                        {/* Clamshell Bucket */}
                        <path
                          d="M316 128 C316 146, 344 146, 344 128 Z"
                          fill="#F59E0B"
                        />

                        {/* Garden Wall / Site Fence Obstacle */}
                        <rect
                          x="235"
                          y="120"
                          width="14"
                          height="65"
                          fill="#475569"
                          stroke="#CBD5E1"
                          strokeWidth="1.5"
                        />
                        <text
                          x="212"
                          y="112"
                          fill="#CBD5E1"
                          fontSize="9.5"
                          fontFamily="JetBrains Mono, monospace"
                        >
                          2.0m WALL / FENCE
                        </text>

                        {/* Spoil / Aggregate Pile */}
                        <path
                          d="M285 184 Q330 135 375 184 Z"
                          fill="#EA580C"
                          fillOpacity="0.35"
                          stroke="#F59E0B"
                          strokeWidth="2"
                        />
                        <text
                          x="298"
                          y="177"
                          fill="#FFFFFF"
                          fontSize="10"
                          fontFamily="JetBrains Mono, monospace"
                          fontWeight="600"
                        >
                          WASTE OR AGGREGATE
                        </text>
                      </svg>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center border-t border-white/10 pt-3">
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="font-mono-tech text-xs font-bold text-white">9.2m × 2.5m</div>
                        <div className="text-[10px] text-slate-400">Truck Footprint</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="font-mono-tech text-xs font-bold text-amber-400">Up to 8.0m</div>
                        <div className="text-[10px] text-slate-400">Over-Wall Reach</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="font-mono-tech text-xs font-bold text-emerald-400">~20 Mins</div>
                        <div className="text-[10px] text-slate-400">Wait &amp; Load</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Right Blueprint Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowBlueprintOverlay(!showBlueprintOverlay)}
                  className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F172A]/85 hover:bg-[#0F172A] backdrop-blur-md border border-white/20 text-xs font-mono-tech text-white shadow-lg transition-all cursor-pointer"
                >
                  {showBlueprintOverlay ? (
                    <>
                      <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>View Fleet Photo</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Inspect 8m Reach Spec</span>
                    </>
                  )}
                </button>

                {/* Bottom Glassmorphic Telemetry Overlay Card */}
                {!showBlueprintOverlay && (
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 glass-dark rounded-2xl p-4 border border-white/15">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono-tech text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                        WIGAN DEPOT FLEET TELEMETRY
                      </span>
                      <span className="font-mono-tech text-[11px] text-emerald-400">
                        ● 7 DAYS (7AM–6PM)
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10">
                      <div>
                        <div className="font-mono-tech font-bold text-base sm:text-lg text-white">
                          17 Tonnes
                        </div>
                        <div className="text-[11px] text-slate-300">8-Wheel Capacity</div>
                      </div>
                      <div className="border-x border-white/10 px-2.5">
                        <div className="font-mono-tech font-bold text-base sm:text-lg text-[#F59E0B]">
                          0.5T – 20T
                        </div>
                        <div className="text-[11px] text-slate-300">Free Agg Delivery</div>
                      </div>
                      <div className="pl-1">
                        <div className="font-mono-tech font-bold text-base sm:text-lg text-emerald-400">
                          2–3 Skips
                        </div>
                        <div className="text-[11px] text-slate-300">Cleared In 1 Grab</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
