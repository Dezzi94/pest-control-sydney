import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { COUNCILS } from "@shared/routes/all-routes";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function ServiceAreas() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-slate-900 text-white section-padding overflow-hidden">
      <div className="container-width">
        <div ref={ref} className={cn("reveal", isVisible && "visible")}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="w-12 h-2 bg-blue-400 rounded mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Covering Every Corner of Sydney
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                From the Northern Beaches to Sutherland Shire, Parramatta to Bondi — our local
                technicians know your area and can be there same-day. 12 council areas,
                60+ suburbs, one team you can trust.
              </p>

              {/* Council tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {COUNCILS.map((council) => (
                  <Link key={council.slug} href={`/locations/sydney/${council.slug}`}>
                    <Badge
                      variant="outline"
                      className="cursor-pointer border-slate-600 text-slate-300 hover:bg-white/10 hover:text-white hover:border-slate-400 transition-all py-1.5 px-3"
                    >
                      <MapPin className="h-3 w-3 mr-1.5" />
                      {council.name}
                    </Badge>
                  </Link>
                ))}
              </div>

              <Link
                href="/locations"
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
              >
                Find Your Suburb
              </Link>
            </div>

            {/* Right: Stylized map visualization */}
            <div className="relative">
              {/* Abstract Sydney map using positioned dots */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full" />

                {/* Sydney harbour bridge silhouette (SVG) */}
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                  {/* Background circle */}
                  <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" className="text-slate-700" />
                  <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" strokeDasharray="4 4" />

                  {/* Council area dots with labels */}
                  {[
                    { x: 200, y: 160, label: "CBD", size: 8 },
                    { x: 160, y: 190, label: "Inner West", size: 6 },
                    { x: 250, y: 140, label: "North Sydney", size: 6 },
                    { x: 290, y: 120, label: "Northern Beaches", size: 5 },
                    { x: 270, y: 170, label: "Willoughby", size: 5 },
                    { x: 250, y: 200, label: "Ryde", size: 5 },
                    { x: 160, y: 140, label: "Parramatta", size: 6 },
                    { x: 240, y: 240, label: "Randwick", size: 5 },
                    { x: 260, y: 160, label: "Waverley", size: 5 },
                    { x: 200, y: 280, label: "Sutherland", size: 5 },
                    { x: 120, y: 220, label: "Canterbury", size: 5 },
                    { x: 110, y: 170, label: "Blacktown", size: 5 },
                  ].map((dot, i) => (
                    <g key={i}>
                      {/* Ping animation */}
                      <circle cx={dot.x} cy={dot.y} r={dot.size + 8} fill="#3b82f6" opacity="0.1">
                        <animate attributeName="r" from={`${dot.size}`} to={`${dot.size + 16}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.3" to="0" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                      </circle>
                      {/* Dot */}
                      <circle cx={dot.x} cy={dot.y} r={dot.size} fill="#3b82f6" opacity="0.8" />
                      <circle cx={dot.x} cy={dot.y} r={dot.size - 2} fill="#60a5fa" />
                      {/* Label */}
                      <text x={dot.x} y={dot.y + dot.size + 14} textAnchor="middle" className="fill-slate-500" fontSize="9" fontFamily="Inter, system-ui, sans-serif">
                        {dot.label}
                      </text>
                    </g>
                  ))}

                  {/* Connecting lines between nearby areas */}
                  <line x1="200" y1="160" x2="160" y2="190" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                  <line x1="200" y1="160" x2="250" y2="140" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                  <line x1="200" y1="160" x2="270" y2="170" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                  <line x1="160" y1="190" x2="120" y2="220" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                  <line x1="250" y1="140" x2="290" y2="120" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                  <line x1="200" y1="160" x2="160" y2="140" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
