import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Inline testimonials (will be replaced by shared/data/testimonials.ts import later)
const TESTIMONIALS = [
  { name: "Sarah M.", suburb: "Bondi", service: "Termite Inspection", rating: 5, text: "Incredibly thorough inspection. They found early signs of termite activity that two other companies missed. Saved us thousands in potential damage. Highly recommend their thermal imaging service." },
  { name: "James T.", suburb: "Newtown", service: "Cockroach Treatment", rating: 5, text: "Had a serious cockroach problem in our terrace house. One treatment and they were gone completely. The technician was professional, on time, and explained everything clearly." },
  { name: "Michelle L.", suburb: "Chatswood", service: "Rodent Control", rating: 5, text: "Fast response — called in the morning, technician was here by lunch. Found the entry points, sealed them, and set up bait stations. No more rats. Excellent service from start to finish." },
  { name: "David K.", suburb: "Parramatta", service: "General Pest Control", rating: 5, text: "We use Pest Control Sydney for our annual pest treatment. Always reliable, always professional. They use eco-friendly products which is important for us with young kids at home." },
  { name: "Lisa R.", suburb: "Cronulla", service: "Spider Treatment", rating: 4, text: "Living near the beach means lots of spiders. These guys did a full perimeter treatment and web removal. Haven't seen a spider inside since. Great value for money." },
  { name: "Tom H.", suburb: "Coogee", service: "Bedbug Treatment", rating: 5, text: "Dealt with our bedbug nightmare quickly and discreetly. The heat treatment was incredibly effective. The follow-up inspection gave us complete peace of mind." },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="mb-4">What Sydney Homeowners Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from real customers across Sydney
            who trust us to keep their homes pest-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <Card key={i} className="hover-lift">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-3" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
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
