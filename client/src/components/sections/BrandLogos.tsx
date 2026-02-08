const BRANDS = [
  { name: "BASF", logo: "/images/logos/basf.svg" },
  { name: "Bayer", logo: "/images/logos/bayer.svg" },
  { name: "Syngenta", logo: "/images/logos/syngenta.svg" },
  { name: "FMC", logo: "/images/logos/fmc.svg" },
  { name: "Ensystex", logo: "/images/logos/ensystex.svg" },
  { name: "Sumitomo", logo: "/images/logos/sumitomo.svg" },
];

export default function BrandLogos() {
  // Double the brands for seamless infinite scroll
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-10 overflow-hidden">
      <div className="container-width">
        <p className="text-center text-xs font-medium text-muted-foreground mb-6 tracking-widest uppercase">
          Products We Trust
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center shrink-0 px-8"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={36}
                loading="lazy"
                className="w-[120px] h-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
