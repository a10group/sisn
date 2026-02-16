"use client";

import { cn } from "@/lib/utils";
import React, { useState, useCallback, useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp, ChevronDown } from "lucide-react";
import { PhoneInputProps } from "@/types";
import { countries } from "@/lib/countries";

function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

const defaultCountry = countries.find((c) => c.countryCode === "SL")!;

export default function PhoneInput({
  register,
  errors,
  label,
  name,
  toolTipText,
  placeholder,
  setValue,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries;
    const q = searchQuery.toLowerCase();
    return countries.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.phoneCode.includes(q) ||
        c.countryCode.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const updateFormValue = useCallback(
    (country: typeof defaultCountry, phone: string) => {
      const fullNumber = `${country.phoneCode}${phone}`;
      setValue(name, fullNumber);
    },
    [name, setValue],
  );

  const handleCountrySelect = useCallback(
    (country: typeof defaultCountry) => {
      setSelectedCountry(country);
      setIsOpen(false);
      setSearchQuery("");
      updateFormValue(country, phoneNumber);
    },
    [phoneNumber, updateFormValue],
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      setPhoneNumber(value);
      updateFormValue(selectedCountry, value);
    },
    [selectedCountry, updateFormValue],
  );

  return (
    <div>
      <div className="flex space-x-2 items-center">
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
        <div className="relative flex rounded-md shadow-sm ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
          {/* Country code dropdown trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "flex items-center gap-1 rounded-l-md border-r border-border bg-muted/50 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors",
                "focus:outline-none focus:ring-0",
              )}
              aria-label="Select country code"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
            >
              <span
                className="text-base leading-none"
                role="img"
                aria-label={selectedCountry.title}
              >
                {getFlagEmoji(selectedCountry.countryCode)}
              </span>
              <span className="font-medium">{selectedCountry.phoneCode}</span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 text-muted-foreground transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            {/* Dropdown */}
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
                {/* Dropdown panel */}
                <div className="absolute left-0 top-full z-50 mt-1 w-72 rounded-md border border-border bg-popover shadow-lg">
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
                      filteredCountries.map((country) => (
                        <li
                          key={country.countryCode}
                          role="option"
                          aria-selected={
                            selectedCountry.countryCode === country.countryCode
                          }
                          onClick={() => handleCountrySelect(country)}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors",
                            selectedCountry.countryCode ===
                              country.countryCode && "bg-accent font-medium",
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
                          <span className="text-muted-foreground">
                            {country.phoneCode}
                          </span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Phone number input */}
          <input
            id={name}
            type="tel"
            {...register(name, { required: true })}
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={cn(
              "block w-full flex-1 rounded-r-md border-0 bg-background py-2 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0",
              errors[name] && "text-destructive",
            )}
            placeholder={placeholder || "Enter phone number"}
          />
        </div>

        {/* Hidden input to store the full phone value */}
        <input type="hidden" {...register(name, { required: true })} />

        {errors[name] && (
          <span className="mt-1 block text-xs text-destructive">
            {label} is required
          </span>
        )}
      </div>
    </div>
  );
}
