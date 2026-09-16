import { NextRequest, NextResponse } from 'next/server';
import { mockActivities } from '@/lib/data/mock-db';
import { ApiResponse, ActivityEvent } from '@/types';

export async function GET(request: NextRequest) {
  // Simulate network latency (300ms)
  await new Promise((resolve) => setTimeout(resolve, 300));

  const response: ApiResponse<ActivityEvent[]> = {
    // Only return the 10 most recent activities
    data: mockActivities.slice(0, 10),
  };

  return NextResponse.json(response);
}
