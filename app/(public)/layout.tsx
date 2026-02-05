import React, { ReactNode } from "react";
import SiteHeader from "@/components/site-header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  );
};
export default DashboardLayout;
