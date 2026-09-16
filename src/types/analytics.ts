export interface KpiMetric {
  value: number;
  previousValue: number;
  trendPercentage: number;
  isPositive: boolean;
}

export interface TimeseriesDataPoint {
  date: string;
  revenue: number;
  orders: number;
}

export interface AnalyticsSummary {
  totalRevenue: KpiMetric;
  totalOrders: KpiMetric;
  activeCustomers: KpiMetric;
  conversionRate: KpiMetric;
  revenueTimeseries: TimeseriesDataPoint[];
}
