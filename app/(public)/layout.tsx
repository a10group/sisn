import React, { ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/frontend/site-footer";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
};
export default DashboardLayout;
