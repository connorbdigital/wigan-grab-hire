import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  Truck,
  ArrowUpRight,
  Sparkles,
  Layers,
  Info,
} from 'lucide-react';
import { AGGREGATE_MATERIALS, AggregateMaterial, AudienceMode } from '../data/businessData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AggregateShowcaseProps {
  audienceMode: AudienceMode;
  onOpenQuoteModal: (prefill?: {
    service?: string;
    loadSize?: string;
    details?: string;
  }) => void;
}

export const AggregateShowcase: React.FC<AggregateShowcaseProps> = ({
  audienceMode,
  onOpenQuoteModal,
}) => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(AGGREGATE_MATERIALS[0].id);
  const [lengthM, setLengthM] = useState<number>(8);
  const [widthM, setWidthM] = useState<number>(4.5);
  const [depthMm, setDepthMm] = useState<number>(100);
  const [offloadMethod, setOffloadMethod] = useState<'tipper' | 'grab-crane'>('tipper');

  const activeMaterial: AggregateMaterial =
    AGGREGATE_MATERIALS.find((m) => m.id === selectedMaterialId) || AGGREGATE_MATERIALS[0];

  // Calculate cubic metres & tonnage
  const areaM2 = Math.max(0.5, Number((lengthM * widthM).toFixed(1)));
  const volumeM3 = Number(((lengthM * widthM * depthMm) / 1000).toFixed(2));
  const rawTonnes = volumeM3 * activeMaterial.densityTonnesPerM3;
  // Minimum order is 0.5 tonnes
  const recommendedTonnes = Math.max(0.5, Math.ceil(rawTonnes * 2) / 2);
  const wagonsRequired = Math.ceil(recommendedTonnes / 20);

  const dimensionPresets = [
    {
      label: 'Small Garden Border (0.5T–2T)',
      l: 4,
      w: 2,
      d: 100,
      mat: 'screened-topsoil',
    },
    {
      label: 'Patio Sub-Base (24m²)',
      l: 6,
      w: 4,
      d: 100,
      mat: 'mot-type-1',
    },
    {
      label: 'Double Driveway (50m²)',
      l: 10,
      w: 5,
      d: 150,
      mat: 'mot-type-1',
    },
    {
      label: 'Site Compound / Track (100m²)',
      l: 20,
      w: 5,
      d: 100,
      mat: 'crushed-concrete',
    },
  ];

  return (
    <section
      id="aggregates"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F8F7F4] bg-quarry-grid scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 font-mono-tech text-xs font-semibold uppercase mb-3">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>0.5 TON LOOSE TO 20-TON LOADS · FREE NORTH WEST DELIVERY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.12]">
              Primary Quarried &amp; Recycled{' '}
              <span className="text-[#EA580C]">Aggregates Direct to Site.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We supply stone, screened topsoil, sharp/building sand, MOT Type 1, and recycled crushed concrete from{' '}
              <strong className="text-slate-900">half a ton (0.5T) loose up to 20-ton bulk loads</strong> with{' '}
              <strong className="text-emerald-700">FREE delivery</strong> across Wigan and the North West.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-900/10 shadow-sm flex items-center gap-3 self-start lg:self-auto">
            <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-display font-bold text-slate-900 text-sm">
                Tipped Loose or Grabbed Over Walls
              </div>
              <div className="text-slate-500">
                Choose standard tipper drop or precision crane placement
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Architectural Aggregate Material Showcase */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {AGGREGATE_MATERIALS.map((mat) => {
            const isSelected = mat.id === selectedMaterialId;
            const relevantUses =
              audienceMode === 'commercial' ? mat.commercialUses : mat.domesticUses;

            return (
              <div
                key={mat.id}
                onClick={() => setSelectedMaterialId(mat.id)}
                className={`card-precision rounded-3xl overflow-hidden bg-white border-2 transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#EA580C] shadow-xl shadow-orange-600/10'
                    : 'border-slate-900/8 hover:border-slate-900/25'
                }`}
              >
                <div>
                  {/* Top Studio Macro Texture Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white font-mono-tech text-[10px] font-semibold border border-white/15">
                        {mat.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white font-mono-tech text-[10px] font-bold shadow">
                        FREE DELIVERY
                      </span>
                    </div>

                    {/* Bottom Overlay Spec */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <span className="font-mono-tech text-[10px] text-amber-300 block">
                          {mat.gradeSpec}
                        </span>
                        <h3 className="font-display font-extrabold text-base leading-snug">
                          {mat.shortName}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-2 mb-4 bg-[#F8F7F4] p-2.5 rounded-xl border border-slate-900/6">
                      <div>
                        <div className="text-[10px] font-mono-tech uppercase text-slate-400">
                          Grading Size
                        </div>
                        <div className="font-mono-tech font-bold text-xs text-slate-900">
                          {mat.grainSize}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono-tech uppercase text-slate-400">
                          Bulk Density
                        </div>
                        <div className="font-mono-tech font-bold text-xs text-[#EA580C]">
                          {mat.densityTonnesPerM3} t / m³
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {mat.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <div className="text-[10px] font-mono-tech uppercase font-semibold text-slate-400">
                        {audienceMode === 'commercial' ? 'Commercial Applications:' : 'Key Applications:'}
                      </div>
                      {relevantUses.map((use, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-1.5 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{use}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-900/6 flex items-center justify-between gap-2">
                  <span className="font-mono-tech text-[11px] text-slate-500 font-medium">
                    0.5T – 20T Loads
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMaterialId(mat.id);
                      onOpenQuoteModal({
                        service: `Aggregate Supply: ${mat.shortName}`,
                        loadSize: `${recommendedTonnes} Tonnes (Free Delivery)`,
                        details: `Order Enquiry for ${mat.name} (0.5T–20T Free Delivery)`,
                      });
                    }}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-display font-bold text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#EA580C] text-white'
                        : 'bg-slate-900 text-white hover:bg-[#EA580C]'
                    }`}
                  >
                    <span>Order {mat.shortName.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Volume-to-Tonnage Aggregate Calculator */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-900/10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-900/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center shadow-md shadow-orange-600/20">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono-tech text-xs uppercase text-[#EA580C] font-bold">
                  PRECISION QUANTITY SURVEYOR TOOL
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                  Aggregate Volume-to-Tonnage Calculator
                </h3>
              </div>
            </div>

            {/* Quick Dimension Presets */}
            <div className="flex flex-wrap items-center gap-1.5">
              {dimensionPresets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setLengthM(preset.l);
                    setWidthM(preset.w);
                    setDepthMm(preset.d);
                    setSelectedMaterialId(preset.mat);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#F8F7F4] hover:bg-slate-900 hover:text-white text-slate-700 font-mono-tech text-xs border border-slate-900/10 transition-colors cursor-pointer"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Material Selector Pills */}
              <div>
                <label className="block font-mono-tech text-xs uppercase text-slate-500 font-semibold mb-2">
                  1. Selected Aggregate Material (Syncs Density):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {AGGREGATE_MATERIALS.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedMaterialId === mat.id
                          ? 'bg-[#0F172A] border-[#EA580C] text-white shadow-sm'
                          : 'bg-[#F8F7F4] border-slate-900/10 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-display font-bold text-xs leading-tight">
                        {mat.shortName}
                      </div>
                      <div
                        className={`font-mono-tech text-[10px] mt-1 ${
                          selectedMaterialId === mat.id ? 'text-amber-400' : 'text-slate-500'
                        }`}
                      >
                        Density: {mat.densityTonnesPerM3} t/m³
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions Sliders / Number Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F8F7F4] p-4 rounded-2xl border border-slate-900/8">
                  <div className="flex justify-between items-center mb-2">
                    <label
                      htmlFor="calc-length"
                      className="font-mono-tech text-xs uppercase text-slate-500 font-semibold"
                    >
                      Length (m)
                    </label>
                    <span className="font-mono-tech font-bold text-sm text-slate-900">
                      {lengthM}m
                    </span>
                  </div>
                  <input
                    id="calc-length"
                    type="number"
                    min={0.5}
                    max={100}
                    step={0.5}
                    value={lengthM}
                    onChange={(e) => setLengthM(Math.max(0.5, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-900/15 font-mono-tech font-bold text-slate-900 text-base focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div className="bg-[#F8F7F4] p-4 rounded-2xl border border-slate-900/8">
                  <div className="flex justify-between items-center mb-2">
                    <label
                      htmlFor="calc-width"
                      className="font-mono-tech text-xs uppercase text-slate-500 font-semibold"
                    >
                      Width (m)
                    </label>
                    <span className="font-mono-tech font-bold text-sm text-slate-900">
                      {widthM}m
                    </span>
                  </div>
                  <input
                    id="calc-width"
                    type="number"
                    min={0.5}
                    max={100}
                    step={0.5}
                    value={widthM}
                    onChange={(e) => setWidthM(Math.max(0.5, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-900/15 font-mono-tech font-bold text-slate-900 text-base focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div className="bg-[#F8F7F4] p-4 rounded-2xl border border-slate-900/8">
                  <div className="flex justify-between items-center mb-2">
                    <label
                      htmlFor="calc-depth"
                      className="font-mono-tech text-xs uppercase text-slate-500 font-semibold"
                    >
                      Depth (mm)
                    </label>
                    <span className="font-mono-tech font-bold text-sm text-[#EA580C]">
                      {depthMm}mm
                    </span>
                  </div>
                  <input
                    id="calc-depth"
                    type="number"
                    min={20}
                    max={1000}
                    step={10}
                    value={depthMm}
                    onChange={(e) => setDepthMm(Math.max(10, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-900/15 font-mono-tech font-bold text-slate-900 text-base focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              {/* Offload Method Preference */}
              <div>
                <label className="block font-mono-tech text-xs uppercase text-slate-500 font-semibold mb-2">
                  2. Preferred Site Offload Method:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOffloadMethod('tipper')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      offloadMethod === 'tipper'
                        ? 'bg-orange-500/10 border-[#EA580C] text-slate-900'
                        : 'bg-[#F8F7F4] border-slate-900/10 text-slate-600'
                    }`}
                  >
                    <div className="font-display font-bold text-sm">
                      Loose Tipper Drop (0.5T – 20T)
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Tipped directly onto your driveway or site hardstanding · FREE Delivery
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOffloadMethod('grab-crane')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      offloadMethod === 'grab-crane'
                        ? 'bg-orange-500/10 border-[#EA580C] text-slate-900'
                        : 'bg-[#F8F7F4] border-slate-900/10 text-slate-600'
                    }`}
                  >
                    <div className="font-display font-bold text-sm">
                      Hydraulic Grab Crane Placement
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Craned up to 8m over your garden wall, fence, or site barrier
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl">
                <Info className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>
                  Compaction Note for <strong>{activeMaterial.shortName}</strong>:{' '}
                  {activeMaterial.compactionNote}
                </span>
              </div>
            </div>

            {/* Right Output Telemetry Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono-tech text-xs text-amber-400 uppercase font-semibold">
                    ESTIMATED REQUIREMENT
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono-tech text-xs font-semibold">
                    FREE Delivery Eligible
                  </span>
                </div>

                <div className="my-6">
                  <div className="text-xs text-slate-400 font-mono-tech uppercase">
                    Recommended Order Quantity ({activeMaterial.shortName})
                  </div>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-mono-tech font-extrabold text-4xl sm:text-5xl text-[#F59E0B]">
                      {recommendedTonnes}
                    </span>
                    <span className="font-display font-bold text-xl text-white">Tonnes</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-2">
                    Covers <strong className="text-white">{areaM2} m²</strong> at{' '}
                    <strong className="text-white">{depthMm}mm depth</strong> ({volumeM3} m³ volume)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                      Delivery Fleet
                    </div>
                    <div className="font-mono-tech font-bold text-sm text-white mt-0.5">
                      {recommendedTonnes <= 20
                        ? '1 × Single Drop (0.5T–20T)'
                        : `${wagonsRequired} × 20T Wagon Loads`}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                      Delivery Charge
                    </div>
                    <div className="font-mono-tech font-bold text-sm text-emerald-400 mt-0.5">
                      £0.00 (FREE Delivery)
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenQuoteModal({
                    service: `Aggregate Delivery: ${activeMaterial.shortName}`,
                    loadSize: `${recommendedTonnes} Tonnes (${
                      offloadMethod === 'grab-crane' ? 'Grab Crane Offload' : 'Loose Tipped'
                    })`,
                    details: `Calculated Aggregate Order: ${recommendedTonnes} Tonnes of ${activeMaterial.name} for ${lengthM}m × ${widthM}m × ${depthMm}mm (${volumeM3}m³) — Free Delivery`,
                  })
                }
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#d94e07] hover:to-[#EA580C] text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  Request Price for {recommendedTonnes}T {activeMaterial.shortName}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
