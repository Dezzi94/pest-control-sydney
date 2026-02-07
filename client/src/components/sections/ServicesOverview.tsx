import { Link } from "wouter";
import { ArrowRight, Bug, Search, Rat, Shield, Bird, Building, Bed, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@shared/routes/all-routes";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Bug,
  Rat,
  Bed,
  Bird,
  Shield,
  Building,
  ClipboardCheck,
  Cookie: Bug,
  Squirrel: Bug,
};

// Show top 8 services on homepage
const FEATURED_SERVICES = SERVICES.slice(0, 8);

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="mb-4">Professional Pest Control Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive pest management solutions for homes and businesses across Sydney.
            All treatments are carried out by licensed, insured technicians using eco-friendly products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Bug;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover-lift cursor-pointer group border-transparent hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
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

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              View All 20 Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
