import { AppError, ApiResponse } from '@/types';

export function normalizeError(error: unknown): AppError {
  if (error && typeof error === 'object' && 'message' in error && 'code' in error) {
    return error as AppError;
  }
  return {
    message: error instanceof Error ? error.message : 'An unknown error occurred',
    code: 'UNKNOWN_ERROR',
    status: 500,
  };
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const isServer = typeof window === 'undefined';
    
    // ?? SERVER-SIDE OPTIMIZATION & VERCEL PROTECTION BYPASS ??
    // If we are executing on the server (Server Components), we should NOT make an HTTP fetch
    // to our own API routes. Doing so triggers Vercel Deployment Protection blocks (401s).
    // Instead, we directly resolve the mock data.
    if (isServer) {
      // Simulate network latency for skeleton testing
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      const { mockAnalytics, mockOrders, mockActivities } = await import('@/lib/data/mock-db');
      
      if (endpoint === '/analytics') {
        return { data: mockAnalytics as unknown as T };
      }
      if (endpoint === '/activities') {
        return { data: mockActivities as unknown as T };
      }
      if (endpoint.startsWith('/orders')) {
        // Basic mock filtering for server-side direct execution
        const urlParams = new URLSearchParams(endpoint.split('?')[1] || '');
        const page = parseInt(urlParams.get('page') || '1', 10);
        const limit = parseInt(urlParams.get('limit') || '15', 10);
        const search = urlParams.get('q')?.toLowerCase() || '';
        const status = urlParams.get('status') || '';
        
        let filtered = [...mockOrders];
        if (search) {
          filtered = filtered.filter(o => 
            o.id.toLowerCase().includes(search) || 
            o.customer.name.toLowerCase().includes(search) ||
            o.customer.email.toLowerCase().includes(search)
          );
        }
        if (status && status !== 'all') {
          filtered = filtered.filter(o => o.status === status);
        }
        
        const total = filtered.length;
        const offset = (page - 1) * limit;
        const paginated = filtered.slice(offset, offset + limit);
        
        return {
          data: paginated as unknown as T,
          meta: { page, limit, total, totalPages: Math.ceil(total / limit) }
        };
      }
    }

    // Client-side fetch logic (when called from "use client" components)
    let fetchUrl = endpoint.startsWith('http') ? endpoint : `/api${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    
    const response = await fetch(fetchUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw {
        message: data?.error?.message || 'Network response was not ok',
        code: data?.error?.code || 'API_ERROR',
        status: response.status,
      } as AppError;
    }

    return data as ApiResponse<T>;
  } catch (error) {
    const normalized = normalizeError(error);
    return {
      data: null as unknown as T,
      error: normalized,
    };
  }
}
