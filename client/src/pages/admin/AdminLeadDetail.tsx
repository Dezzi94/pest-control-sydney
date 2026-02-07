import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { LeadResponse } from "@shared/types/api";

export default function AdminLeadDetail() {
  const params = useParams<{ id: string }>();
  const [lead, setLead] = useState<LeadResponse | null>(null);
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [quotedAmount, setQuotedAmount] = useState("");
  const [saving, setSaving] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { setLocation("/admin/login"); return; }
    fetchLead();
  }, [params.id]);

  async function fetchLead() {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/leads/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { localStorage.removeItem("token"); setLocation("/admin/login"); return; }
      const data = await res.json();
      setLead(data);
      setStatus(data.status);
      setNotes(data.notes || "");
      setQuotedAmount(data.quotedAmount?.toString() || "");
    } catch {
      // Lead not found
    }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      await fetch(`/api/leads/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          status,
          notes,
          quotedAmount: quotedAmount ? parseFloat(quotedAmount) : undefined,
        }),
      });
      toast({ title: "Lead updated successfully" });
    } catch {
      toast({ title: "Failed to update lead", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  }

  if (!lead) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading lead details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{lead.name}</h1>
              <p className="text-muted-foreground capitalize">{lead.pestType.replace(/-/g, " ")} — {new Date(lead.createdAt).toLocaleDateString()}</p>
            </div>
            <Badge className="capitalize text-sm py-1 px-3">{lead.status}</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Contact Information</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${lead.email}`} className="text-sm text-primary hover:underline">{lead.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${lead.phone}`} className="text-sm text-primary hover:underline">{lead.phone}</a>
              </div>
              {lead.suburb && (
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{lead.suburb} {lead.postcode}</span>
                </div>
              )}
              {lead.address && (
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{lead.address}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Urgency: <span className="capitalize font-medium">{lead.urgency}</span></span>
              </div>
            </CardContent>
          </Card>

          {/* Message */}
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle className="text-lg">Customer Message</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {lead.message || "No additional message provided."}
              </p>
            </CardContent>
          </Card>

          {/* Update Form */}
          <Card className="lg:col-span-3">
            <CardHeader><CardTitle className="text-lg">Update Lead</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label>Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {["new", "contacted", "quoted", "won", "lost"].map((s) => (
                        <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Quoted Amount ($)</Label>
                  <Input type="number" value={quotedAmount} onChange={(e) => setQuotedAmount(e.target.value)} className="mt-1.5" placeholder="0.00" />
                </div>
              </div>
              <div>
                <Label>Notes</Label>
                <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1.5" rows={4} placeholder="Add notes about this lead..." />
              </div>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
