import { Phone } from "lucide-react";
import { PHONE_HREF } from "@shared/routes/all-routes";

export default function FloatingCTA() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed z-50 lg:hidden flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))', right: 'calc(1.5rem + env(safe-area-inset-right, 0px))' }}
      aria-label="Call us now"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
