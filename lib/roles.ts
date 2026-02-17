import { Country } from "@/lib/countries";

export interface Roles {
  label: string;
  value: string;
}

export const roles: Roles[] = [
  {
    label: "Principle/Leadership/Mgt",
    value: "Leadership/Management",
  },
  {
    label: "School Administrator",
    value: "Administrator",
  },
  {
    label: "Teacher/Parent/Student",
    value: "teacher/parent/student",
  },
  {
    label: "Other",
    value: "other",
  },
];
