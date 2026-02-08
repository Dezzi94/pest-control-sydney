import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";

const AVATARS = [
  { src: "/images/team/avatar-1.svg", alt: "Customer A" },
  { src: "/images/team/avatar-2.svg", alt: "Customer K" },
  { src: "/images/team/avatar-3.svg", alt: "Customer R" },
  { src: "/images/team/avatar-4.svg", alt: "Customer M" },
  { src: "/images/team/avatar-5.svg", alt: "Customer J" },
];

export default function CTASection() {
  return (
    <section className="bg-slate-900">
      <div className="container-width section-padding">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Get Your Free Quote in 60 Seconds
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Tell us about your pest problem and we'll call you back within
            30 minutes with a fixed-price quote. No obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button variant="accent" size="lg" asChild>
              <Link href="/?quote=open">
                Request Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent text-white border-2 border-slate-600 hover:bg-slate-800 hover:border-slate-500"
              asChild
            >
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-4 w-4" />
                Call {PHONE}
              </a>
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
        </div>
      </div>
    </section>
  );
}
