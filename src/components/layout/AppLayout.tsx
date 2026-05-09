import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { api } from '../../services/api';
import { useTheme } from '../../controllers/useTheme';

export default function AppLayout() {
  const [user, setUser] = useState<{ name: string; role: string; profileImageUrl?: string } | null>(null);
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    // Basic auth check
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Try to load user from local storage first for instant render
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Fetch fresh user data
    api.getMe().then(data => {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    }).catch(err => {
      console.error('Session invalid', err);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    });
  }, [navigate]);

  return (
    <div className="flex-col w-full flex-1 bg-slate-50 dark:bg-[#0B1221] min-h-screen">
      <Navbar 
        userName={user?.name}
        userRole={user?.role}
        profileImageUrl={user?.profileImageUrl || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=eff6ff&color=3b82f6`}
        onProfileClick={() => navigate('/profile')}
        onThemeToggle={toggleTheme}
      />

      {/* Ambient Background for App */}
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Main Dashboard Application Hub */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
