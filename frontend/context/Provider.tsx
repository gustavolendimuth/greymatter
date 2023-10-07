/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */

'use client';

import React, { createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type NavbarConfig = {
  position?: 'fixed' | 'absolute' | 'inherit';
  background?: string;
};

type ContextValue = {
  languageId: string;
  navbarConfig: NavbarConfig | undefined;
  setNavbarConfig: React.Dispatch<React.SetStateAction<NavbarConfig | undefined>>;
  setLocalStorage: (key: string, value: any) => void;
  getLocalStorage: (key: string) => any;
  changeLanguage: () => void;
};

const Context = createContext<ContextValue | undefined>(undefined);

type HomeProviderProps = {
  children: React.ReactNode;
};

export function HomeProvider({ children }: HomeProviderProps) {
  const [languageId, setLanguageId] = useState<string>('');
  const [navbarConfig, setNavbarConfig] = useState<NavbarConfig | undefined>();

  const setLocalStorage = useCallback((key: string, value: any) => {
    if (key && value) localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getLocalStorage = useCallback((key: string) => key && JSON.parse(localStorage.getItem(key) || 'null'), []);

  function changeLanguage() {
    if (languageId === 'en') {
      setLanguageId('pt-br');
      setLocalStorage('languageId', 'pt-br');
      return;
    }
    setLanguageId('en');
    setLocalStorage('languageId', 'en');
  }

  const contextValue = useMemo(() => ({
    languageId,
    navbarConfig,
    setNavbarConfig,
    setLocalStorage,
    getLocalStorage,
    changeLanguage,
  }), [
    languageId,
    navbarConfig,
    setNavbarConfig,
    setLocalStorage,
    getLocalStorage,
    changeLanguage,
  ]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export const useHomeContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }
  return context;
};

export default HomeProvider;
