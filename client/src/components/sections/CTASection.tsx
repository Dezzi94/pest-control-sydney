import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/hooks/useQuoteModal";

const AVATARS = [
  { src: "/images/team/avatar-1.svg", alt: "Customer A" },
  { src: "/images/team/avatar-2.svg", alt: "Customer K" },
  { src: "/images/team/avatar-3.svg", alt: "Customer R" },
  { src: "/images/team/avatar-4.svg", alt: "Customer M" },
  { src: "/images/team/avatar-5.svg", alt: "Customer J" },
];

interface CTASectionProps {
  heading?: string;
  subheading?: string;
}

export default function CTASection({ heading, subheading }: CTASectionProps = {}) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-slate-900 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" />
      <div className="container-width section-padding relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Same-day badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-300">Same-day service available</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            {heading || "Still Thinking About It? Your Pest Problem Won't Fix Itself."}
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {subheading || "Every hour you wait, the problem grows. Tell us what you're dealing with — we'll call you within 30 minutes with a fixed-price quote. If our treatment doesn't work, we come back free."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button variant="accent" size="lg" className="cta-glow" onClick={() => openQuoteModal()}>
              Get My Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <img
                  key={a.src}
                  src={a.src}
                  alt={a.alt}
                  className="w-8 h-8 rounded-full ring-2 ring-slate-900"
                />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Trusted by 2,400+ Sydney homeowners
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            No credit card. No commitment. Just honest advice from licensed professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
