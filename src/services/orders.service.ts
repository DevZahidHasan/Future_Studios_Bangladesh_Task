import { apiClient } from './api-client';
import { Order } from '@/types';

export interface FetchOrdersParams {
  page?: number;
  limit?: number;
  q?: string;
  status?: string;
}

export const OrdersService = {
  async fetchOrders(params: FetchOrdersParams = {}) {
    const searchParams = new URLSearchParams();
    
    if (params.page) searchParams.append('page', params.page.toString());
    if (params.limit) searchParams.append('limit', params.limit.toString());
    if (params.q) searchParams.append('q', params.q);
    if (params.status) searchParams.append('status', params.status);

    const query = searchParams.toString();
    const endpoint = query ? `/orders?${query}` : '/orders';
    
    return apiClient<Order[]>(endpoint, {
      // For Next.js App Router cache control
      cache: 'no-store', 
    });
  },

  async fetchOrderById(id: string) {
    // We didn't build a single item route in Phase 2, but this simulates it
    const res = await this.fetchOrders({ q: id });
    if (res.data && res.data.length > 0) {
      return { data: res.data.find(o => o.id === id) || res.data[0] };
    }
    return { error: { message: 'Order not found', code: 'NOT_FOUND', status: 404 } };
  }
};
