import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Loader2,
  Shield,
} from "lucide-react";
import { SERVICE_SLUG_ICON_MAP } from "@/components/icons/PestIcons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuoteModal } from "@/hooks/useQuoteModal";

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

export default function QuoteFormModal() {
  const { isOpen, closeQuoteModal, defaultPestType } = useQuoteModal();

  const [step, setStep] = useState(1);
  const [pestType, setPestType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Reset form when modal opens, and apply defaultPestType
  useEffect(() => {
    if (isOpen) {
      setStep(defaultPestType ? 2 : 1);
      setPestType(defaultPestType || "");
      setName("");
      setPhone("");
      setEmail("");
      setIsSubmitting(false);
      setIsSuccess(false);
      setError("");
    }
  }, [isOpen, defaultPestType]);

  // Auto-close after success
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        closeQuoteModal();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, closeQuoteModal]);

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
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeQuoteModal();
      }}
    >
      <DialogContent className="sm:max-w-md backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle>
            {isSuccess ? "Quote Requested!" : "Get My Free Quote"}
          </DialogTitle>
          <DialogDescription>
            {isSuccess
              ? "We'll be in touch shortly."
              : "No obligation \u00b7 Response within 30 min"}
          </DialogDescription>
        </DialogHeader>

        {/* Success state */}
        {isSuccess && (
          <div className="text-center py-6">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We'll call you within 30 minutes during business hours.
            </p>
          </div>
        )}

        {/* Step 1: Pest type grid */}
        {!isSuccess && step === 1 && (
          <div className="space-y-4">
            {/* Progress */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-primary" />
              <div className="h-1.5 flex-1 rounded-full bg-muted" />
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              What pest do you need help with?
            </p>
            <div className="grid grid-cols-4 gap-2">
              {PEST_OPTIONS.map((pest) => {
                const Icon = pest.icon;
                const isSelected = pestType === pest.slug;
                return (
                  <button
                    key={pest.slug}
                    type="button"
                    onClick={() => setPestType(pest.slug)}
                    className={`flex flex-col items-center gap-1.5 rounded-xl p-3 text-center transition-all duration-200 ${
                      isSelected
                        ? "bg-primary/10 border-2 border-primary text-primary"
                        : "bg-muted/50 border-2 border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
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
              variant="accent"
              className="w-full"
              disabled={!pestType}
              onClick={() => {
                if (pestType) setStep(2);
              }}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Contact details */}
        {!isSuccess && step === 2 && (
          <div className="space-y-4">
            {/* Progress */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-primary" />
              <div className="h-1.5 flex-1 rounded-full bg-primary" />
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              Your details
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Phone number *"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Email (optional)"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-xs text-destructive">{error}</p>
            )}

            <div className="flex gap-2">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep(1)}
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
              <Button
                type="button"
                variant="accent"
                className="flex-1"
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
                    Get My Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="h-3 w-3 text-green-500" />
              Your info is secure &amp; never shared
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
