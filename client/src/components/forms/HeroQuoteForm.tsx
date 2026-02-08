import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Loader2,
  Shield,
  Phone,
  X,
} from "lucide-react";
import { SERVICE_SLUG_ICON_MAP } from "@/components/icons/PestIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";

// ── Pest options ──
const PEST_OPTIONS = [
  { slug: "cockroach-treatment", label: "Cockroaches", icon: SERVICE_SLUG_ICON_MAP["cockroach-treatment"] },
  { slug: "termite-inspection", label: "Termites", icon: SERVICE_SLUG_ICON_MAP["termite-inspection"] },
  { slug: "rodent-control", label: "Rats & Mice", icon: SERVICE_SLUG_ICON_MAP["rodent-control"] },
  { slug: "spider-treatment", label: "Spiders", icon: SERVICE_SLUG_ICON_MAP["spider-treatment"] },
  { slug: "ant-control", label: "Ants", icon: SERVICE_SLUG_ICON_MAP["ant-control"] },
  { slug: "bedbug-treatment", label: "Bed Bugs", icon: SERVICE_SLUG_ICON_MAP["bedbug-treatment"] },
  { slug: "bird-control", label: "Birds", icon: SERVICE_SLUG_ICON_MAP["bird-control"] },
  { slug: "general-pest-control", label: "General", icon: SERVICE_SLUG_ICON_MAP["general-pest-control"] },
];

const CALLBACK_TIMES = ["ASAP", "Morning", "Afternoon", "Evening"] as const;
type CallbackTime = (typeof CALLBACK_TIMES)[number];

// ── localStorage draft persistence ──
const DRAFT_KEY = "pcs_quote_draft";
const DRAFT_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

interface DraftData {
  pestType: string;
  name: string;
  phone: string;
  email: string;
  callbackTime: CallbackTime | "";
  step: number;
  timestamp: number;
}

function saveDraft(data: Omit<DraftData, "timestamp">): void {
  try {
    const payload: DraftData = { ...data, timestamp: Date.now() };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
  } catch {
    // localStorage may be unavailable
  }
}

function loadDraft(): DraftData | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as DraftData;
    if (Date.now() - data.timestamp > DRAFT_MAX_AGE_MS) {
      localStorage.removeItem(DRAFT_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function clearDraft(): void {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch {
    // ignore
  }
}

// ── Validation helpers ──
function isNameValid(n: string): boolean {
  return n.trim().length >= 2;
}

function isPhoneValid(p: string): boolean {
  const stripped = p.replace(/[\s\-()]/g, "");
  // Australian: starts with 0 and 10 digits, or +61 and 11 chars total
  if (/^0\d{9}$/.test(stripped)) return true;
  if (/^\+61\d{9}$/.test(stripped)) return true;
  return false;
}

// ── Pest label lookup ──
function getPestLabel(slug: string): string {
  const found = PEST_OPTIONS.find((p) => p.slug === slug);
  return found ? found.label : "General";
}

// ── Confetti colours ──
const CONFETTI_COLOURS = [
  "#3b82f6", "#22c55e", "#f97316", "#eab308",
  "#ec4899", "#8b5cf6", "#06b6d4", "#ef4444",
];

export default function HeroQuoteForm() {
  // Form state
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [pestType, setPestType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [callbackTime, setCallbackTime] = useState<CallbackTime | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Draft restoration banner
  const [showDraftBanner, setShowDraftBanner] = useState(false);
  const hasRestoredRef = useRef(false);

  // Restore draft on mount (once)
  useEffect(() => {
    if (hasRestoredRef.current) return;
    hasRestoredRef.current = true;
    const draft = loadDraft();
    if (draft) {
      setPestType(draft.pestType);
      setName(draft.name);
      setPhone(draft.phone);
      setEmail(draft.email);
      setCallbackTime(draft.callbackTime);
      // Always start at step 1 on restore so user can review
      setStep(1);
      setShowDraftBanner(true);
    }
  }, []);

  // Save draft on every field change
  const saveDraftCb = useCallback(() => {
    saveDraft({ pestType, name, phone, email, callbackTime, step });
  }, [pestType, name, phone, email, callbackTime, step]);

  useEffect(() => {
    saveDraftCb();
  }, [saveDraftCb]);

  // ── Step navigation ──
  function goForward(target: number) {
    setDirection("forward");
    setStep(target);
  }

  function goBack(target: number) {
    setDirection("back");
    setStep(target);
  }

  // ── Submit ──
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
          callbackTime: callbackTime || "ASAP",
          urgency: "medium",
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      clearDraft();
      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── Slide transition classes ──
  const slideEnterClass =
    direction === "forward"
      ? "translate-x-0 opacity-100"
      : "translate-x-0 opacity-100";
  const slideExitForwardClass = "-translate-x-8 opacity-0";
  const slideExitBackClass = "translate-x-8 opacity-0";

  function stepClasses(s: number): string {
    if (s === step) return slideEnterClass;
    return s < step ? slideExitForwardClass : slideExitBackClass;
  }

  function stepTransition(): string {
    return "transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]";
  }

  // ── Success state ──
  if (isSuccess) {
    const pestLabel = getPestLabel(pestType);
    const serviceHref = `/services/${pestType}`;
    return (
      <div
        className="w-full max-w-sm rounded-2xl overflow-hidden bg-slate-800/95 backdrop-blur-xl text-center relative border-2 border-blue-400/30"
        style={{ boxShadow: '0 0 50px rgba(59,130,246,0.2), 0 0 100px rgba(59,130,246,0.08), 0 25px 50px -12px rgba(0,0,0,0.3)' }}
      >
        {/* Brand header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
          <CheckCircle className="h-8 w-8 text-white mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-white">
            Thank You, {name.trim().split(" ")[0]}!
          </h3>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Confetti dots */}
          {CONFETTI_COLOURS.map((colour, i) => (
            <span
              key={i}
              className="confetti-dot absolute w-2 h-2 rounded-full pointer-events-none"
              style={{
                backgroundColor: colour,
                left: `${12 + i * 11}%`,
                bottom: "40%",
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}

          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            We'll call you within 30 minutes during business hours.
          </p>

          <a
            href={serviceHref}
            className="block text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-4"
          >
            Learn more about {pestLabel.toLowerCase()} treatment &rarr;
          </a>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Or call us now: {PHONE}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-sm rounded-2xl overflow-hidden bg-slate-800/95 backdrop-blur-xl border-2 border-blue-400/30"
      style={{ boxShadow: '0 0 50px rgba(59,130,246,0.2), 0 0 100px rgba(59,130,246,0.08), 0 25px 50px -12px rgba(0,0,0,0.3)' }}
    >
      {/* Brand header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
        <h2 className="text-lg font-semibold text-white mb-1">
          Get Your Free Quote in 60 Seconds
        </h2>
        <p className="text-xs text-blue-100/80">
          Free inspection &middot; No hidden fees &middot; We call you within 30 min
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {/* Draft restoration banner */}
        {showDraftBanner && (
          <div className="flex items-center justify-between gap-2 mb-4 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
            <p className="text-xs text-blue-300">
              Welcome back — we saved your details
            </p>
            <button
              type="button"
              onClick={() => setShowDraftBanner(false)}
              className="text-blue-400 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Urgency indicator */}
        <div className="flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-400/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-green-300">
            {(() => {
              const base = [8, 12, 6, 14, 11, 9, 5];
              const count = base[new Date().getDay()];
              return `${count} people requested a quote today`;
            })()}
          </span>
        </div>

        {/* Progress bars (3 steps) — brand orange */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-orange-500" : "bg-white/10"
                }`}
              />
            </div>
          ))}
        </div>

      {/* Steps container — relative so absolute positioned steps stay in flow */}
      <div className="relative">
        {/* ── Step 1: Pest type grid ── */}
        <div
          className={`${stepTransition()} ${
            step === 1
              ? stepClasses(1)
              : "absolute inset-0 pointer-events-none " + stepClasses(1)
          }`}
        >
          {step === 1 && (
            <>
              <p className="text-sm font-medium text-slate-300 mb-3">
                What pest problem are you dealing with?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {PEST_OPTIONS.map((pest) => {
                  const Icon = pest.icon;
                  const isSelected = pestType === pest.slug;
                  return (
                    <button
                      key={pest.slug}
                      type="button"
                      onClick={() => setPestType(pest.slug)}
                      className={`relative flex flex-col items-center gap-1.5 rounded-xl p-3 text-center transition-all duration-200 hover:scale-[1.04] hover:shadow-md ${
                        isSelected
                          ? "bg-blue-500/15 border border-blue-400/40 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                          : "bg-white/[0.03] border border-white/5 text-slate-400 hover:bg-white/[0.06] hover:text-slate-300"
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle className="absolute top-1 right-1 h-3.5 w-3.5 text-blue-400" />
                      )}
                      <Icon className="h-5 w-5" />
                      <span className="text-xs font-medium leading-tight">
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
                  if (pestType) goForward(2);
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
          className={`${stepTransition()} ${
            step === 2
              ? stepClasses(2)
              : "absolute inset-0 pointer-events-none " + stepClasses(2)
          }`}
        >
          {step === 2 && (
            <>
              <p className="text-sm font-medium text-slate-300 mb-3">
                Your details
              </p>
              <div className="space-y-3 mb-4">
                {/* Name with inline validation */}
                <div className="relative">
                  <Input
                    placeholder="Your name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/[0.06] border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:ring-blue-400/20 pr-9"
                  />
                  {isNameValid(name) && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400" />
                  )}
                </div>

                {/* Phone with inline validation */}
                <div className="relative">
                  <Input
                    placeholder="Phone number *"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white/[0.06] border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:ring-blue-400/20 pr-9"
                  />
                  {isPhoneValid(phone) && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400" />
                  )}
                </div>

                {/* Email (optional, no validation indicator) */}
                <Input
                  placeholder="Email (optional)"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/[0.06] border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:ring-blue-400/20"
                />
              </div>

              {/* Preferred callback time pills */}
              <p className="text-xs font-medium text-slate-400 mb-2">
                Preferred callback time
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {CALLBACK_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setCallbackTime(time)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      callbackTime === time
                        ? "bg-blue-500/20 border border-blue-400/40 text-blue-300"
                        : "bg-white/[0.04] border border-white/10 text-slate-400 hover:bg-white/[0.08] hover:text-slate-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {/* Trust copy */}
              <p className="text-xs text-slate-500 mb-4">
                We'll call once to discuss your quote — no spam, ever
              </p>

              {error && (
                <p className="text-xs text-red-400 mb-3">{error}</p>
              )}

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-white/5"
                  onClick={() => goBack(1)}
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20"
                  disabled={!isNameValid(name) || !isPhoneValid(phone)}
                  onClick={() => {
                    setError("");
                    goForward(3);
                  }}
                >
                  Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>

        {/* ── Step 3: Confirmation summary ── */}
        <div
          className={`${stepTransition()} ${
            step === 3
              ? stepClasses(3)
              : "absolute inset-0 pointer-events-none " + stepClasses(3)
          }`}
        >
          {step === 3 && (
            <>
              <p className="text-sm font-medium text-slate-300 mb-4">
                Confirm your details
              </p>

              <div className="space-y-2.5 mb-5 rounded-xl bg-white/[0.03] border border-white/5 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Pest type</span>
                  <span className="text-white font-medium">
                    {getPestLabel(pestType)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Name</span>
                  <span className="text-white font-medium">
                    {name.trim()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Phone</span>
                  <span className="text-white font-medium">{phone}</span>
                </div>
                {callbackTime && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Callback</span>
                    <span className="text-white font-medium">
                      {callbackTime}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500 mb-4">
                Your details are only used for this quote. That's a promise.
              </p>

              {error && (
                <p className="text-xs text-red-400 mb-3">{error}</p>
              )}

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-white/5"
                  onClick={() => goBack(2)}
                >
                  Edit Details
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
                      Submit Quote Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-3">
                <Shield className="h-3 w-3 text-green-500/70" />
                Your info is secure &amp; never shared
              </p>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
