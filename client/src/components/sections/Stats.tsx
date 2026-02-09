import { Shield, Briefcase, BadgeCheck, Star } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { numericValue: 15, suffix: "+", unit: "Years", label: "In Business", decimals: 0, icon: Briefcase },
  { numericValue: 10000, suffix: "+", unit: "Jobs", label: "Completed", decimals: 0, icon: BadgeCheck },
  { numericValue: 100, suffix: "%", unit: "", label: "Money-Back Guarantee", decimals: 0, icon: Shield },
  { numericValue: 4.9, suffix: "", unit: "★", label: "Verified Reviews", decimals: 1, icon: Star },
] as const;

function StatItem({ stat }: { stat: typeof STATS[number] }) {
  const { ref, displayValue } = useCountUp(stat.numericValue, { decimals: stat.decimals });
  const Icon = stat.icon;
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-lg font-bold text-slate-900 stat-value leading-none mb-0.5">
          <span ref={ref}>{displayValue}</span>{stat.suffix}
          {stat.unit && <span> {stat.unit}</span>}
        </p>
        <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-premium py-6">
      <div className="container-width">
        {/* Desktop: single row */}
        <div className="hidden sm:flex items-center justify-between">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
