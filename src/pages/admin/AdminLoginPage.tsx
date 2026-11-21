import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, ArrowRight, ShieldCheck, AlertCircle, Eye, EyeOff, Sparkles } from 'lucide-react';
import { apiFetch, setStoredSession } from '../../admin/api';

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password) {
      setError('Please enter both your administrator username and password.');
      return;
    }

    setLoading(true);
    try {
      const data = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username.trim(),
          password
        })
      });

      if (data.success && data.token) {
        setStoredSession(data.token, data.user);
        navigate('/admin');
      } else {
        setError('Authentication failed. Please verify credentials.');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020b1e] via-[#04143a] to-[#020b1e] text-white flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#087FE5]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#08B9E8]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between z-10">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer" title="Return to ZisanTech Home">
          <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-white/20 flex items-center transition-transform group-hover:scale-105">
            <img
              src="/zisantech_official_logo.png"
              alt="ZisanTech"
              className="h-8 sm:h-9 w-auto object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/zisantech_logo_transparent.png';
              }}
            />
          </div>
        </Link>
        <Link
          to="/"
          className="text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md"
        >
          <span>Return to Website</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md mx-auto z-10 my-8">
        <div className="bg-[#031333]/90 border border-white/15 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle top sheen */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#087FE5] via-[#08B9E8] to-[#087FE5]" />

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white p-2.5 mx-auto mb-4 shadow-xl shadow-blue-900/50 flex items-center justify-center border border-white/20">
              <img
                src="/zisantech_official_logo.png"
                alt="ZisanTech Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/zisantech_logo_transparent.png';
                }}
              />
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Enterprise Admin Portal
            </h1>
            <p className="text-xs text-slate-400 mt-1.5">
              Secure administrative access for ZisanTech Blog & Gallery management.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-3">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Administrator Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. priya or admin"
                  autoComplete="username"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.07] border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#08B9E8] focus:ring-2 focus:ring-[#08B9E8]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/[0.07] border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#08B9E8] focus:ring-2 focus:ring-[#08B9E8]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#087FE5] via-[#0664B5] to-[#043E7A] text-white font-bold text-sm shadow-xl shadow-blue-950/60 hover:shadow-[#087FE5]/40 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <span className="text-[11px] text-slate-400 font-mono inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#08B9E8]" />
              <span>ZisanTech Verified Local Security Protocol</span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="max-w-7xl w-full mx-auto text-center text-xs text-slate-500 z-10">
        © {new Date().getFullYear()} ZisanTech Solutions. All rights reserved. Confidential Administration.
      </div>
    </div>
  );
};
