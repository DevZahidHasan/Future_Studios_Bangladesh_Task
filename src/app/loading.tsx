import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="h-5 w-96" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-[120px] rounded-xl border border-border" />
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <Skeleton className="col-span-1 lg:col-span-4 h-[350px] rounded-xl border border-border" />
        <Skeleton className="col-span-1 lg:col-span-3 h-[350px] rounded-xl border border-border" />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <Skeleton className="col-span-1 lg:col-span-3 h-[450px] rounded-xl border border-border" />
        <Skeleton className="col-span-1 lg:col-span-4 h-[450px] rounded-xl border border-border" />
      </div>
    </div>
  );
}
