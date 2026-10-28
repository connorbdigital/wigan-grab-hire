import React, { useState } from 'react';
import {
  Star,
  MapPin,
  ChevronDown,
  MessageSquareQuote,
  HelpCircle,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { AudienceMode, BUSINESS_INFO, FAQ_ITEMS, TESTIMONIALS } from '../data/businessData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TestimonialsAndFAQProps {
  audienceMode: AudienceMode;
  onOpenQuoteModal: (prefill?: { details?: string }) => void;
}

export const TestimonialsAndFAQ: React.FC<TestimonialsAndFAQProps> = ({
  audienceMode,
  onOpenQuoteModal,
}) => {
  const { ref, isVisible } = useScrollReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [reviewFilter, setReviewFilter] = useState<'All' | 'Domestic' | 'Commercial'>('All');

  const activeFilter =
    reviewFilter !== 'All'
      ? reviewFilter
      : audienceMode === 'domestic'
      ? 'Domestic'
      : audienceMode === 'commercial'
      ? 'Commercial'
      : 'All';

  const filteredReviews = TESTIMONIALS.filter(
    (t) => activeFilter === 'All' || t.type === activeFilter
  );

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-[#F8F7F4] bg-quarry-grid border-t border-slate-900/8"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* PART 1: VERIFIED NORTH WEST CLIENT TESTIMONIALS */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#EA580C] font-mono-tech text-xs font-semibold uppercase mb-3">
                <MessageSquareQuote className="w-3.5 h-3.5" />
                <span>PROVEN ACROSS WIGAN &amp; THE NORTH WEST</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
                Trusted by Homeowners &amp;{' '}
                <span className="text-[#EA580C]">Site Contractors.</span>
              </h2>
            </div>

            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-900/10 self-start">
              {(['All', 'Domestic', 'Commercial'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setReviewFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-display font-bold transition-all cursor-pointer ${
                    activeFilter === tab
                      ? 'bg-[#0F172A] text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab} Reviews
                </button>
              ))}
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="card-precision bg-white rounded-3xl p-6 sm:p-8 border border-slate-900/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full font-mono-tech text-[11px] font-bold ${
                        review.type === 'Commercial'
                          ? 'bg-slate-900 text-amber-400'
                          : 'bg-orange-500/10 text-[#EA580C]'
                      }`}
                    >
                      {review.type} Project
                    </span>
                  </div>

                  <div className="mb-4 px-3 py-1.5 rounded-xl bg-[#F8F7F4] border border-slate-900/6 inline-block">
                    <span className="font-mono-tech text-xs font-semibold text-slate-700">
                      Job Spec: {review.loadSummary}
                    </span>
                  </div>

                  <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-900/8 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-slate-900 text-sm">
                      {review.author}
                    </div>
                    <div className="text-xs text-slate-500">{review.role}</div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-mono-tech text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: TECHNICAL & OPERATIONAL FAQ ACCORDION */}
        <div id="faq" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: FAQ Intro & Direct Operator Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 font-mono-tech text-xs font-semibold uppercase mb-3">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>SITE ACCESS &amp; FLEET SPECIFICATIONS</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                  Frequently Asked <span className="text-[#EA580C]">Questions.</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  Everything you need to know about our 8-wheel 17-ton grab lorries, half-load options, 8-metre hydraulic wall clearance, and free aggregate deliveries.
                </p>
              </div>

              {/* Quick Site Readiness Checklist Card */}
              <div className="bg-[#0F172A] text-white rounded-3xl p-6 border border-white/10 shadow-xl space-y-4">
                <div className="font-mono-tech text-xs text-amber-400 uppercase font-semibold">
                  QUICK PRE-ARRIVAL CHECKLIST
                </div>
                <h3 className="font-display font-bold text-lg">
                  Ready for Your Grab Lorry?
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Waste piled within 6–8m of roadside or hardstanding access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Clear of overhead power lines, phone cables &amp; low branches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Minimum ~3.0m road/gate width for 8-wheel wagon access</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#EA580C] hover:bg-[#d94e07] text-white font-mono-tech text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenQuoteModal({
                        details: 'Site access & grab hire question from FAQ section',
                      })
                    }
                    className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-display font-bold text-xs transition-colors cursor-pointer"
                  >
                    Ask Dispatch Team
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Accordion Items (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl bg-white border transition-all ${
                      isOpen
                        ? 'border-[#EA580C] shadow-md'
                        : 'border-slate-900/10 hover:border-slate-900/25'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div>
                        <span className="font-mono-tech text-[10px] uppercase font-bold text-[#EA580C] block mb-1">
                          {faq.category}
                        </span>
                        <span className="font-display font-bold text-base sm:text-lg text-slate-900">
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#EA580C] text-white rotate-180'
                            : 'bg-[#F8F7F4] text-slate-700'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-900/6">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
