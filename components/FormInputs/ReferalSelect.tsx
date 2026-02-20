"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { ReferalSelectProps } from "@/types";
import { referalOptions } from "@/lib/referal";

type Option = { value: string; label: string }; // ensure correct typing

export default function ReferalSelect({
  register,
  errors,
  label,
  name,
  placeholder = "Select an option",
  setValue,
}: ReferalSelectProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setValue(name, option.value);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input type="hidden" {...register(name, { required: true })} />

      {/* Dropdown button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm shadow-sm ring-1 ring-inset ring-border bg-background transition-colors",
          !selectedOption && "text-muted-foreground",
          errors[name] && "ring-destructive",
          "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary",
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "ml-2 h-4 w-4 shrink-0 text-muted-foreground transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <ul className="absolute left-0 right-0 top-full z-50 mt-1 rounded-md border border-border bg-popover shadow-lg max-h-60 overflow-y-auto">
            {referalOptions.map((opt: Option) => {
              const isSelected = selectedOption?.value === opt.value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(opt)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-accent transition-colors",
                    isSelected && "bg-accent",
                  )}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check className="h-4 w-4 text-primary" />}
                </li>
              );
            })}
          </ul>
        </>
      )}

      {errors[name] && (
        <span className="mt-1 block text-xs text-destructive">
          {label} is required
        </span>
      )}
    </div>
  );
}
