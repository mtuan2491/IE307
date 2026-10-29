// 23521720 - Nguyen Minh Tuan

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const VALID_EMAIL = '23521720@gm.uit.edu.vn';
const VALID_PASSWORD = 'nguyenminhtuan';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    setIsChecking(false);
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isChecking,
      login: (email, password) => {
        const isValid = email.trim().toLowerCase() === VALID_EMAIL && password === VALID_PASSWORD;
        if (isValid) setIsAuthenticated(true);
        return isValid;
      },
      logout: () => setIsAuthenticated(false),
    }),
    [isAuthenticated, isChecking],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider.');
  return context;
}
