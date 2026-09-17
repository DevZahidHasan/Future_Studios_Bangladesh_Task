import { Suspense } from "react";
import { OrdersService } from "@/services/orders.service";
import { OrdersTable } from "@/components/orders/orders-table";
import { OrdersToolbar } from "@/components/orders/orders-toolbar";

export const dynamic = "force-dynamic";

interface OrdersPageProps {
  searchParams: Promise<{
    q?: string;
    status?: string;
    date_from?: string;
    date_to?: string;
    page?: string;
  }>;
}

export default async function OrdersPage({ searchParams }: OrdersPageProps) {
  // Extract parameters (Next.js 15+ requires awaiting searchParams)
  const resolvedParams = await searchParams;
  const page = resolvedParams.page ? parseInt(resolvedParams.page, 10) : 1;
  const q = resolvedParams.q || "";
  const status = resolvedParams.status || "";
  const date_from = resolvedParams.date_from || "";
  const date_to = resolvedParams.date_to || "";

  // Fetch filtered orders
  const response = await OrdersService.fetchOrders({
    page,
    limit: 15,
    q,
    status,
    date_from,
    date_to
  });

  const orders = response.data || [];
  const meta = response.meta || { page: 1, limit: 15, total: 0, totalPages: 1 };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Orders Management</h1>
        <p className="text-muted-foreground">
          View, filter, and manage your store's orders.
        </p>
      </div>

      <div className="space-y-4">
        {/* Toolbar with URL Syncing */}
        <OrdersToolbar />

        {/* Data Table */}
        <OrdersTable orders={orders} />
        
        {/* Basic Pagination Controls */}
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4">
          <div>
            Showing {((meta.page - 1) * meta.limit) + (orders.length > 0 ? 1 : 0)} to {((meta.page - 1) * meta.limit) + orders.length} of {meta.total} orders
          </div>
          <div className="flex gap-2">
            {/* Real pagination could be added here syncing with ?page=2 */}
            <span className="px-2">Page {meta.page} of {meta.totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
