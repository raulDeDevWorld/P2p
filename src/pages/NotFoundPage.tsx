import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-yellow-400 text-gray-900 font-medium py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;