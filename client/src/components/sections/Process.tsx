import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: 1,
    title: "Call or Book Online",
    description:
      "Describe what you're seeing -- droppings, damage, live pests -- and we'll narrow down the species over the phone. We book a 2-hour window that suits your schedule, usually within 24 hours.",
  },
  {
    step: 2,
    title: "On-Site Inspection",
    description:
      "Our licensed technician checks roof voids, subfloor, walls, and entry points with thermal imaging and moisture meters. You'll get a written report with photos, even if no treatment is needed.",
  },
  {
    step: 3,
    title: "Targeted Treatment",
    description:
      "We match the method to the pest: gel baits for cockroaches, chemical barriers for termites, humane traps for possums. Every product is TGA-approved and safe around children and pets.",
  },
  {
    step: 4,
    title: "Warranty and Follow-Up",
    description:
      "You'll receive a detailed service report, prevention advice, and a written warranty. If pests return within the warranty period, we re-treat at no charge.",
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
              From your first call to ongoing protection -- four steps, no surprises.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative pl-14 md:pl-20">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {STEPS.map((step, i) => (
                <div
                  key={step.step}
                  className={cn(
                    "relative reveal",
                    isVisible && "visible",
                    `reveal-delay-${i + 1}`
                  )}
                >
                  {/* Numbered circle on the line */}
                  <div className="absolute -left-14 md:-left-20 top-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-sm ring-4 ring-background">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
