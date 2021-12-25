import { Children, createContext, useEffect, useState } from "react";
import { recoverUserInformation, SignInRequest } from "../services/auth";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/api";

type SignInData = {
  email: string;
  password: string;
};
type UserType = {
  name: string;
  email: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
  signIn: (data: SignInData) => Promise<void>;
};
export const AuthContext = createContext({} as AuthContextType);

// @ts-ignore
export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserType | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn(data: SignInData) {
    // const { token, user } = await SignInRequest(data);
    // console.log("data==>", data);

    await api
      .post("login", {
        login: data.email,
        password: data.password,
      })
      .then((response) => {
        // console.log("test====>>>>>>>", response.data);

        setCookie(undefined, "nextauth.token", response.data.data.token, {
          maxAge: 60 * 60 * 1,
        });
      });

    // setCookie(undefined, "nextauth.token", token, {
    //   maxAge: 60 * 60 * 1,
    // });
    // setUser(user);
    Router.push("/personal-area");
  }
  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
