import { Shield, Award, Leaf, Clock, CheckCircle, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BADGES = [
  { icon: Shield, title: "Licensed & Insured", description: "Fully licensed NSW pest control operators with comprehensive public liability insurance." },
  { icon: Award, title: "AEPMA Member", description: "Proud member of the Australian Environmental Pest Managers Association." },
  { icon: Leaf, title: "Eco-Friendly", description: "We use low-toxicity, environmentally responsible products safe for families and pets." },
  { icon: Clock, title: "Same-Day Service", description: "Emergency service available. Call before 10am for same-day treatment." },
  { icon: CheckCircle, title: "Satisfaction Guarantee", description: "100% satisfaction guaranteed. If pests return during warranty, we re-treat free of charge." },
  { icon: Handshake, title: "Transparent Pricing", description: "No hidden fees. We provide a fixed quote before any work begins." },
];

export default function TrustBadges() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="mb-4">Trusted by Sydney Homeowners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 15 years of experience, we've built our reputation on quality workmanship,
            transparent pricing, and outstanding customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BADGES.map((badge) => (
            <div key={badge.title} className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
