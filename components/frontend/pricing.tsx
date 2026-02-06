"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  // SISN Standard Pricing
  const monthlyPrice = 40;
  const annualPrice = 400;
  const annualSavings = monthlyPrice * 12 - annualPrice;

  const modules = [
    "Student management",
    "Staff management",
    "Attendance tracking",
    "Examinations & grading",
    "Parent & student portals",
    "Reports & notifications",
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Flexible pricing designed for schools of all sizes—public or
            private.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="text-sm font-medium text-gray-600">Billing:</span>
          <Button
            variant={!isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
          >
            Annually (Save 8.33%)
          </Button>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:flex lg:max-w-none">
          {/* Left */}
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Standard Plan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              A complete School Information System covering academics,
              administration, and communication needs.
            </p>

            {/* Modules */}
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                Included modules
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>

            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {modules.map((module) => (
                <li key={module} className="flex gap-x-3">
                  <FaCheck className="h-5 w-5 flex-none text-indigo-600" />
                  {module}
                </li>
              ))}
            </ul>
          </div>

          {/* Right / Price */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {isAnnual
                    ? "Best value for growing institutions"
                    : "Flexible short-term option"}
                </p>

                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${isAnnual ? annualPrice : monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {isAnnual ? "/year" : "/month"}
                  </span>
                </p>

                {isAnnual && (
                  <p className="mt-2 text-sm font-medium text-emerald-600">
                    Save ${annualSavings} with annual billing
                  </p>
                )}

                <Button className="mt-10 w-full bg-indigo-600 text-white hover:bg-indigo-500">
                  Start free pilot
                </Button>

                <p className="mt-6 text-xs leading-5 text-gray-600">
                  30-day pilot • No payment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
