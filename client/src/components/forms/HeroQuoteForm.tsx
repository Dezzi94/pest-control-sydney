import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Loader2,
  Shield,
  Bug,
  Search,
  Rat,
  Bird,
  Bed,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";

// Top pest types as selectable tiles (most common requests)
const PEST_OPTIONS = [
  { slug: "cockroach-treatment", label: "Cockroaches", icon: Bug },
  { slug: "termite-inspection", label: "Termites", icon: Search },
  { slug: "rodent-control", label: "Rats & Mice", icon: Rat },
  { slug: "spider-treatment", label: "Spiders", icon: Bug },
  { slug: "ant-control", label: "Ants", icon: Bug },
  { slug: "bedbug-treatment", label: "Bed Bugs", icon: Bed },
  { slug: "bird-control", label: "Birds", icon: Bird },
  { slug: "general-pest-control", label: "General", icon: Shield },
] as const;

export default function HeroQuoteForm() {
  const [step, setStep] = useState(1);
  const [pestType, setPestType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!name.trim() || !phone.trim()) {
      setError("Name and phone are required.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pestType,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          urgency: "medium",
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── Success state ──
  if (isSuccess) {
    return (
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle className="h-7 w-7 text-green-400" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          Thank You!
        </h3>
        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
          We'll call you within 30 minutes during business hours.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Or call us now: {PHONE}
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8">
      {/* Header */}
      <h2 className="text-lg font-semibold text-white mb-1">
        Get Your Free Quote
      </h2>
      <p className="text-xs text-slate-400 mb-5">
        No obligation &middot; Response within 30 min
      </p>

      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? "bg-blue-400" : "bg-white/10"
              }`}
            />
          </div>
        ))}
      </div>

      {/* ── Step 1: Pest type grid ── */}
      <div
        className={`transition-all duration-300 ${
          step === 1
            ? "opacity-100 translate-x-0"
            : "opacity-0 absolute pointer-events-none -translate-x-4"
        }`}
      >
        {step === 1 && (
          <>
            <p className="text-sm font-medium text-slate-300 mb-3">
              What pest do you need help with?
            </p>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {PEST_OPTIONS.map((pest) => {
                const Icon = pest.icon;
                const isSelected = pestType === pest.slug;
                return (
                  <button
                    key={pest.slug}
                    type="button"
                    onClick={() => setPestType(pest.slug)}
                    className={`flex flex-col items-center gap-1.5 rounded-xl p-2.5 text-center transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-500/15 border border-blue-400/40 text-blue-300"
                        : "bg-white/[0.03] border border-white/5 text-slate-400 hover:bg-white/[0.06] hover:text-slate-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-[10px] font-medium leading-tight">
                      {pest.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <Button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20"
              disabled={!pestType}
              onClick={() => {
                if (pestType) setStep(2);
              }}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* ── Step 2: Contact details ── */}
      <div
        className={`transition-all duration-300 ${
          step === 2
            ? "opacity-100 translate-x-0"
            : "opacity-0 absolute pointer-events-none translate-x-4"
        }`}
      >
        {step === 2 && (
          <>
            <p className="text-sm font-medium text-slate-300 mb-3">
              Your details
            </p>
            <div className="space-y-3 mb-4">
              <Input
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/[0.06] border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:ring-blue-400/20"
              />
              <Input
                placeholder="Phone number *"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/[0.06] border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:ring-blue-400/20"
              />
              <Input
                placeholder="Email (optional)"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/[0.06] border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:ring-blue-400/20"
              />
            </div>

            {error && (
              <p className="text-xs text-red-400 mb-3">{error}</p>
            )}

            <div className="flex gap-2 mb-4">
              <Button
                type="button"
                variant="ghost"
                className="text-slate-400 hover:text-white hover:bg-white/5"
                onClick={() => setStep(1)}
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
              <Button
                type="button"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <p className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Shield className="h-3 w-3 text-green-500/70" />
              Your info is secure &amp; never shared
            </p>
          </>
        )}
      </div>
    </div>
  );
}
