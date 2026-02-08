const BRANDS = ["BASF", "Bayer", "Syngenta", "FMC", "Ensystex", "Sumitomo"];

export default function BrandLogos() {
  return (
    <section className="py-10">
      <div className="container-width">
        <p className="text-center text-xs font-medium text-muted-foreground mb-6 tracking-widest uppercase">
          Products We Trust
        </p>
        <div className="grid grid-cols-3 lg:flex lg:flex-row items-center justify-center gap-x-10 gap-y-3 text-center">
          {BRANDS.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-slate-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
