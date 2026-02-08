import { Link } from "wouter";
import { Phone, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900" />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative container-width section-padding">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Got a Pest Problem?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Let's Fix It Today.
            </span>
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote from Sydney's most trusted pest control team.
            Same-day service available for urgent pest issues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button variant="accent" size="xl" className="shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40" asChild>
              <Link href="/?quote=open">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="h-3.5 w-3.5" />
              </div>
              <span className="font-medium">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Clock className="h-3.5 w-3.5" />
              </div>
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <CheckCircle className="h-3.5 w-3.5" />
              </div>
              <span className="font-medium">Free Quotes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
