import * as React from "react"
import { TrendingUp, Package } from "lucide-react"

const mockProducts = [
  { id: "PROD-01", name: "Ergonomic Office Chair", sales: 124, revenue: 37188.00, stock: 45, trend: "+12%" },
  { id: "PROD-02", name: "Mechanical Keyboard (Cherry MX)", sales: 98, revenue: 14690.20, stock: 12, trend: "+8%" },
  { id: "PROD-03", name: "Noise-Cancelling Headphones", sales: 85, revenue: 25491.50, stock: 8, trend: "-3%" },
  { id: "PROD-04", name: "27-inch 4K Monitor", sales: 62, revenue: 24793.80, stock: 0, trend: "+24%" },
  { id: "PROD-05", name: "Wireless Ergonomic Mouse", sales: 45, revenue: 4495.50, stock: 110, trend: "+5%" }
];

export function TopProducts() {
  return (
    <div className="col-span-1 lg:col-span-4 glass-card rounded-xl border border-border/50 p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Top Products</h2>
          <p className="text-sm text-muted-foreground">Highest grossing items this month.</p>
        </div>
        <div className="p-2 bg-primary/10 rounded-full text-primary">
          <TrendingUp className="w-5 h-5" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 rounded-lg">
            <tr>
              <th className="px-4 py-3 rounded-l-lg font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Sales</th>
              <th className="px-4 py-3 font-medium text-right rounded-r-lg">Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {mockProducts.map((product) => (
              <tr key={product.id} className="hover:bg-secondary/20 transition-colors group">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-secondary/50 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{product.name}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground">{product.id}</span>
                        {product.stock === 0 ? (
                          <span className="text-destructive font-medium bg-destructive/10 px-1.5 py-0.5 rounded">Out of Stock</span>
                        ) : (
                          <span className="text-emerald-500 font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded">{product.stock} in stock</span>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 font-medium">
                  {product.sales}
                  <span className="text-xs ml-2 text-emerald-500">{product.trend}</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">
                  ${product.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
