import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";

// Eagerly loaded (critical path)
import HomePage from "@/pages/HomePage";

// Lazy loaded (code split)
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("@/pages/ServiceDetailPage"));
const LocationsPage = lazy(() => import("@/pages/LocationsPage"));
const CouncilPage = lazy(() => import("@/pages/CouncilPage"));
const SuburbPage = lazy(() => import("@/pages/SuburbPage"));
const SuburbServicePage = lazy(() => import("@/pages/SuburbServicePage"));
const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const AdminLeadDetail = lazy(() => import("@/pages/admin/AdminLeadDetail"));
const AdminSettings = lazy(() => import("@/pages/admin/AdminSettings"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/services/:serviceSlug" component={ServiceDetailPage} />
          <Route path="/locations" component={LocationsPage} />
          <Route path="/locations/sydney/:councilSlug" component={CouncilPage} />
          <Route path="/locations/sydney/:councilSlug/:suburbSlug" component={SuburbPage} />
          <Route path="/locations/sydney/:councilSlug/:suburbSlug/services/:serviceSlug" component={SuburbServicePage} />
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/admin/leads/:id" component={AdminLeadDetail} />
          <Route path="/admin/settings" component={AdminSettings} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
