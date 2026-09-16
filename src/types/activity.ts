export type ActivityType = 'order_placed' | 'order_completed' | 'order_failed' | 'system_alert' | 'customer_joined';

export interface ActivityEvent {
  id: string;
  type: ActivityType;
  message: string;
  timestamp: string;
  avatarUrl?: string;
  relatedEntityId?: string;
}
