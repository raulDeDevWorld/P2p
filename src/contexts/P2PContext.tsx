import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Advertisement, Order, PaymentMethod } from '../types';
import { advertisements, orders, paymentMethods } from '../data/mockData';

interface P2PContextType {
  advertisements: Advertisement[];
  orders: Order[];
  paymentMethods: PaymentMethod[];
  filteredAds: Advertisement[];
  filterType: 'BUY' | 'SELL' | 'ALL';
  filterCrypto: string;
  filterFiat: string;
  filterPaymentMethod: string;
  setFilterType: (type: 'BUY' | 'SELL' | 'ALL') => void;
  setFilterCrypto: (crypto: string) => void;
  setFilterFiat: (fiat: string) => void;
  setFilterPaymentMethod: (method: string) => void;
}

const P2PContext = createContext<P2PContextType | undefined>(undefined);

export const P2PProvider = ({ children }: { children: ReactNode }) => {
  const [filterType, setFilterType] = useState<'BUY' | 'SELL' | 'ALL'>('ALL');
  const [filterCrypto, setFilterCrypto] = useState<string>('ALL');
  const [filterFiat, setFilterFiat] = useState<string>('ALL');
  const [filterPaymentMethod, setFilterPaymentMethod] = useState<string>('ALL');

  // Apply filters
  const filteredAds = advertisements.filter((ad) => {
    const matchesType = filterType === 'ALL' || ad.type === filterType;
    const matchesCrypto = filterCrypto === 'ALL' || ad.cryptocurrency === filterCrypto;
    const matchesFiat = filterFiat === 'ALL' || ad.fiat === filterFiat;
    const matchesPaymentMethod =
      filterPaymentMethod === 'ALL' || 
      ad.paymentMethods.some(method => method.id === filterPaymentMethod);
    
    return matchesType && matchesCrypto && matchesFiat && matchesPaymentMethod;
  });

  return (
    <P2PContext.Provider
      value={{
        advertisements,
        orders,
        paymentMethods,
        filteredAds,
        filterType,
        filterCrypto,
        filterFiat,
        filterPaymentMethod,
        setFilterType,
        setFilterCrypto,
        setFilterFiat,
        setFilterPaymentMethod,
      }}
    >
      {children}
    </P2PContext.Provider>
  );
};

export const useP2P = (): P2PContextType => {
  const context = useContext(P2PContext);
  if (context === undefined) {
    throw new Error('useP2P must be used within a P2PProvider');
  }
  return context;
};