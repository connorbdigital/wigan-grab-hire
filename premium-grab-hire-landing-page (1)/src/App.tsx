import { useState } from 'react';
import { Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import { AudienceMode, BUSINESS_INFO } from './data/businessData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofBar } from './components/SocialProofBar';
import { ServicesGrid } from './components/ServicesGrid';
import { GrabVsSkipCalculator } from './components/GrabVsSkipCalculator';
import { AggregateShowcase } from './components/AggregateShowcase';
import { PricingSection } from './components/PricingSection';
import { TestimonialsAndFAQ } from './components/TestimonialsAndFAQ';
import { QuoteModalAndFooter, QuotePrefill } from './components/QuoteModalAndFooter';

export function App() {
  const [audienceMode, setAudienceMode] = useState<AudienceMode>('all');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill>({});

  const handleOpenQuoteModal = (prefill?: QuotePrefill) => {
    setQuotePrefill(prefill || {});
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#0F172A] pb-16 md:pb-0">
      {/* Sticky Glassmorphic Navigation */}
      <Navbar
        audienceMode={audienceMode}
        setAudienceMode={setAudienceMode}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Embedded Instant Estimator & 8m Reach Blueprint */}
        <HeroSection
          audienceMode={audienceMode}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Social Proof Telemetry & Interactive North West Coverage Hub Bar */}
        <SocialProofBar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Core Services & Fleet Capabilities Bento Grid */}
        <ServicesGrid
          audienceMode={audienceMode}
          setAudienceMode={setAudienceMode}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Interactive Grab Hire vs. Skip Hire Economic & Tonnage Simulator */}
        <GrabVsSkipCalculator onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Aggregate Product Showcase & Live Volume-to-Tonnage Calculator */}
        <AggregateShowcase
          audienceMode={audienceMode}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Transparent Load Pricing & 3-Step Rapid Site Workflow */}
        <PricingSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Verified North West Testimonials & Technical FAQ Accordion */}
        <TestimonialsAndFAQ
          audienceMode={audienceMode}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </main>

      {/* Conversion CTA Section, Instant Quote Modal & Architectural Footer */}
      <QuoteModalAndFooter
        isOpen={quoteModalOpen}
        prefill={quotePrefill}
        onClose={() => setQuoteModalOpen(false)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/15 px-3 py-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 border border-white/15 text-white font-mono-tech font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>{BUSINESS_INFO.phoneDisplay}</span>
        </a>
        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Wigan Grab Hire"
          className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-display font-bold text-xs flex items-center justify-center gap-1"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenQuoteModal()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-display font-bold text-xs flex items-center justify-center gap-1 shadow-lg"
        >
          <span>Instant Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default App;
