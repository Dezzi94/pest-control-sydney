import { Link } from "wouter";
import { Home, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="container-width section-padding text-center">
        <h1 className="text-8xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
          Try searching our services or locations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services">
              View Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
