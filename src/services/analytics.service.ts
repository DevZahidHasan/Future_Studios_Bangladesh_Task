import { apiClient } from './api-client';
import { AnalyticsSummary } from '@/types';

export const AnalyticsService = {
  async fetchSummary() {
    return apiClient<AnalyticsSummary>('/analytics', {
      next: { revalidate: 60 } // Cache for 60 seconds since analytics change slower
    });
  }
};
