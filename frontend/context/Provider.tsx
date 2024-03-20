/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */

'use client';

import React, { createContext, Dispatch, useCallback, useContext, useMemo, useState } from 'react';

import { Company } from '@/types/sectionsTypes';

type NavbarConfig = {
  position?: 'fixed' | 'absolute' | 'inherit';
  background?: string;
};

type Alert = {
  ok?: boolean;
  message?: string;
  overlay?: boolean;
  time?: number;
  keep?: boolean;
};

type ContextValue = {
  navbarConfig: NavbarConfig | undefined;
  setNavbarConfig: Dispatch<React.SetStateAction<NavbarConfig | undefined>>;
  setLocalStorage: (key: string, value: any) => void;
  getLocalStorage: (key: string) => any;
  companies: Company[] | undefined;
  setCompanies: Dispatch<React.SetStateAction<Company[] | undefined>>;
  animationClass: string;
  setAnimationClass: Dispatch<React.SetStateAction<string>>;
  loading: number;
  setLoading: Dispatch<React.SetStateAction<number>>;
  alert: Alert | undefined;
  setAlert: Dispatch<React.SetStateAction<Alert | undefined>>;
};

const Context = createContext<ContextValue | undefined>(undefined);

type HomeProviderProps = {
  children: React.ReactNode;
};

export function HomeProvider({ children }: HomeProviderProps) {
  const [navbarConfig, setNavbarConfig] = useState<NavbarConfig | undefined>();
  const [companies, setCompanies] = useState<Company[]>();
  const [animationClass, setAnimationClass] = useState('fade-in');
  const [loading, setLoading] = useState<number>(0);
  const [alert, setAlert] = useState<Alert>();

  const setLocalStorage = useCallback((key: string, value: any) => {
    if (key && value) localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getLocalStorage = useCallback(
    (key: string) => key && JSON.parse(localStorage.getItem(key) || 'null'),
    []
  );

  const contextValue = useMemo(
    () => ({
      navbarConfig,
      setNavbarConfig,
      setLocalStorage,
      getLocalStorage,
      companies,
      setCompanies,
      animationClass,
      setAnimationClass,
      loading,
      setLoading,
      alert,
      setAlert,
    }),
    [
      navbarConfig,
      setNavbarConfig,
      setLocalStorage,
      getLocalStorage,
      companies,
      setCompanies,
      animationClass,
      setAnimationClass,
      alert,
      setAlert,
      loading,
      setLoading,
    ]
  );

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
