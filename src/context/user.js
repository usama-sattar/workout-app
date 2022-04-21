import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");
      const parsed = user != null ? JSON.parse(user) : null;
      if (parsed) 
      {
        setUser(parsed)
        setIsLogged(true)
      }
    })
  }, []);

  const login = async (user) => {
    // await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log(user)
    setUser(user);
    setIsLogged(true)
  };
  const register = async (user) => {
    // await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log(user)
    setUser(user);
    setIsLogged(true)
  };

  const logout = async () => {
    // await AsyncStorage.removeItem("user");
    setUser(null);
    setIsLogged(false)
  };
  return <UserContext.Provider value={{isLogged, user, login,logout, register}}>{children}</UserContext.Provider>;
}
