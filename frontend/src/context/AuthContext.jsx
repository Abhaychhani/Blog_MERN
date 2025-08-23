import { createContext, useContext, useEffect, useState } from 'react';
import { ORIGIN } from '../../constants.js';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser]=useState(null);

  const logout = async () => {
    try {
      const res = await axios.post(`${ORIGIN}/users/logout/`,{},{withCredentials:true});
      if(res.status===200){
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuth = async ()=>{
    try {
      const response = await axios.get(`${ORIGIN}/users/check-auth/`,{withCredentials:true});
      if(response.status===200){
        setUser(response.data.user)
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log("auth failed!!->",error);
    }
  }

  useEffect(()=>{
    checkAuth();
  },[])

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout,user,setUser,setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
