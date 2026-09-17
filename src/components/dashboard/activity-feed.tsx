import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart, CheckCircle2, UserPlus, FileText, AlertCircle } from "lucide-react";
import type { ActivityEvent } from "@/types";
import { cn } from "@/lib/utils";

interface ActivityFeedProps {
  activities: ActivityEvent[];
}

const eventStyles: Record<ActivityEvent['type'], { icon: any; color: string; bg: string }> = {
  order_placed: { icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-500/10" },
  order_completed: { icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  user_signup: { icon: UserPlus, color: "text-purple-500", bg: "bg-purple-500/10" },
  report_generated: { icon: FileText, color: "text-orange-500", bg: "bg-orange-500/10" },
};

function formatTimeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);
  
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  return `${Math.floor(diffInHours / 24)}d ago`;
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>System events from the last 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {activities.map((activity, i) => {
            const style = eventStyles[activity.type] || { icon: AlertCircle, color: "text-muted-foreground", bg: "bg-secondary" };
            const Icon = style.icon;

            return (
              <div key={activity.id} className="relative flex items-center justify-between group">
                <div className="flex items-center gap-4 w-full">
                  <div className={cn("relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-background shadow-sm transition-transform group-hover:scale-110", style.bg, style.color)}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-sm font-medium leading-none">{activity.description}</p>
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                      <span>{formatTimeAgo(activity.timestamp)}</span>
                      {activity.metadata?.userId && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span>User ID: {activity.metadata.userId.split('-')[0]}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
