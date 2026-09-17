"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OrdersPaginationProps {
  currentPage: number;
  totalPages: number;
}

export function OrdersPagination({ currentPage, totalPages }: OrdersPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.push(createPageUrl(currentPage - 1))}
        disabled={currentPage <= 1}
        className="p-1.5 rounded-md border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground disabled:opacity-50 disabled:pointer-events-none transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      <span className="text-sm font-medium px-2">
        Page {currentPage} of {totalPages}
      </span>
      
      <button
        onClick={() => router.push(createPageUrl(currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="p-1.5 rounded-md border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground disabled:opacity-50 disabled:pointer-events-none transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
