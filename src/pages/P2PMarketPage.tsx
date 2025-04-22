import React from 'react';
import Layout from '../components/layout/Layout';
import FilterBar from '../components/p2p/FilterBar';
import AdCard from '../components/p2p/AdCard';
import { useP2P } from '../contexts/P2PContext';

const P2PMarketPage: React.FC = () => {
  const { filteredAds } = useP2P();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">P2P Trading</h1>
            <p className="text-gray-400 mt-2">
              Buy and sell cryptocurrencies directly with other users
            </p>
          </div>
          
          <div className="mt-4 lg:mt-0">
            <button className="bg-yellow-400 text-gray-900 font-medium py-2 px-6 rounded-md hover:bg-yellow-500 transition-colors">
              Create Advertisement
            </button>
          </div>
        </div>
        
        <FilterBar />
        
        <div className="space-y-4">
          {filteredAds.length > 0 ? (
            filteredAds.map(ad => (
              <AdCard key={ad.id} ad={ad} />
            ))
          ) : (
            <div className="bg-[#1e2026] border border-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                No advertisements found
              </h3>
              <p className="text-gray-400">
                Try changing your filters or create your own advertisement
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default P2PMarketPage;