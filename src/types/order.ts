export type OrderStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}
