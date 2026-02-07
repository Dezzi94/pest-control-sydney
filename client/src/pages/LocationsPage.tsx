import { Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/CTASection";
import { COUNCILS } from "@shared/routes/all-routes";

export default function LocationsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 lg:py-20">
        <div className="container-width">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">12 Council Areas | 60+ Suburbs</Badge>
          <h1 className="text-white mb-4">Pest Control Across Sydney</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Local pest control technicians servicing all Sydney suburbs.
            Fast response, local knowledge, same-day service available.
          </p>
        </div>
      </section>

      {/* Council Grid */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="mb-8">Service Areas by Council</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNCILS.map((council) => (
              <Link key={council.slug} href={`/locations/sydney/${council.slug}`}>
                <Card className="h-full hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {council.suburbs.length} suburbs
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                      {council.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {council.suburbs.slice(0, 3).map((suburb) => (
                        <span key={suburb.slug} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          {suburb.name}
                        </span>
                      ))}
                      {council.suburbs.length > 3 && (
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          +{council.suburbs.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-primary font-medium">
                      View suburbs
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
