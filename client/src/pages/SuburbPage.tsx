import { useParams, Link } from "wouter";
import { MapPin, ChevronRight, CheckCircle, ArrowRight, Shield, Clock, Star, AlertTriangle } from "lucide-react";
import { PEST_ICON_MAP } from "@/components/icons/PestIcons";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeroQuoteForm from "@/components/forms/HeroQuoteForm";
import CTASection from "@/components/sections/CTASection";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import BrandLogos from "@/components/sections/BrandLogos";
import LocalTestimonials from "@/components/sections/LocalTestimonials";
import PestGrid from "@/components/sections/PestGrid";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { SERVICES, getCouncilBySlug, getSuburbBySlug } from "@shared/routes/all-routes";
import { getSuburbContent } from "@shared/data/suburbs";
import {
  getSuburbHeadline,
  getSuburbSubheadline,
  getLocalTestimonials,
  getSEOHeadings,
  getUrgencyBadge,
  getSocialProof,
} from "@shared/data/location-copy";

export default function SuburbPage() {
  const params = useParams<{ councilSlug: string; suburbSlug: string }>();
  const council = getCouncilBySlug(params.councilSlug || "");
  const suburb = getSuburbBySlug(params.councilSlug || "", params.suburbSlug || "");
  const { openQuoteModal } = useQuoteModal();

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

  const content = getSuburbContent(suburb.slug);
  const commonPests = content?.commonPests || [];
  const headline = getSuburbHeadline(suburb.name, suburb.postcode);
  const subheadline = getSuburbSubheadline(suburb.name, commonPests);
  const seoHeadings = getSEOHeadings("suburb", {
    suburbName: suburb.name,
    postcode: suburb.postcode,
    commonPests,
  });
  const testimonials = getLocalTestimonials(council.slug, undefined, 3);
  const urgencyBadge = getUrgencyBadge(suburb.name);
  const socialProof = getSocialProof(council.name);
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
            <li className="text-foreground font-medium">{suburb.name}</li>
          </ol>
        </div>
      </nav>

      {/* ═══ HERO with inline form ═══ */}
      <section className="noise-overlay relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 container-width py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
            {/* Left: Copy */}
            <div className="lg:w-[58%]">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                  <MapPin className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-xs font-medium text-white">{suburb.name} {suburb.postcode}</span>
                </div>
                <Badge className="bg-white/10 text-white border-white/20">{council.name}</Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {headline}
              </h1>

              <p className="text-lg text-slate-300 mb-6 max-w-xl leading-relaxed">
                {subheadline}
              </p>

              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium text-green-300">{urgencyBadge}</span>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-6">
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
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Stats bar ═══ */}
      <Stats />

      {/* ═══ Local knowledge section ═══ */}
      {content?.localIntro && (
        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Why {suburb.name} Homes Need Professional Pest Control
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{content.localIntro}</p>
              <p className="text-muted-foreground leading-relaxed">
                Our technicians have been servicing {suburb.name} ({suburb.postcode}) and the wider {council.name} area for over 15 years.
                We understand the specific pest pressures in your neighbourhood — the building types, the vegetation patterns, and the local
                conditions that attract pests to your property. Every treatment is tailored to your home, not a generic spray-and-pray approach.
              </p>

              <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800 font-medium">
                    Every job in {suburb.name} comes with our 100% satisfaction guarantee. If pests return during
                    your warranty period, we re-treat your property free of charge — no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ Pest grid — clickable cards linking to combo pages ═══ */}
      {commonPests.length > 0 && (
        <PestGrid
          commonPests={commonPests}
          suburbName={suburb.name}
          councilSlug={council.slug}
          suburbSlug={suburb.slug}
          heading={seoHeadings.empathyHeading}
        />
      )}

      {/* ═══ Inline CTA bar ═══ */}
      <section className="py-8">
        <div className="container-width">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-semibold mb-1">Need pest control in {suburb.name}?</h3>
              <p className="text-sm text-muted-foreground">We'll get back to you within 30 minutes with a fixed-price quote.</p>
            </div>
            <Button variant="accent" onClick={() => openQuoteModal()} className="shrink-0">
              Get My Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ Process ═══ */}
      <Process />

      {/* ═══ All services grid ═══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-width">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {seoHeadings.benefitsHeading.replace("Choose Pest Control Sydney", "Choose Us")}
          </h2>
          <p className="text-muted-foreground mb-8">
            We offer the full range of pest control services in {suburb.name} — from termite inspections to rodent control and everything in between.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const Icon = PEST_ICON_MAP[service.icon] || PEST_ICON_MAP["Bug"];
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

      {/* ═══ Local Testimonials ═══ */}
      <LocalTestimonials testimonials={testimonials} areaName={suburb.name} />

      {/* ═══ FAQ accordion ═══ */}
      {content?.faqs && content.faqs.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">{seoHeadings.faqHeading}</h2>
                <Accordion type="single" collapsible>
                  {content.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Links — {suburb.name}</h3>
                    <div className="space-y-2">
                      {SERVICES.slice(0, 6).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/locations/sydney/${council.slug}/${suburb.slug}/services/${s.slug}`}
                          className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
                        >
                          <span>{s.name}</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Why Choose a Local Technician?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>Knows {suburb.name} building types and pest patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>Faster response — already in the {suburb.postcode} area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>Follow-up visits at no extra cost during warranty</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* ═══ Other suburbs in this council ═══ */}
      <section className="section-padding border-t border-border">
        <div className="container-width">
          <h2 className="text-xl font-bold mb-6">Pest Control in Other {council.name} Suburbs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherSuburbs.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/sydney/${council.slug}/${s.slug}`}
                className="flex items-center gap-2 py-3 px-4 rounded-lg border border-border text-sm hover:border-primary/30 hover:bg-primary/5 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span className="truncate">{s.name}</span>
                <span className="text-xs text-muted-foreground ml-auto shrink-0">{s.postcode}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Brand Logos ═══ */}
      <BrandLogos />

      {/* ═══ Final CTA ═══ */}
      <CTASection
        heading={`Don't Let Pests Take Over Your ${suburb.name} Home`}
        subheading={`Get a free, no-obligation quote from a local ${suburb.name} technician. Same-day service available.`}
      />
    </Layout>
  );
}
