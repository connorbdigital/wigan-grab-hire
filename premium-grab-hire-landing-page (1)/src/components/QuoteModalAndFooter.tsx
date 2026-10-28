import React, { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  X,
  Send,
  MessageCircle,
  Truck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export interface QuotePrefill {
  service?: string;
  loadSize?: string;
  postcode?: string;
  clientType?: string;
  details?: string;
}

interface QuoteModalAndFooterProps {
  isOpen: boolean;
  prefill: QuotePrefill;
  onClose: () => void;
  onOpenQuoteModal: (prefill?: QuotePrefill) => void;
}

export const QuoteModalAndFooter: React.FC<QuoteModalAndFooterProps> = ({
  isOpen,
  prefill,
  onClose,
  onOpenQuoteModal,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('WN3');
  const [clientType, setClientType] = useState<'Domestic' | 'Commercial'>('Domestic');
  const [service, setService] = useState('8-Wheel Hydraulic Grab Waste Removal');
  const [loadSize, setLoadSize] = useState('Full 17-Ton Load (2–3 Skips Eqv.)');
  const [preferredDate, setPreferredDate] = useState('As Soon As Possible (Same / Next Day)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync prefill values when modal opens
  useEffect(() => {
    if (prefill.service) setService(prefill.service);
    if (prefill.loadSize) setLoadSize(prefill.loadSize);
    if (prefill.postcode) setPostcode(prefill.postcode);
    if (prefill.clientType === 'Commercial' || prefill.clientType === 'Domestic') {
      setClientType(prefill.clientType);
    }
    if (prefill.details) setNotes(prefill.details);
    setSubmitted(false);
  }, [prefill, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const buildWhatsAppUrl = () => {
    const text = `Hi Wigan Grab Hire & Aggregates, I'd like a quote:\n• Name: ${
      name || 'Customer'
    }\n• Client Type: ${clientType}\n• Service: ${service}\n• Load/Quantity: ${loadSize}\n• Postcode: ${postcode}\n• When: ${preferredDate}\n• Notes: ${
      notes || 'N/A'
    }`;
    return `https://wa.me/447927200523?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* FINAL CONVERSION CTA SECTION */}
      <section className="relative bg-[#0F172A] text-white py-20 lg:py-24 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-dark-blueprint pointer-events-none" />
        <div
          className="absolute -top-32 right-10 w-[520px] h-[520px] rounded-full pointer-events-none blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(234,88,12,0.5) 0%, rgba(15,23,42,0) 70%)',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#1E293B] to-slate-900 border border-white/15 p-8 sm:p-10 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono-tech text-xs font-semibold uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DISPATCHING 7 DAYS A WEEK · MON–SUN 7AM–6PM</span>
                </div>

                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.08]">
                  Ready to Clear Your Site or Order Aggregates{' '}
                  <span className="text-[#F59E0B]">With Free Delivery?</span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Stop paying for multiple skips and council permits. Get a fixed-price quote for an{' '}
                  <strong className="text-white">8-wheel 17-ton grab lorry</strong> (full or half load) or order{' '}
                  <strong className="text-amber-400">0.5T–20T of topsoil, sand &amp; stone</strong> directly from our Wigan depot today.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal()}
                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#d94e07] hover:to-[#EA580C] text-white font-display font-bold text-base shadow-xl shadow-orange-600/30 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <span>Get Instant Online Quote</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>

                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono-tech font-bold text-base transition-all"
                  >
                    <Phone className="w-5 h-5 text-[#F59E0B]" />
                    <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-display font-bold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Photo for Price</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Depot Telemetry & Direct Contact Card */}
              <div className="lg:col-span-5 bg-[#0F172A]/90 rounded-2xl p-6 sm:p-7 border border-white/12 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono-tech text-xs text-amber-400 uppercase font-bold">
                    WIGAN DEPOT &amp; DISPATCH DESK
                  </span>
                  <span className="font-mono-tech text-xs text-emerald-400">WN3 6GW</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-white">Depot Address</div>
                      <div className="text-slate-300 text-xs">{BUSINESS_INFO.address.full}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-white">Operating Hours (7 Days)</div>
                      <div className="text-slate-300 text-xs">
                        {BUSINESS_INFO.hours.days} · {BUSINESS_INFO.hours.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-white">Email Enquiries &amp; Accounts</div>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-amber-400 hover:underline text-xs font-mono-tech"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
                  <div className="bg-white/5 rounded-xl p-2.5">
                    <div className="font-mono-tech font-bold text-sm text-white">17 Tonnes</div>
                    <div className="text-[10px] text-slate-400">8-Wheel Grab Capacity</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5">
                    <div className="font-mono-tech font-bold text-sm text-emerald-400">
                      FREE Delivery
                    </div>
                    <div className="text-[10px] text-slate-400">0.5T–20T Aggregates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL FOOTER */}
      <footer className="bg-[#090D16] text-slate-400 py-14 border-t border-white/10 text-xs sm:text-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EA580C] text-white flex items-center justify-center font-display font-black">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-white text-base tracking-tight block">
                    WIGAN GRAB HIRE &amp; AGGREGATES
                  </span>
                  <span className="font-mono-tech text-[10px] text-amber-400 uppercase">
                    DOMESTIC &amp; COMMERCIAL · NORTH WEST
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                Reputable and trusted Grab Hire &amp; Primary Aggregate specialists working with residential homeowners and commercial contractors across Wigan and the North West.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-mono-tech text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed Waste Carrier · Full &amp; Half Loads</span>
              </div>
            </div>

            {/* Col 2: Core Services (3 cols) */}
            <div className="lg:col-span-3 space-y-2.5">
              <div className="font-mono-tech text-xs font-bold uppercase text-white tracking-wider mb-3">
                Core Services
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    8-Wheel 17-Ton Grab Wagon Hire
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Full or Half Load Waste Removal
                  </a>
                </li>
                <li>
                  <a href="#aggregates" className="hover:text-white transition-colors">
                    Topsoil, Sand &amp; Stone (0.5T–20T Free Delivery)
                  </a>
                </li>
                <li>
                  <a href="#aggregates" className="hover:text-white transition-colors">
                    Quarried &amp; Recycled Aggregates Supply
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Licensed Fly-Tipping Removal
                  </a>
                </li>
                <li>
                  <a href="#grab-vs-skip" className="hover:text-white transition-colors">
                    Grab Hire vs. Skip Hire Calculator
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Coverage Areas (2 cols) */}
            <div className="lg:col-span-2 space-y-2.5">
              <div className="font-mono-tech text-xs font-bold uppercase text-white tracking-wider mb-3">
                Areas Covered
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>Wigan &amp; Leigh (WN)</li>
                <li>Chorley &amp; Preston (PR)</li>
                <li>Bolton &amp; Horwich (BL)</li>
                <li>Warrington &amp; St Helens (WA)</li>
                <li>Liverpool &amp; Southport (L/PR)</li>
                <li>Greater Manchester (M)</li>
                <li>Leeds, Bradford &amp; Birmingham</li>
              </ul>
            </div>

            {/* Col 4: Direct Contact (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="font-mono-tech text-xs font-bold uppercase text-white tracking-wider mb-3">
                Depot &amp; Direct Contact
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unit 8, Water Works Business Park
                <br />
                Stephens Way, Wigan, WN3 6GW
              </p>
              <p className="font-mono-tech text-xs text-white font-bold">
                Tel:{' '}
                <a href={BUSINESS_INFO.phoneHref} className="text-[#F59E0B] hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p className="font-mono-tech text-xs">
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-slate-300 hover:text-white break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <div className="pt-2 flex items-center gap-2">
                {[
                  { name: 'WhatsApp', href: BUSINESS_INFO.whatsappHref },
                  { name: 'Instagram', href: BUSINESS_INFO.socials.instagram },
                  { name: 'Facebook', href: BUSINESS_INFO.socials.facebook },
                  { name: 'TikTok', href: BUSINESS_INFO.socials.tiktok },
                ].map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#EA580C] text-slate-300 hover:text-white text-[11px] font-mono-tech transition-colors"
                  >
                    {soc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Wigan Grab Hire &amp; Aggregates. All rights reserved.
            </div>
            <div className="font-mono-tech">
              Open 7 Days a Week · Monday – Sunday (7:00am – 6:00pm)
            </div>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE INSTANT QUOTE MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <div className="bg-[#0F172A] text-white border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Quote Modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-400 uppercase font-semibold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>FAST-TRACK DISPATCH QUOTE · WIGAN &amp; NORTH WEST</span>
                </div>
                <h3
                  id="quote-modal-title"
                  className="font-display font-extrabold text-2xl text-white"
                >
                  Request Your Instant Grab or Aggregate Price
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-6">
                  Complete your job details below for an immediate callback, or send directly to our dispatch team via WhatsApp (<strong className="text-white">07927 200523</strong>).
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Client Type Toggle */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1 rounded-xl border border-white/10">
                    {(['Domestic', 'Commercial'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setClientType(type)}
                        className={`py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer ${
                          clientType === type
                            ? 'bg-[#EA580C] text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {type} Client
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07927 200523"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white font-mono-tech focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                        Site Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        placeholder="e.g. WN3 6GW"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white font-mono-tech uppercase focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                        Preferred Timing
                      </label>
                      <select
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:outline-none focus:border-[#EA580C]"
                      >
                        <option>As Soon As Possible (Same / Next Day)</option>
                        <option>Within the Next 2–3 Days</option>
                        <option>This Weekend (Sat / Sun Slot)</option>
                        <option>Planning Ahead / Multi-Load Contract</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                        Service Required
                      </label>
                      <input
                        type="text"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                        Load Capacity / Tonnage
                      </label>
                      <input
                        type="text"
                        value={loadSize}
                        onChange={(e) => setLoadSize(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white font-mono-tech focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                      Material / Access Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Clay soil dig-out over 4ft wall, or 10T MOT Type 1 delivery..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#d94e07] hover:to-[#EA580C] text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Instant Quote Request</span>
                    </button>

                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Quote Request Logged for {postcode.toUpperCase()}!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Our Wigan dispatch team has your specification (<strong className="text-amber-400">{service} · {loadSize}</strong>) and will call you on <strong className="text-white">{phone}</strong> shortly.
                </p>
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-white/10 text-xs font-mono-tech text-slate-300">
                  Need immediate same-day dispatch? Call our transport desk directly on{' '}
                  <a href={BUSINESS_INFO.phoneHref} className="text-[#F59E0B] font-bold underline">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex justify-center gap-3 pt-2">
                  <a
                    href={ buildWhatsAppUrl() }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-display font-bold text-xs inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send Photo on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
