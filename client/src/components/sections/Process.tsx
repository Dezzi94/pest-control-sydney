import { Phone, ClipboardCheck, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    step: 1,
    icon: Phone,
    title: "Call or Book Online",
    description: "Contact us for a free consultation. We'll discuss your pest problem and schedule a convenient inspection time.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Free Inspection",
    description: "Our licensed technician inspects your property, identifies the pest species, and assesses the extent of the infestation.",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    step: 3,
    icon: Zap,
    title: "Targeted Treatment",
    description: "We apply the most effective, eco-friendly treatment plan tailored to your specific pest problem and property type.",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    step: 4,
    icon: ShieldCheck,
    title: "Ongoing Protection",
    description: "We provide a detailed report, prevention advice, and warranty. If pests return during the warranty period, we re-treat free.",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">How It Works</Badge>
          <h2 className="mb-4">Our 4-Step Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From your first call to ongoing protection, we make pest control simple,
            effective, and stress-free.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.step} className="relative group">
              {/* Connector arrow (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-4 z-10 w-8 items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-border" />
                </div>
              )}

              <div className="text-center p-6 rounded-xl border border-transparent hover:border-border/50 hover:bg-white/50 transition-all duration-300">
                {/* Step number + icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                    <step.icon className="h-9 w-9 text-white" />
                  </div>
                  <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${step.lightColor} border-2 border-white flex items-center justify-center text-xs font-bold ${step.textColor} shadow-sm`}>
                    {step.step}
                  </span>
                </div>

                <h3 className="font-semibold mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
