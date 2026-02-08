import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import BeforeAfter from "@/components/sections/BeforeAfter";
import TrustBadges from "@/components/sections/TrustBadges";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import BrandLogos from "@/components/sections/BrandLogos";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <ServicesOverview />
      <Process />
      <BeforeAfter />
      <TrustBadges />
      <ServiceAreas />
      <Testimonials />
      <BrandLogos />
      <CTASection />
    </Layout>
  );
}
