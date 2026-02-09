import { Star, CheckCircle, Quote } from "lucide-react";
import type { Testimonial } from "@shared/data/testimonials";

interface LocalTestimonialsProps {
  testimonials: Testimonial[];
  areaName: string;
  serviceContext?: string; // e.g., "termite inspection" for heading
}

export default function LocalTestimonials({ testimonials, areaName, serviceContext }: LocalTestimonialsProps) {
  if (testimonials.length === 0) return null;

  const heading = serviceContext
    ? `What ${areaName} Homeowners Say About Our ${serviceContext}`
    : `What ${areaName} Homeowners Say About Us`;

  const [featured, ...rest] = testimonials;

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 mb-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-yellow-700">4.9 out of 5 from 127+ verified reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured testimonial */}
          <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <Quote className="absolute top-6 right-6 h-16 w-16 text-white/5" />
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: featured.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-slate-200 leading-relaxed mb-6">
              "{featured.text}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-sm font-bold text-primary">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{featured.name}</p>
                <p className="text-sm text-slate-400">{featured.suburb}</p>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs text-secondary">
                <CheckCircle className="h-3.5 w-3.5" />
                Verified
              </div>
            </div>
          </div>

          {/* Smaller testimonials */}
          <div className="flex flex-col gap-6">
            {rest.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.suburb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
