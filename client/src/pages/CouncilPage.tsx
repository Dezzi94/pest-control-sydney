import { useParams, Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/CTASection";
import { COUNCILS, SERVICES, PHONE, PHONE_HREF, getCouncilBySlug } from "@shared/routes/all-routes";

export default function CouncilPage() {
  const params = useParams<{ councilSlug: string }>();
  const council = getCouncilBySlug(params.councilSlug || "");

  if (!council) {
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
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/locations" className="hover:text-foreground">Locations</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{council.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16">
        <div className="container-width">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-blue-400" />
            <Badge className="bg-white/10 text-white border-white/20">{council.suburbs.length} Suburbs</Badge>
          </div>
          <h1 className="text-white mb-4">Pest Control {council.name}</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Professional pest control services across {council.name}.
            Local technicians servicing {council.suburbs.map(s => s.name).join(", ")}.
          </p>
        </div>
      </section>

      {/* Suburbs */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="mb-8">Suburbs in {council.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {council.suburbs.map((suburb) => (
              <Link key={suburb.slug} href={`/locations/sydney/${council.slug}/${suburb.slug}`}>
                <Card className="hover-lift cursor-pointer group">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">{suburb.name}</p>
                        <p className="text-xs text-muted-foreground">{suburb.postcode}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <h2 className="mb-8">Services Available in {council.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(0, 8).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="hover-lift cursor-pointer group">
                  <CardContent className="p-4">
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">{service.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {service.priceFrom === "Quote" ? "Free Quote" : `From ${service.priceFrom}`}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
