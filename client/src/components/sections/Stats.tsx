import { Clock, Users, Shield, ThumbsUp } from "lucide-react";

const STATS = [
  { icon: Clock, value: "15+", label: "Years Experience", iconColor: "text-blue-500", bg: "bg-blue-50" },
  { icon: Users, value: "10,000+", label: "Happy Customers", iconColor: "text-green-500", bg: "bg-green-50" },
  { icon: Shield, value: "100%", label: "Satisfaction Guarantee", iconColor: "text-orange-500", bg: "bg-orange-50" },
  { icon: ThumbsUp, value: "4.9/5", label: "Customer Rating", iconColor: "text-yellow-500", bg: "bg-yellow-50" },
];

export default function Stats() {
  return (
    <section className="relative -mt-8 z-10">
      <div className="container-width">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 lg:p-8 text-center hover-lift group"
            >
              <div className={`w-14 h-14 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
