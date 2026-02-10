"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  UserCog,
  MessageSquare,
  DollarSign,
  Bus,
  Package,
  BarChart3,
  Settings2,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/components/logo";

// This is sample data.
const data = {};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };

  const sidebarLinks = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
        },
      ],
    },

    {
      title: "Student Management",
      url: "/students",
      icon: Users,
      items: [
        {
          title: "Student Directory",
          url: "/students/directory",
        },
        {
          title: "Enrollment",
          url: "/students/enrollment",
        },
        {
          title: "Attendance",
          url: "/students/attendance",
        },
        {
          title: "Performance",
          url: "/students/performance",
        },
      ],
    },

    {
      title: "Academics",
      url: "/academics",
      icon: GraduationCap,
      items: [
        {
          title: "Curriculum",
          url: "/academics/curriculum",
        },
        {
          title: "Timetable",
          url: "/academics/timetable",
        },
        {
          title: "Examinations",
          url: "/academics/examinations",
        },
        {
          title: "Assignments",
          url: "/academics/assignments",
        },
        {
          title: "Report Cards",
          url: "/academics/report-cards",
        },
      ],
    },

    {
      title: "Staff Management",
      url: "/staff",
      icon: UserCog,
      items: [
        {
          title: "Staff Directory",
          url: "/staff/directory",
        },
        {
          title: "Attendance",
          url: "/staff/attendance",
        },
        {
          title: "Leave Management",
          url: "/staff/leave",
        },
        {
          title: "Performance",
          url: "/staff/performance",
        },
      ],
    },

    {
      title: "Communication",
      url: "/communication",
      icon: MessageSquare,
      items: [
        {
          title: "Messages",
          url: "/communication/messages",
        },
        {
          title: "Announcements",
          url: "/communication/announcements",
        },
        {
          title: "Notice Board",
          url: "/communication/notice-board",
        },
        {
          title: "Emergency Alerts",
          url: "/communication/emergency-alerts",
        },
      ],
    },

    {
      title: "Finance",
      url: "/finance",
      icon: DollarSign,
      items: [
        {
          title: "Fee Management",
          url: "/finance/fees",
        },
        {
          title: "Payments",
          url: "/finance/payments",
        },
        {
          title: "Scholarships",
          url: "/finance/scholarships",
        },
        {
          title: "Reports",
          url: "/finance/reports",
        },
      ],
    },

    {
      title: "Transport",
      url: "/transport",
      icon: Bus,
      items: [
        {
          title: "Routes",
          url: "/transport/routes",
        },
        {
          title: "Tracking",
          url: "/transport/tracking",
        },
        {
          title: "Drivers",
          url: "/transport/drivers",
        },
        {
          title: "Maintenance",
          url: "/transport/maintenance",
        },
      ],
    },

    {
      title: "Resources",
      url: "/resources",
      icon: Package,
      items: [
        {
          title: "Library",
          url: "/resources/library",
        },
        {
          title: "Inventory",
          url: "/resources/inventory",
        },
        {
          title: "Facilities",
          url: "/resources/facilities",
        },
        {
          title: "Assets",
          url: "/resources/assets",
        },
      ],
    },

    {
      title: "Reports & Analytics",
      url: "/reports",
      icon: BarChart3,
      items: [
        {
          title: "Academic Reports",
          url: "/reports/academic",
        },
        {
          title: "Financial Reports",
          url: "/reports/financial",
        },
        {
          title: "Custom Reports",
          url: "/reports/custom",
        },
        {
          title: "Analytics Dashboard",
          url: "/reports/analytics",
        },
      ],
    },

    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "School Profile",
          url: "/settings/school-profile",
        },
        {
          title: "User Management",
          url: "/settings/users",
        },
        {
          title: "System Settings",
          url: "/settings/system",
        },
        {
          title: "Backup & Security",
          url: "/settings/security",
        },
      ],
    },
  ];
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
