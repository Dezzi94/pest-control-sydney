import { Link } from "wouter";
import { Phone, Shield, Clock, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
      <div className="absolute inset-0 gradient-hero" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/3 rounded-full blur-[150px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative container-width py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Trust indicator pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/90 mb-6 animate-fade-in shadow-lg shadow-black/5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-medium">Rated 4.9/5 by Sydney homeowners</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Sydney's Most Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
              Pest Control
            </span>{" "}
            Experts
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up stagger-1">
            Licensed technicians, eco-friendly treatments, and a 100% satisfaction guarantee.
            Same-day service available across all Sydney suburbs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up stagger-2">
            <Button variant="accent" size="xl" className="shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30" asChild>
              <Link href="/?quote=open">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE}
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 animate-fade-in-up stagger-3">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Shield className="h-3.5 w-3.5 text-green-400" />
              </div>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Clock className="h-3.5 w-3.5 text-blue-400" />
              </div>
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                <CheckCircle className="h-3.5 w-3.5 text-purple-400" />
              </div>
              <span className="font-medium">AEPMA Member</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
