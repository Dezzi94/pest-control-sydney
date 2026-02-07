import { useParams, Link } from "wouter";
import { MapPin, ChevronRight, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, PHONE, PHONE_HREF, getServiceBySlug, getCouncilBySlug, getSuburbBySlug } from "@shared/routes/all-routes";

export default function SuburbServicePage() {
  const params = useParams<{ councilSlug: string; suburbSlug: string; serviceSlug: string }>();
  const council = getCouncilBySlug(params.councilSlug || "");
  const suburb = getSuburbBySlug(params.councilSlug || "", params.suburbSlug || "");
  const service = getServiceBySlug(params.serviceSlug || "");

  if (!council || !suburb || !service) {
    return (
      <Layout>
        <div className="container-width section-padding text-center">
          <h1>Page Not Found</h1>
          <Button asChild className="mt-6">
            <Link href="/locations">View All Locations</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);
  const otherSuburbs = council.suburbs.filter((s) => s.slug !== suburb.slug);

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
            <Link href={`/locations/sydney/${council.slug}/${suburb.slug}`} className="hover:text-foreground">{suburb.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{service.name}</span>
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
              </div>
              <h1 className="text-white mb-4">{service.name} {suburb.name} {suburb.postcode}</h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                Professional {service.name.toLowerCase()} in {suburb.name} ({suburb.postcode}), {council.name}.
                {" "}{service.shortDescription}
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white lg:min-w-[280px]">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-slate-300 mb-1">Starting from</p>
                <p className="text-3xl font-bold mb-4">
                  {service.priceFrom === "Quote" ? "Free Quote" : service.priceFrom}
                </p>
                <div className="space-y-3">
                  <Button variant="accent" className="w-full" asChild>
                    <Link href="/?quote=open">Get Free Quote</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
                    <a href={PHONE_HREF}>
                      <Phone className="mr-2 h-4 w-4" />
                      {PHONE}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="mb-4">{service.name} in {suburb.name}, Sydney</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Looking for professional {service.name.toLowerCase()} in {suburb.name} ({suburb.postcode})?
                  Our licensed pest control technicians service the {council.name} area with fast response times
                  and industry-leading treatments. Whether you're dealing with a current infestation or want
                  preventative protection, we provide comprehensive {service.name.toLowerCase()} solutions
                  tailored to properties in the {suburb.name} area.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="mb-4">Why Choose Us for {service.name} in {suburb.name}</h2>
                <div className="space-y-3">
                  {[
                    `Local technicians who know ${suburb.name} and the ${council.name} area`,
                    "Same-day service available — call before 10am",
                    "100% satisfaction guarantee with written warranty",
                    "Eco-friendly, pet-safe treatment products",
                    "Transparent pricing — no hidden fees or surprises",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="q1">
                    <AccordionTrigger>How much does {service.name.toLowerCase()} cost in {suburb.name}?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {service.priceFrom === "Quote"
                        ? `Pricing for ${service.name.toLowerCase()} in ${suburb.name} depends on the size of your property and the extent of the issue. Contact us for a free, no-obligation quote.`
                        : `${service.name} in ${suburb.name} starts from ${service.priceFrom}. The final price depends on your property size and the extent of the infestation. We provide a fixed quote before any work begins.`}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>How quickly can you get to {suburb.name}?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We have local technicians in the {council.name} area. For urgent issues, we offer same-day service
                      if you call before 10am. For routine treatments, we can usually schedule within 24-48 hours.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                    <AccordionTrigger>Do you guarantee your {service.name.toLowerCase()} work?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, all our {service.name.toLowerCase()} treatments come with a warranty. If pests return during
                      the warranty period, we'll re-treat your {suburb.name} property at no additional cost.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Other Services in {suburb.name}</h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/locations/sydney/${council.slug}/${suburb.slug}/services/${s.slug}`}
                        className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
                      >
                        <span>{s.name}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ))}
                    <Link href={`/locations/sydney/${council.slug}/${suburb.slug}`} className="text-sm text-primary font-medium mt-2 inline-block">
                      View all services →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Nearby Suburbs</h3>
                  <div className="flex flex-wrap gap-2">
                    {otherSuburbs.map((s) => (
                      <Link key={s.slug} href={`/locations/sydney/${council.slug}/${s.slug}/services/${service.slug}`}>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                          {s.name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Need Help Now?</h3>
                  <p className="text-sm text-blue-100 mb-4">Same-day service in {suburb.name}</p>
                  <Button variant="accent" className="w-full" asChild>
                    <a href={PHONE_HREF}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call {PHONE}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
