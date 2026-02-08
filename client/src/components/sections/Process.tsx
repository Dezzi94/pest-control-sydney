import { ClipboardList, Search, FlaskConical, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: 1,
    title: "Request a Quote",
    description:
      "Fill out the form — describe what you're seeing and we'll get back to you promptly. We'll narrow down the species and book a 2-hour window that suits your schedule, usually within 24 hours.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "We Inspect Your Property",
    description:
      "Our licensed technician inspects roof voids, subfloor, walls, and entry points using thermal imaging and moisture meters. You'll receive a written report with photos — even if no treatment is needed.",
    icon: Search,
  },
  {
    step: 3,
    title: "Targeted, Safe Treatment",
    description:
      "We match the method to the pest: gel baits for cockroaches, chemical barriers for termites, humane traps for possums. Every product is TGA-approved and safe around children and pets. Applied by licensed technicians.",
    icon: FlaskConical,
  },
  {
    step: 4,
    title: "Your Warranty Kicks In",
    description:
      "You'll receive a detailed service report, prevention advice, and a written warranty. If pests return during the warranty period, we re-treat at no charge. No questions asked.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div ref={ref} className={cn("reveal", isVisible && "visible")}>

          {/* Left-aligned heading with accent bar */}
          <div className="mb-14">
            <div className="w-12 h-2 bg-primary rounded mb-4" />
            <h2 className="mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl">
              From your first enquiry to ongoing protection — four steps, no surprises, no hidden fees.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative pl-14 md:pl-20">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-5 top-0 bottom-0 w-px bg-primary/20" />

            <div className="space-y-12">
              {STEPS.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.step}
                    className={cn(
                      "relative process-step cursor-default reveal",
                      isVisible && "visible",
                      `reveal-delay-${i + 1}`
                    )}
                  >
                    {/* Icon circle on the line */}
                    <div className="absolute -left-14 md:-left-20 top-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-sm ring-4 ring-background step-circle">
                        <StepIcon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
