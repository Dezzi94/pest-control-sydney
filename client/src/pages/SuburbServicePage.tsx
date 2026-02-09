import { useParams, Link } from "wouter";
import { MapPin, ChevronRight, CheckCircle, ArrowRight, Shield, Clock, Star, AlertTriangle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeroQuoteForm from "@/components/forms/HeroQuoteForm";
import CTASection from "@/components/sections/CTASection";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import BrandLogos from "@/components/sections/BrandLogos";
import LocalTestimonials from "@/components/sections/LocalTestimonials";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { getPestPhoto } from "@/lib/images";
import { SERVICES, getServiceBySlug, getCouncilBySlug, getSuburbBySlug } from "@shared/routes/all-routes";
import { getComboContent } from "@shared/data/combo-content";
import {
  PEST_PSYCHOLOGY,
  getComboHeadline,
  getComboSubheadline,
  getEmpathySection,
  getLocalTestimonials,
  getSEOHeadings,
  getUrgencyBadge,
  getSocialProof,
} from "@shared/data/location-copy";

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

  const pestPhoto = getPestPhoto(service.slug);
  const combo = getComboContent(service.name, service.slug, suburb.name, suburb.postcode, council.name);
  const psychology = PEST_PSYCHOLOGY[service.slug];
  const headline = getComboHeadline(service.name, service.slug, suburb.name, suburb.postcode);
  const subheadline = getComboSubheadline(service.slug, suburb.name, suburb.postcode);
  const empathy = getEmpathySection(service.slug, suburb.name, suburb.postcode);
  const seoHeadings = getSEOHeadings("combo", {
    serviceName: service.name,
    serviceSlug: service.slug,
    suburbName: suburb.name,
    postcode: suburb.postcode,
  });
  const testimonials = getLocalTestimonials(council.slug, service.slug, 3);
  const urgencyBadge = getUrgencyBadge(suburb.name);
  const socialProof = getSocialProof(council.name);

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 4);
  const otherSuburbs = council.suburbs.filter((s) => s.slug !== suburb.slug);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border" aria-label="Breadcrumb">
        <div className="container-width py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/locations" className="hover:text-foreground">Locations</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li><Link href={`/locations/sydney/${council.slug}`} className="hover:text-foreground">{council.name}</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li><Link href={`/locations/sydney/${council.slug}/${suburb.slug}`} className="hover:text-foreground">{suburb.name}</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li className="text-foreground font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>

      {/* ═══ HERO with inline form ═══ */}
      <section className="noise-overlay relative bg-slate-900 overflow-hidden">
        {/* Pest-specific photo background */}
        {pestPhoto && (
          <img src={pestPhoto.src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        )}
        <div className="absolute inset-0 bg-slate-900/50" />

        <div className="relative z-10 container-width py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
            {/* Left: Copy */}
            <div className="lg:w-[58%]">
              {/* Location + price badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium text-white">{suburb.name} {suburb.postcode}</span>
                </div>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                  {service.priceFrom === "Quote" ? "Free Quote" : `From ${service.priceFrom}`}
                </Badge>
              </div>

              {/* H1 — SEO keyword-rich */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {headline}
              </h1>

              {/* Subheadline — empathy-driven */}
              <p className="text-lg text-slate-300 mb-6 max-w-xl leading-relaxed">
                {subheadline}
              </p>

              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="text-xs font-medium text-secondary">{urgencyBadge}</span>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <Shield className="h-4 w-4 text-secondary" />
                  Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="h-4 w-4 text-primary" />
                  Same-Day Service
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  100% Money-Back Guarantee
                </span>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-slate-400">4.9/5 from 127+ reviews</span>
                <span className="text-sm text-slate-500">|</span>
                <span className="text-sm text-slate-400">{socialProof}</span>
              </div>
            </div>

            {/* Right: Inline form */}
            <div className="lg:w-[42%] flex justify-center lg:justify-end">
              <HeroQuoteForm initialPestType={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Stats bar ═══ */}
      <Stats />

      {/* ═══ Empathy section ═══ */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{empathy.heading}</h2>
            {empathy.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}

            {/* Guarantee callout */}
            <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800 font-medium">{empathy.guaranteeCallout}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Why they can't wait (urgency) ═══ */}
      {psychology && (
        <section className="bg-orange-50 border-y border-orange-100 py-10">
          <div className="container-width">
            <div className="flex items-start gap-4 max-w-3xl">
              <AlertTriangle className="h-6 w-6 text-orange-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-orange-900 mb-2">Why You Shouldn't Wait</h3>
                <p className="text-orange-800">{psychology.urgencyDriver}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ Benefits / Why Choose Us ═══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-width">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{seoHeadings.benefitsHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {combo.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm">Local {suburb.name} technician who knows the {suburb.postcode} area</span>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm">100% satisfaction guarantee — if pests return during warranty, we re-treat free</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Process ═══ */}
      <Process />

      {/* ═══ Local Testimonials ═══ */}
      <LocalTestimonials testimonials={testimonials} areaName={suburb.name} serviceContext={service.name.toLowerCase()} />

      {/* ═══ DIY Objection Handler ═══ */}
      {psychology && (
        <section className="section-padding">
          <div className="container-width max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Why Professional {service.name} Beats DIY in {suburb.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{psychology.whyNotDIY}</p>
          </div>
        </section>
      )}

      {/* ═══ FAQ ═══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">{seoHeadings.faqHeading}</h2>
              <Accordion type="single" collapsible>
                {combo.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`q${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Inline CTA */}
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Ready to solve your {service.name.toLowerCase()} problem in {suburb.name}?</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you within 30 minutes with a fixed-price quote.</p>
                </div>
                <Button variant="accent" onClick={() => openQuoteModal(service.slug)} className="shrink-0">
                  Get My Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                      View all services in {suburb.name} →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">{service.name} in Nearby Suburbs</h3>
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

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">About {service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn more about our {service.name.toLowerCase()} process, pricing, and warranty across Sydney.
                  </p>
                  <Link href={`/services/${service.slug}`} className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                    View {service.name} details <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══ Cross-links for SEO ═══ */}
      <section className="section-padding border-t border-border">
        <div className="container-width">
          <h2 className="text-xl font-bold mb-6">People in {suburb.name} Also Booked</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/sydney/${council.slug}/${suburb.slug}/services/${s.slug}`}
                className="flex items-center justify-between py-3 px-4 rounded-lg border border-border text-sm hover:border-primary/30 hover:bg-primary/5 transition-colors"
              >
                <span>{s.name} in {suburb.name}</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Brand Logos ═══ */}
      <BrandLogos />

      {/* ═══ Final CTA ═══ */}
      <CTASection />
    </Layout>
  );
}
