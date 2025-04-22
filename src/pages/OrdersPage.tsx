import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import OrdersTable from '../components/p2p/OrdersTable';
import { useP2P } from '../contexts/P2PContext';

const OrdersPage: React.FC = () => {
  const { orders } = useP2P();
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Filter orders based on the active tab
  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'completed') return order.status === 'COMPLETED';
    if (activeTab === 'pending') return order.status === 'PENDING' || order.status === 'PAID';
    if (activeTab === 'cancelled') return order.status === 'CANCELLED';
    if (activeTab === 'disputed') return order.status === 'DISPUTED';
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Orders History</h1>
        
        <div className="bg-[#1e2026] border border-gray-800 rounded-lg p-6">
          <div className="flex flex-wrap border-b border-gray-800 mb-6">
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'all'
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Orders
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'completed'
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'pending'
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('pending')}
            >
              Pending
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'cancelled'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('cancelled')}
            >
              Cancelled
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'disputed'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('disputed')}
            >
              Disputed
            </button>
          </div>
          
          {filteredOrders.length > 0 ? (
            <OrdersTable orders={filteredOrders} />
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold text-white mb-2">
                No orders found
              </h3>
              <p className="text-gray-400">
                You don't have any {activeTab !== 'all' ? activeTab : ''} orders yet
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OrdersPage;