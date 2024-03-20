'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import './Loading.css';

import React, { useEffect } from 'react';

import { useHomeContext } from '@/context/Provider';

function Loading() {
  const { loading, setLoading, setAlert } = useHomeContext();

  useEffect(() => {
    if (loading < 0) setLoading(0);
    const timer = setTimeout(() => {
      setLoading(0);
      setAlert({ ok: false, message: 'Ops... estamos com problemas, tente novamente mais tarde.' });
    }, 20000);

    if (!loading) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="overlay">
      <div className="spinner-modal">
        <div className="spinner-border text-primary" role="status">
          <span className="hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
