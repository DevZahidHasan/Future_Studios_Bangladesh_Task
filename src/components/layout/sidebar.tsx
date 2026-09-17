"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, Activity, Settings, Package2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Analytics', href: '#', icon: Activity, disabled: true },
  { name: 'Settings', href: '#', icon: Settings, disabled: true },
];

export function Sidebar({ className, onClose, ...props }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col w-64 border-r border-border bg-card text-card-foreground shadow-2xl md:shadow-none",
        className
      )}
      {...props}
    >
      <div className="flex h-16 items-center justify-between px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity" onClick={onClose}>
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-primary-foreground">
            <Package2 className="w-5 h-5" />
          </div>
          <span>Nexus Analytics</span>
        </Link>
        {onClose && (
          <Button variant="ghost" size="icon" className="md:hidden -mr-2" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <div className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Overview
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.disabled ? '#' : item.href}
              onClick={item.disabled ? undefined : onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                item.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary hover:text-secondary-foreground",
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive && "text-primary")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-border">
        <div className="glass-card rounded-xl p-4 text-sm text-center border-border/50">
          <p className="font-medium">Pro Plan</p>
          <p className="text-muted-foreground text-xs mt-1">24 days remaining</p>
        </div>
      </div>
    </aside>
  );
}
