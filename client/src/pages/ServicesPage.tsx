import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Filter, Shield, Clock, CheckCircle } from "lucide-react";
import { PEST_ICON_MAP } from "@/components/icons/PestIcons";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, type ServiceData } from "@shared/routes/all-routes";

const CATEGORIES = [
  { value: "all", label: "All Services" },
  { value: "general", label: "General" },
  { value: "termite", label: "Termite" },
  { value: "specialty", label: "Specialty" },
  { value: "commercial", label: "Commercial" },
];

export default function ServicesPage() {
  const [category, setCategory] = useState("all");

  const filtered = category === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === category);

  return (
    <Layout>
      {/* Hero */}
      <section className="noise-overlay relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        <img src="/images/hero/technician-inspecting.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-slate-900/[0.85]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
        <div className="container-width relative z-10">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">20 Professional Services</Badge>
          <h1 className="text-white mb-4">Pest Control Services Sydney</h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-6">
            Comprehensive pest management solutions for homes and businesses.
            Licensed technicians, eco-friendly treatments, same-day service available.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <Shield className="h-4 w-4 text-green-400" />
              Licensed & Insured
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4 text-blue-400" />
              Same-Day Service
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <CheckCircle className="h-4 w-4 text-orange-400" />
              100% Satisfaction Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="container-width">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((service) => {
              const Icon = PEST_ICON_MAP[service.icon] || PEST_ICON_MAP["Bug"];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full hover-lift cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs capitalize">
                          {service.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="font-semibold text-primary">
                          {service.priceFrom === "Quote" ? "Free Quote" : `From ${service.priceFrom}`}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
