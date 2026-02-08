import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  { value: "15+ Years", label: "In Business" },
  { value: "10,000+ Jobs", label: "Completed" },
  { value: "100% Guarantee", label: "Satisfaction" },
  { value: "4.9\u2605 Rating", label: "Google Reviews" },
];

export default function Stats() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className={`bg-amber-50/60 border-y border-amber-100/80 py-5 reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="container-width">
        {/* Desktop: single row with pipe separators. Mobile: 2x2 grid */}
        <div className="hidden sm:flex items-center justify-center gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <span className="text-amber-300 mx-6 select-none" aria-hidden="true">
                  |
                </span>
              )}
              <p className="text-sm text-slate-700">
                <span className="font-bold text-slate-900">{stat.value}</span>
                {" "}
                <span className="text-slate-500">{stat.label}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 compact grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-8 sm:hidden">
          {STATS.map((stat) => (
            <p key={stat.label} className="text-sm text-slate-700 text-center">
              <span className="font-bold text-slate-900 block">{stat.value}</span>
              <span className="text-slate-500 text-xs">{stat.label}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
