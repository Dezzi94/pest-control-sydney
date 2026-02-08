const BRANDS = [
  { name: "BASF", tagline: "Chemistry" },
  { name: "Bayer", tagline: "Science" },
  { name: "Syngenta", tagline: "Crop Protection" },
  { name: "FMC", tagline: "Solutions" },
  { name: "Ensystex", tagline: "Innovation" },
  { name: "Sumitomo", tagline: "Chemical" },
];

export default function BrandLogos() {
  return (
    <section className="py-16 border-y border-border/50 bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">
          Trusted Products from Industry-Leading Manufacturers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center px-6 py-3 rounded-xl border border-border/50 bg-white/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <span className="text-base font-bold text-slate-700 group-hover:text-primary transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest mt-0.5">
                {brand.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
