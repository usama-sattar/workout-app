import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false)
  const [loginError, setLoginError] = useState('')
  useEffect(() => {
    getStorage()
  }, []);

  const getStorage = async () =>{
    const user = await AsyncStorage.getItem("user");
      const parsed = user != null ? JSON.parse(user) : null;
      if (parsed) 
      {
        setUser(parsed)
        setIsLogged(true)
      }
  }
  const login = async (user) => {
    setLoginError('')
    const response = await axios.post("http://crimsonmammoth.curlbrackets.com/api/login.php",{
      Data: user 
    })
    const data = await response.data
    const parsed = data.replace("\ufeff" , '')
    if(JSON.parse(parsed).code === "00"){
      await AsyncStorage.setItem("user", JSON.stringify(JSON.parse(parsed).data));
      setUser(JSON.parse(parsed).data);
      setIsLogged(true)
    }
    else{
      setLoginError(JSON.parse(parsed).desc)
    }
  };
  const register = async (user) => {
    const response = await axios.post('http://crimsonmammoth.curlbrackets.com/api/register.php',{
      Data: user
    })
    const data = await response.data
    const parsed = JSON.parse(data.replace("\ufeff" , ''))
    if(parsed.code === "00"){
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setIsLogged(true)  
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
    setIsLogged(false)
  };
  return <UserContext.Provider value={{isLogged, user, login,logout, register, loginError}}>{children}</UserContext.Provider>;
}
