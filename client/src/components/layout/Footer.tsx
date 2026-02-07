import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Shield, Award, Leaf } from "lucide-react";
import { PHONE, PHONE_HREF, SERVICES, COUNCILS } from "@shared/routes/all-routes";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
];

const TOP_SERVICES = SERVICES.slice(0, 8);
const TOP_COUNCILS = COUNCILS.slice(0, 6);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">PC</span>
              </div>
              <div>
                <span className="font-bold text-white">Pest Control</span>
                <span className="font-bold text-primary ml-1">Sydney</span>
              </div>
            </div>
            <p className="text-sm mb-6 text-slate-400">
              Sydney's trusted pest control experts. Licensed technicians, eco-friendly treatments,
              and a 100% satisfaction guarantee on every job.
            </p>
            <div className="space-y-3 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                {PHONE}
              </a>
              <a href="mailto:info@pestcontrolsydney.org" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                info@pestcontrolsydney.org
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Sydney, NSW, Australia
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Mon-Fri 7am-6pm | Sat 8am-2pm
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {TOP_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary hover:text-blue-400 font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {TOP_COUNCILS.map((council) => (
                <li key={council.slug}>
                  <Link
                    href={`/locations/sydney/${council.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {council.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-primary hover:text-blue-400 font-medium">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Signals */}
          <div>
            <h3 className="text-white font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Licensed & Fully Insured
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                AEPMA Certified Member
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Eco-Friendly Products
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Same-Day Service Available
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-sm text-slate-400 ml-1">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-width py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {year} Pest Control Sydney. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
