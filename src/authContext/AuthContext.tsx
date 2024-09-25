import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthType {
  isAuthenticated: boolean;
  updateAuth: (flag: boolean) => void;
  isAdmin: boolean;
  updateAdmin: (flag: boolean) => void;
}

export const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isAdmin, setAdmin] = useState<boolean>(false);
  const updateAuth = (flag: boolean) => {
    setAuthenticated(flag);
  };
  const updateAdmin = (flag: boolean) => {
    setAdmin(flag);
  };

  useEffect(() => {
    const authObject = localStorage.getItem("user");
    if (authObject) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, updateAuth, isAdmin, updateAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
