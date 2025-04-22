import React from 'react';
import { Shield } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';
import Layout from '../components/layout/Layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
          
          <div className="w-full max-w-md">
            <div className="bg-[#1e2026] rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Secure Trading Platform</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Shield size={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Enhanced Security</h3>
                    <p className="mt-1 text-gray-400">
                      Our platform uses advanced encryption and two-factor authentication to keep your account safe.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
                        <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="currentColor"/>
                        <path d="M12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM12 16.5C11.17 16.5 10.5 15.83 10.5 15C10.5 14.17 11.17 13.5 12 13.5C12.83 13.5 13.5 14.17 13.5 15C13.5 15.83 12.83 16.5 12 16.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Escrow Protection</h3>
                    <p className="mt-1 text-gray-400">
                      Our escrow service protects both buyers and sellers during transactions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
                        <path d="M21 14H14V21H21V14Z" fill="currentColor"/>
                        <path d="M10 14H3V21H10V14Z" fill="currentColor"/>
                        <path d="M21 3H14V10H21V3Z" fill="currentColor"/>
                        <path d="M10 3H3V10H10V3Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">P2P Marketplace</h3>
                    <p className="mt-1 text-gray-400">
                      Access a global network of buyers and sellers with competitive prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;