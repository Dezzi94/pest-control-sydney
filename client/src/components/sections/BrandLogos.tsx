const BRANDS = [
  "BASF", "Bayer", "Syngenta", "FMC", "Ensystex", "Sumitomo",
];

export default function BrandLogos() {
  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="container-width">
        <p className="text-center text-sm text-muted-foreground mb-6">
          We use trusted products from industry-leading manufacturers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="text-lg font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
