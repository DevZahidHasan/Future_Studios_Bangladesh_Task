import { Suspense } from "react";
import { AnalyticsService } from "@/services/analytics.service";
import { ActivitiesService } from "@/services/activities.service";
import { KPICards } from "@/components/dashboard/kpi-cards";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { OrdersChart } from "@/components/dashboard/orders-chart";
import { ActivityFeed } from "@/components/dashboard/activity-feed";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [summaryResponse, activitiesResponse] = await Promise.all([
    AnalyticsService.fetchSummary(),
    ActivitiesService.fetchRecent()
  ]);

  if (summaryResponse.error || !summaryResponse.data) {
    return (
      <div className="p-6 text-destructive">
        <h2 className="text-xl font-bold">Failed to load dashboard data</h2>
        <p>{summaryResponse.error?.message || "Unknown error occurred while fetching analytics."}</p>
      </div>
    );
  }

  const summary = summaryResponse.data;
  const activities = activitiesResponse.data || [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back. Here's what's happening with your store today.
        </p>
      </div>

      <KPICards summary={summary} />

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <RevenueChart data={summary.monthlyData} />
        <OrdersChart data={summary.monthlyData} />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <ActivityFeed activities={activities.slice(0, 8)} />
        <div className="col-span-1 lg:col-span-4 rounded-xl border border-dashed border-border flex items-center justify-center p-6 text-muted-foreground bg-secondary/20">
          <p className="text-sm">Top Products Widget (Coming Soon)</p>
        </div>
      </div>
    </div>
  );
}
