"use client";

import { useRef, useState, useEffect } from "react";
import { X, Package, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Order } from "@/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(useGSAP);

interface OrderDetailsDrawerProps {
  order: Order | null;
  onClose: () => void;
}

export function OrderDetailsDrawer({ order, onClose }: OrderDetailsDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  // We need to keep a cached copy of the order so it doesn't immediately 
  // disappear/crash when `order` becomes null during the close animation.
  const [cachedOrder, setCachedOrder] = useState<Order | null>(order);

  useEffect(() => {
    if (order) {
      setCachedOrder(order);
      setIsClosing(false);
    }
  }, [order]);

  const handleClose = () => {
    setIsClosing(true);
  };

  useGSAP(() => {
    if (order && !isClosing) {
      // ANIMATE IN
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.6, ease: "expo.out", clearProps: "transform" }
      );
      
      // Stagger animate the inner content for a premium feel
      gsap.fromTo(
        ".drawer-stagger",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out", delay: 0.1, clearProps: "all" }
      );
    } else if (isClosing) {
      // ANIMATE OUT
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "expo.in",
        onComplete: () => {
          onClose(); // Actually unmount parent state
          setIsClosing(false);
        },
      });
    }
  }, [order, isClosing, onClose]);

  // If there's no order and we aren't currently animating it closed, render nothing
  if (!order && !isClosing) return null;

  // Use the cached order to prevent layout shifts during the closing animation
  const displayOrder = order || cachedOrder;
  if (!displayOrder) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm opacity-0 will-change-opacity"
        onClick={handleClose}
      />
      
      {/* Slide-over panel (FROM RIGHT) */}
      <div 
        ref={panelRef}
        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-card border-l border-border shadow-[[-20px_0_40px_rgba(0,0,0,0.1)]] flex flex-col translate-x-full will-change-transform"
      >
        <div className="flex items-center justify-between p-6 border-b border-border drawer-stagger">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Order Details</h2>
            <p className="text-sm text-muted-foreground">{displayOrder.id}</p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 text-muted-foreground hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Status Section */}
          <section className="space-y-3 drawer-stagger">
            <h3 className="text-sm font-medium uppercase text-muted-foreground">Status</h3>
            <div className="flex items-center gap-3">
              <Badge variant={displayOrder.status as any} className="capitalize px-3 py-1 text-sm">
                {displayOrder.status}
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(displayOrder.createdAt).toLocaleDateString()}
              </div>
            </div>
          </section>

          {/* Customer Section */}
          <section className="space-y-3 drawer-stagger">
            <h3 className="text-sm font-medium uppercase text-muted-foreground">Customer</h3>
            <div className="glass-card rounded-lg p-4 space-y-3 border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold">
                  {displayOrder.customer.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{displayOrder.customer.name}</p>
                  <p className="text-sm text-muted-foreground">{displayOrder.customer.email}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Line Items Section */}
          <section className="space-y-3 drawer-stagger">
            <h3 className="text-sm font-medium uppercase text-muted-foreground">Line Items</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <ul className="divide-y divide-border">
                {displayOrder.items.map((item, idx) => (
                  <li key={idx} className="p-4 flex items-center justify-between hover:bg-secondary/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="font-medium text-sm">
                      {(item.totalPrice).toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-secondary/30 p-4 border-t border-border flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">{displayOrder.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </section>

          {/* Shipping Section */}
          <section className="space-y-3 drawer-stagger">
            <h3 className="text-sm font-medium uppercase text-muted-foreground">Shipping</h3>
            <div className="glass-card rounded-lg p-4 border-border/50 text-sm flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium">Shipping Address</p>
                <p className="text-muted-foreground">123 Nexus Avenue, Suite 456</p>
                <p className="text-muted-foreground">San Francisco, CA 94103</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
