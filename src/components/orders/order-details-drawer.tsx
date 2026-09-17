import { X, Package, CreditCard, Truck, User, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Order } from "@/types";
import { cn } from "@/lib/utils";

interface OrderDetailsDrawerProps {
  order: Order | null;
  onClose: () => void;
}

export function OrderDetailsDrawer({ order, onClose }: OrderDetailsDrawerProps) {
  if (!order) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-card border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col translate-x-0">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Order Details</h2>
            <p className="text-sm text-muted-foreground">{order.id}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-muted-foreground hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Status Section */}
          <section className="space-y-3">
            <h3 className="text-sm font-medium uppercase text-muted-foreground">Status</h3>
            <div className="flex items-center gap-3">
              <Badge variant={order.status as any} className="capitalize px-3 py-1 text-sm">
                {order.status}
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(order.createdAt).toLocaleDateString()}
              </div>
            </div>
          </section>

          {/* Customer Section */}
          <section className="space-y-3">
            <h3 className="text-sm font-medium uppercase text-muted-foreground">Customer</h3>
            <div className="glass-card rounded-lg p-4 space-y-3 border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold">
                  {order.customer.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{order.customer.name}</p>
                  <p className="text-sm text-muted-foreground">{order.customer.email}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Line Items Section */}
          <section className="space-y-3">
            <h3 className="text-sm font-medium uppercase text-muted-foreground">Line Items</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <ul className="divide-y divide-border">
                {order.items.map((item, idx) => (
                  <li key={idx} className="p-4 flex items-center justify-between hover:bg-secondary/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.productName}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="font-medium text-sm">
                      {(item.price * item.quantity).toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-secondary/30 p-4 border-t border-border flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">{order.total.toFixed(2)}</span>
              </div>
            </div>
          </section>

          {/* Shipping Section */}
          <section className="space-y-3">
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
