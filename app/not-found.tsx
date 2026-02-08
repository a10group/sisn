"use client";

import { ErrorCard } from "@/components/error-card";

export default function NotFound() {
  return (
    <ErrorCard
      code="404"
      title="Page Not Found"
      description="Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
    />
  );
}
