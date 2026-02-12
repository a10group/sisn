"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  DollarSign,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Search,
  Calendar,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { StarIcon } from "@/icons/title";
import SmallTitle from "@/components/frontend/small-title";
import SectionHeader from "@/components/frontend/section-header";

const features = [
  {
    tabTitle: "Students",
    icon: Users,
    title: "Student Management",
    description:
      "Manage enrollments, profiles, and academic history with ease.",
    subFeatures: [
      "Student registration & enrollment",
      "Comprehensive student profiles",
      "Academic history tracking",
      "Health & emergency records",
      "Document management",
    ],
  },
  {
    tabTitle: "Academics",
    icon: GraduationCap,
    title: "Academic Management",
    description:
      "Plan curriculum, track attendance, and manage exams efficiently.",
    subFeatures: [
      "Curriculum planning",
      "Class schedules & timetables",
      "Attendance tracking",
      "Examinations & grading",
      "Report card generation",
    ],
  },
  {
    tabTitle: "Finance",
    icon: DollarSign,
    title: "Financial Management",
    description:
      "Handle fees, payments, budgets, and financial reports seamlessly.",
    subFeatures: [
      "Fee management",
      "Online payments",
      "Invoice & receipt generation",
      "Expense tracking",
      "Financial reporting",
    ],
  },
  {
    tabTitle: "Analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Gain insights on performance, attendance, and finances.",
    subFeatures: [
      "Student performance analytics",
      "Attendance reports",
      "Financial insights",
      "Custom report builder",
      "Decision-support dashboards",
    ],
  },
];

function StudentPreview() {
  const students = [
    { name: "Amina Diallo", grade: "Grade 10", status: "Active" },
    { name: "Kwame Mensah", grade: "Grade 8", status: "Active" },
    { name: "Fatou Sow", grade: "Grade 12", status: "Active" },
    { name: "Ibrahim Keita", grade: "Grade 9", status: "Pending" },
  ];
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-foreground text-sm">
          Student Directory
        </h4>
        <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground">
          <Search className="h-3 w-3" />
          <span>Search students...</span>
        </div>
      </div>
      <div className="space-y-3">
        {students.map((student) => (
          <div
            key={student.name}
            className="flex items-center justify-between rounded-xl border border-border px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-foreground">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {student.name}
                </p>
                <p className="text-xs text-muted-foreground">{student.grade}</p>
              </div>
            </div>
            <span
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                student.status === "Active"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {student.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AcademicsPreview() {
  const schedule = [
    {
      time: "08:00",
      subject: "Mathematics",
      teacher: "Mr. Ouattara",
      room: "Room 101",
    },
    {
      time: "09:30",
      subject: "English",
      teacher: "Mrs. Diop",
      room: "Room 204",
    },
    { time: "11:00", subject: "Science", teacher: "Dr. Toure", room: "Lab 3" },
    {
      time: "13:00",
      subject: "History",
      teacher: "Ms. Balde",
      room: "Room 108",
    },
  ];
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-foreground text-sm">
          Today&apos;s Schedule
        </h4>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span>Monday</span>
        </div>
      </div>
      <div className="space-y-3">
        {schedule.map((item) => (
          <div
            key={item.time}
            className="flex items-center gap-4 rounded-xl border border-border px-4 py-3"
          >
            <span className="text-xs font-mono text-muted-foreground w-10 shrink-0">
              {item.time}
            </span>
            <div className="h-8 w-1 rounded-full bg-accent shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {item.subject}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.teacher} &middot; {item.room}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancePreview() {
  const transactions = [
    { label: "Tuition Fee - Grade 10", amount: "+$1,200", type: "income" },
    { label: "Lab Equipment", amount: "-$340", type: "expense" },
    { label: "Tuition Fee - Grade 8", amount: "+$1,100", type: "income" },
    { label: "Maintenance", amount: "-$520", type: "expense" },
  ];
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-foreground text-sm">
          Recent Transactions
        </h4>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CreditCard className="h-3.5 w-3.5" />
          <span>This month</span>
        </div>
      </div>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.label}
            className="flex items-center justify-between rounded-xl border border-border px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  tx.type === "income"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-500"
                }`}
              >
                <DollarSign className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground">{tx.label}</p>
            </div>
            <span
              className={`text-sm font-semibold ${
                tx.type === "income" ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  const metrics = [
    { label: "Avg. Attendance", value: "94.2%", change: "+2.1%" },
    { label: "Pass Rate", value: "87.6%", change: "+4.3%" },
    { label: "Fee Collection", value: "91.0%", change: "+1.8%" },
  ];
  const bars = [65, 78, 92, 85, 70, 88, 95];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
      <div className="flex items-end justify-between gap-1.5 h-24 px-1 sm:gap-2">
        <h4 className="font-semibold text-foreground text-sm">
          Performance Overview
        </h4>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <TrendingUp className="h-3.5 w-3.5" />
          <span>This week</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-border px-3 py-3 text-center"
          >
            <p className="text-lg font-bold text-foreground">{m.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
            <span className="text-xs font-medium text-emerald-600">
              {m.change}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-between gap-2 h-24 px-1">
        {bars.map((h, i) => (
          <div
            key={days[i]}
            className="flex flex-col items-center gap-1.5 flex-1"
          >
            <div
              className="w-full rounded-md bg-foreground/10 relative overflow-hidden"
              style={{ height: `${h}%` }}
            >
              <div
                className="absolute bottom-0 w-full rounded-md bg-foreground"
                style={{ height: `${h}%` }}
              />
            </div>
            <span className="text-[10px] text-muted-foreground">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const previewComponents: Record<string, React.ReactNode> = {
  Students: <StudentPreview />,
  Academics: <AcademicsPreview />,
  Finance: <FinancePreview />,
  Analytics: <AnalyticsPreview />,
};

export function TabbedFeatures() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Additional Features"
          icon={StarIcon}
          heading="Everything You Need to Run Your School"
          description="From student records to financial reporting, SISN covers every
            aspect of school management."
        />

        {/* Tabbed Features */}
        <Tabs defaultValue="Students" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="flex w-full max-w-full gap-2 overflow-x-auto no-scrollbar bg-transparent p-0 sm:justify-center">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.tabTitle}
                  value={feature.tabTitle}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground shadow-sm transition-all data-[state=active]:bg-foreground data-[state=active]:text-primary-foreground data-[state=active]:border-foreground data-[state=active]:shadow-md hover:bg-secondary sm:px-5"
                >
                  <feature.icon className="h-4 w-4 text-gree-500" />
                  {feature.tabTitle}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map((feature) => (
            <TabsContent key={feature.tabTitle} value={feature.tabTitle}>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                {/* Left: Text Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-pretty">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                    {feature.description}
                  </p>
                  <ul className="space-y-3.5 mb-10">
                    {feature.subFeatures.map((sub) => (
                      <li
                        key={sub}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-sm">{sub}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="px-7 py-5 text-sm rounded-full"
                    >
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Right: Preview Card */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-full sm:max-w-md mx-auto lg:mx-0">
                    {previewComponents[feature.tabTitle]}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
