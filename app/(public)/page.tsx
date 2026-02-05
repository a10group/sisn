import React from "react";
import { HeroSection } from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logoCloud";
import { DashboardPreview } from "@/components/frontend/dashboard-preview";

const Page = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
    </main>
  );
};
export default Page;
