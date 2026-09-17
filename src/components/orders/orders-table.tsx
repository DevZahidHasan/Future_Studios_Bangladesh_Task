"use client";

import { useState } from "react";
import type { Order } from "@/types";
import { Badge } from "@/components/ui/badge";
import { OrderDetailsDrawer } from "./order-details-drawer";

interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <>
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-secondary/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Order ID</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">
                    No orders found matching your filters.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr 
                    key={order.id} 
                    className="hover:bg-secondary/40 transition-colors cursor-pointer group"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="px-4 py-4 font-mono text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {order.id}
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-medium text-foreground">{order.customer.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{order.customer.email}</div>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4">
                      <Badge variant={order.status as any} className="capitalize">
                        {order.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-right font-medium">
                      {order.total.toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <OrderDetailsDrawer 
        order={selectedOrder} 
        onClose={() => setSelectedOrder(null)} 
      />
    </>
  );
}
