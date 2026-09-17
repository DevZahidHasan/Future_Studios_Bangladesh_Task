"use client";

import { useState, useRef, useEffect } from 'react';
import { Menu, Search, Bell, Sun, Moon, LogOut, Settings as SettingsIcon, User } from 'lucide-react';
import { useTheme } from "next-themes";

interface TopbarProps {
  onMenuClick?: () => void;
}

// Custom hook to handle clicks outside of our dropdowns
function useOutsideClick(ref: React.RefObject<HTMLElement | null>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const { theme, setTheme } = useTheme();
  const [userOpen, setUserOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  
  const userRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useOutsideClick(userRef, () => setUserOpen(false));
  useOutsideClick(notifRef, () => setNotifOpen(false));

  const triggerCmdK = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true }));
  };

  return (
    <header className="flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-md px-4 md:px-6 sticky top-0 z-10">
      <button 
        onClick={onMenuClick}
        className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Menu className="w-5 h-5" />
        <span className="sr-only">Toggle menu</span>
      </button>

      <div className="flex-1"></div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Search Trigger */}
        <button 
          onClick={triggerCmdK}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-colors border border-border/50 shadow-sm"
        >
          <Search className="w-4 h-4" />
          <span>Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-xs">?</span>K
          </kbd>
        </button>
        
        {/* Mobile search icon */}
        <button 
          onClick={triggerCmdK}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Theme Switcher */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
          aria-label="Toggle theme"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setNotifOpen(!notifOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-64 rounded-xl border border-border bg-card shadow-lg p-4 animate-in fade-in zoom-in-95 duration-200 z-50">
              <h3 className="font-medium mb-2">Notifications</h3>
              <div className="flex flex-col items-center justify-center py-6 text-center text-muted-foreground">
                <Bell className="w-8 h-8 mb-2 opacity-20" />
                <p className="text-sm">Notification center</p>
                <p className="text-xs text-primary font-medium mt-1 bg-primary/10 px-2 py-0.5 rounded-full">Coming Soon</p>
              </div>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="relative ml-1" ref={userRef}>
          <button 
            onClick={() => setUserOpen(!userOpen)}
            className="w-8 h-8 rounded-full overflow-hidden border border-border bg-secondary flex-shrink-0 cursor-pointer hover:ring-2 ring-primary/20 transition-all"
          >
            <img src="https://i.pravatar.cc/150?u=admin" alt="User avatar" className="w-full h-full object-cover" />
          </button>

          {userOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-lg p-2 animate-in fade-in zoom-in-95 duration-200 z-50">
              <div className="px-3 py-2 border-b border-border mb-1">
                <p className="font-medium text-sm">Zahid Hasan</p>
                <p className="text-xs text-muted-foreground truncate">zahidhasan19932023@gmail.com</p>
              </div>
              
              <div className="flex flex-col">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground rounded-md transition-colors w-full text-left">
                  <User className="w-4 h-4" />
                  My Profile
                  <span className="ml-auto text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase">Soon</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground rounded-md transition-colors w-full text-left">
                  <SettingsIcon className="w-4 h-4" />
                  Account Settings
                  <span className="ml-auto text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase">Soon</span>
                </button>
                <div className="h-px bg-border my-1" />
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-md transition-colors w-full text-left">
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
