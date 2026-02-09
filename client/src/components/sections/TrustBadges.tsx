import { Shield, Award, Leaf, Clock, CheckCircle, Handshake } from "lucide-react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const BADGES = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed NSW operators with comprehensive public liability cover.",
  },
  {
    icon: Award,
    title: "AEPMA Member",
    description: "Australian Environmental Pest Managers Association certified.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Low-toxicity treatments safe for families, pets, and the environment.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Call before 10am for same-day emergency treatment.",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guarantee",
    description: "Pests return during warranty? We re-treat at no cost.",
  },
  {
    icon: Handshake,
    title: "Transparent Pricing",
    description: "Fixed quotes upfront. No hidden fees, no surprises.",
  },
];

export default function TrustBadges() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-warm section-padding">
      <div className="container-width">
        <div
          ref={ref}
          className={cn("reveal", isVisible && "visible")}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left column — heading + context */}
            <div className="lg:col-span-2">
              <div className="w-12 h-2 accent-bar rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                Why 2,400+ Sydney Homeowners Choose Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For over 15 years, we have protected Sydney homes and businesses
                from pests. As proud AEPMA members, every treatment we deliver
                meets the highest industry standards — backed by a guarantee
                that means you never pay twice for the same problem.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                See Our Guarantee
              </Link>
            </div>

            {/* Right column — 2x3 badge grid */}
            <div className="lg:col-span-3">
              <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 stagger-children", isVisible && "visible")}>
                {BADGES.map((badge) => (
                  <div
                    key={badge.title}
                    className="bg-white rounded-xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 icon-premium card-premium-border"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <badge.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-[0.95rem] leading-snug">
                        {badge.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-[52px]">
                      {badge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
