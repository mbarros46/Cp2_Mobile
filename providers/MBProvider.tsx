import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price?: number;
  quantity?: number;
}

interface MBContextType {
  mbCart: Product[];
  setMBCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const MBContext = createContext<MBContextType | null>(null);

interface MBProviderProps {
  children: ReactNode;
}

export const MBProvider: React.FC<MBProviderProps> = ({ children }) => {
  const [mbCart, setMBCart] = useState<Product[]>([]);

  return (
    <MBContext.Provider value={{ mbCart, setMBCart }}>
      {children}
    </MBContext.Provider>
  );
};

export const useMBContext = () => {
  const context = useContext(MBContext);
  if (!context) {
    throw new Error('useMBContext must be used within a MBProvider');
  }
  return context;
};