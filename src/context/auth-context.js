"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);
  const [nim, setNim] = useState(null);
  const [verified, setVerified] = useState(null);
  const [token, setToken] = useState(null);
  const [authLoad, setAuthLoad] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedRole = localStorage.getItem('role');
    const storedEmail = localStorage.getItem('email');
    const storedNim = localStorage.getItem('nim');
    const storedVerified = localStorage.getItem('verified');
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setName(storedName);
      setRole(storedRole);
      setEmail(storedEmail);
      setNim(storedNim);
      setVerified(storedVerified);
      setToken(storedToken);
    }
    setAuthLoad(false);
  }, []);

  const login = (userData) => {
    setName(userData.name);
    setRole(userData.role);
    setEmail(userData.email);
    setNim(userData.nim);
    setVerified(userData.verified);
    setToken(userData.token);

    localStorage.setItem('name', userData.name);
    localStorage.setItem('role', userData.role);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('nim', userData.nim);
    localStorage.setItem('verified', userData.verified);
    localStorage.setItem('token', userData.token);
  };

  const logout = () => {
    setName(null);
    setRole(null);
    setEmail(null);
    setNim(null);
    setVerified(null);
    setToken(null);

    localStorage.removeItem('name');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('nim');
    localStorage.removeItem('verified');
    localStorage.removeItem('token');
  };

  const value = {
    name,
    email,
    role,
    nim,
    verified,
    token,
    authLoad,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
