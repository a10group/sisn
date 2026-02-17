"use client";

import { cn } from "@/lib/utils";
import React, { useState, useCallback, useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp, ChevronDown, Check } from "lucide-react";
import { CountrySelectProps } from "@/types";
import { countries } from "@/lib/countries";

function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

export default function RoleSelect({
  register,
  errors,
  label,
  name,
  toolTipText,
  placeholder = "Select a country",
  setValue,
}: CountrySelectProps) {
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof countries)[0] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries;
    const q = searchQuery.toLowerCase();
    return countries.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.countryCode.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const handleCountrySelect = useCallback(
    (country: (typeof countries)[0]) => {
      setSelectedCountry(country);
      setIsOpen(false);
      setSearchQuery("");
      setValue(name, country.title);
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
      <div className="mt-2 relative">
        {/* Hidden input for react-hook-form */}
        <input type="hidden" {...register(name, { required: true })} />

        {/* Dropdown trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm shadow-sm ring-1 ring-inset ring-border bg-background transition-colors",
            "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary",
            !selectedCountry && "text-muted-foreground",
            errors[name] && "ring-destructive",
          )}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="flex items-center gap-2 truncate">
            {selectedCountry ? (
              <>
                <span
                  className="text-base leading-none"
                  role="img"
                  aria-label={selectedCountry.title}
                >
                  {getFlagEmoji(selectedCountry.countryCode)}
                </span>
                <span className="text-foreground">{selectedCountry.title}</span>
              </>
            ) : (
              placeholder
            )}
          </span>
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0 text-muted-foreground transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {/* Dropdown panel */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                setIsOpen(false);
                setSearchQuery("");
              }}
            />
            {/* Panel */}
            <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-md border border-border bg-popover shadow-lg">
              {/* Search input */}
              <div className="border-b border-border p-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search country..."
                  className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                />
              </div>
              {/* Country list */}
              <ul role="listbox" className="max-h-60 overflow-y-auto py-1">
                {filteredCountries.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-muted-foreground">
                    No countries found
                  </li>
                ) : (
                  filteredCountries.map((country) => {
                    const isSelected =
                      selectedCountry?.countryCode === country.countryCode;
                    return (
                      <li
                        key={country.countryCode}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleCountrySelect(country)}
                        className={cn(
                          "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors",
                          isSelected && "bg-accent",
                        )}
                      >
                        <span
                          className="text-base leading-none"
                          role="img"
                          aria-label={country.title}
                        >
                          {getFlagEmoji(country.countryCode)}
                        </span>
                        <span className="flex-1 truncate text-foreground">
                          {country.title}
                        </span>
                        {isSelected && (
                          <Check className="h-4 w-4 text-primary shrink-0" />
                        )}
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </>
        )}

        {errors[name] && (
          <span className="mt-1 block text-xs text-destructive">
            {label} is required
          </span>
        )}
      </div>
    </div>
  );
}
