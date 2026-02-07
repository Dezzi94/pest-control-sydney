import { Phone, ClipboardCheck, Zap, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    step: 1,
    icon: Phone,
    title: "Call or Book Online",
    description: "Contact us for a free consultation. We'll discuss your pest problem and schedule a convenient inspection time.",
    color: "bg-blue-500",
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Free Inspection",
    description: "Our licensed technician inspects your property, identifies the pest species, and assesses the extent of the infestation.",
    color: "bg-green-500",
  },
  {
    step: 3,
    icon: Zap,
    title: "Targeted Treatment",
    description: "We apply the most effective, eco-friendly treatment plan tailored to your specific pest problem and property type.",
    color: "bg-orange-500",
  },
  {
    step: 4,
    icon: ShieldCheck,
    title: "Ongoing Protection",
    description: "We provide a detailed report, prevention advice, and warranty. If pests return during the warranty period, we re-treat free.",
    color: "bg-purple-500",
  },
];

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">How It Works</Badge>
          <h2 className="mb-4">Our 4-Step Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From your first call to ongoing protection, we make pest control simple,
            effective, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.step} className="relative text-center">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}

              {/* Step number + icon */}
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-border flex items-center justify-center text-xs font-bold text-foreground shadow">
                  {step.step}
                </span>
              </div>

              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
