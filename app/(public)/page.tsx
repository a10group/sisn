import React from "react";
import { HeroSection } from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logoCloud";
import { DashboardPreview } from "@/components/frontend/dashboard-preview";
import { FeaturesSection } from "@/components/frontend/features-section";
import SiteFooter from "@/components/frontend/site-footer";

const Page = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
      <FeaturesSection />
      <SiteFooter />
    </main>
  );
};
export default Page;
