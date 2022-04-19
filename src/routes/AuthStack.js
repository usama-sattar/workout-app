import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login  from '../screens/Login'
import Register1  from '../screens/Register/Register1'
import Register2  from '../screens/Register/Register2'
import { View,Text } from 'react-native'
import Register3 from '../screens/Register/Register3'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
      >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register1" component={Register1} />
      <Stack.Screen name="Register2" component={Register2} />
      <Stack.Screen name="Register3" component={Register3} />
      
    </Stack.Navigator>
    
  )
}
