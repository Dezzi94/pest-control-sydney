import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { openQuoteModal } = useQuoteModal();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
      <div className="container-width">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/brand/logo-icon.svg"
              alt=""
              className="w-10 h-10 sm:hidden"
              width={40}
              height={40}
            />
            <img
              src="/images/brand/logo.svg"
              alt="Pest Control Sydney"
              className="hidden sm:block h-11 w-auto"
              width={220}
              height={44}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  location === link.href || location.startsWith(link.href + "/")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="accent" size="lg" onClick={() => openQuoteModal()}>
              Get My Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in bg-white rounded-b-xl">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location === link.href || location.startsWith(link.href + "/")
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4 flex flex-col gap-3">
                <Button variant="accent" size="lg" className="w-full" onClick={() => { openQuoteModal(); setMobileOpen(false); }}>
                  Get My Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
