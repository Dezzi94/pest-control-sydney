const BRANDS = [
  { name: "BASF", logo: "/images/logos/basf.svg" },
  { name: "Bayer", logo: "/images/logos/bayer.svg" },
  { name: "Syngenta", logo: "/images/logos/syngenta.svg" },
  { name: "FMC", logo: "/images/logos/fmc.svg" },
  { name: "Ensystex", logo: "/images/logos/ensystex.svg" },
  { name: "Sumitomo", logo: "/images/logos/sumitomo.svg" },
];

export default function BrandLogos() {
  return (
    <section className="py-10">
      <div className="container-width">
        <p className="text-center text-xs font-medium text-muted-foreground mb-6 tracking-widest uppercase">
          Products We Trust
        </p>
        <div className="grid grid-cols-3 lg:flex lg:flex-row items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={36}
                loading="lazy"
                className="w-[120px] h-auto grayscale opacity-40 hover:opacity-70 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
