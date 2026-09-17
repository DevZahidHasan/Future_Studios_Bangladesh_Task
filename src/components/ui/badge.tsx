import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "completed" | "processing" | "pending" | "failed"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
    success: "border-transparent bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    warning: "border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400",
    
    // Status-specific soft colors for dashboard
    completed: "border-transparent bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/25",
    processing: "border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400 hover:bg-amber-500/25",
    pending: "border-transparent bg-blue-500/15 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25",
    failed: "border-transparent bg-red-500/15 text-red-700 dark:text-red-400 hover:bg-red-500/25",
  }

  // Fallback to default if an invalid variant is passed
  const selectedVariant = variants[variant] || variants.default;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        selectedVariant,
        className
      )}
      {...props}
    />
  )
}

export { Badge }
