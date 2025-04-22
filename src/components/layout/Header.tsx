import React, { useState } from 'react';
import { User, Wallet, Bell, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0c0e12] text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-yellow-400 font-bold text-2xl mr-10">
              P2P Trade
            </Link>
            
            {isAuthenticated && (
              <nav className="hidden md:flex space-x-8">
                <Link to="/p2p" className="text-white hover:text-yellow-400 transition-colors">
                  P2P Trading
                </Link>
                <Link to="/orders" className="text-white hover:text-yellow-400 transition-colors">
                  Orders
                </Link>
                <Link to="/wallet" className="text-white hover:text-yellow-400 transition-colors">
                  Wallet
                </Link>
              </nav>
            )}
          </div>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <button className="p-2 text-gray-300 hover:text-white transition-colors mr-4 hidden md:block">
                  <Bell size={20} />
                </button>
                <button className="p-2 text-gray-300 hover:text-white transition-colors mr-4 hidden md:block">
                  <Wallet size={20} />
                </button>
                <div className="relative group">
                  <Link to="/profile" className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                      <img 
                        src={currentUser?.avatar} 
                        alt={currentUser?.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="hidden md:block">{currentUser?.username}</span>
                  </Link>
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="py-2">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                        Profile
                      </Link>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                        Settings
                      </Link>
                      <button 
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
                <button 
                  className="ml-4 md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </>
            ) : (
              <div className="flex items-center">
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-white hover:text-yellow-400 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-medium hover:bg-yellow-500 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isAuthenticated && mobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/p2p" 
                className="text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                P2P Trading
              </Link>
              <Link 
                to="/orders" 
                className="text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Orders
              </Link>
              <Link 
                to="/wallet" 
                className="text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wallet
              </Link>
              <Link 
                to="/profile" 
                className="text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <button 
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="text-white hover:text-yellow-400 transition-colors py-2 text-left"
              >
                Logout
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;