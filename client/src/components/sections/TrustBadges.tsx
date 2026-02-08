import { Shield, Award, Leaf, Clock, CheckCircle, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BADGES = [
  { icon: Shield, title: "Licensed & Insured", description: "Fully licensed NSW pest control operators with comprehensive public liability insurance.", color: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: Award, title: "AEPMA Member", description: "Proud member of the Australian Environmental Pest Managers Association.", color: "bg-green-50", iconColor: "text-green-500" },
  { icon: Leaf, title: "Eco-Friendly", description: "We use low-toxicity, environmentally responsible products safe for families and pets.", color: "bg-emerald-50", iconColor: "text-emerald-500" },
  { icon: Clock, title: "Same-Day Service", description: "Emergency service available. Call before 10am for same-day treatment.", color: "bg-orange-50", iconColor: "text-orange-500" },
  { icon: CheckCircle, title: "Satisfaction Guarantee", description: "100% satisfaction guaranteed. If pests return during warranty, we re-treat free of charge.", color: "bg-purple-50", iconColor: "text-purple-500" },
  { icon: Handshake, title: "Transparent Pricing", description: "No hidden fees. We provide a fixed quote before any work begins.", color: "bg-yellow-50", iconColor: "text-yellow-600" },
];

export default function TrustBadges() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="mb-4">Trusted by Sydney Homeowners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 15 years of experience, we've built our reputation on quality workmanship,
            transparent pricing, and outstanding customer service.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BADGES.map((badge) => (
            <div key={badge.title} className="flex gap-4 p-6 rounded-xl border border-border/50 bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-xl ${badge.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                <badge.icon className={`h-7 w-7 ${badge.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
