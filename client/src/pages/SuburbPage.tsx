import { useParams, Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight, Phone, Bug, Search, Rat, Shield, Bird, Building, Bed, ClipboardCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, PHONE, PHONE_HREF, getCouncilBySlug, getSuburbBySlug } from "@shared/routes/all-routes";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, Bug, Rat, Bed, Bird, Shield, Building, ClipboardCheck, Cookie: Bug, Squirrel: Bug,
};

export default function SuburbPage() {
  const params = useParams<{ councilSlug: string; suburbSlug: string }>();
  const council = getCouncilBySlug(params.councilSlug || "");
  const suburb = getSuburbBySlug(params.councilSlug || "", params.suburbSlug || "");

  if (!council || !suburb) {
    return (
      <Layout>
        <div className="container-width section-padding text-center">
          <h1>Location Not Found</h1>
          <Button asChild className="mt-6">
            <Link href="/locations">View All Locations</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container-width py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/locations" className="hover:text-foreground">Locations</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/locations/sydney/${council.slug}`} className="hover:text-foreground">{council.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{suburb.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-blue-400" />
                <Badge className="bg-white/10 text-white border-white/20">{suburb.postcode}</Badge>
                <Badge className="bg-white/10 text-white border-white/20">{council.name}</Badge>
              </div>
              <h1 className="text-white mb-4">Pest Control {suburb.name} {suburb.postcode}</h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                Professional pest control services in {suburb.name}, {council.name}.
                Local technicians, same-day service, 100% satisfaction guarantee.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[250px]">
              <Button variant="accent" size="lg" asChild>
                <Link href="/?quote=open">Get Free Quote</Link>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {PHONE}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="mb-8">Pest Control Services in {suburb.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Bug;
              return (
                <Link
                  key={service.slug}
                  href={`/locations/sydney/${council.slug}/${suburb.slug}/services/${service.slug}`}
                >
                  <Card className="hover-lift cursor-pointer group h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                          {service.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {service.priceFrom === "Quote" ? "Free Quote" : `From ${service.priceFrom}`}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other suburbs in this council */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <h2 className="mb-6">Other Suburbs in {council.name}</h2>
          <div className="flex flex-wrap gap-2">
            {council.suburbs
              .filter((s) => s.slug !== suburb.slug)
              .map((s) => (
                <Link key={s.slug} href={`/locations/sydney/${council.slug}/${s.slug}`}>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors py-1.5 px-3">
                    {s.name} ({s.postcode})
                  </Badge>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
