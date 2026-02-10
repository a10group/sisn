import React from "react";
import ContactUs from "@/components/frontend/contact-us";
import SmallTitle from "@/components/frontend/small-title";
import { FeatureIcon } from "@/icons/title";

const Page = () => {
  return (
    <div className="py-16">
      <div className="py-6">
        <div className="text-center mb-16">
          <SmallTitle
            title="Top Features"
            icon={<FeatureIcon className="h-4 w-4 text-amber-400" />}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            All-in-One School Management Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline every aspect of school administration with our
            comprehensive platform.
          </p>
        </div>
      </div>

      <ContactUs />
    </div>
  );
};
export default Page;
