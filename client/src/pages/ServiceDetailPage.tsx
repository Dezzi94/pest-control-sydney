import { useParams, Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { PEST_ICON_MAP } from "@/components/icons/PestIcons";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/sections/CTASection";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { SERVICES, COUNCILS, PHONE, PHONE_HREF, getServiceBySlug } from "@shared/routes/all-routes";
import { getServiceContent } from "@shared/data/services";
import { TESTIMONIALS } from "@shared/data/testimonials";

// Map service slugs to background images
const SERVICE_IMAGES: Record<string, string> = {
  "termite-inspection": "/images/services/termite.svg",
  "termite-control": "/images/services/termite.svg",
  "rodent-control": "/images/services/rodent.svg",
  "cockroach-treatment": "/images/services/cockroach.svg",
  "spider-treatment": "/images/services/spider.svg",
  "ant-control": "/images/services/ant.svg",
  "flea-treatment": "/images/services/flea.svg",
  "bedbug-treatment": "/images/services/bedbug.svg",
  "wasp-removal": "/images/services/wasp.svg",
  "silverfish-control": "/images/services/silverfish.svg",
  "bird-control": "/images/services/bird.svg",
  "pantry-pest-control": "/images/services/pantry-pest.svg",
  "drain-fly-treatment": "/images/services/drain-fly.svg",
  "possum-removal": "/images/services/possum.svg",
  "bee-removal": "/images/services/bee.svg",
  "tick-treatment": "/images/services/tick.svg",
  "mite-control": "/images/services/mite.svg",
  "general-pest-control": "/images/services/general.svg",
  "commercial-pest-control": "/images/services/commercial.svg",
  "pre-purchase-inspection": "/images/services/termite.svg",
};

const DEFAULT_PROCESS = [
  { title: "Inspection", description: "We thoroughly inspect your property to identify the pest species, locate nesting sites, and assess the extent of the problem." },
  { title: "Treatment Plan", description: "Based on our findings, we develop a targeted treatment plan using the most effective, eco-friendly methods available." },
  { title: "Application", description: "Our licensed technicians apply the treatment with precision, ensuring thorough coverage while keeping your family safe." },
  { title: "Follow-Up", description: "We provide a detailed report, prevention advice, and warranty. If pests return during warranty, we re-treat at no cost." },
];

const DEFAULT_BENEFITS = [
  "Licensed & fully insured technicians",
  "Eco-friendly, pet-safe products",
  "Same-day service available",
  "100% satisfaction guarantee",
  "Transparent pricing — no hidden fees",
  "Written warranty on all treatments",
];

const DEFAULT_FAQS = [
  { question: "How long does the treatment take?", answer: "Most treatments take 1-2 hours depending on the size of your property and the extent of the infestation. We'll give you a time estimate before we begin." },
  { question: "Is the treatment safe for children and pets?", answer: "Yes. We use eco-friendly, low-toxicity products that are safe for your family and pets. We'll advise on any precautions needed during and after treatment." },
  { question: "Do you offer a warranty?", answer: "Yes, all our treatments come with a warranty period. If pests return during this time, we'll re-treat your property at no additional cost." },
  { question: "How soon can you come?", answer: "We offer same-day service for urgent pest issues. For routine treatments, we can usually schedule within 24-48 hours." },
  { question: "Do I need to leave the house during treatment?", answer: "For most treatments, you can stay in the home. For fumigation or heat treatments, you may need to vacate for a few hours. We'll advise you in advance." },
];

export default function ServiceDetailPage() {
  const params = useParams<{ serviceSlug: string }>();
  const service = getServiceBySlug(params.serviceSlug || "");
  const { openQuoteModal } = useQuoteModal();

  if (!service) {
    return (
      <Layout>
        <div className="container-width section-padding text-center">
          <h1>Service Not Found</h1>
          <p className="text-muted-foreground mt-4">The service you're looking for doesn't exist.</p>
          <Button asChild className="mt-6">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Wire up rich content from data files — fall back to defaults
  const content = getServiceContent(service.slug);
  const process = content?.process ?? DEFAULT_PROCESS;
  const benefits = content?.benefits ?? DEFAULT_BENEFITS;
  const faqs = content?.faqs ?? DEFAULT_FAQS;

  const Icon = PEST_ICON_MAP[service.icon] || PEST_ICON_MAP["Bug"];
  const relatedServices = SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 4);

  // Find matching testimonials for this service
  const serviceTestimonials = TESTIMONIALS.filter(
    (t) => t.service === service.slug
  ).slice(0, 2);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container-width py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="hover:text-foreground">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 overflow-hidden">
        {SERVICE_IMAGES[service.slug] && (
          <>
            <img
              src={SERVICE_IMAGES[service.slug]}
              alt=""
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-10 lg:opacity-15"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent" />
          </>
        )}
        <div className="container-width relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>
                <Badge className="bg-white/10 text-white border-white/20 capitalize">{service.category}</Badge>
              </div>
              <h1 className="text-white mb-4">{service.name} Sydney</h1>
              <p className="text-lg text-slate-300">{service.shortDescription}</p>
            </div>

            {/* Sticky pricing card on desktop */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white lg:min-w-[300px]">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-slate-300 mb-2">Starting from</p>
                <p className="text-4xl font-bold mb-4">
                  {service.priceFrom === "Quote" ? "Free Quote" : service.priceFrom}
                </p>
                <div className="space-y-3">
                  <Button variant="accent" size="lg" className="w-full" onClick={() => openQuoteModal(service.slug)}>
                    Get My Free Quote
                  </Button>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
                    <a href={PHONE_HREF}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call {PHONE}
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
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Long description — unique 800+ words from data */}
              <div>
                <h2 className="mb-4">Professional {service.name} in Sydney</h2>
                <div className="prose prose-slate max-w-none">
                  {content?.longDescription ? (
                    content.longDescription.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">
                      Our {service.name.toLowerCase()} service provides comprehensive protection for homes and
                      businesses across Sydney. With over 15 years of experience, our licensed technicians use
                      the latest equipment and eco-friendly products to deliver effective, long-lasting results.
                      Every treatment comes with our 100% satisfaction guarantee — if pests return during the
                      warranty period, we'll re-treat your property at no extra cost.
                    </p>
                  )}
                </div>
              </div>

              {/* Our Promise */}
              <div className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-6">
                <h3 className="font-semibold text-green-900 mb-3">Our Promise to You</h3>
                <div className="space-y-2">
                  {[
                    "If pests return during warranty, we re-treat free — no questions asked",
                    "Fixed pricing — the quote you get is the price you pay",
                    "Licensed technicians (Lic. #PCL4892) with current NSW pest control licences",
                  ].map((promise) => (
                    <div key={promise} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-green-800">{promise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline testimonial */}
              {serviceTestimonials.length > 0 && (
                <div className="space-y-4">
                  {serviceTestimonials.map((testimonial, i) => (
                    <blockquote key={i} className="border-l-4 border-primary/30 bg-muted/40 rounded-r-lg p-6">
                      <p className="text-muted-foreground italic leading-relaxed mb-3">
                        "{testimonial.text}"
                      </p>
                      <footer className="text-sm font-medium">
                        — {testimonial.name}, {testimonial.suburb}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              )}

              {/* Process — unique per service from data */}
              <div>
                <h2 className="mb-6">Our {service.name} Process</h2>
                <div className="space-y-4">
                  {process.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-lg border border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits — unique per service from data */}
              <div>
                <h2 className="mb-6">Why Choose Our {service.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price note */}
              {content?.priceNote && (
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Pricing Information</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{content.priceNote}</p>
                </div>
              )}

              {/* Service Areas — hub-and-spoke cross-link to combo pages */}
              <div>
                <h2 className="mb-4">{service.name} Across Sydney</h2>
                <p className="text-muted-foreground mb-6">
                  We provide professional {service.name.toLowerCase()} in {COUNCILS.reduce((sum, c) => sum + c.suburbs.length, 0)}+ suburbs
                  across {COUNCILS.length} council areas in Sydney.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COUNCILS.map((council) => (
                    <div key={council.slug}>
                      <h3 className="text-sm font-semibold mb-2">
                        <Link href={`/locations/sydney/${council.slug}`} className="hover:text-primary transition-colors">
                          {council.name}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {council.suburbs.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/locations/sydney/${council.slug}/${sub.slug}/services/${service.slug}`}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/locations" className="text-sm text-primary font-medium hover:underline">
                    View all locations →
                  </Link>
                </div>
              </div>

              {/* FAQ — unique per service from data */}
              <div>
                <h2 className="mb-6">{service.name} FAQ</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sidebar — sticky on desktop */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Related services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {relatedServices.map((related) => {
                      const RelatedIcon = PEST_ICON_MAP[related.icon] || PEST_ICON_MAP["Bug"];
                      return (
                        <Link
                          key={related.slug}
                          href={`/services/${related.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <RelatedIcon className="h-5 w-5 text-primary" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{related.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {related.priceFrom === "Quote" ? "Free Quote" : `From ${related.priceFrom}`}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Need Help Now?</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Our team is ready to help with your pest problem.
                  </p>
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
