import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import {
  Mail,
  Clock,
  MapPin,
  CheckCircle,
  Shield,
  ThumbsUp,
  ChevronRight,
  Send,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import CTASection from "@/components/sections/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { SERVICES } from "@shared/routes/all-routes";
import { cn } from "@/lib/utils";

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email",
    detail: "info@pestcontrolsydney.org",
    sub: "We reply within 2 business hours",
    href: "mailto:info@pestcontrolsydney.org",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon-Fri 7am-6pm, Sat 8am-2pm",
    sub: "Emergency service available 24/7",
    href: undefined,
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Sydney, NSW, Australia",
    sub: "Servicing all Sydney suburbs",
    href: undefined,
  },
];

const TRUST_ITEMS = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "Same-Day Service" },
  { icon: ThumbsUp, label: "100% Satisfaction Guarantee" },
];

export default function ContactPage() {
  const infoReveal = useScrollReveal();
  const formReveal = useScrollReveal();
  const helpReveal = useScrollReveal();
  const { openQuoteModal } = useQuoteModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pestType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pestType: formData.pestType || undefined,
          message: formData.message || undefined,
          source: "contact-page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", pestType: "", message: "" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <span className="text-foreground font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="noise-overlay relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        <img src="/images/hero/contact-office.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
        <div className="container-width relative z-10">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            Get in Touch
          </Badge>
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            We're here to help with your pest problem. Contact us for a free
            quote, expert advice, or to book a same-day service.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div
          ref={infoReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            infoReveal.isVisible && "visible"
          )}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              const content = (
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm font-medium text-primary mb-1">
                    {card.detail}
                  </p>
                  <p className="text-xs text-muted-foreground">{card.sub}</p>
                </CardContent>
              );

              if (card.href) {
                return (
                  <a key={card.title} href={card.href}>
                    <Card className="h-full hover-lift cursor-pointer">
                      {content}
                    </Card>
                  </a>
                );
              }

              return (
                <Card key={card.title} className="h-full">
                  {content}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-muted/30">
        <div
          ref={formReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            formReveal.isVisible && "visible"
          )}
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 sm:p-8">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We'll respond within 2
                      business hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="04XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service-type">Service Type</Label>
                        <Select
                          value={formData.pestType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, pestType: value })
                          }
                        >
                          <SelectTrigger id="service-type">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICES.map((service) => (
                              <SelectItem
                                key={service.slug}
                                value={service.slug}
                              >
                                {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your pest problem..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    {error && (
                      <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                        {error}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        We'll respond within 2 business hours
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="section-padding">
        <div
          ref={helpReveal.ref}
          className={cn(
            "container-width",
            "reveal",
            helpReveal.isVisible && "visible"
          )}
        >
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-900 text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">
                  Need Help Right Now?
                </h3>
                <p className="text-slate-400 mb-6">
                  For urgent pest problems, request a free quote online.
                  We offer same-day service across Sydney.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={() => openQuoteModal()}
                  >
                    Get My Free Quote
                  </Button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {TRUST_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-1.5 text-sm text-slate-400"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
