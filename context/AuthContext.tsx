import { Children, createContext } from "react";
export const AuthContext = createContext({});

// @ts-ignore
export function AuthProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
