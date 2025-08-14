import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_ORIGIN}/user/check-auth`, {
        withCredentials: true,
      })
      .then((response) => {
        setLoggedIn(true);
        const { fullName, username, email } = response.data.user;
        setUser({ fullName, username, email });
      })
      .catch((error) => {
        console.log("authorization failed! ", error);
      });
  }, []);

  const login = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_ORIGIN}/user/login`,
        { ...data },
        { withCredentials: true }
      );
      const { fullName, email, username } = res.data.user;
      setLoggedIn(true);
      setUser({ fullName, username, email });
    } catch (error) {
      console.log("error while login :", error);
      setLoggedIn(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_ORIGIN}/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
