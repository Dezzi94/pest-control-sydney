import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function AdminSettings() {
  const [phone, setPhone] = useState("(02) 8765-4321");
  const [email, setEmail] = useState("info@pestcontrolsydney.org");
  const [hours, setHours] = useState("Mon-Fri 7am-6pm | Sat 8am-2pm");
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  async function handleSave() {
    setSaving(true);
    try {
      // TODO: Save to API
      toast({ title: "Settings saved successfully" });
    } catch {
      toast({ title: "Failed to save settings", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold">Business Settings</h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Phone Number</Label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1.5" />
            </div>
            <div>
              <Label>Email Address</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" />
            </div>
            <div>
              <Label>Business Hours</Label>
              <Input value={hours} onChange={(e) => setHours(e.target.value)} className="mt-1.5" />
            </div>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
