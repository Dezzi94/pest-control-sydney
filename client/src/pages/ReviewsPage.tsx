import { Link } from "wouter";
import {
  Star,
  CheckCircle,
  Phone,
  ChevronRight,
  Users,
  ThumbsUp,
  Clock,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";
import { cn } from "@/lib/utils";

interface Review {
  name: string;
  suburb: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    suburb: "Bondi",
    service: "Cockroach Treatment",
    rating: 5,
    text: "The team arrived same day and were incredibly thorough. Haven't seen a cockroach since. Professional from start to finish.",
    date: "12 Nov 2024",
  },
  {
    name: "James L.",
    suburb: "Parramatta",
    service: "Termite Inspection",
    rating: 5,
    text: "Found termite damage we didn't even know about. Saved us thousands in potential repairs. Highly recommend their inspection service.",
    date: "3 Jan 2025",
  },
  {
    name: "Emily W.",
    suburb: "Newtown",
    service: "General Pest Control",
    rating: 5,
    text: "Friendly, on-time, and effective. They explained everything before starting. Our house feels clean and safe again.",
    date: "28 Sep 2024",
  },
  {
    name: "Michael B.",
    suburb: "Cronulla",
    service: "Rodent Control",
    rating: 5,
    text: "Had a serious mouse problem in the garage. Fixed in one visit. Very knowledgeable about entry points and prevention.",
    date: "15 Feb 2025",
  },
  {
    name: "Lisa T.",
    suburb: "Chatswood",
    service: "Spider Treatment",
    rating: 4,
    text: "Great service, friendly technician. Only 4 stars because we had to reschedule once, but the actual treatment was excellent.",
    date: "7 Oct 2024",
  },
  {
    name: "David K.",
    suburb: "Coogee",
    service: "Bedbug Treatment",
    rating: 5,
    text: "Nightmare bedbug situation sorted in 2 treatments. Worth every cent. These guys know what they're doing.",
    date: "22 Dec 2024",
  },
  {
    name: "Amanda R.",
    suburb: "Manly",
    service: "Ant Control",
    rating: 5,
    text: "We'd tried everything from the hardware store. One visit from these guys and the ants were gone for good. Should have called sooner!",
    date: "18 Aug 2024",
  },
  {
    name: "Robert H.",
    suburb: "Balmain",
    service: "Termite Treatment",
    rating: 5,
    text: "Installed a full barrier system and baiting stations. Explained everything clearly. Peace of mind knowing our home is protected.",
    date: "5 Mar 2025",
  },
  {
    name: "Jessica P.",
    suburb: "Marrickville",
    service: "Flea Treatment",
    rating: 5,
    text: "Our dog brought fleas inside and they were everywhere. Team treated the whole house and yard. Problem solved completely.",
    date: "14 Nov 2024",
  },
  {
    name: "Chris M.",
    suburb: "Neutral Bay",
    service: "Bird Control",
    rating: 4,
    text: "Installed netting on our balcony to stop pigeons. Clean work, good price. Happy with the result.",
    date: "30 Jul 2024",
  },
  {
    name: "Sophie L.",
    suburb: "Ryde",
    service: "General Pest Control",
    rating: 5,
    text: "Annual pest treatment for our rental property. Always reliable, always thorough. Tenants are happy, we're happy.",
    date: "9 Jan 2025",
  },
  {
    name: "Daniel W.",
    suburb: "Bankstown",
    service: "Commercial Pest Control",
    rating: 5,
    text: "They handle pest control for our restaurant. Always discreet, always compliant with health regulations. Wouldn't use anyone else.",
    date: "1 Feb 2025",
  },
];

const AGGREGATE_STATS = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: Users,
    value: "127+",
    label: "Reviews",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Recommend Us",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years Serving Sydney",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, j) => (
        <Star
          key={j}
          className={cn(
            "h-4 w-4",
            j < count ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
          )}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const statsReveal = useScrollReveal();
  const featuredReveal = useScrollReveal();
  const gridReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  const { openQuoteModal } = useQuoteModal();

  const [featured, ...restReviews] = REVIEWS;

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
            <span className="text-foreground font-medium">Reviews</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 lg:py-20">
        <div className="container-width">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            Customer Reviews
          </Badge>
          <h1 className="text-white mb-4">What Our Customers Say</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            4.9 out of 5 from 127 verified Google reviews. See why Sydney
            homeowners trust Pest Control Sydney for all their pest management
            needs.
          </p>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="bg-white border-b border-border">
        <div
          ref={statsReveal.ref}
          className={cn(
            "container-width py-8",
            "reveal",
            statsReveal.isVisible && "visible"
          )}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {AGGREGATE_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        stat.icon === Star
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-primary"
                      )}
                    />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding">
        <div
          ref={featuredReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            featuredReveal.isVisible && "visible"
          )}
        >
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-1">
              <Stars count={featured.rating} />
              <Badge
                variant="outline"
                className="text-xs border-slate-600 text-slate-300 ml-2"
              >
                Featured Review
              </Badge>
            </div>
            <p className="text-lg leading-relaxed mt-4 mb-6">
              "{featured.text}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-white">
                    {featured.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-sm">{featured.name}</p>
                    <CheckCircle className="h-4 w-4 text-green-400 fill-green-400/20" />
                  </div>
                  <p className="text-xs text-slate-400">{featured.suburb}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="text-xs border-slate-600 text-slate-300"
                >
                  {featured.service}
                </Badge>
                <span className="text-xs text-slate-500">{featured.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-muted/30">
        <div
          ref={gridReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            gridReveal.isVisible && "visible"
          )}
        >
          <div className="text-center mb-10">
            <h2 className="mb-4">All Reviews</h2>
            <p className="text-muted-foreground">
              Read what Sydney homeowners and businesses have to say about our
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restReviews.map((review, i) => (
              <Card key={i} className="hover-lift">
                <CardContent className="p-6">
                  <Stars count={review.rating} />
                  <p className="text-sm text-muted-foreground mb-4 mt-3 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{review.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {review.suburb}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs">
                        {review.service}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div
          ref={ctaReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            ctaReveal.isVisible && "visible"
          )}
        >
          <Card className="bg-slate-900 text-white border-0">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Join over 2,400 satisfied Sydney homeowners. Get a free quote
                or call us today for same-day pest control service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => openQuoteModal()}
                >
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border-2 border-slate-600 hover:bg-slate-800 hover:border-slate-500"
                  asChild
                >
                  <a href={PHONE_HREF}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call {PHONE}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
