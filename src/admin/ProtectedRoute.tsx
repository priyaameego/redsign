import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { apiFetch, getStoredToken } from './api';
import { ShieldCheck } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    apiFetch('/api/auth/me')
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#020b1e] text-white flex flex-col items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#087FE5] to-[#08B9E8] flex items-center justify-center shadow-2xl animate-pulse">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <p className="text-sm font-mono tracking-wider text-slate-300">
            Verifying ZisanTech Security Credentials...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};
