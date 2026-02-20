import React from "react";
import ContactUs from "@/components/frontend/contact-us";
import SmallTitle from "@/components/frontend/small-title";
import { FeatureIcon } from "@/icons/title";
import SectionHeader from "@/components/frontend/section-header";
import Logo from "@/components/logo";

const Page = () => {
  return (
    <div className="py-10">
      <div className="py-4">
        <div className="flex items-center justify-center pb-8">
          <Logo size="lg" />
        </div>
        <SectionHeader
          heading="Transform Your School Operations with SISN"
          description="Modernize your academic, administrative, and financial workflows with an integrated school management platform designed for efficiency and transparency."
        />

        <ContactUs />
      </div>
    </div>
  );
};
export default Page;
