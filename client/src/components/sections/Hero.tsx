import { Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePersonalisation } from "@/hooks/usePersonalisation";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import HeroQuoteForm from "@/components/forms/HeroQuoteForm";

const PEST_LABELS: Record<string, string> = {
  "cockroach-treatment": "cockroaches",
  "termite-inspection": "termites",
  "rodent-control": "rats and mice",
  "spider-treatment": "spiders",
  "ant-control": "ants",
  "bedbug-treatment": "bed bugs",
  "bird-control": "birds",
  "general-pest-control": "pests",
};

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { selectedPest, isReturningVisitor } = usePersonalisation();
  const { openQuoteModal } = useQuoteModal();

  const pestLabel = selectedPest ? PEST_LABELS[selectedPest] ?? null : null;
  const showReturning = isReturningVisitor && pestLabel;

  return (
    <section className="noise-overlay relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-900">
      {/* Background image with dark overlay */}
      <img
        src="/images/hero/homepage-hero.jpg"
        alt="Professional pest control technician inspecting a Sydney home"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-slate-900/[0.88]" />
      {/* Bottom gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      {/* Subtle blue accent wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 container-width py-20 lg:py-28 reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* ── Left column: copy (60%) ── */}
          <div className="lg:w-[58%]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
              End Your <span className="text-primary">Pest Problem</span> Today — Guaranteed
            </h1>

            {/* Social proof line */}
            <p className="text-sm text-slate-400 tracking-wide uppercase font-medium mb-3">
              Trusted by 2,400+ Sydney homeowners since 2009
            </p>

            {/* Google Reviews badge + Credential pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-white ml-1">4.9</span>
                <span className="text-xs text-slate-400">&middot; 127 Google Reviews</span>
              </div>
            </div>

            {/* Subheadline — personalised for returning visitors */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              {showReturning
                ? `Welcome back \u2014 still dealing with ${pestLabel}? Our licensed technicians are ready to help. Pick up where you left off.`
                : "Hear scratching at night? Finding droppings in the kitchen? Our licensed technicians arrive same-day, fix the problem at the source, and guarantee their work \u2014 or we come back free. No upfront cost to quote."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                variant="accent"
                size="xl"
                className="shadow-lg shadow-orange-500/20"
                onClick={() => openQuoteModal()}
              >
                {showReturning
                  ? "Continue My Quote"
                  : "Get My Free Quote Now"}
              </Button>
            </div>

            {/* Three trust badges */}
            <div className="flex flex-wrap gap-6">
              <span className="inline-flex items-center gap-2 text-sm text-slate-400 font-medium">
                <Shield className="h-4 w-4 text-secondary" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-slate-400 font-medium">
                <Clock className="h-4 w-4 text-primary" />
                Same-Day Service
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-slate-400 font-medium">
                <CheckCircle className="h-4 w-4 text-accent" />
                100% Money-Back Guarantee
              </span>
            </div>
          </div>

          {/* ── Right column: inline quote form (40%) ── */}
          <div className="lg:w-[42%] flex justify-center lg:justify-end relative z-20">
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
