"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Search, Filter, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

export function OrdersToolbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Local state for debouncing search
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  // Create a new URLSearchParams object from current params
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      params.delete("page"); // Reset page to 1 when filters change
      return params.toString();
    },
    [searchParams]
  );

  // Debounced Search Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== (searchParams.get("q") || "")) {
        router.push(`${pathname}?${createQueryString("q", searchQuery)}`);
      }
    }, 400); // 400ms debounce
    return () => clearTimeout(timer);
  }, [searchQuery, pathname, router, createQueryString, searchParams]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`${pathname}?${createQueryString("status", e.target.value === "all" ? "" : e.target.value)}`);
  };

  const handleDateChange = (name: "date_from" | "date_to", value: string) => {
    router.push(`${pathname}?${createQueryString(name, value)}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-4">
      {/* Search Input */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          type="text" 
          placeholder="Search orders, customers..." 
          className="pl-9 bg-background/50 backdrop-blur-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Status Dropdown */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <select 
            className="h-10 w-full sm:w-[160px] appearance-none rounded-md border border-input bg-background/50 pl-9 pr-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-primary/50"
            onChange={handleStatusChange}
            defaultValue={searchParams.get("status") || "all"}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
        </div>

        {/* Date Filters */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input 
              type="date" 
              className="h-10 w-[140px] appearance-none rounded-md border border-input bg-background/50 pl-9 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors hover:border-primary/50 text-muted-foreground"
              defaultValue={searchParams.get("date_from") || ""}
              onChange={(e) => handleDateChange("date_from", e.target.value)}
              title="From Date"
            />
          </div>
          <span className="text-muted-foreground text-sm">-</span>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input 
              type="date" 
              className="h-10 w-[140px] appearance-none rounded-md border border-input bg-background/50 pl-9 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors hover:border-primary/50 text-muted-foreground"
              defaultValue={searchParams.get("date_to") || ""}
              onChange={(e) => handleDateChange("date_to", e.target.value)}
              title="To Date"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
