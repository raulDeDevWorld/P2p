import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const TradeConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { order } = location.state || {};
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState('');
  
  if (!order) {
    navigate('/p2p');
    return null;
  }

  const handleConfirm = async () => {
    setIsConfirming(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/orders');
    } catch (err) {
      setError('Failed to confirm trade. Please try again.');
    } finally {
      setIsConfirming(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1e2026] rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Shield size={32} className="text-yellow-400" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-2">
              Confirm Your Trade
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Please review the details below carefully before confirming
            </p>

            {error && (
              <div className="bg-red-900/30 border border-red-800 text-red-200 px-4 py-3 rounded flex items-center mb-6">
                <AlertCircle size={20} className="mr-2" />
                <span>{error}</span>
              </div>
            )}

            <div className="bg-[#13151d] rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 mb-1">Type</p>
                  <p className="text-white font-medium">
                    {order.type} {order.cryptocurrency}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Amount</p>
                  <p className="text-white font-medium">
                    {order.amount} {order.cryptocurrency}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Price</p>
                  <p className="text-white font-medium">
                    {order.price} {order.fiat}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Total</p>
                  <p className="text-white font-medium">
                    {order.total} {order.fiat}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Payment Method</p>
                  <p className="text-white font-medium">
                    {order.paymentMethod}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Time Limit</p>
                  <p className="text-white font-medium">15 minutes</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-yellow-400 mr-3 mt-1" />
                <div>
                  <p className="text-white font-medium mb-1">Secure Trade Protection</p>
                  <p className="text-gray-400 text-sm">
                    Your funds will be held in escrow until the trade is completed successfully
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              disabled={isConfirming}
              className={`w-full bg-yellow-400 text-gray-900 font-medium py-3 px-4 rounded-md hover:bg-yellow-500 transition-colors ${
                isConfirming ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isConfirming ? 'Confirming...' : 'Confirm Trade'}
            </button>

            <button
              onClick={() => navigate(-1)}
              disabled={isConfirming}
              className="w-full mt-3 bg-transparent border border-gray-600 text-white font-medium py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TradeConfirmationPage;