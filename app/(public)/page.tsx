import React from "react";
import { HeroSection } from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logoCloud";
import { DashboardPreview } from "@/components/frontend/dashboard-preview";
import { FeaturesSection } from "@/components/frontend/features-section";

const Page = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
      <FeaturesSection />
    </main>
  );
};
export default Page;
