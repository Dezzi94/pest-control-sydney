import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { numericValue: 15, suffix: "+", unit: "Years", label: "In Business", decimals: 0 },
  { numericValue: 10000, suffix: "+", unit: "Jobs", label: "Completed", decimals: 0 },
  { numericValue: 100, suffix: "%", unit: "", label: "Money-Back Guarantee", decimals: 0 },
  { numericValue: 4.9, suffix: "\u2605", unit: "", label: "Verified Reviews", decimals: 1 },
];

function StatItem({ stat }: { stat: typeof STATS[number] }) {
  const { ref, displayValue } = useCountUp(stat.numericValue, { decimals: stat.decimals });
  return (
    <p className="text-sm text-slate-700">
      <span ref={ref} className="font-bold text-slate-900">{displayValue}{stat.suffix}</span>
      {stat.unit && <span className="font-bold text-slate-900"> {stat.unit}</span>}
      {" "}
      <span className="text-slate-500">{stat.label}</span>
    </p>
  );
}

export default function Stats() {
  return (
    <section className="bg-amber-50/60 border-y border-amber-100/80 py-5">
      <div className="container-width">
        {/* Desktop: single row with pipe separators */}
        <div className="hidden sm:flex items-center justify-center gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <span className="text-amber-300 mx-6 select-none" aria-hidden="true">
                  |
                </span>
              )}
              <StatItem stat={stat} />
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 compact grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-8 sm:hidden">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
