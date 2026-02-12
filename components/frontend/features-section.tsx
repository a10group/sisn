import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  GraduationCap,
  Briefcase,
  DollarSign,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";
import SmallTitle from "@/components/frontend/small-title";
import { FeatureIcon } from "@/icons/title";
import SectionHeader from "@/components/frontend/section-header";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Manage enrollments, profiles, and academic history with ease.",
    highlights: ["Enrollment tracking", "Student profiles", "Academic records"],
  },
  {
    icon: GraduationCap,
    title: "Academic Management",
    description:
      "Plan curriculum, track attendance, and manage exams efficiently.",
    highlights: [
      "Curriculum planning",
      "Attendance tracking",
      "Exam management",
    ],
  },
  {
    icon: Briefcase,
    title: "Staff Management",
    description:
      "Staff profiles, performance tracking, and payroll in one place.",
    highlights: [
      "Staff profiles",
      "Performance reviews",
      "Payroll integration",
    ],
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description:
      "Handle fees, payments, budgets, and financial reports seamlessly.",
    highlights: ["Fee collection", "Budget tracking", "Financial reports"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Gain insights on performance, attendance, and finances.",
    highlights: [
      "Performance analytics",
      "Attendance insights",
      "Custom reports",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Top Features"
          icon={FeatureIcon}
          heading="All-in-One School Management Modules"
          description="Streamline every aspect of school administration with our
            comprehensive platform."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary text-white flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 text-accent-foreground flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="px-8 py-6 text-base rounded-full">
            View Full Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
