"use client";

import Link from "next/link";
import { Home, ArrowLeft, AlertCircle, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorCardProps {
  code: string;
  title: string;
  description: string;
  showGoBack?: boolean;
}

export function ErrorCard({
  code,
  title,
  description,
  showGoBack = true,
}: ErrorCardProps) {
  const isServerError = code === "500";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/50 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card px-8 py-12 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-destructive">
          {isServerError ? (
            <ServerCrash className="h-10 w-10 text-destructive-foreground" />
          ) : (
            <AlertCircle className="h-10 w-10 text-destructive-foreground" />
          )}
        </div>

        {/* Heading */}
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground text-balance">
          {code} - {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-12">
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>

          {showGoBack && (
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} SISN. All rights reserved.
      </p>
    </div>
  );
}
