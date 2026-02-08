import { Link } from "wouter";
import {
  Shield,
  Award,
  Clock,
  Leaf,
  CheckCircle,
  ThumbsUp,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COUNCILS } from "@shared/routes/all-routes";
import { cn } from "@/lib/utils";

const WHY_CHOOSE_US = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed and comprehensively insured for your peace of mind.",
  },
  {
    icon: Award,
    title: "AEPMA Certified Member",
    description:
      "Proud member of the Australian Environmental Pest Managers Association.",
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description:
      "Serving Sydney homes and businesses with trusted pest control since 2009.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use low-toxicity, environmentally responsible products that are safe for your family.",
  },
  {
    icon: ThumbsUp,
    title: "Same-Day Service",
    description:
      "Urgent pest problem? We offer same-day service across all Sydney suburbs.",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guarantee",
    description:
      "Not happy? We'll re-treat your property free of charge. No questions asked.",
  },
];

const COMMITMENT_ITEMS = [
  "Pet-safe, child-safe treatments using the latest eco-friendly products",
  "Fixed pricing with no hidden fees — the quote you get is the price you pay",
  "Written warranty on all treatments for your complete peace of mind",
  "Free re-treatment if pests return during the warranty period",
];

export default function AboutPage() {
  const storyReveal = useScrollReveal();
  const whyReveal = useScrollReveal();
  const commitmentReveal = useScrollReveal();
  const areasReveal = useScrollReveal();

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container-width py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 lg:py-20">
        <div className="container-width">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            Since 2009
          </Badge>
          <h1 className="text-white mb-4">
            Sydney's Trusted Pest Control Experts Since 2009
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Over 15 years of protecting Sydney homes and businesses with safe,
            effective, and eco-friendly pest control solutions. Licensed,
            insured, and committed to excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div
          ref={storyReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            storyReveal.isVisible && "visible"
          )}
        >
          <div className="max-w-3xl">
            <div className="w-12 h-2 bg-primary rounded-full mb-4" />
            <h2 className="mb-6">Our Story</h2>
            <div className="prose prose-slate max-w-none space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2009, Pest Control Sydney began as a family-owned
                business with a simple mission: to protect Sydney homes and
                businesses from pests using safe, effective, and honest methods.
                We have grown from a small local
                operation into one of Sydney's most trusted pest management
                providers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission has always been clear — deliver pest control
                services that are effective, transparent, and environmentally
                responsible. We believe in doing the job right the first time,
                using eco-friendly products that are safe for families, pets,
                and the environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Honesty, transparency, and a genuine commitment to our
                customers have been our guiding values from day one. We never
                recommend treatments you don't need, we always explain what
                we're doing and why, and we stand behind every job with our
                100% satisfaction guarantee. That's the Pest Control Sydney
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div
          ref={whyReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            whyReveal.isVisible && "visible"
          )}
        >
          <div className="text-center mb-10">
            <div className="w-12 h-2 bg-primary rounded-full mb-4 mx-auto" />
            <h2 className="mb-4">Why Choose Pest Control Sydney</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine years of experience with the latest techniques and
              eco-friendly products to deliver pest control you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding">
        <div
          ref={commitmentReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            commitmentReveal.isVisible && "visible"
          )}
        >
          <div className="max-w-3xl">
            <h2 className="mb-6">Our Commitment to You</h2>
            <div className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-6">
              <h3 className="font-semibold text-green-900 mb-4">
                Safe, Transparent, Guaranteed
              </h3>
              <p className="text-sm text-green-800 mb-4 leading-relaxed">
                Every treatment we perform is backed by our unwavering
                commitment to quality, safety, and customer satisfaction. We
                treat every home as if it were our own.
              </p>
              <div className="space-y-3">
                {COMMITMENT_ITEMS.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-green-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-muted/30">
        <div
          ref={areasReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            areasReveal.isVisible && "visible"
          )}
        >
          <div className="text-center mb-8">
            <h2 className="mb-4">Serving All of Sydney</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our licensed technicians service {COUNCILS.length} council areas
              and over 60 suburbs across Greater Sydney.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {COUNCILS.map((council) => (
              <Link
                key={council.slug}
                href={`/locations/sydney/${council.slug}`}
              >
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  {council.name}
                </Badge>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link href="/locations">
                View All Service Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
