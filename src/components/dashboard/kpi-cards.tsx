import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Package, Users, MousePointerClick, TrendingUp, TrendingDown } from "lucide-react";
import type { AnalyticsSummary } from "@/types";

interface KPICardsProps {
  summary: AnalyticsSummary;
}

export function KPICards({ summary }: KPICardsProps) {
  const metrics = [
    {
      title: "Total Revenue",
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(summary.totalRevenue.value),
      trend: summary.totalRevenue.trendPercentage,
      isPositive: summary.totalRevenue.isPositive,
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: summary.totalOrders.value.toLocaleString(),
      trend: summary.totalOrders.trendPercentage,
      isPositive: summary.totalOrders.isPositive,
      icon: Package,
    },
    {
      title: "Active Customers",
      value: summary.activeCustomers.value.toLocaleString(),
      trend: summary.activeCustomers.trendPercentage,
      isPositive: summary.activeCustomers.isPositive,
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: `${summary.conversionRate.value.toFixed(1)}%`,
      trend: summary.conversionRate.trendPercentage,
      isPositive: summary.conversionRate.isPositive,
      icon: MousePointerClick,
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, i) => {
        const Icon = metric.icon;
        
        return (
          <Card key={i} className="hover:border-primary/20 transition-colors duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="mt-2 flex items-center text-xs">
                <Badge variant={metric.isPositive ? "success" : "destructive"} className="px-1.5 py-0 rounded-sm font-medium">
                  {metric.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {metric.trend}%
                </Badge>
                <span className="text-muted-foreground ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
