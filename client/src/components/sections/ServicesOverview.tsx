import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PEST_ICON_MAP } from "@/components/icons/PestIcons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@shared/routes/all-routes";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

// First 2 are featured (Termite Inspection, Termite Treatment)
const FEATURED_SERVICES = SERVICES.slice(0, 2);
// Next 6 fill the standard grid
const STANDARD_SERVICES = SERVICES.slice(2, 8);

export default function ServicesOverview() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div ref={ref} className={cn("reveal", isVisible && "visible")}>

          {/* Left-aligned heading with accent bar */}
          <div className="mb-12">
            <div className="w-12 h-2 bg-primary rounded mb-4" />
            <h2 className="mb-4">Professional Pest Control Services</h2>
            <p className="text-muted-foreground max-w-xl">
              Every treatment includes a written warranty, fixed pricing, and eco-friendly products safe for your family and pets. Licensed technicians (Lic. #PCL4892).
            </p>
          </div>

          {/* Featured services - 2 large cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {FEATURED_SERVICES.map((service, i) => {
              const Icon = PEST_ICON_MAP[service.icon] || PEST_ICON_MAP["Bug"];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full cursor-pointer group border border-border/60 hover:border-primary/30 bg-white hover:shadow-lg hover-glow transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        {i === 0 && (
                          <span className="text-xs font-semibold uppercase tracking-wider text-white bg-primary px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border/40">
                        <span className="text-base font-semibold text-primary">
                          {service.priceFrom === "Quote" ? "Free Quote" : `From ${service.priceFrom}`}
                        </span>
                        <span className="text-sm text-muted-foreground group-hover:text-primary flex items-center gap-1.5 transition-colors">
                          Learn more
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Standard services - 3-col grid */}
          <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children", isVisible && "visible")}>
            {STANDARD_SERVICES.map((service) => {
              const Icon = PEST_ICON_MAP[service.icon] || PEST_ICON_MAP["Bug"];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full hover-lift hover-glow cursor-pointer group border-transparent hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
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

          {/* CTA button */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All 20 Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
