"use client";

import { Menu, Search, Bell } from 'lucide-react';

export function Topbar() {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-md px-4 md:px-6 sticky top-0 z-10">
      {/* Mobile Menu Button (Will connect to a sheet in Phase 3/7) */}
      <button className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors">
        <Menu className="w-5 h-5" />
        <span className="sr-only">Toggle menu</span>
      </button>

      <div className="flex-1">
        {/* Placeholder for Breadcrumbs or Page Title */}
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Placeholder for Cmd+K Trigger */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-colors border border-border/50 shadow-sm">
          <Search className="w-4 h-4" />
          <span>Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
        
        {/* Mobile search icon */}
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Search className="w-5 h-5" />
        </button>

        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
        </button>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-border ml-2 bg-secondary flex-shrink-0 cursor-pointer hover:ring-2 ring-primary/20 transition-all">
          <img src="https://i.pravatar.cc/150?u=admin" alt="User avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
