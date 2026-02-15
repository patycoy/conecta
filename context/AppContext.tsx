'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppContextType {
  isInitialLoading: boolean;
  finishInitialLoad: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Comprueba si el spinner ya se mostró en esta sesión
    if (sessionStorage.getItem('hasLoaded')) {
      setIsInitialLoading(false);
    } else {
      // Marca que ya se mostró para futuras cargas en la misma sesión
      sessionStorage.setItem('hasLoaded', 'true');
    }
  }, []);

  const finishInitialLoad = () => {
    setIsInitialLoading(false);
  };

  return (
    <AppContext.Provider value={{ isInitialLoading, finishInitialLoad }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
