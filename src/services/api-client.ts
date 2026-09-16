import { AppError, ApiResponse } from '@/types';

// Helper to normalize unknown errors into AppError
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
    const url = endpoint.startsWith('http') ? endpoint : `/api${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    
    // In Server Components, absolute URL is needed if fetching Route Handlers.
    // So we check if we are on the server and prepend a base URL if needed.
    // However, it's typically better for Server Components to import services that hit DB directly,
    // but per the task constraints, we are routing everything through the fetch layer for consistency.
    const isServer = typeof window === 'undefined';
    let fetchUrl = url;
    if (isServer && url.startsWith('/api')) {
      // In a real app, use an env var like process.env.NEXT_PUBLIC_API_URL
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      fetchUrl = `${baseUrl}${url}`;
    }

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
    // Returning the error in the standardized response format rather than throwing,
    // allowing the UI components to handle it gracefully if they prefer.
    return {
      data: null as unknown as T,
      error: normalized,
    };
  }
}
