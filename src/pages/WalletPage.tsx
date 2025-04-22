import React from 'react';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownRight, Clock, RefreshCw } from 'lucide-react';
import Layout from '../components/layout/Layout';

const WalletPage: React.FC = () => {
  const walletBalances = [
    { currency: 'BTC', balance: '0.2458', value: 12654.23 },
    { currency: 'ETH', balance: '3.1459', value: 8765.45 },
    { currency: 'USDT', balance: '1250.00', value: 1250.00 },
  ];

  const recentTransactions = [
    { 
      id: '1',
      type: 'RECEIVE',
      amount: '0.1245',
      currency: 'BTC',
      status: 'COMPLETED',
      date: '2024-02-20T14:30:00Z',
      from: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
    },
    {
      id: '2',
      type: 'SEND',
      amount: '0.5000',
      currency: 'ETH',
      status: 'PENDING',
      date: '2024-02-19T09:15:00Z',
      to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Balance Card */}
          <div className="lg:col-span-2">
            <div className="bg-[#1e2026] rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4">
                    <WalletIcon size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">My Wallet</h2>
                    <p className="text-gray-400">Total Balance (USD)</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">
                    ${(22669.68).toLocaleString()}
                  </p>
                  <p className="text-green-400">+2.45%</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {walletBalances.map((balance) => (
                  <div key={balance.currency} className="bg-[#13151d] rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-gray-400">{balance.currency}</span>
                      <div className="flex space-x-2">
                        <button className="text-yellow-400 hover:text-yellow-300">
                          <ArrowUpRight size={16} />
                        </button>
                        <button className="text-yellow-400 hover:text-yellow-300">
                          <ArrowDownRight size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-xl font-semibold text-white mb-1">
                      {balance.balance}
                    </p>
                    <p className="text-sm text-gray-400">
                      ${balance.value.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-6 space-x-4">
                <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-yellow-500 transition-colors">
                  Deposit
                </button>
                <button className="bg-[#13151d] text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Withdraw
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#1e2026] rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full bg-[#13151d] text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-colors text-left flex items-center">
                <ArrowUpRight size={20} className="mr-3" />
                Send
              </button>
              <button className="w-full bg-[#13151d] text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-colors text-left flex items-center">
                <ArrowDownRight size={20} className="mr-3" />
                Receive
              </button>
              <button className="w-full bg-[#13151d] text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-colors text-left flex items-center">
                <RefreshCw size={20} className="mr-3" />
                Convert
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="lg:col-span-3">
            <div className="bg-[#1e2026] rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 text-sm">
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((tx) => (
                      <tr key={tx.id} className="border-t border-gray-800">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            {tx.type === 'RECEIVE' ? (
                              <ArrowDownRight size={20} className="text-green-400 mr-2" />
                            ) : (
                              <ArrowUpRight size={20} className="text-blue-400 mr-2" />
                            )}
                            <span className="text-white">{tx.type}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-white">{tx.amount} {tx.currency}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center ${
                            tx.status === 'COMPLETED' ? 'text-green-400' : 'text-yellow-400'
                          }`}>
                            <Clock size={16} className="mr-2" />
                            {tx.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-400">
                          {new Date(tx.date).toLocaleString()}
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-yellow-400 hover:text-yellow-300">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WalletPage;