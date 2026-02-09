import { useParams, Link } from "wouter";
import { MapPin, ChevronRight, CheckCircle, ArrowRight, Shield, Clock, Star, Users } from "lucide-react";
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
import { SERVICES, getCouncilBySlug } from "@shared/routes/all-routes";
import { getCouncilContent } from "@shared/data/councils";
import {
  getCouncilHeadline,
  getCouncilSubheadline,
  getLocalTestimonials,
  getSEOHeadings,
  getSocialProof,
} from "@shared/data/location-copy";

export default function CouncilPage() {
  const params = useParams<{ councilSlug: string }>();
  const council = getCouncilBySlug(params.councilSlug || "");
  const { openQuoteModal } = useQuoteModal();

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

  const content = getCouncilContent(council.slug);
  const commonPests = content?.commonPests || [];
  const headline = getCouncilHeadline(council.name, council.suburbs.length);
  const subheadline = getCouncilSubheadline(council.name, commonPests);
  const seoHeadings = getSEOHeadings("council", {
    councilName: council.name,
    commonPests,
  });
  const testimonials = getLocalTestimonials(council.slug, undefined, 3);
  const socialProof = getSocialProof(council.name);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border" aria-label="Breadcrumb">
        <div className="container-width py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/locations" className="hover:text-foreground">Locations</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li className="text-foreground font-medium">{council.name}</li>
          </ol>
        </div>
      </nav>

      {/* ═══ HERO with inline form ═══ */}
      <section className="noise-overlay relative bg-slate-900 overflow-hidden">
        <img src="/images/hero/technician-inspecting.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-slate-900/[0.88]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 container-width py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
            {/* Left: Copy */}
            <div className="lg:w-[58%]">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                  <MapPin className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-xs font-medium text-white">{council.name}</span>
                </div>
                <Badge className="bg-white/10 text-white border-white/20">{council.suburbs.length} Suburbs</Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {headline}
              </h1>

              <p className="text-lg text-slate-300 mb-6 max-w-xl leading-relaxed">
                {subheadline}
              </p>

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
                  100% Satisfaction Guarantee
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

      {/* ═══ Council description — pest challenges ═══ */}
      {content?.description && (
        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">{seoHeadings.empathyHeading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{content.description}</p>
              {content.landmarks && content.landmarks.length > 0 && (
                <p className="text-muted-foreground leading-relaxed">
                  From {content.landmarks.slice(0, 3).join(" to ")} and everywhere in between, our technicians know the {council.name} area inside out.
                  We understand which pests are most active in each suburb, what building types attract them, and the most effective treatments for lasting results.
                </p>
              )}

              <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800 font-medium">
                    Every job across {council.name} comes with our 100% satisfaction guarantee.
                    If pests return during your warranty period, we re-treat at no extra cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ Pest grid ═══ */}
      {commonPests.length > 0 && (
        <PestGrid
          commonPests={commonPests}
          suburbName={council.name}
          councilSlug={council.slug}
          heading={`Common Pests Across ${council.name}`}
        />
      )}

      {/* ═══ Suburbs grid ═══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-width">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Suburbs We Service in {council.name}
          </h2>
          <p className="text-muted-foreground mb-8">
            Click any suburb to see local pest information, common pests, and get a tailored quote for your area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {council.suburbs.map((suburb) => (
              <Link key={suburb.slug} href={`/locations/sydney/${council.slug}/${suburb.slug}`}>
                <Card className="hover-lift cursor-pointer group h-full">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">{suburb.name}</p>
                        <p className="text-xs text-muted-foreground">{suburb.postcode} · {council.name}</p>
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

      {/* ═══ Process ═══ */}
      <Process />

      {/* ═══ Services available ═══ */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Pest Control Services Across {council.name}
          </h2>
          <p className="text-muted-foreground mb-8">
            From termite inspections to rodent control, we handle all pest issues across every suburb in {council.name}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const Icon = PEST_ICON_MAP[service.icon] || PEST_ICON_MAP["Bug"];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
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
      <LocalTestimonials testimonials={testimonials} areaName={council.name} />

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
                    <h3 className="font-semibold mb-4">Popular Suburbs</h3>
                    <div className="space-y-2">
                      {council.suburbs.slice(0, 5).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/locations/sydney/${council.slug}/${s.slug}`}
                          className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
                        >
                          <span>{s.name} ({s.postcode})</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Why Local Matters</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Technicians based in {council.name}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Faster response — already in the area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Know local pest patterns and building types</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* ═══ Brand Logos ═══ */}
      <BrandLogos />

      {/* ═══ Final CTA ═══ */}
      <CTASection
        heading={`Pest Problems in ${council.name}? We're Here to Help`}
        subheading={`Request a free quote from a local ${council.name} technician. Same-day service across all ${council.suburbs.length} suburbs.`}
      />
    </Layout>
  );
}
