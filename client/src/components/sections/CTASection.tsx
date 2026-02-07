import { Link } from "wouter";
import { Phone, ArrowRight, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@shared/routes/all-routes";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="relative container-width section-padding">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Got a Pest Problem? Let's Fix It Today.
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a free, no-obligation quote from Sydney's most trusted pest control team.
            Same-day service available for urgent pest issues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="accent" size="xl" asChild>
              <Link href="/?quote=open">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              100% Satisfaction Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Same-Day Service Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
