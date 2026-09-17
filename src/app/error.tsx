"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Dashboard caught an error:", error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-12rem)] w-full flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
      <div className="glass-card flex max-w-md flex-col items-center justify-center space-y-6 rounded-2xl p-10 text-center shadow-2xl border-destructive/20">
        <div className="rounded-full bg-destructive/10 p-4 text-destructive">
          <AlertCircle className="h-12 w-12" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Something went wrong</h2>
          <p className="text-sm text-muted-foreground">
            {error.message || "An unexpected error occurred while loading this view."}
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          <RefreshCcw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  );
}
