import React from 'react';
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';
import { Order } from '../../types';

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'CANCELLED':
        return <XCircle size={18} className="text-red-500" />;
      case 'PENDING':
        return <Clock size={18} className="text-yellow-500" />;
      case 'PAID':
        return <Clock size={18} className="text-blue-500" />;
      case 'DISPUTED':
        return <AlertTriangle size={18} className="text-orange-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'text-green-500';
      case 'CANCELLED':
        return 'text-red-500';
      case 'PENDING':
        return 'text-yellow-500';
      case 'PAID':
        return 'text-blue-500';
      case 'DISPUTED':
        return 'text-orange-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-800/50 text-gray-400 text-sm">
          <tr>
            <th className="py-3 px-4 rounded-tl-lg">Type</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Total</th>
            <th className="py-3 px-4">Counterparty</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4 rounded-tr-lg">Status</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {orders.map((order, index) => (
            <tr 
              key={order.id} 
              className={`${
                index % 2 === 0 ? 'bg-[#1e2026]' : 'bg-[#13151d]'
              } hover:bg-gray-800/50 transition-colors`}
            >
              <td className="py-4 px-4">
                <span className={`inline-block text-xs px-2 py-1 rounded ${
                  order.advertisement.type === 'SELL' 
                    ? 'bg-green-900/40 text-green-400' 
                    : 'bg-blue-900/40 text-blue-400'
                }`}>
                  {order.advertisement.type}
                </span>
              </td>
              <td className="py-4 px-4">
                {order.advertisement.price.toLocaleString()} {order.advertisement.fiat}
              </td>
              <td className="py-4 px-4">
                {order.amount} {order.advertisement.cryptocurrency}
              </td>
              <td className="py-4 px-4 font-medium">
                {order.totalPrice.toLocaleString()} {order.advertisement.fiat}
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <img 
                      src={order.advertisement.type === 'SELL' ? order.seller.avatar : order.buyer.avatar} 
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>
                    {order.advertisement.type === 'SELL' ? order.seller.username : order.buyer.username}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-400">
                {new Date(order.createdAt).toLocaleString()}
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className={`ml-2 ${getStatusText(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;