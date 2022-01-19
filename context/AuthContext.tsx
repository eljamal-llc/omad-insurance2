import { Children, createContext, useEffect, useState } from "react";
import { recoverUserInformation, SignInRequest } from "../services/auth";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/api";
import { Login } from "@mui/icons-material";

type SignInData = {
  email: string;
  password: string;
};
type RegisterData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type UserType = {
  name: string;
  surname: string;
  email: string;
  avatar: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
  signIn: (data: SignInData) => Promise<void>;
  registration: (data: RegisterData) => Promise<void>;
  open: boolean;
  setOpen: any;
  errorMsg: any;
  alert: boolean;
  setAlert: any;
  setErrorMsg: any;
  logOut: any;
};
export const AuthContext = createContext({} as AuthContextType);

// @ts-ignore
export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserType | null>(null);
  const isAuthenticated = !!user;
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    if (token) {
      api.get("user-data").then(async (res) => {
        await setUser({
          name: res.data.name,
          surname: res.data.surname,
          email: res.data.email,
          avatar: res.data.avatar,
        });
      });
    }
  }, []);

  async function registration(data: RegisterData) {
    await api
      .post("register", {
        name: data.name,
        surname: data.lastName,
        login: data.email,
        password: data.password,
        c_password: data.confirmPassword,
      })
      .then((response) => {
        if (response.data.success) {
          setUser({
            name: response.data.data.name,
            surname: response.data.data.surname,
            email: response.data.data.email,
            avatar: response.data.data.avatar,
          });
        }
        setCookie(undefined, "nextauth.token", response.data.data.token, {
          maxAge: 60 * 60 * 1,
        });

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.token}`;
      })
      .catch((err) => {
        setAlert(true);
        setErrorMsg({
          type: "registration",
          message: err.response.data.data,
        });
        console.log("--->>>", err.response.data);
      });
    Router.push("/personal-area");
  }

  async function signIn(data: SignInData) {
    await api
      .post("login", {
        login: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.data.success) {
          setUser({
            name: response.data.data.name,
            surname: response.data.data.surname,
            email: response.data.data.email,
            avatar: response.data.data.avatar,
          });
        }
        setCookie(undefined, "nextauth.token", response.data.data.token, {
          maxAge: 60 * 60 * 1,
        });

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.token}`;
        setOpen(true);
      })
      .catch((err) => {
        setAlert(true);
        setErrorMsg({
          type: "login",
          message: err.response.data.message,
        });
        console.log("--->>>", err.response.data);
      });
    Router.push("/personal-area");
  }

  function logOut() {
    destroyCookie(null, "nextauth.token");
    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        isAuthenticated,
        registration,
        open,
        setOpen,
        errorMsg,
        alert,
        setAlert,
        setErrorMsg,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
