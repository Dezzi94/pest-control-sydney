import { useParams, Link } from "wouter";
import { MapPin, ChevronRight, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/sections/CTASection";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { SERVICES, PHONE, PHONE_HREF, getServiceBySlug, getCouncilBySlug, getSuburbBySlug } from "@shared/routes/all-routes";
import { getComboContent } from "@shared/data/combo-content";

export default function SuburbServicePage() {
  const params = useParams<{ councilSlug: string; suburbSlug: string; serviceSlug: string }>();
  const council = getCouncilBySlug(params.councilSlug || "");
  const suburb = getSuburbBySlug(params.councilSlug || "", params.suburbSlug || "");
  const service = getServiceBySlug(params.serviceSlug || "");
  const { openQuoteModal } = useQuoteModal();

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

  // Get deterministic combo content from data
  const combo = getComboContent(
    service.name,
    service.slug,
    suburb.name,
    suburb.postcode,
    council.name,
  );

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
                  <Button variant="accent" className="w-full" onClick={() => openQuoteModal(service.slug)}>
                    Get My Free Quote
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
              {/* Unique intro from combo content */}
              <div>
                <h2 className="mb-4">{service.name} in {suburb.name}, Sydney</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {combo.intro}
                </p>
              </div>

              {/* Benefits as checklist from combo content */}
              <div>
                <h2 className="mb-4">Why Choose Us for {service.name} in {suburb.name}</h2>
                <div className="space-y-3">
                  {combo.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Get a quote for {service.name.toLowerCase()} in {suburb.name}</h3>
                  <p className="text-sm text-muted-foreground">Same-day service available. We'll call you within 30 minutes.</p>
                </div>
                <Button variant="accent" onClick={() => openQuoteModal(service.slug)} className="shrink-0">
                  Get My Free Quote
                </Button>
              </div>

              {/* FAQ accordion from combo content */}
              <div>
                <h2 className="mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                  {combo.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`q${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Cross-links for SEO */}
              <div>
                <h2 className="mb-4">People in {suburb.name} Also Booked</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.filter((s) => s.slug !== service.slug && s.category === service.category)
                    .slice(0, 4)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/locations/sydney/${council.slug}/${suburb.slug}/services/${s.slug}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-sm hover:bg-muted transition-colors"
                      >
                        <span>{s.name} in {suburb.name}</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      </Link>
                    ))}
                </div>
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

              {/* Back-link to service hub (hub-and-spoke) */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">About {service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn more about our {service.name.toLowerCase()} process, pricing, and warranty.
                  </p>
                  <Link href={`/services/${service.slug}`} className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                    View {service.name} details
                    <ArrowRight className="h-3 w-3" />
                  </Link>
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
