import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import TrustBadges from "@/components/sections/TrustBadges";
import BrandLogos from "@/components/sections/BrandLogos";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <ServicesOverview />
      <Process />
      <TrustBadges />
      <Testimonials />
      <BrandLogos />
      <CTASection />
    </Layout>
  );
}
