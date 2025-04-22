import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useP2P } from '../contexts/P2PContext';
import { Advertisement } from '../types';

const TradePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { advertisements } = useP2P();
  
  const ad = advertisements.find(a => a.id === id);
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  
  if (!ad) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Advertisement not found
          </h2>
          <button
            onClick={() => navigate('/p2p')}
            className="text-yellow-400 hover:text-yellow-300"
          >
            Return to P2P Market
          </button>
        </div>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    
    if (numAmount > ad.availableAmount) {
      setError('Amount exceeds available quantity');
      return;
    }
    
    if (numAmount * ad.price < ad.minOrderLimit || numAmount * ad.price > ad.maxOrderLimit) {
      setError(`Order total must be between ${ad.minOrderLimit} and ${ad.maxOrderLimit} ${ad.fiat}`);
      return;
    }

    setIsLoading(true);
    
    try {
      // Create order object for confirmation
      const order = {
        type: ad.type,
        cryptocurrency: ad.cryptocurrency,
        amount: numAmount,
        price: ad.price,
        total: numAmount * ad.price,
        fiat: ad.fiat,
        paymentMethod: ad.paymentMethods[0].name,
      };

      // Navigate to confirmation page with order details
      navigate('/p2p/confirm', { state: { order } });
    } catch (err) {
      setError('Failed to process order. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1e2026] rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-white">
                {ad.type === 'SELL' ? 'Buy' : 'Sell'} {ad.cryptocurrency}
              </h1>
              <div className={`px-3 py-1 rounded text-sm ${
                ad.type === 'SELL' 
                  ? 'bg-green-900/40 text-green-400' 
                  : 'bg-blue-900/40 text-blue-400'
              }`}>
                {ad.type}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-gray-400 mb-2">Price</h3>
                <p className="text-xl font-semibold text-white">
                  {ad.price.toLocaleString()} {ad.fiat}
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Available</h3>
                <p className="text-xl font-semibold text-white">
                  {ad.availableAmount} {ad.cryptocurrency}
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Limit</h3>
                <p className="text-white">
                  {ad.minOrderLimit} - {ad.maxOrderLimit} {ad.fiat}
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Payment Methods</h3>
                <p className="text-white">
                  {ad.paymentMethods.map(m => m.name).join(', ')}
                </p>
              </div>
            </div>

            {error && (
              <div className="bg-red-900/30 border border-red-800 text-red-200 px-4 py-3 rounded flex items-center mb-6">
                <AlertCircle size={20} className="mr-2" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">
                  Amount to {ad.type === 'SELL' ? 'Buy' : 'Sell'}
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    step="0.00000001"
                    className="flex-1 bg-[#13151d] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder={`Enter amount in ${ad.cryptocurrency}`}
                  />
                  <span className="text-white font-medium">
                    {ad.cryptocurrency}
                  </span>
                </div>
                {amount && !isNaN(parseFloat(amount)) && (
                  <p className="mt-2 text-gray-400">
                    Total: {(parseFloat(amount) * ad.price).toLocaleString()} {ad.fiat}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-yellow-400 text-gray-900 font-medium py-3 px-4 rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  'Processing...'
                ) : (
                  <>
                    Continue to Review
                    <ArrowRight size={20} className="ml-2" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-[#13151d] rounded-lg">
              <h3 className="text-white font-medium mb-2">Terms of Trade</h3>
              <p className="text-gray-400">{ad.terms}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TradePage;