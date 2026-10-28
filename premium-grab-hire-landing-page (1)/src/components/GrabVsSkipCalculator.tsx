import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Scale,
  TrendingDown,
  Zap,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface GrabVsSkipCalculatorProps {
  onOpenQuoteModal: (prefill?: {
    service?: string;
    loadSize?: string;
    details?: string;
  }) => void;
}

export const GrabVsSkipCalculator: React.FC<GrabVsSkipCalculatorProps> = ({
  onOpenQuoteModal,
}) => {
  const { ref, isVisible } = useScrollReveal();
  const [tonnes, setTonnes] = useState<number>(17);

  const presets = [
    { label: 'Patio / Small Garden', tonnes: 8, tag: 'Half Load' },
    { label: 'Double Driveway Dig-Out', tonnes: 17, tag: '1 Full Grab' },
    { label: 'Home Extension / Footings', tonnes: 34, tag: '2 Full Grabs' },
    { label: 'Commercial Groundworks', tonnes: 51, tag: '3 Full Grabs' },
  ];

  // Calculations
  // Standard 8-yard builders skip safely holds ~6 to 8 tonnes of heavy soil/hardcore
  const skipsRequired = Math.max(1, Math.ceil(tonnes / 6.5));
  const grabLoadsRequired = tonnes <= 8.5 ? 0.5 : Math.ceil(tonnes / 17);
  const grabLoadLabel =
    tonnes <= 8.5
      ? '1 × Half-Load Grab (up to 8.5T)'
      : `${grabLoadsRequired} × Full 17T 8-Wheel Grab${grabLoadsRequired > 1 ? 's' : ''}`;

  const manualLaborHours = Math.round(tonnes * 0.75); // ~45 mins per tonne wheelbarrowing
  const grabLoadingMinutes = grabLoadsRequired <= 1 ? 20 : Math.round(grabLoadsRequired * 22);
  const estimatedSkipCost = skipsRequired * 265;
  const estimatedGrabCost = tonnes <= 8.5 ? 185 : Math.ceil(tonnes / 17) * 295;
  const estimatedSavings = Math.max(60, estimatedSkipCost - estimatedGrabCost);
  const savingsPercent = Math.round((estimatedSavings / estimatedSkipCost) * 100);

  return (
    <section
      id="grab-vs-skip"
      ref={ref}
      className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-dark-blueprint pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.5) 0%, rgba(15,23,42,0) 70%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#F59E0B] font-mono-tech text-xs font-semibold uppercase mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>INTERACTIVE ECONOMICS &amp; CAPACITY SIMULATOR</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-white">
            Why Pay For <span className="line-through text-slate-500">2 or 3 Skips</span> When We Get It Done In <span className="text-[#F59E0B]">1 Grab?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Drag the tonnage slider below or select your project type to compare a single{' '}
            <strong className="text-white">Wigan Grab Hire 17-tonne 8-wheel wagon</strong> against traditional skip hire.
          </p>
        </div>

        {/* Interactive Simulator Container */}
        <div
          className={`glass-dark rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 shadow-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Top Control Bar: Project Presets + Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="waste-tonnage-slider"
                  className="font-mono-tech text-xs uppercase text-slate-300 font-semibold"
                >
                  Estimated Spoil / Waste Weight:
                </label>
                <div className="inline-flex items-baseline gap-1.5 bg-[#EA580C]/20 border border-[#EA580C] px-3.5 py-1 rounded-xl">
                  <span className="font-mono-tech font-extrabold text-2xl text-[#F59E0B]">
                    {tonnes}
                  </span>
                  <span className="font-mono-tech text-xs text-orange-200 uppercase">
                    Tonnes (~{Math.round(tonnes * 0.92)}m³)
                  </span>
                </div>
              </div>

              <input
                id="waste-tonnage-slider"
                type="range"
                min={4}
                max={51}
                step={1}
                value={tonnes}
                onChange={(e) => setTonnes(Number(e.target.value))}
                className="w-full precision-slider bg-slate-800 rounded-lg"
              />

              <div className="flex justify-between text-[11px] font-mono-tech text-slate-400">
                <span>4T (Half Load)</span>
                <span>17T (1 Full 8-Wheeler)</span>
                <span>34T (2 Grab Loads)</span>
                <span>51T (Site Shift)</span>
              </div>
            </div>

            {/* Project Presets */}
            <div className="lg:col-span-6">
              <span className="block font-mono-tech text-xs uppercase text-slate-400 mb-2.5">
                Or Select a Typical Project Benchmark:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setTonnes(preset.tonnes)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      tonnes === preset.tonnes
                        ? 'bg-[#EA580C] border-[#F59E0B] text-white shadow-lg shadow-orange-600/25'
                        : 'bg-slate-900/80 border-white/10 text-slate-300 hover:border-white/25'
                    }`}
                  >
                    <div className="font-mono-tech text-[10px] uppercase opacity-80">
                      {preset.tag}
                    </div>
                    <div className="font-display font-bold text-xs sm:text-sm mt-0.5 leading-snug">
                      {preset.label}
                    </div>
                    <div className="font-mono-tech font-bold text-xs mt-1 text-amber-300">
                      {preset.tonnes} Tonnes
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Side-by-Side Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 items-stretch">
            {/* LEFT: WIGAN GRAB HIRE WINNER CARD (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#1E293B] border-2 border-[#EA580C] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-mono-tech font-bold text-[11px] uppercase px-4 py-1 rounded-bl-xl">
                RECOMMENDED · SAVE ~{savingsPercent}% + ZERO LABOUR
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6 pt-2">
                  <div className="w-11 h-11 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      Wigan Grab Hire (8-Wheel Hydraulic Fleet)
                    </h3>
                    <p className="text-xs font-mono-tech text-emerald-400">
                      Self-Loading Clamshell Crane · Wait &amp; Load in {grabLoadingMinutes} Mins
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <div className="text-[11px] font-mono-tech text-slate-400 uppercase">
                      Fleet Required
                    </div>
                    <div className="font-mono-tech font-extrabold text-lg sm:text-xl text-[#F59E0B] mt-1">
                      {grabLoadLabel.split(' ')[0]} {grabLoadLabel.split(' ')[1]}{' '}
                      {grabLoadLabel.split(' ')[2]}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Up to 17T per wagon</div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <div className="text-[11px] font-mono-tech text-slate-400 uppercase">
                      Manual Wheelbarrowing
                    </div>
                    <div className="font-mono-tech font-extrabold text-lg sm:text-xl text-emerald-400 mt-1">
                      0 Hours
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      Hydraulic crane loads it all
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1 bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <div className="text-[11px] font-mono-tech text-slate-400 uppercase">
                      Council Skip Permit
                    </div>
                    <div className="font-mono-tech font-extrabold text-lg sm:text-xl text-white mt-1">
                      £0 Needed
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      Loads from roadside in 20m
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {[
                    `Clears all ${tonnes} tonnes in ~${grabLoadingMinutes} minutes total on-site time`,
                    '8-metre hydraulic arm reaches straight over walls, fences & hedges',
                    'Your driveway stays 100% clear—no rusty skip sitting outside for 2 weeks',
                    'Can deliver 0.5T–20T of MOT Type 1, Topsoil or Sand on the same day (FREE delivery)',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-emerald-400 font-mono-tech text-xs sm:text-sm font-semibold">
                  <TrendingDown className="w-4 h-4" />
                  <span>
                    Saves ~{manualLaborHours} hours of manual shovel labour &amp; multiple skip fees
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onOpenQuoteModal({
                      service: '8-Wheel Grab Waste Removal',
                      loadSize: grabLoadLabel,
                      details: `Simulated ${tonnes} Tonnes Waste Removal (${grabLoadLabel} vs ${skipsRequired} Skips)`,
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#d94e07] hover:to-[#EA580C] text-white font-display font-bold text-sm shadow-lg shadow-orange-600/30 transition-all cursor-pointer shrink-0"
                >
                  <span>Book {grabLoadLabel.split('(')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT: TRADITIONAL SKIP HIRE CARD (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 flex flex-col justify-between opacity-90">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="font-mono-tech text-[11px] text-rose-400 uppercase font-semibold">
                      TRADITIONAL METHOD
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-200 mt-0.5">
                      Standard 8-Yard Builders Skips
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 font-mono-tech text-xs font-semibold">
                    {skipsRequired} × Skips Needed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-950/60 rounded-xl p-3.5 border border-white/5">
                    <div className="text-[11px] font-mono-tech text-slate-400 uppercase">
                      Skips Required
                    </div>
                    <div className="font-mono-tech font-bold text-lg text-rose-400 mt-1">
                      {skipsRequired} × 8-Yard Skips
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Max ~6.5T soil per skip</div>
                  </div>

                  <div className="bg-slate-950/60 rounded-xl p-3.5 border border-white/5">
                    <div className="text-[11px] font-mono-tech text-slate-400 uppercase">
                      Manual Labour
                    </div>
                    <div className="font-mono-tech font-bold text-lg text-rose-400 mt-1">
                      ~{manualLaborHours} Hours
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Shovelling &amp; barrowing</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    `Requires hiring ${skipsRequired} separate skips to clear ${tonnes} tonnes of soil/rubble`,
                    `Back-breaking manual wheelbarrow loading (~${Math.round(tonnes * 18)} barrow loads)`,
                    'Council road permit costs £60–£85 + up to 5 days wait if placed on highway',
                    'Heavy steel skip rollers risk cracking block paving or resin driveways',
                    'Neighbours & passers-by often fly-tip their rubbish into your skip overnight',
                  ].map((con, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono-tech">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                  Blocks site for 7–14 days
                </span>
                <span className="text-amber-400 font-semibold">Switch to 1 Grab &amp; Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
