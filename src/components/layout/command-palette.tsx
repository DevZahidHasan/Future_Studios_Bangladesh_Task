"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, LayoutDashboard, ShoppingCart, Settings, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import gsap from "gsap";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  // Toggle the menu when ?K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Run a GSAP animation on the overlay when it mounts
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        ".cmdk-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        ".cmdk-dialog",
        { opacity: 0, scale: 0.95, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "expo.out" }
      );
    }
  }, [open]);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150] cmdk-overlay bg-background/50 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <Command 
        className="cmdk-dialog relative w-full max-w-[640px] overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}
        loop
      >
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
          <Command.Input 
            autoFocus 
            placeholder="Search orders, pages, or settings..." 
            className="flex h-11 w-full rounded-md bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus:ring-0 sm:text-sm" 
          />
        </div>
        
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 scrollbar-thin">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/"))}
              className="group relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm text-foreground outline-none aria-selected:bg-secondary aria-selected:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/orders"))}
              className="group relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm text-foreground outline-none aria-selected:bg-secondary aria-selected:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Orders Management</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Settings" className="px-2 py-1.5 text-xs font-medium text-muted-foreground mt-2 border-t border-border/50">
            <Command.Item 
              onSelect={() => runCommand(() => setTheme("light"))}
              className="group relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm text-foreground outline-none aria-selected:bg-secondary aria-selected:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light Mode</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => setTheme("dark"))}
              className="group relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm text-foreground outline-none aria-selected:bg-secondary aria-selected:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark Mode</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => setTheme("system"))}
              className="group relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm text-foreground outline-none aria-selected:bg-secondary aria-selected:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Monitor className="mr-2 h-4 w-4" />
              <span>System Theme</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
