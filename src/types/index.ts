export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  completedOrders: number;
  successRate: number;
  verified: boolean;
  registrationDate: string;
  availablePaymentMethods: PaymentMethod[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export interface Advertisement {
  id: string;
  type: 'BUY' | 'SELL';
  creator: User;
  cryptocurrency: string;
  fiat: string;
  price: number;
  availableAmount: number;
  minOrderLimit: number;
  maxOrderLimit: number;
  paymentMethods: PaymentMethod[];
  terms: string;
  createdAt: string;
}

export interface Order {
  id: string;
  advertisement: Advertisement;
  amount: number;
  totalPrice: number;
  status: 'PENDING' | 'PAID' | 'COMPLETED' | 'CANCELLED' | 'DISPUTED';
  buyer: User;
  seller: User;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  sender: User;
  receiver: User;
  content: string;
  timestamp: string;
  read: boolean;
}