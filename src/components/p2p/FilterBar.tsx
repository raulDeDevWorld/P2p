import React from 'react';
import { Search, Filter } from 'lucide-react';
import { useP2P } from '../../contexts/P2PContext';

const FilterBar: React.FC = () => {
  const { 
    setFilterType, 
    filterType,
    setFilterCrypto,
    filterCrypto,
    setFilterFiat,
    filterFiat,
    setFilterPaymentMethod,
    filterPaymentMethod,
    paymentMethods
  } = useP2P();

  return (
    <div className="bg-[#1e2026] border border-gray-800 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="grid grid-cols-3 gap-2 bg-[#13151d] rounded-lg p-1">
          <button
            onClick={() => setFilterType('BUY')}
            className={`py-2 px-4 rounded-md transition-colors ${
              filterType === 'BUY'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setFilterType('SELL')}
            className={`py-2 px-4 rounded-md transition-colors ${
              filterType === 'SELL'
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Sell
          </button>
          <button
            onClick={() => setFilterType('ALL')}
            className={`py-2 px-4 rounded-md transition-colors ${
              filterType === 'ALL'
                ? 'bg-yellow-500 text-gray-900'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filterCrypto}
            onChange={(e) => setFilterCrypto(e.target.value)}
            className="bg-[#13151d] border border-gray-800 rounded-md px-3 py-2 text-white"
          >
            <option value="ALL">All Cryptocurrencies</option>
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
            <option value="BNB">Binance Coin (BNB)</option>
          </select>
          
          <select
            value={filterFiat}
            onChange={(e) => setFilterFiat(e.target.value)}
            className="bg-[#13151d] border border-gray-800 rounded-md px-3 py-2 text-white"
          >
            <option value="ALL">All Fiat Currencies</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
          
          <select
            value={filterPaymentMethod}
            onChange={(e) => setFilterPaymentMethod(e.target.value)}
            className="bg-[#13151d] border border-gray-800 rounded-md px-3 py-2 text-white"
          >
            <option value="ALL">All Payment Methods</option>
            {paymentMethods.map(method => (
              <option key={method.id} value={method.id}>
                {method.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search advertisers..."
            className="bg-[#13151d] border border-gray-800 rounded-md pl-10 pr-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
          />
        </div>
        
        <button className="flex items-center justify-center bg-[#13151d] hover:bg-gray-800 text-white p-2 rounded-md">
          <Filter size={20} />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;