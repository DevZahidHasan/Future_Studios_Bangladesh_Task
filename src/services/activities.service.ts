import { apiClient } from './api-client';
import { ActivityEvent } from '@/types';

export const ActivitiesService = {
  async fetchRecent() {
    return apiClient<ActivityEvent[]>('/activities', {
      cache: 'no-store' // Activities are real-time, no cache
    });
  }
};
