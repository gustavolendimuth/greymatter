'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import './Alert.css';

import React, { useEffect } from 'react';
import { FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

import { useHomeContext } from '@/context/Provider';

function Alert() {
  const { alert, setAlert } = useHomeContext();

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (alert?.time) {
      timer = setTimeout(
        () => {
          setAlert(undefined);
        },
        alert?.time
      );
    }
    if (!alert) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [alert]);

  if (!alert) return null;

  return (
    <div className={alert.overlay ? 'alert-overlay' : 'overlay'}>
      <div className="scale-up-center">
        <div
          className={`alert alert-message ${alert.ok ? 'alert-success' : ' alert-danger'} ${
            alert.keep ? '' : 'alert-dismissible'
          } fade show d-flex align-items-center`}
          role="alert"
        >
          <div>
            <strong>
              {alert.ok ? (
                <FiCheckCircle className="icon me-3" />
              ) : (
                <FiAlertTriangle className="icon me-3" />
              )}
            </strong>
          </div>
          {alert.message}
          {!alert.keep && (
            <button
              onClick={() => setAlert(undefined)}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Alert;
