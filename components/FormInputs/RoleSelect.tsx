"use client";

import React, { useCallback } from "react";
import Select from "react-tailwindcss-select";
import type { SelectValue } from "react-tailwindcss-select/dist/components/type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import { RoleSelectProps } from "@/types";

const roles = [
  { value: "principal", label: "Principal/Leadership/Mgt" },
  { value: "school_admin", label: "School Administrator" },
  { value: "head_teacher", label: "Head Teacher" },
  { value: "teacher_parent_student", label: "Teacher/Parent/Student" },
  { value: "consultant_reseller", label: "Consultant/Reseller" },
  { value: "other", label: "Other" },
];

export default function RoleSelect({
  register,
  errors,
  label,
  name,
  toolTipText,
  placeholder = "Roles",
  setValue,
}: RoleSelectProps) {
  const [selected, setSelected] = React.useState<SelectValue>(null);

  const handleChange = useCallback(
    (value: SelectValue) => {
      setSelected(value);
      if (value === null) {
        setValue(name, "");
      } else if (Array.isArray(value)) {
        const labels = value.map((v) => {
          const role = roles.find((r) => r.value === v.value);
          return role?.label ?? v.value;
        });
        setValue(name, labels.join(", "));
      } else {
        const role = roles.find((r) => r.value === value.value);
        setValue(name, role?.label ?? value.value);
      }
    },
    [name, setValue],
  );

  return (
    <div>
      <div className="flex gap-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-foreground"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button">
                  <CircleHelp className="w-4 h-4 text-muted-foreground" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <input type="hidden" {...register(name, { required: true })} />

        <Select
          value={selected}
          onChange={handleChange}
          options={roles}
          isMultiple={true}
          isSearchable={true}
          isClearable={true}
          placeholder={placeholder}
          searchInputPlaceholder="Search..."
          primaryColor="blue"
          classNames={{
            menuButton: () =>
              `flex text-sm text-foreground border ${
                errors[name] ? "border-destructive" : "border-border"
              } rounded-md shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-primary bg-background`,
            menu: "absolute z-50 w-full bg-popover border border-border rounded-md shadow-lg mt-1",
            listItem: (value?: { isSelected?: boolean }) => {
              const isSelected = value?.isSelected;

              return `block transition duration-200 px-3 py-2 cursor-pointer text-sm ${
                isSelected
                  ? "text-primary-foreground bg-primary"
                  : "text-foreground hover:bg-accent"
              }`;
            },
            searchBox:
              "w-full py-2 px-3 text-sm text-foreground bg-background border-b border-border focus:outline-none focus:ring-0",
            searchIcon: "hidden",
            tagItem: () =>
              "flex items-center gap-1 bg-accent text-foreground rounded px-2 py-0.5 text-xs",
            tagItemIconContainer:
              "flex items-center cursor-pointer rounded-full hover:bg-muted-foreground/20 p-0.5",
            tagItemText: "truncate max-w-[150px]",
          }}
        />

        {errors[name] && (
          <span className="mt-1 block text-xs text-destructive">
            {label} is required
          </span>
        )}
      </div>
    </div>
  );
}
