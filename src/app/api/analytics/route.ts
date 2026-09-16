import { NextRequest, NextResponse } from 'next/server';
import { mockAnalytics } from '@/lib/data/mock-db';
import { ApiResponse, AnalyticsSummary } from '@/types';

export async function GET(request: NextRequest) {
  // Simulate network latency (300ms)
  await new Promise((resolve) => setTimeout(resolve, 300));

  const response: ApiResponse<AnalyticsSummary> = {
    data: mockAnalytics,
  };

  return NextResponse.json(response);
}
