import { Clock, Users, Shield, ThumbsUp } from "lucide-react";

const STATS = [
  { icon: Clock, value: "15+", label: "Years Experience", color: "text-blue-500" },
  { icon: Users, value: "10,000+", label: "Happy Customers", color: "text-green-500" },
  { icon: Shield, value: "100%", label: "Satisfaction Guarantee", color: "text-orange-500" },
  { icon: ThumbsUp, value: "4.9/5", label: "Customer Rating", color: "text-yellow-500" },
];

export default function Stats() {
  return (
    <section className="relative -mt-8 z-10">
      <div className="container-width">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover-lift"
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
