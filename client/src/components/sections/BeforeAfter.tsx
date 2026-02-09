import { ArrowRight, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const COMPARISONS = [
  {
    before: {
      title: "Sleepless Nights",
      description: "Hearing scratching in the walls, finding droppings in the kitchen, worrying about your family's health.",
      icon: AlertTriangle,
    },
    after: {
      title: "Peace of Mind",
      description: "Sleep soundly knowing your home is protected by a written warranty. If pests return, we come back free.",
      icon: Shield,
    },
  },
  {
    before: {
      title: "DIY Frustration",
      description: "Sprays from the hardware store that don't work, pests that keep coming back, money wasted on products.",
      icon: AlertTriangle,
    },
    after: {
      title: "Problem Solved",
      description: "One professional visit targets the source. Our licensed technicians use commercial-grade treatments that work.",
      icon: CheckCircle,
    },
  },
  {
    before: {
      title: "Hidden Damage",
      description: "Termites silently eating your biggest investment, structural damage going unnoticed for months or years.",
      icon: AlertTriangle,
    },
    after: {
      title: "Early Detection",
      description: "Thermal imaging and moisture meters find problems before they become disasters. Annual inspections keep you safe.",
      icon: CheckCircle,
    },
  },
];

export default function BeforeAfter() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="container-width">
        <div ref={ref} className={cn("reveal", isVisible && "visible")}>
          <div className="text-center mb-12">
            <div className="w-12 h-2 accent-bar rounded mx-auto mb-4" />
            <h2 className="mb-4">The Difference We Make</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From stressful pest problems to lasting protection — here's what changes when you choose us.
            </p>
          </div>

          <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children", isVisible && "visible")}>
            {COMPARISONS.map((item, i) => (
              <Card key={i} className="overflow-hidden hover-glow">
                <CardContent className="p-0">
                  {/* Before */}
                  <div className="p-6 bg-red-50 border-b border-red-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <item.before.icon className="h-4 w-4 text-red-500" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Before</span>
                    </div>
                    <h3 className="font-semibold text-red-900 mb-1 text-base">{item.before.title}</h3>
                    <p className="text-sm text-red-700/70 leading-relaxed">{item.before.description}</p>
                  </div>

                  {/* Arrow divider */}
                  <div className="flex items-center justify-center -my-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <ArrowRight className="h-4 w-4 text-white rotate-90" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-6 bg-green-50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <item.after.icon className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-green-500">After</span>
                    </div>
                    <h3 className="font-semibold text-green-900 mb-1 text-base">{item.after.title}</h3>
                    <p className="text-sm text-green-700/70 leading-relaxed">{item.after.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
