import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Package, MousePointerClick, TrendingUp, TrendingDown } from "lucide-react";
import type { AnalyticsSummary } from "@/types";

interface KPICardsProps {
  summary: AnalyticsSummary;
}

export function KPICards({ summary }: KPICardsProps) {
  const metrics = [
    {
      title: "Total Revenue",
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(summary.totalRevenue),
      trend: summary.revenueGrowth,
      icon: DollarSign,
    },
    {
      title: "Active Orders",
      value: summary.activeOrders.toLocaleString(),
      trend: 5.2, // Mock positive trend for orders
      icon: Package,
    },
    {
      title: "Conversion Rate",
      value: `${summary.conversionRate.toFixed(1)}%`,
      trend: -1.1, // Mock negative trend
      icon: MousePointerClick,
    },
    {
      title: "Revenue Growth",
      value: `+${summary.revenueGrowth}%`,
      trend: summary.revenueGrowth,
      icon: TrendingUp,
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, i) => {
        const Icon = metric.icon;
        const isPositive = metric.trend > 0;
        
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
                <Badge variant={isPositive ? "success" : "destructive"} className="px-1.5 py-0 rounded-sm font-medium">
                  {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {Math.abs(metric.trend)}%
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
