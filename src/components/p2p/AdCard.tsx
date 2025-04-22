import React from 'react';
import { User, Clock, Shield, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Advertisement } from '../../types';

interface AdCardProps {
  ad: Advertisement;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  return (
    <div className="bg-[#1e2026] border border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow mb-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-start mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img 
              src={ad.creator.avatar} 
              alt={ad.creator.username}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white">
              {ad.creator.username}
            </h3>
            
            <div className="flex items-center text-sm mt-1 text-gray-400">
              <span className="flex items-center mr-4">
                <User size={14} className="mr-1" />
                {ad.creator.completedOrders} orders
              </span>
              <span className="flex items-center">
                <Shield size={14} className="mr-1" />
                {ad.creator.successRate}% completion
              </span>
            </div>
            
            <div className="mt-2">
              <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                {ad.cryptocurrency}/{ad.fiat}
              </span>
              <span className={`inline-block text-xs px-2 py-1 rounded ${
                ad.type === 'SELL' ? 'bg-green-900/40 text-green-400' : 'bg-blue-900/40 text-blue-400'
              }`}>
                {ad.type}
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-2xl font-bold text-white">
            {ad.price.toLocaleString()} {ad.fiat}
          </p>
          
          <div className="text-sm text-gray-400 mt-1">
            <p>Limit: {ad.minOrderLimit} - {ad.maxOrderLimit} {ad.fiat}</p>
            <p className="mt-1">Available: {ad.availableAmount} {ad.cryptocurrency}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-800">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <CreditCard size={16} className="mr-2 text-gray-400" />
            <span className="text-gray-300">
              {ad.paymentMethods.map(method => method.name).join(', ')}
            </span>
          </div>
          
          <div className="flex items-center text-xs text-gray-400 mb-2 md:mb-0">
            <Clock size={14} className="mr-1" />
            <span>
              {new Date(ad.createdAt).toLocaleDateString()}
            </span>
          </div>
          
          <Link
            to={`/p2p/ad/${ad.id}`}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              ad.type === 'SELL' 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {ad.type === 'SELL' ? 'Buy' : 'Sell'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdCard;