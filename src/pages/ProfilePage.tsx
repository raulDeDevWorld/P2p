import React from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../contexts/AuthContext';
import { Shield, Award, Star, Clock, CreditCard, Plus } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-white">
            Please login to view your profile
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="bg-[#1e2026] border border-gray-800 rounded-lg p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.username}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-white">
                {currentUser.username}
              </h2>
              
              <p className="text-gray-400 mb-4">
                {currentUser.email}
              </p>
              
              <div className="flex items-center mb-6">
                <Shield size={18} className="text-green-500 mr-2" />
                <span className="text-green-500 font-medium">Verified Account</span>
              </div>
              
              <button className="w-full bg-[#13151d] hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors mb-2">
                Edit Profile
              </button>
              
              <button className="w-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 py-2 px-4 rounded-md transition-colors">
                Verification Center
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <h3 className="text-gray-400 text-sm">Member Since</h3>
                  <p className="text-white font-medium mt-1">
                    {new Date(currentUser.registrationDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-gray-400 text-sm">Completed Orders</h3>
                  <p className="text-white font-medium mt-1">
                    {currentUser.completedOrders}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats & Reputation */}
          <div className="lg:col-span-2">
            <div className="bg-[#1e2026] border border-gray-800 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Trader Statistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-[#13151d] rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <Award size={20} className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Success Rate</h3>
                      <p className="text-white text-xl font-semibold mt-1">
                        {currentUser.successRate}%
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-[#13151d] rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                      <Star size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Rating</h3>
                      <p className="text-white text-xl font-semibold mt-1">
                        4.9/5
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-[#13151d] rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <Clock size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Avg. Release Time</h3>
                      <p className="text-white text-xl font-semibold mt-1">
                        5 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">Recent Reviews</h3>
              
              <div className="space-y-4">
                <div className="p-3 bg-[#13151d] rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <img 
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" 
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-white font-medium">satoshiFan</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        Great trader, very fast release. Would trade again.
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        3 days ago
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-[#13151d] rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <img 
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150" 
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-white font-medium">blockchainMaster</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-500"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        Smooth transaction, clear communication.
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        1 week ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="bg-[#1e2026] border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Payment Methods</h2>
                <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Plus size={18} className="mr-1" />
                  Add New
                </button>
              </div>
              
              <div className="space-y-4">
                {currentUser.availablePaymentMethods.map((method) => (
                  <div key={method.id} className="p-4 bg-[#13151d] rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <CreditCard size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{method.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {method.id === '1' 
                            ? 'Account ending in ****1234' 
                            : method.id === '2'
                              ? 'Revolut: @username'
                              : 'Connected account'}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;