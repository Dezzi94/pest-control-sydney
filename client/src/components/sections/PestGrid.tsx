import { Link } from "wouter";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { SERVICES } from "@shared/routes/all-routes";
import { SERVICE_SLUG_ICON_MAP } from "@/components/icons/PestIcons";
import { PEST_PSYCHOLOGY } from "@shared/data/location-copy";

interface PestGridProps {
  commonPests: string[];
  suburbName: string;
  councilSlug: string;
  suburbSlug?: string; // omitted for council-level pages
  heading?: string;
}

// Map common pest display names to service slugs
const PEST_TO_SLUG: Record<string, string> = {
  "cockroaches": "cockroach-treatment",
  "german cockroaches": "cockroach-treatment",
  "termites": "termite-control",
  "rats & mice": "rodent-control",
  "rats and mice": "rodent-control",
  "rodents": "rodent-control",
  "mice": "rodent-control",
  "rats": "rodent-control",
  "spiders": "spider-treatment",
  "ants": "ant-control",
  "fleas": "flea-treatment",
  "bed bugs": "bedbug-treatment",
  "bedbugs": "bedbug-treatment",
  "wasps": "wasp-removal",
  "silverfish": "silverfish-control",
  "birds": "bird-control",
  "pigeons": "bird-control",
  "pantry pests": "pantry-pest-control",
  "drain flies": "drain-fly-treatment",
  "possums": "possum-removal",
  "bees": "bee-removal",
  "ticks": "tick-treatment",
  "mites": "mite-control",
};

export default function PestGrid({ commonPests, suburbName, councilSlug, suburbSlug, heading }: PestGridProps) {
  const resolvedPests = commonPests.map((pestName) => {
    const slug = PEST_TO_SLUG[pestName.toLowerCase()] || "general-pest-control";
    const service = SERVICES.find((s) => s.slug === slug);
    const Icon = SERVICE_SLUG_ICON_MAP[slug];
    const psychology = PEST_PSYCHOLOGY[slug];
    const painPoint = psychology?.fears[0] || service?.shortDescription || "";

    return {
      name: pestName,
      slug,
      service,
      Icon,
      painPoint,
      link: suburbSlug
        ? `/locations/sydney/${councilSlug}/${suburbSlug}/services/${slug}`
        : `/locations/sydney/${councilSlug}`,
    };
  });

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="flex items-start gap-3 mb-8">
          <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 shrink-0" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {heading || `Common Pests in ${suburbName}`}
            </h2>
            <p className="text-muted-foreground mt-1">
              Don't ignore the warning signs. These pests are frequently reported in the {suburbName} area.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resolvedPests.map(({ name, slug, service, Icon, painPoint, link }) => (
            <Link
              key={slug + name}
              href={link}
              className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {name}
                  </h3>
                  {service && (
                    <span className="text-xs font-medium text-primary whitespace-nowrap">
                      {service.priceFrom === "Quote" ? "Free Quote" : `From ${service.priceFrom}`}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{painPoint}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-2 group-hover:gap-2 transition-all">
                  Get help now <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
