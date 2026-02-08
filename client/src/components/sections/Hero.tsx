import { Link } from "wouter";
import { Phone, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HeroQuoteForm from "@/components/forms/HeroQuoteForm";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-900">
      {/* Single subtle radial accent — not orbs, not a grid, just a wash of colour */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className={`relative container-width py-20 lg:py-28 reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* ── Left column: copy (60%) ── */}
          <div className="lg:w-[58%]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
              Sydney's Most Trusted{" "}
              <span className="text-blue-400">Pest Control</span> Experts
            </h1>

            {/* Social proof line */}
            <p className="text-sm text-slate-400 mb-6 tracking-wide uppercase font-medium">
              Trusted by 2,400+ Sydney homeowners since 2009
            </p>

            {/* Subheadline — specific, not generic */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Licensed technicians serving every Sydney suburb — from the
              Northern Beaches to Sutherland Shire. Same-day service,
              eco-friendly treatments, guaranteed results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                variant="accent"
                size="xl"
                className="shadow-lg shadow-orange-500/20"
                asChild
              >
                <Link href="/?quote=open">Get Your Free Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white/25 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE}
                </a>
              </Button>
            </div>

            {/* Two trust badges — just two, not four */}
            <div className="flex flex-wrap gap-6">
              <span className="inline-flex items-center gap-2 text-sm text-slate-400 font-medium">
                <Shield className="h-4 w-4 text-green-400" />
                Licensed &amp; Insured
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-slate-400 font-medium">
                <Clock className="h-4 w-4 text-blue-400" />
                Same-Day Available
              </span>
            </div>
          </div>

          {/* ── Right column: inline quote form (40%) ── */}
          <div className="lg:w-[42%] flex justify-center lg:justify-end">
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
