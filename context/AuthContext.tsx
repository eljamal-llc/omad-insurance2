import { Children, createContext } from "react";
export const AuthContext = createContext({});

export function AuthProvider({ children: any }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
