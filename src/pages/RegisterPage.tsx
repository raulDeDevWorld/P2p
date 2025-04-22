import React from 'react';
import { Shield } from 'lucide-react';
import RegisterForm from '../components/auth/RegisterForm';
import Layout from '../components/layout/Layout';

const RegisterPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
          
          <div className="w-full max-w-md">
            <div className="bg-[#1e2026] rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Join Our Trading Community</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Shield size={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Secure Trading</h3>
                    <p className="mt-1 text-gray-400">
                      Trade with confidence using our secure escrow service and advanced encryption.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Shield size={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Global Network</h3>
                    <p className="mt-1 text-gray-400">
                      Connect with traders worldwide and access competitive rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Shield size={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Multiple Payment Methods</h3>
                    <p className="mt-1 text-gray-400">
                      Choose from various payment options for your convenience.
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

export default RegisterPage;