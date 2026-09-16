import { NextRequest, NextResponse } from 'next/server';
import { mockOrders } from '@/lib/data/mock-db';
import { ApiResponse, Order } from '@/types';

export async function GET(request: NextRequest) {
  // Simulate network latency (300ms) for premium loading states
  await new Promise((resolve) => setTimeout(resolve, 300));

  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const search = searchParams.get('q')?.toLowerCase() || '';
  const status = searchParams.get('status') || '';

  let filteredOrders = [...mockOrders];

  // Apply Search
  if (search) {
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.id.toLowerCase().includes(search) ||
        order.customer.name.toLowerCase().includes(search) ||
        order.customer.email.toLowerCase().includes(search)
    );
  }

  // Apply Status Filter
  if (status && status !== 'all') {
    filteredOrders = filteredOrders.filter((order) => order.status === status);
  }

  const total = filteredOrders.length;
  const totalPages = Math.ceil(total / limit);
  const offset = (page - 1) * limit;

  const paginatedOrders = filteredOrders.slice(offset, offset + limit);

  const response: ApiResponse<Order[]> = {
    data: paginatedOrders,
    meta: {
      page,
      limit,
      total,
      totalPages,
    },
  };

  return NextResponse.json(response);
}
