import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Filter, Download, Eye, Clock, CheckCircle, XCircle, MessageSquare, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LeadResponse } from "@shared/types/api";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  quoted: "bg-purple-100 text-purple-800",
  won: "bg-green-100 text-green-800",
  lost: "bg-red-100 text-red-800",
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<LeadResponse[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLocation("/admin/login");
      return;
    }
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/leads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        localStorage.removeItem("token");
        setLocation("/admin/login");
        return;
      }
      const data = await res.json();
      setLeads(data.leads || []);
    } catch {
      // API not connected yet - show empty state
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setLocation("/admin/login");
  }

  async function handleExport() {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/leads/export", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  }

  const filtered = leads.filter((lead) => {
    const matchesSearch = search === "" ||
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search);
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    won: leads.filter((l) => l.status === "won").length,
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">PC</span>
              </div>
              <span className="font-semibold">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/admin/settings">
                <Button variant="ghost" size="sm">Settings</Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-1" /> Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: stats.total, icon: MessageSquare, color: "text-blue-500" },
            { label: "New", value: stats.new, icon: Clock, color: "text-orange-500" },
            { label: "Contacted", value: stats.contacted, icon: CheckCircle, color: "text-yellow-500" },
            { label: "Won", value: stats.won, icon: CheckCircle, color: "text-green-500" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 flex items-center gap-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search leads..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="flex gap-2">
                {["all", "new", "contacted", "quoted", "won", "lost"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                      statusFilter === status ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4 mr-1" /> Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lead List */}
        <Card>
          <CardContent className="p-0">
            {loading ? (
              <div className="text-center py-12 text-muted-foreground">Loading leads...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                {leads.length === 0 ? "No leads yet. They'll appear here when customers submit quote requests." : "No leads match your filters."}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-medium">Name</th>
                      <th className="text-left p-3 font-medium hidden sm:table-cell">Contact</th>
                      <th className="text-left p-3 font-medium hidden md:table-cell">Service</th>
                      <th className="text-left p-3 font-medium">Status</th>
                      <th className="text-left p-3 font-medium hidden lg:table-cell">Date</th>
                      <th className="text-left p-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((lead) => (
                      <tr key={lead.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <p className="font-medium">{lead.name}</p>
                          <p className="text-xs text-muted-foreground sm:hidden">{lead.email}</p>
                        </td>
                        <td className="p-3 hidden sm:table-cell">
                          <p>{lead.email}</p>
                          <p className="text-xs text-muted-foreground">{lead.phone}</p>
                        </td>
                        <td className="p-3 hidden md:table-cell capitalize">{lead.pestType.replace(/-/g, " ")}</td>
                        <td className="p-3">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_COLORS[lead.status] || ""}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="p-3 hidden lg:table-cell text-muted-foreground">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-3">
                          <Link href={`/admin/leads/${lead.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
