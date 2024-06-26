import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  const login = (token: string) => {
    setIsAuthenticated(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('AUTHORITY', 'GENERAL');
    localStorage.setItem('token', token);
  };

  const logout = async () => {
    try {
      await axios.post('/logout'); // サーバーへのログアウトリクエスト
    } catch (error) {
      console.error('Failed to logout:', error);
    } finally {
      setIsAuthenticated(false);
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('AUTHORITY');
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
};
