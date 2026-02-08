import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SERVICES } from "@shared/routes/all-routes";

const quoteSchema = z.object({
  pestType: z.string().min(1, "Please select a pest type"),
  urgency: z.enum(["low", "medium", "high", "emergency"]),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  address: z.string().optional(),
  suburb: z.string().optional(),
  postcode: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  defaultPestType?: string;
  onSuccess?: () => void;
}

export default function QuoteForm({ defaultPestType, onSuccess }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      pestType: defaultPestType || "",
      urgency: "medium",
      name: "",
      email: "",
      phone: "",
      address: "",
      suburb: "",
      postcode: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = form;
  const pestType = watch("pestType");
  const urgency = watch("urgency");

  async function onSubmit(data: QuoteFormData) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      toast({
        title: "Quote Request Received!",
        description: "We'll call you within 30 minutes during business hours.",
      });
      onSuccess?.();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          Your quote request has been received. We'll call you within 30 minutes during business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Progress */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Pest Type */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <Label>What type of pest do you have?</Label>
            <Select value={pestType} onValueChange={(v) => setValue("pestType", v)}>
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select pest type..." />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((s) => (
                  <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.pestType && <p className="text-xs text-destructive mt-1">{errors.pestType.message}</p>}
          </div>

          <div>
            <Label>How urgent is the issue?</Label>
            <div className="grid grid-cols-2 gap-2 mt-1.5">
              {[
                { value: "low", label: "Not Urgent", desc: "Can wait a few days" },
                { value: "medium", label: "Moderate", desc: "Within 2-3 days" },
                { value: "high", label: "Urgent", desc: "Need help today" },
                { value: "emergency", label: "Emergency", desc: "Immediate response" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setValue("urgency", option.value as QuoteFormData["urgency"])}
                  className={`p-3 rounded-lg border text-left text-sm transition-colors ${
                    urgency === option.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <p className="font-medium">{option.label}</p>
                  <p className="text-xs text-muted-foreground">{option.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <Button type="button" className="w-full" onClick={() => { if (pestType) setStep(2); }}>
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Step 2: Contact Details */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" {...register("name")} className="mt-1.5" placeholder="John Smith" />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email")} className="mt-1.5" placeholder="john@example.com" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" {...register("phone")} className="mt-1.5" placeholder="0412 345 678" />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="suburb">Suburb</Label>
              <Input id="suburb" {...register("suburb")} className="mt-1.5" placeholder="e.g. Bondi" />
            </div>
            <div>
              <Label htmlFor="postcode">Postcode</Label>
              <Input id="postcode" {...register("postcode")} className="mt-1.5" placeholder="e.g. 2026" />
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep(1)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button type="button" className="flex-1" onClick={() => {
              const name = form.getValues("name");
              const email = form.getValues("email");
              const phone = form.getValues("phone");
              if (name && email && phone) setStep(3);
            }}>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Additional Details + Submit */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="address">Property Address (optional)</Label>
            <Input id="address" {...register("address")} className="mt-1.5" placeholder="123 Example Street" />
          </div>
          <div>
            <Label htmlFor="message">Additional Details (optional)</Label>
            <Textarea id="message" {...register("message")} className="mt-1.5" placeholder="Describe the issue, where you've seen pests, etc." rows={3} />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-muted/50">
            <Shield className="h-4 w-4 text-green-500 shrink-0" />
            Your information is secure and will only be used to provide your quote.
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep(2)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button type="submit" variant="accent" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
              ) : (
                <>Submit Quote Request <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
