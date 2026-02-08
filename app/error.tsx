"use client";

import { ErrorCard } from "@/components/error-card";

export default function Error() {
  return (
    <ErrorCard
      code="500"
      title="Server Error"
      description="Something went wrong on our end. Please try again later or contact support if the problem persists."
      showGoBack={false}
    />
  );
}
