// ─── API Contract Types ────────────────────────────────────────────────────────
// Shared between Frontend and Backend. Frontend can mock these.
// Backend must implement these exact shapes.

// ─── Lead Management ──────────────────────────────────────────────────────────

export type LeadStatus = "new" | "contacted" | "quoted" | "won" | "lost";
export type LeadSource = "website" | "phone" | "referral" | "google" | "other";
export type PestType = string; // matches service slugs

export interface CreateLeadRequest {
  name: string;
  email: string;
  phone: string;
  address?: string;
  suburb?: string;
  postcode?: string;
  pestType: PestType;
  message?: string;
  source?: LeadSource;
  urgency?: "low" | "medium" | "high" | "emergency";
}

export interface UpdateLeadRequest {
  status?: LeadStatus;
  notes?: string;
  assignedTo?: string;
  quotedAmount?: number;
  followUpDate?: string;
}

export interface LeadResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string | null;
  suburb: string | null;
  postcode: string | null;
  pestType: string;
  message: string | null;
  source: LeadSource;
  urgency: string;
  status: LeadStatus;
  notes: string | null;
  assignedTo: string | null;
  quotedAmount: number | null;
  followUpDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface LeadListResponse {
  leads: LeadResponse[];
  total: number;
  page: number;
  pageSize: number;
}

// ─── Authentication ───────────────────────────────────────────────────────────

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: number;
    email: string;
    name: string;
    role: "admin" | "staff";
  };
  token: string;
}

// ─── Services & Locations (read-only from data) ──────────────────────────────

export interface ServiceListResponse {
  services: {
    name: string;
    slug: string;
    priceFrom: string;
    icon: string;
    shortDescription: string;
    category: string;
  }[];
}

export interface CouncilListResponse {
  councils: {
    name: string;
    slug: string;
    suburbs: {
      name: string;
      slug: string;
      postcode: string;
    }[];
  }[];
}

// ─── Quote Form ───────────────────────────────────────────────────────────────

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  suburb?: string;
  postcode?: string;
  pestType: string;
  propertyType?: "house" | "unit" | "commercial" | "other";
  message?: string;
  preferredDate?: string;
  urgency?: "low" | "medium" | "high" | "emergency";
}

// ─── API Endpoints ────────────────────────────────────────────────────────────
// POST   /api/leads           → CreateLeadRequest  → LeadResponse
// GET    /api/leads           → query params        → LeadListResponse
// GET    /api/leads/:id       →                     → LeadResponse
// PATCH  /api/leads/:id       → UpdateLeadRequest   → LeadResponse
// DELETE /api/leads/:id       →                     → { success: true }
// GET    /api/leads/export    →                     → CSV file download
// POST   /api/auth/login      → LoginRequest        → AuthResponse
// POST   /api/auth/logout     →                     → { success: true }
// GET    /api/auth/me         →                     → AuthResponse["user"] | null
// GET    /api/services        →                     → ServiceListResponse
// GET    /api/councils        →                     → CouncilListResponse
