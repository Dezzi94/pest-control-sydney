import { Link } from "wouter";
import { Phone, Shield, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

      <div className="relative container-width py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Trust indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 mb-6 animate-fade-in">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span>Rated 4.9/5 by Sydney homeowners</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Sydney's Most Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Pest Control
            </span>{" "}
            Experts
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl animate-fade-in-up stagger-1">
            Licensed technicians, eco-friendly treatments, and a 100% satisfaction guarantee.
            Same-day service available across all Sydney suburbs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up stagger-2">
            <Button variant="accent" size="xl" asChild>
              <Link href="/?quote=open">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE}
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up stagger-3">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Shield className="h-5 w-5 text-green-400" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Clock className="h-5 w-5 text-blue-400" />
              Same-Day Service
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              15+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
