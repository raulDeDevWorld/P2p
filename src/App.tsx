import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { P2PProvider } from './contexts/P2PContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import P2PMarketPage from './pages/P2PMarketPage';
import OrdersPage from './pages/OrdersPage';
import ProfilePage from './pages/ProfilePage';
import TradePage from './pages/TradePage';
import TradeConfirmationPage from './pages/TradeConfirmationPage';
import WalletPage from './pages/WalletPage';
import NotFoundPage from './pages/NotFoundPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <P2PProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Navigate to="/p2p" />} />
            <Route 
              path="/p2p" 
              element={
                <ProtectedRoute>
                  <P2PMarketPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/p2p/ad/:id" 
              element={
                <ProtectedRoute>
                  <TradePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/p2p/confirm" 
              element={
                <ProtectedRoute>
                  <TradeConfirmationPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/orders" 
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/wallet" 
              element={
                <ProtectedRoute>
                  <WalletPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </P2PProvider>
      </AuthProvider>
    </Router>
  );
}

export default App