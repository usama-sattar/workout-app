import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import  { UserContext } from '../context/user';

export default function AppContainer() {
  const {isLogged} = useContext(UserContext)
  console.log(isLogged)
  return (
    <NavigationContainer>
        {isLogged ? <MainStack/> : <AuthStack />}
    </NavigationContainer>
  )
}
