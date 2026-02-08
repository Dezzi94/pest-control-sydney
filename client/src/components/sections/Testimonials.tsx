import { Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  { name: "Sarah M.", suburb: "Bondi", service: "Termite Inspection", rating: 5, text: "Incredibly thorough inspection. They found early signs of termite activity that two other companies missed. Saved us thousands in potential damage. Highly recommend their thermal imaging service." },
  { name: "James T.", suburb: "Newtown", service: "Cockroach Treatment", rating: 5, text: "Had a serious cockroach problem in our terrace house. One treatment and they were gone completely. The technician was professional, on time, and explained everything clearly." },
  { name: "Michelle L.", suburb: "Chatswood", service: "Rodent Control", rating: 5, text: "Fast response — called in the morning, technician was here by lunch. Found the entry points, sealed them, and set up bait stations. No more rats. Excellent service from start to finish." },
  { name: "David K.", suburb: "Parramatta", service: "General Pest Control", rating: 5, text: "We use Pest Control Sydney for our annual pest treatment. Always reliable, always professional. They use eco-friendly products which is important for us with young kids at home." },
  { name: "Lisa R.", suburb: "Cronulla", service: "Spider Treatment", rating: 4, text: "Living near the beach means lots of spiders. These guys did a full perimeter treatment and web removal. Haven't seen a spider inside since. Great value for money." },
  { name: "Tom H.", suburb: "Coogee", service: "Bedbug Treatment", rating: 5, text: "Dealt with our bedbug nightmare quickly and discreetly. The heat treatment was incredibly effective. The follow-up inspection gave us complete peace of mind." },
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

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="section-padding bg-muted/30">
      <div
        ref={ref}
        className={cn("container-width", "reveal", isVisible && "visible")}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <div className="w-12 h-2 bg-primary rounded-full mb-4" />
            <h2 className="mb-0">What Sydney Homeowners Say</h2>
          </div>
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            4.9 out of 5 — based on 127 reviews
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8">
          <Stars count={featured.rating} />
          <p className="text-lg leading-relaxed mt-4 mb-6">
            "{featured.text}"
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary">
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
            <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
              {featured.service}
            </Badge>
          </div>
        </div>

        {/* Remaining testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((testimonial, i) => (
            <Card key={i} className="hover-lift">
              <CardContent className="p-6">
                <Stars count={testimonial.rating} />

                <p className="text-sm text-muted-foreground mb-4 mt-3 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.suburb}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
